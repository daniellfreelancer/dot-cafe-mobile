import { View, Text, ImageBackground, Button, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useGetTypeCoffeeMachinesQuery } from '../features/machineAPI'
import ProductCard from './ProductCard'


export default function coffeeMachineProducts() {


  const { data: capsulaMachine } = useGetTypeCoffeeMachinesQuery("capsula")
  const { data: italianaMachine } = useGetTypeCoffeeMachinesQuery("italiana")
  const { data: baristaMachine } = useGetTypeCoffeeMachinesQuery("barista")
  const { data: filtroMachine } = useGetTypeCoffeeMachinesQuery("filtro")

  
  const machineCapsule = capsulaMachine?.cofMachine
  const machineItalian = italianaMachine?.cofMachine
  const machineBar = baristaMachine?.cofMachine
  const machinefilter = filtroMachine?.cofMachine



  const [showCapsule, setShowCapsule] = useState()
  const [showItalian, setShowItalian] = useState()
  const [showBar, setShowBar] = useState()
  const [showFilter, setShowFilter] = useState()

  const handleCapsule = () => {
    setShowCapsule(true)
    setShowItalian(false)
    setShowBar(false)
    setShowFilter(false)
  }

  const handleItalian = () => {
    setShowCapsule(false)
    setShowItalian(true)
    setShowBar(false)
    setShowFilter(false)
  }

  const handleBar = () => {
    setShowCapsule(false)
    setShowItalian(false)
    setShowBar(true)
    setShowFilter(false)
  }
  const handleFilter = () => {
    setShowCapsule(false)
    setShowItalian(false)
    setShowBar(false)
    setShowFilter(true)
  }

  return (

    <>
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
                marginBottom:22,
                padding: "2%"
            }}>
            <Pressable style={myStyles.buttonKG} onPress={handleCapsule} >
              <Text style={myStyles.textKG}>Capsula</Text>
            </Pressable>

            <Pressable style={myStyles.buttonKG} onPress={handleItalian}>
              <Text style={myStyles.textKG}>Italiana</Text>
            </Pressable>

            <Pressable style={myStyles.buttonKG} onPress={handleBar}>
              <Text style={myStyles.textKG}> Barista</Text>
            </Pressable>

            <Pressable style={myStyles.buttonKG} onPress={handleFilter}>
              <Text style={myStyles.textKG}> Con filtro</Text>
            </Pressable>
            </View>

            <View>
              {showCapsule &&  machineCapsule?.map(coffee => <ProductCard data={coffee} key={coffee._id} />)}
            </View>
              <View>
              {showItalian && machineItalian?.map(coffee => <ProductCard data={coffee} key={coffee._id} />)}
              </View>
              <View>
              {showBar &&  machineBar?.map(coffee => <ProductCard data={coffee} key={coffee._id} />)}
              </View>
              <View>
              {showFilter &&  machinefilter?.map(coffee => <ProductCard data={coffee} key={coffee._id} />)}
              </View>
    </ImageBackground>
    </>

  )
};

const myStyles = StyleSheet.create({

  buttonKG: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    margin:"2%",
    borderRadius: 4,
    backgroundColor: '#204d48',
  },
  textKG: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#faffd8',
  },

})