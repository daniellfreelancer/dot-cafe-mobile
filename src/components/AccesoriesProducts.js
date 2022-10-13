import { View, Text, ImageBackground, Button, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ProductCard from './ProductCard'
import { useGetAllMugsQuery } from '../features/mugsAPI'
import { useGetAllFiltersQuery } from '../features/filtersAPI'
import { color } from 'react-native-reanimated'

export default function AccesoriesProducts({ navigation }) {

    const [showFilters, setShowFilters] = useState()
    const [showMugs, setShowMugs] = useState()

    const { data: filters } = useGetAllFiltersQuery()
    const { data: mugs } = useGetAllMugsQuery()

    const handleFilters = () => {
        setShowFilters(true)
        setShowMugs(false)
    }
    const handleMugs = () => {
        setShowFilters(false)
        setShowMugs(true)
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
                    { backgroundColor: pressed ? "#45230ffd" : "#204d48" }, styles.buttonProd
                ]}
                    onPress={handleFilters} >
                    <Text style={styles.textProd}> Filtros</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [
                    { backgroundColor: pressed ? "#45230ffd" : "#204d48" }, styles.buttonProd
                ]}
                    onPress={handleMugs}>
                    <Text style={styles.textProd}> Tazas</Text>
                </Pressable>
            </View>
            <View>
                {showFilters && filters &&
                    <>
                        {filters?.allFilters.map(filter => <ProductCard data={filter} key={filter._id} />)}
                    </>
                }
            </View>
            <View>
                {showMugs && mugs &&
                    <>
                        {mugs?.response.map(mug => <ProductCard data={mug} key={mug._id} />)}
                    </>
                }
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    buttonOpa: {
        backgroundColor: 'yellow',
        activeOpacity: 1
    },
    buttonProd: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        margin: "5%",
        borderRadius: 4,
    },
    textProd: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#faffd8',

    },
});