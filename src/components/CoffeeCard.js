import { View, Text, Image, Pressable, StyleSheet, Alert } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cartSlice'

export default function CoffeeCard({ data }) {

    const cups = [{label: "tu taza", value: data.pricePerCup}, {label: "taza eco", value: data.pricePerMug}]
    const [price, setPrice] = useState()

    const dispatch = useDispatch()

    const handleAddToCart =  async (data) =>{
        dispatch(addToCart({
            _id: data._id,
            photo: data.photo,
            price: price,
            name: data.name ? data.name : `${data.type} - ${data.size}`
        }))
        Alert.alert( "Agregado al carrito")
    }

    return (
        <>
            <View style={styles.cardContainer}>
                <View style={styles.column1}>
                    <Image style={styles.imgProduct} source={ { uri: data?.photo}} alt="imgItem" />
                    <View styles={styles.titleCoffee}>
                        <Text style={styles.description}>{data?.size}</Text>
                        <Text style={styles.description}>{data?.description}</Text>
                    </View>
                </View>
                <View style={styles.column2}>
                    <View style={styles.details}>
                        <Text style={styles.titles}>Origen: <Text style={styles.texts}>{data?.origin}</Text></Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.titles}>Marca: <Text style={styles.texts}>{data?.brand}</Text></Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.titles}>Tipo: <Text style={styles.texts}>{data?.type}</Text></Text>
                    </View>
                </View>
                <View style={styles.btnsContainer}>
                    <View style={styles.selectContainer}>
                        <SelectDropdown style={styles.selectDrop} data={cups} onSelect={(selectedItem) => {
                                setPrice(selectedItem.value)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return `${selectedItem.label} - $${selectedItem.value}`
                            }}
                            rowTextForSelection={(item, index) => {
                                return `${item.label} - $${item.value}`
                            }}
                        />
                    </View>
                    <Pressable style={styles.btnAdd} onPress={()=>handleAddToCart(data)} > 
                        <Text style={styles.textBtnAdd}>+</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "95%",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 12,
        marginVertical: 4,
        paddingVertical: 5
    },
    column1:{
        flexDirection: 'column',
        alignItems: 'center',
        width: '35%',
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
        width: '38%',
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
    btnsContainer: {
        width: '20%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    selectContainer: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    selectDrop: {
        width: '50%',
        backgroundColor: '#204d48',
    },
    btnAdd: {
        width: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        borderRadius: 1,
        backgroundColor: '#204d48',
    },
    textBtnAdd: {
        fontSize: 11,
        lineHeight: 15,
        fontWeight: 'bold',
        color: '#faffd8',
    },
    
    // title:{
    //     color: "black"
    // },
    // presentation :{
    //     color: "black"
    // },
    // price:{
    //     color: "black"
    // }
  });