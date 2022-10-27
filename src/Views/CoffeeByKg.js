import { View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import CoffeeByKgProducts from '../components/CoffeeByKgProducts'

export default function CoffeeByKg({navigation}) {
  return (
    <ScrollView>
        <CoffeeByKgProducts navigation={navigation}/>
    </ScrollView>
  )
}