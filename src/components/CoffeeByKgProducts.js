import { View, Text, ImageBackground, Button, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import ProductCard from './ProductCard'
import { useGetCoffeeByWeightQuery } from '../features/coffeeByKiloAPI'

export default function CoffeeByKgProducts({ navigation }) {
    const [coffeKg, setCoffeKg] = useState(1000)
    const [coffe500, setCoffe500] = useState(500)
    const [coffe250, setCoffe250] = useState(250)
    const [showKilo, setShowKilo] = useState()
    const [show500, setShow500] = useState()
    const [show250, setShow250] = useState()


    const { data: coffeesbykilo } = useGetCoffeeByWeightQuery(coffeKg)
    const { data: coffeesby500 } = useGetCoffeeByWeightQuery(coffe500)
    const { data: coffeesby250 } = useGetCoffeeByWeightQuery(coffe250)

    const bag1Kg = coffeesbykilo?.coffeeByKi
    const bag500 = coffeesby500?.coffeeByKi
    const bag250 = coffeesby250?.coffeeByKi

    const handleKilogram = () => {
        setShowKilo(true)
        setShow500(false)
        setShow250(false)

    }
    const handle500gram = () => {
        setShowKilo(false)
        setShow500(true)
        setShow250(false)
    }
    const handle250gram = () => {
        setShowKilo(false)
        setShow500(false)
        setShow250(true)
    }


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
                <Pressable style={styles.buttonKG} onPress={handleKilogram} >
                        <Text style={styles.textKG}> 1KG</Text>
                    </Pressable>
                    <Pressable style={styles.buttonKG} onPress={handle500gram}>
                        <Text style={styles.textKG}> 500 Grs</Text>
                    </Pressable>
                    <Pressable style={styles.buttonKG} onPress={handle250gram}>
                        <Text style={styles.textKG}> 250 Grs</Text>
                    </Pressable>
                </View>

            <View>
                { showKilo &&  <Text>Café por Kilo</Text> && bag1Kg?.map(coffee => <ProductCard data={coffee} key={coffee._id} />)}
            </View>
            <View>
                { show500 &&  <Text>Café por 500 Grs</Text> && bag500?.map(coffee => <ProductCard data={coffee} key={coffee._id} />)}
            </View>
            <View>
                { show250 &&  <Text>Café por 250 Grs</Text> && bag250?.map(coffee => <ProductCard data={coffee} key={coffee._id} />)}
            </View>




        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    buttonKG: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      margin:"5%",
      borderRadius: 4,
      backgroundColor: '#204d48',
    },
    textKG: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#faffd8',
    },

  });