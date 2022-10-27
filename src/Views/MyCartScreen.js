import { View, Text } from 'react-native'
import React from 'react'
import BasketCart from '../components/BasketCart'
import { ScrollView } from 'react-native-gesture-handler'
export default function MyCartScreen({navigation}) {
  return (
    <ScrollView>
        <BasketCart navigation={navigation}/>
    </ScrollView>
  )
}