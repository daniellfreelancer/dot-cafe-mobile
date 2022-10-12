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

const DrawerNav = createDrawerNavigator()

export default function Drawer() {
  return (
    <DrawerNav.Navigator>
        <DrawerNav.Screen name="Inicio" component={HomeScreen}/>
        <DrawerNav.Screen name="Ingresar" component={SignInScreen}/>
        <DrawerNav.Screen name="Registro" component={SignUpScreen}/>
        <DrawerNav.Screen name="Granel" component={CoffeeByKg}/>
        <DrawerNav.Screen name="Accesorios" component={Accesories}/>
        <DrawerNav.Screen name="Gift Cards" component={GiftCards}/>
        <DrawerNav.Screen name="Carrito" component={MyCartScreen}/>
        <DrawerNav.Screen name="Economia Circular" component={CircularEconomyScreen}/>
    </DrawerNav.Navigator>
  )
}