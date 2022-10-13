import { View, Text, ImageBackground, Button, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ProductCard from './ProductCard'
import { useGetAllMugsQuery } from '../features/mugsAPI'
import { useGetAllFiltersQuery } from '../features/filtersAPI'

export default function AccesoriesProducts({ navigation }) {
    
    const [showFilters, setShowFilters] = useState()
    const [showMugs, setShowMugs] = useState()
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

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
                uri: "http://drive.google.com/uc?export=view&id=1Y5Qi1FBbvBcmAam2-HB3IN5haf1BJXe4"
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
                    marginBottom:22
                }}>
                <Pressable style={({ pressed }) => [{backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'},
                    styles.buttonProd, ]} onPress={handleFilters} >
                    <Text style={styles.textProd}> Filtros</Text>
                </Pressable>
                <Pressable style={styles.buttonProd} onPress={handleMugs}>
                    <Text style={styles.textProd}> Tazas</Text>
                </Pressable>
            </View>
            <View>    
                { showFilters && filters &&
                    <>
                        {filters?.allFilters.map(filter => <ProductCard data={filter} key={filter._id} />)}
                    </>
                }
            </View>
            <View>
                { showMugs && mugs &&
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
      margin:"5%",
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