import { View, Text, ImageBackground, Button, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import ProductCard from './ProductCard'
import { useGetAllGiftCardsQuery } from '../features/giftCardsAPI'

export default function GiftCardsProducts({ navigation }) {
    const { data: giftcards } = useGetAllGiftCardsQuery()

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
                <View style={styles.buttonProd} >
                    <Text style={styles.textProd}>Gift Cards</Text>
                </View>
            </View>
            <View>
                {giftcards?.response.map(gc => <ProductCard data={gc} key={gc._id} />)}
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    buttonProd: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        margin: "5%",
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