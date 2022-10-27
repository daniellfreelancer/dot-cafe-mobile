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
                uri: "https://img.freepik.com/foto-gratis/vista-cercana-granos-cafe-tostados-frescos-oscuros-sobre-fondo-granos-cafe_141793-27283.jpg?w=1380&t=st=1665691697~exp=1665692297~hmac=fd5c9898d2cfc7049b744904006b5fbb7a1e1b02a937b648840fb06f08387576"
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
                marginBottom: 22
            }}>
                <Pressable style={({ pressed }) => [
                    { backgroundColor: pressed ? "#45230ffd" : "#204d48" }, styles.buttonKG
                ]} onPress={handleKilogram} >
                    <Text style={styles.textKG}> 1KG</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [
                    { backgroundColor: pressed ? "#45230ffd" : "#204d48" }, styles.buttonKG
                ]} onPress={handle500gram}>
                    <Text style={styles.textKG}> 500 Grs</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [
                    { backgroundColor: pressed ? "#45230ffd" : "#204d48" }, styles.buttonKG
                ]} onPress={handle250gram}>
                    <Text style={styles.textKG}> 250 Grs</Text>
                </Pressable>
            </View>
            <View>
                {showKilo && bag1Kg &&
                    <>
                        <Text style={{ paddingVertical: 5, borderRadius: 4, backgroundColor: '#faffd887', textAlign: 'center', marginBottom: 20, fontWeight: 'bold' }}>CAFE DE 1 Kg.</Text>
                        {bag1Kg.map(coffee => <ProductCard data={coffee} key={coffee._id} />)}
                    </>
                }
            </View>
            <View>
                {show500 && bag500 &&
                    <>
                        <Text style={{ paddingVertical: 5, borderRadius: 4, backgroundColor: '#faffd887', textAlign: 'center', marginBottom: 20, fontWeight: 'bold' }}>CAFE DE 500 Grs.</Text>
                        {bag500?.map(coffee => <ProductCard data={coffee} key={coffee._id} />)}
                    </>
                }
            </View>
            <View>
                {show250 && bag250 &&
                    <>
                        <Text style={{ paddingVertical: 5, borderRadius: 4, backgroundColor: '#faffd887', textAlign: 'center', marginBottom: 20, fontWeight: 'bold' }}>CAFE DE 250 Grs.</Text>
                        {bag250?.map(coffee => <ProductCard data={coffee} key={coffee._id} />)}
                    </>
                }
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
        margin: "5%",
        borderRadius: 4,
    },
    textKG: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#faffd8',
    },
});