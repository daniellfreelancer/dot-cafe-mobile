import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Welcome from './src/components/Welcome';
import Drawer from './src/navigation/Drawer';
import store from './store'
import { Provider } from 'react-redux';
// import 'react-native-gesture-handler';

export default function App() {
  return (
    <Provider store={store} >
    <NavigationContainer >
      <SafeAreaView style={{
          height:"100%"
        }}>
       <Drawer />
      </SafeAreaView>
    </NavigationContainer>
    </Provider>
  );
}

