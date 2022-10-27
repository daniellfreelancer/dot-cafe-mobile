import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGetOrderByIdQuery } from '../features/orderAPI'
import ProductOrderCard from './ProductOrderCard'

export default function MyOrder({navigation, route}) {
    const id = route?.params.id
    const user = useSelector(state => state.auth.user)
    const {data: orders} = useGetOrderByIdQuery(id)
    let keys = orders?.response

    return (
        <>
            <View style={styles.myAccountContainer}>
                <View elevation={5} style={styles.myDataContainer}>
                    <View style={styles.myData}>
                        <Text style={styles.titleData}>Orden: #{id}</Text>
                        <Text><Text style={styles.titleField}>Nombre: </Text>{user?.firstName +" "+ user?.lastName}</Text>
                        <Text><Text style={styles.titleField}>Email: </Text>{user?.email}</Text>
                        <Text><Text style={styles.titleField}>DNI: </Text>{user?.dni}</Text>
                        <Text><Text style={styles.titleField}>Tel: </Text>{user?.tel}</Text>
                        <Text><Text style={styles.titleField}>Dirección: </Text>{user?.address}</Text>
                        <Text><Text style={styles.titleField}>Destino: </Text>{user?.city} - {user?.province} ({user?.zipCode})</Text>
                    </View>
                </View>
                <View elevation={5} style={styles.productsContainer}>
                    {keys?.products?.map(product => <ProductOrderCard product={product} />)}
                </View>
                <View>
                    <Text>Pago Total: <Text style={styles.total}>AR${keys?.total}</Text></Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    myAccountContainer: {
        paddingVertical: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    myDataContainer: {
        padding: 20,
        width: '90%',
        shadowColor: 'green',
        borderRadius: 10,
        shadowRadius: 5,
        shadowOpacity: 0.8,
        shadowRadius: 5,
        shadowOffset: {
        height: 3,
        width: 3
        }
    },
    myData: {
        paddingVertical: 10,
    },
    myOrdersContainer: {
        width: '90%'
    },
    titleData: {
        fontSize: 16,
        fontWeight: '700',
        borderBottomColor: 'green',
        textDecorationLine: 'underline',
        marginBottom: 5
    },
    titleField:{
        fontWeight: '500'
    },
    productsContainer:{
        flexDirection: 'column'
    },
    total:{
        fontSize: 16,
        fontWeight: '700',
    }
})