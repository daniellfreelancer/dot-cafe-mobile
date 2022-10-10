
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Welcome from './src/components/Welcome';
import Drawer from './src/navigation/Drawer';
// import 'react-native-gesture-handler';

export default function App() {
  return (

    <NavigationContainer >
      <SafeAreaView style={{
          height:"100%"
        }}>
       <Drawer />
      </SafeAreaView>

        

      
    </NavigationContainer>
  );
}

