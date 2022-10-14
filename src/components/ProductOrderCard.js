import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useDeleteOrderMutation } from '../features/orderAPI'
import { useNavigation } from '@react-navigation/native';

export default function ProductOrderCard({product}) {

    return (
        <>
            <View style={styles.cardContainer}>
                <View style={styles.column1}>
                    <Image style={styles.imgProduct} source={ { uri: product?.photo}} alt="imgItem" />
                </View>
                <View style={styles.column2}>
                    <View style={styles.details}>
                        <Text style={styles.titles}><Text style={styles.texts}>{product?.name}</Text></Text>
                    </View>
                </View>
                <View style={styles.column3}>
                    <View style={styles.details}>
                        <Text style={styles.texts}>${product?.price}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.texts}>x{product?.quantity}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.texts}>${product?.totalPrice}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "80%",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 12,
        marginVertical: 4,
        paddingVertical: 5
    },
    column1:{
        flexDirection: 'column',
        alignItems: 'center',
        width: '20%',
    },
    titleCoffee:{
        flexDirection: 'column',
        alignItems: 'center'
    },
    description: {
        fontSize: 12,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center'
    },
    column2:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '30%',
    },
    column3:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '45%',
    },
    details:{
        flexDirection: 'row'
    },
    imgProduct:{
        width: 60,
        height: 60
    },
    titles: {
        fontSize: 12,
        fontWeight: '600',
        color: 'black'
    },
    texts: {
        fontSize: 11,
        fontWeight: '400',
        color: 'black'
    },
});