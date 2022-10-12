import { View, Text, StyleSheet, Image, ImageBackground, } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function BasketCart({navigation}) {

    const myBasket = useSelector((state) => state.cart.cartArray);
    let totalQuantity = 0;
    let totalPrice = 0;
    const getTotal = () => {
        myBasket.forEach((item) => {
            totalQuantity += item.quantity;
            totalPrice += item.price * item.quantity;
        });
        return { totalPrice, totalQuantity };
    };
        return (
        <View style={styles.cartEmpty}>
            <Image style={{ margin: 20, width: 60, height: 60, display: 'flex', alignSelf: 'center' }} source={{
                uri: "https://cdn-icons-png.flaticon.com/512/8070/8070478.png"
            }} />
            {
                myBasket.length > 0 ? (
                    <>
                        {
                            myBasket.map((item) => {
                                return (
                                    <View style={styles.cartContainer} key={item._id}>
                                        <Image source={{ uri: item.photo }}
                                            style={{
                                                width: 60, height: 60, marginVertical: 8
                                            }} />
                                        <Text style={{ marginHorizontal: 5 }}>{item.name}</Text>
                                        <Text style={{ marginHorizontal: 5 }}>{item.quantity} U.</Text>
                                        <Text style={{ marginHorizontal: 8, fontWeight: 'bold' }} >AR$ {item.quantity * item.price}</Text>
                                        <View style={styles.cartDelete}>
                                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/7666/7666109.png" }}
                                                style={{
                                                    width: 20, height: 20,
                                                }}
                                            />
                                        </View>
                                    </View>
                                )
                            })
                        }
                        < View style={styles.cartText}>
                            <Text style={{ fontWeight: 'bold', marginTop: 50, marginBottom: 20, }} >Cantidad de productos en el carrito:  {getTotal().totalQuantity} U.</Text>
                            <Text>Total: AR$ {totalPrice}</Text>
                            <Pressable style={styles.cartBuy}>
                                <Text style={{ color: '#faffd8', fontWeight: 'bold', fontSize: 20 }}>Finalizar Compra</Text>
                            </Pressable>
                        </View>
                    </>
                ) : (
                    <View style={styles.cartText}>
                        <Text>El carrito esta vacio</Text>
                        <Pressable style={styles.cartBuy} onPress={() => navigation.navigate('Granel')}>
                            <Text style={{ color: '#faffd8', fontWeight: 'bold', fontSize: 20 }}>Todos los productos</Text>
                        </Pressable>
                    </View>
                )
            }
        </View >
        )
}

const styles = StyleSheet.create({
    cartContainer: {
        padding: 5,
        marginStart: 10,
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: .5,
        justifyContent: 'space-between'
    },
    cartText: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    cartEmpty: {
        width: '100%',
        height: '100%',
    },
    cartBuy: {
        marginTop: 50,
        display: 'flex',
        padding: 10,
        backgroundColor: '#204D48',
        borderRadius: 12,
        color: '#faffd8'
    },
})