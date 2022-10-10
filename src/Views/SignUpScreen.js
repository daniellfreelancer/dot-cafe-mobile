import { View, Text } from 'react-native'
import React from 'react'
import SignUp from '../components/SignUp'
import { ScrollView } from 'react-native-gesture-handler'

export default function SignUpScreen({navigation}) {
  return (
    <ScrollView>
        <SignUp navigation={navigation}/>
    </ScrollView>
  )
}