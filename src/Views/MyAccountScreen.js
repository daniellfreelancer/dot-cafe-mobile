import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import MyAccount from '../components/MyAccount'

export default function MyAccountScreen({navigation}) {
  return (
    <ScrollView>
        <MyAccount navigation={navigation} />
    </ScrollView>
  )
}