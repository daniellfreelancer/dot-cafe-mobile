import { View, Text } from 'react-native'
import React from 'react'
import SignIn from '../components/SignIn'
import { ScrollView } from 'react-native-gesture-handler'

export default function SignInScreen({navigation}) {
  return (
    <ScrollView>
        <SignIn navigation={navigation}/>
    </ScrollView>
  )
}