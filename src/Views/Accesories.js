import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import AccesoriesProducts from '../components/AccesoriesProducts'

export default function Accesories({navigation}) {
  return (
    <ScrollView>
        <AccesoriesProducts navigation={navigation}/>
    </ScrollView>
  )
}