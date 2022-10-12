import { View, Text } from 'react-native'
import React from 'react'
import CircularEconomy from '../components/CircularEconomy'
import { ScrollView } from 'react-native-gesture-handler'

export default function CircularEconomyScreen({navigation}) {
  return (
    <ScrollView>
        <CircularEconomy navigation={navigation}/>
    </ScrollView>
  )
}