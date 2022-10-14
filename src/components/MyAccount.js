import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGetOrderByUserQuery } from '../features/orderAPI'
import OrderNroCard from './OrderNroCard'

export default function MyAccount({navigation}) {

    const user = useSelector(state => state.auth.user)
    const {data: orders} = useGetOrderByUserQuery(user?._id)

    return (
        <>
            <View style={styles.myAccountContainer}>
                <View elevation={5} style={styles.myDataContainer}>
                    <View style={styles.myData}>
                        <Text style={styles.titleData}>Datos de mi cuenta</Text>
                        <Image style={styles.imgUser} source={{uri: user?.photo}} alt="user"/>
                        <Text><Text style={styles.titleField}>Nombre: </Text>{user?.firstName +" "+ user?.lastName}</Text>
                        <Text><Text style={styles.titleField}>Email: </Text>{user?.email}</Text>
                        <Text><Text style={styles.titleField}>Gift cards: </Text>{user?.giftCard? user.giftCard.length : 0}</Text>
                    </View>
                    <View style={styles.myData}>
                        <Text style={styles.titleData}>Datos de envío</Text>
                        <Text><Text style={styles.titleField}>DNI: </Text>{user?.dni}</Text>
                        <Text><Text style={styles.titleField}>Tel: </Text>{user?.tel}</Text>
                        <Text><Text style={styles.titleField}>Dirección: </Text>{user?.address}</Text>
                        <Text><Text style={styles.titleField}>CP: </Text>{user?.zipCode}</Text>
                        <Text><Text style={styles.titleField}>Ciudad: </Text>{user?.city}</Text>
                        <Text><Text style={styles.titleField}>Provincia: </Text>{user?.province}</Text>
                    </View>
                </View>
                <View elevation={5} style={styles.myDataContainer}>
                    <Text style={styles.titleData}>Órdenes de compra</Text>
                    {
                        orders?.response.length > 0 
                        ?
                            orders?.response.map(order => <OrderNroCard order={order} />)
                        :
                        <View style={styles.containerEmpty}>
                            <Text>No tenés órdenes de compras</Text>
                            <Pressable style={styles.buttonLeft} onPress={() => navigation.navigate('Cafecito')} >
                                <Text style={styles.textLeft}>COMPRAR</Text>
                            </Pressable>
                        </View>
                    }
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
    imgUser:{
        width: 100,
        height: 100,
        borderRadius: 50,
        marginVertical: 5
    },
    titleField:{
        fontWeight: '500'
    },
    buttonLeft: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        margin:"5%",
        borderRadius: 4,
        backgroundColor: '#204d48',
    },
    textLeft: {
        fontSize: 1,
    }
})