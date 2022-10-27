import { View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import GiftCardsProducts from '../components/GiftCardProducts'

export default function GiftCards({navigation}) {
  return (
    <ScrollView>
        <GiftCardsProducts navigation={navigation}/>
    </ScrollView>
  )
}