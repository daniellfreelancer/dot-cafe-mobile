import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Welcome from '../components/Welcome'

export default function HomeScreen({navigation}) {
  return (
    <ScrollView>
        <Welcome navigation={navigation}/>
    </ScrollView>
  )
}