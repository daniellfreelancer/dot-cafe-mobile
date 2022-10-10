import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function BasketCart() {

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
        <View>
            {
                myBasket.length > 0 ? (
                    myBasket.map((item) => {
                        return (
                            <>
                                
                                <Text>{item.name}</Text>
                                <Text>{item.quantity}</Text>
                                <Text>AR$ {item.quantity * item.price}</Text>

                            </>
                        )
                    })) : (<Text>El carrito esta vacio</Text>)
            }
            <Text>Cantidad de productos en el carrito:  {getTotal().totalQuantity}</Text>
            <Text>Total:  {totalPrice}</Text>
            <Pressable>
                <Text>Finalizar Compra</Text>
            </Pressable>
        </View>
    )
}