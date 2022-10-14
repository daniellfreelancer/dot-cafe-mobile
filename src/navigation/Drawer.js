import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
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
import MyAccount from '../Views/MyAccount'
import Success from '../Views/Success'
import { useSelector } from 'react-redux'

const DrawerNav = createDrawerNavigator()

export default function Drawer() {
  const user = useSelector(state => state.auth.user)

  return (
    <DrawerNav.Navigator>
        <DrawerNav.Screen name="Inicio" component={HomeScreen}/>
        { user ?
          <>
            <DrawerNav.Screen name="Mi cuenta" component={MyAccount}/>
          </>
        :
          <>
            <DrawerNav.Screen name="Ingresar" component={SignInScreen}/>
            <DrawerNav.Screen name="Registro" component={SignUpScreen}/>
          </>
        }
        <DrawerNav.Screen name="Carrito" component={MyCartScreen}/>
        <DrawerNav.Screen name="Cafecito" component={CoffeeDrink}/>
        <DrawerNav.Screen name="Granel" component={CoffeeByKg}/>
        <DrawerNav.Screen name="Maquinas" component={CoffeeMachine}/>
        <DrawerNav.Screen name="Accesorios" component={Accesories}/>
        <DrawerNav.Screen name="Gift Cards" component={GiftCards}/>
        <DrawerNav.Screen name="Economia Circular" component={CircularEconomyScreen}/>
        <DrawerNav.Screen name="Sobre Nosotros" component={AboutUsScreen}/>
        <DrawerNav.Screen name="Success" component={Success}/>
    </DrawerNav.Navigator>
  )
}