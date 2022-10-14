import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useDeleteOrderMutation } from '../features/orderAPI'
import { useNavigation } from '@react-navigation/native';

export default function OrderNroCard({order}) {
    const navigation = useNavigation()
    let date = new Date(order.date).toISOString().substring(0, 10);
    const [removeOrder] = useDeleteOrderMutation();
    const dispatch = useDispatch()

    // const user = useSelector(state => state.auth.user)
    // const {data: orders} = useGetOrderByUserQuery(user?._id)
    const handleRemoveItem = async (id) => {
        console.log(id)
        try {
          let res = await removeOrder(id);
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <>
            <View style={styles.orderContainer}>
                <View style={styles.OrderNumber}>
                    <Text style={styles.textField}><Text style={styles.titleField}>Order: </Text>#{order?._id}</Text>
                    <Text style={styles.textField}><Text style={styles.titleField}>Estado: </Text>{order.payment ? "Pagado" : "Pendiente de pago"} - {order.state}</Text>
                    <Text style={styles.titleField}>{date}</Text>
                </View>
                <View style={styles.OrderLink}>
                    <View style={styles.containerBtnOrder}>
                        {/* <LinkRouter to={`/mi-orden/${order?._id}`}> */}
                        <TouchableOpacity onPress={() => navigation.navigate('Mi orden', {id: order?._id})}>
                            <Image style={styles.imgIcon} source={require('../../assets/view-files.png')} alt="order" />
                        </TouchableOpacity>
                        {
                            !order.payment &&
                            <Image style={styles.imgIcon} source={require('../../assets/delete-item.png')} alt="delete" />
                        }
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    orderContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a3bbad',
        borderRadius: 5,
        marginVertical: 5,
    },
    OrderNumber:{
        width: '85%',
    },
    OrderLink:{
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgIcon:{
        width: 30,
        height: 30
    },
    textField: {
        fontSize: 12,
    },
    titleField:{
        fontSize: 14,
        fontWeight: '500'
    },
})