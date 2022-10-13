import { View, Text, ImageBackground, Button, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useGetAllCoffeeForDrinkQuery } from '../features/coffeeForDrinkAPI'
import CoffeeCard from './CoffeeCard'

export default function CoffeeDrinkProducts({ navigation }) {
    const { data: coffees } = useGetAllCoffeeForDrinkQuery()

    return (
        <ImageBackground
            source={{
                uri: "http://drive.google.com/uc?export=view&id=1Y5Qi1FBbvBcmAam2-HB3IN5haf1BJXe4"
            }}
            resizeMode="cover"
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
            }} >
            <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom:22
                }}>
                    <View style={styles.buttonProd} >
                        <Text style={styles.textProd}>Pedí tu .Café</Text>
                    </View>
                </View>
            <View style={styles.coffeesContainer}>    
                {coffees?.response.map(cup => <CoffeeCard data={cup} key={cup._id} />)}
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    coffeesContainer:{
        flexDirection: 'column'
    },
    buttonProd: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      margin:"5%",
      borderRadius: 4,
      backgroundColor: '#204d48',
    },
    textProd: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#faffd8',
    },
});