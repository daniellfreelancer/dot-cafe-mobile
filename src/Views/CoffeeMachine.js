import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import CoffeeMachineProducts from '../components/CoffeeMachineProducts'


export default function CoffeeMachine({navigation}) {
  return (
    <ScrollView>
       <CoffeeMachineProducts navigation={navigation}/>    
       </ScrollView>
  )
}