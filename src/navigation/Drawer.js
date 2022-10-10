import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../Views/HomeScreen'
import SignInScreen from '../Views/SignInScreen'
import SignUpScreen from '../Views/SignUpScreen'


const DrawerNav = createDrawerNavigator()

export default function Drawer() {
  return (
    <DrawerNav.Navigator>
        <DrawerNav.Screen name="Inicio"  component={HomeScreen}/>
        <DrawerNav.Screen name="Ingresar"  component={SignInScreen}/>
        <DrawerNav.Screen name="Registro"  component={SignUpScreen}/>
    </DrawerNav.Navigator>
  )
}