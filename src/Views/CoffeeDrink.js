import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import CoffeeDrinkProducts from '../components/CoffeeDrinkProducts'

export default function CoffeeDrink({navigation}) {
  return (
    <ScrollView>
       <CoffeeDrinkProducts navigation={navigation}/>    
    </ScrollView>
  )
}