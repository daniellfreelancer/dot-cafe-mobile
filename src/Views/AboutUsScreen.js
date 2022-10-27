import { View, Text } from 'react-native'
import React from 'react'
import AboutUs from '../components/AboutUs'
import { ScrollView } from 'react-native-gesture-handler'

export default function AboutUsScreen({navigation}) {
  return (
        <AboutUs navigation={navigation}/>
  )
}