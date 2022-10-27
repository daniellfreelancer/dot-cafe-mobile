import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import MyOrder from '../components/MyOrder'

export default function MyOrderScreen({navigation, route}) {
  return (
    <ScrollView>
        <MyOrder navigation={navigation} route={route}/>
    </ScrollView>
  )
}