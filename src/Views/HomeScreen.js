import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Welcome from '../components/Welcome'

export default function HomeScreen({navigation}) {
  return (
    <ScrollView>
        <Welcome navigation={navigation}/>
    </ScrollView>
  )
}