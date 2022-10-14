import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import HomeScreen from '../Views/HomeScreen'
import SignInScreen from '../Views/SignInScreen'
import SignUpScreen from '../Views/SignUpScreen'
import CoffeeByKg from '../Views/CoffeeByKg'
import MyCartScreen from '../Views/MyCartScreen'
import CircularEconomyScreen from '../Views/CircularEconomyScreen'
import Accesories from '../Views/Accesories'
import GiftCards from '../Views/GiftCard'
import AboutUsScreen from '../Views/AboutUsScreen'
import CoffeeMachine from '../Views/CoffeeMachine'
import CoffeeDrink from '../Views/CoffeeDrink'
import MyAccountScreen from '../Views/MyAccountScreen'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { useUserLoginTokenMutation, useUserLogoutMutation } from "../features/usersAPI"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setCredentials, deleteCredentials } from '../features/usersSlice'
import MyOrderScreen from '../Views/MyOrderScreen'

const DrawerNav = createDrawerNavigator()

export default function Drawer() {
  const user = useSelector(state => state.auth.user)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [userLogout] = useUserLogoutMutation()
  const [loginToken] = useUserLoginTokenMutation()
  
  const logged = useSelector(state => state.auth.logged)

  async function verifyToken(){
      let userToken = await AsyncStorage.getItem('token')
      try {
          let res = await loginToken(userToken)
          if(res?.data.success){
              dispatch(setCredentials(res?.data.response.user))
          } else {
              await AsyncStorage.removeItem('token')
          }
      } catch(error) {
          AsyncStorage.removeItem('token')
          console.log(error)
      }
  }

  useEffect(() => {
      if (AsyncStorage.getItem('token')) {
          verifyToken()
      }
  }, [logged])

  const handleOut = async() => {
    let mail = user?.mail
    await userLogout({ mail })
    .then(response => {
        AsyncStorage.removeItem('token')
        dispatch(deleteCredentials())
        navigation.navigate('Home')
    })
    .catch(error =>
        console.log(error))
}

  const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            { user &&
            <>
                <DrawerItem label="SignOut" onPress={handleOut} />
            </>
            }
        </DrawerContentScrollView>
    );
  }

  return (
    <DrawerNav.Navigator drawerContent={props => <CustomDrawerContent {...props} initialRouteName='Inicio'/>}>
        <DrawerNav.Screen name="Inicio" component={HomeScreen}/>
        { user ?
          <>
            <DrawerNav.Screen name="Mi cuenta" component={MyAccountScreen}/>
          </>
        :
          <>
            <DrawerNav.Screen name="Ingresar" component={SignInScreen}/>
            <DrawerNav.Screen name="Registro" component={SignUpScreen}/>
          </>
        }
        <DrawerNav.Screen name="Mi orden" component={MyOrderScreen} options={{drawerItemStyle: { display: 'none' }}}/>
        <DrawerNav.Screen name="Carrito" component={MyCartScreen}/>
        <DrawerNav.Screen name="Cafecito" component={CoffeeDrink}/>
        <DrawerNav.Screen name="Granel" component={CoffeeByKg}/>
        <DrawerNav.Screen name="Maquinas" component={CoffeeMachine}/>
        <DrawerNav.Screen name="Accesorios" component={Accesories}/>
        <DrawerNav.Screen name="Gift Cards" component={GiftCards}/>
        <DrawerNav.Screen name="Economia Circular" component={CircularEconomyScreen}/>
        <DrawerNav.Screen name="Sobre Nosotros" component={AboutUsScreen}/>
    </DrawerNav.Navigator>
  )
}