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
          uri: "https://img.freepik.com/foto-gratis/vista-cercana-granos-cafe-tostados-frescos-oscuros-sobre-fondo-granos-cafe_141793-27283.jpg?w=1380&t=st=1665691697~exp=1665692297~hmac=fd5c9898d2cfc7049b744904006b5fbb7a1e1b02a937b648840fb06f08387576"
        }}
        resizeMode="cover"
        style={{
          flex: 1,
          alignItems: "center",
          height: "100%"
        }} >
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 22,
          padding: "2%"
        }}>
          <Pressable style={({ pressed }) => [
            { backgroundColor: pressed ? "#45230ffd" : "#204d48" }, myStyles.buttonKG
          ]}
            onPress={handleCapsule} >
            <Text style={myStyles.textKG}>Capsula</Text>
          </Pressable>
          <Pressable style={({ pressed }) => [
            { backgroundColor: pressed ? "#45230ffd" : "#204d48" }, myStyles.buttonKG
          ]}
            onPress={handleItalian}>
            <Text style={myStyles.textKG}>Italiana</Text>
          </Pressable>
          <Pressable style={({ pressed }) => [
            { backgroundColor: pressed ? "#45230ffd" : "#204d48" }, myStyles.buttonKG
          ]}
            onPress={handleBar}>
            <Text style={myStyles.textKG}> Barista</Text>
          </Pressable>
          <Pressable style={({ pressed }) => [
            { backgroundColor: pressed ? "#45230ffd" : "#204d48" }, myStyles.buttonKG
          ]}
            onPress={handleFilter}>
            <Text style={myStyles.textKG}> Con filtro</Text>
          </Pressable>
        </View>
        <View>
          {showCapsule && machineCapsule?.map(coffee => 
          <ProductCard data={coffee} key={coffee._id} />)}
        </View>
        <View>
          {showItalian && machineItalian?.map(coffee => <ProductCard data={coffee} key={coffee._id} />)}
        </View>
        <View>
          {showBar && machineBar?.map(coffee => <ProductCard data={coffee} key={coffee._id} />)}
        </View>
        <View>
          {showFilter && machinefilter?.map(coffee => <ProductCard data={coffee} key={coffee._id} />)}
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
    margin: "2%",
    borderRadius: 4,
  },
  textKG: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#faffd8',
  },

})