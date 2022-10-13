import { View, Text, Image, Pressable, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cartSlice'

export default function ProductCard({ data }) {

    const imgProduct = typeof(data?.photo) == "string" ? data.photo : data.photo[0]

    const dispatch = useDispatch()

    const handleAddToCart =  async (data) =>{
        dispatch(addToCart({
            _id: data._id,
            photo: imgProduct,
            price: data.price,
            name:data.name
        }))
        Alert.alert( "Agregado al carrito")
    }

    return (
        <>
            <View style={styles.cardContainer}  >
                <Image style={styles.imgProduct}  source={ { uri: imgProduct}} alt="imgItem" />
                <Text style={styles.title} >{ data.name && <Text>{data?.name}</Text> }</Text>
                <Text style={styles.presentation} >{data?.presentation} {data?.roastingLevels}</Text>
                <Text style={styles.price} >precio: ${data?.price}</Text>
                <Text style={styles.price} >{ data?.weight ? `Peso: ${data?.weight} Grs` : null } </Text>
                <Pressable style={styles.buttonLeft} onPress={()=>handleAddToCart(data)} > 
                    <Text style={styles.textLeft}> AGREGAR AL CARRITO</Text>
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
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
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#faffd8',
    },
    cardContainer:{
        width: "100%",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 15,
        margin: "2%",
        paddingTop: "2%"
    },
    imgProduct:{
        width: 200,
        height: 150
    },
    title:{
        color: "black"
    },
    presentation :{
        color: "black"
    },
    price:{
        color: "black"
    }
  });