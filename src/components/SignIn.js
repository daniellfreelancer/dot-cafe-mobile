import { View, Text, ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from "react-redux";
import { useUserLoginMutation } from "../features/usersAPI";
import { useNavigation } from '@react-navigation/native';
import { setCredentials } from '../features/usersSlice';
import { useState } from "react";


export default function SignIn({ navigation }) {
    const [loginUser] = useUserLoginMutation()
    const dispatch = useDispatch()
    const navigate = useNavigation()

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [userLogin] = useUserLoginMutation()

    const handleSubmit = e => {
        e.preventDefault()
        let newUserData = {
            mail: email.trim().toLowerCase(),
            password: pass.trim()
        }
    }

        async function login(newUserData) {
            try {
                let res = await loginUser(newUserData)
                if (res.data.success) {
                    let data = res.data.response.user
                    dispatch(setCredentials(data))
                    dispatch(setMessage({
                        message: `Bienvenido ${data.firstName} ${data.lastName}`,
                        success: res.data?.success
                    }))
                    dispatch(reload())
                    AsyncStorage.setItem('token', res.data.response.token)
                    navigate("HomeScreen", { replace: true })
                }
            } catch (error) {
                console.log(error)
            }
        }
        return (
            <ImageBackground
                source={{
                    uri: "http://drive.google.com/uc?export=view&id=1OwWvUmfMi0zJkw2qIyDeaKGBCqD86RrT"
                }}
                resizeMode="cover"
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%"
                }}>
                <View style={{
                    width: "100%",
                    height: 760,

                }}>
                    <KeyboardAvoidingView behavior="padding" style={styles.keyboard}>
                        <ScrollView>
                            <View style={styles.container}>
                                <Image style={styles.photo} source={{
                                    uri: "http://drive.google.com/uc?export=view&id=1wnHo20gsFBF0XRF6DFNDJ6FIwsqwb1IX"
                                }}
                                />
                                <View style={styles.login}>
                                    <Text style={styles.title}>INICIAR SESIÓN</Text>
                                    <View>
                                        <Text style={styles.titleInput}>Email:</Text>
                                        <TextInput type="email" placeholder="email" style={[styles.input, styles.inputText]} onChangeText={(text) => setEmail(text)} />
                                    </View>
                                    <View>
                                        <Text style={styles.titleInput}>Contraseña:</Text>
                                        <TextInput secureTextEntry={true} placeholder="Contraseña" style={[styles.input, styles.inputText]} onChangeText={(text) => setPass(text)} />
                                    </View>
                                    <TouchableOpacity style={styles.botton} onPress={handleSubmit}><Text style={styles.h3}>Iniciar Sesión</Text></TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </View>
            </ImageBackground>
        )
    }

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 800,
            justifyContent: "center",
            alignItems: "center",
        },
        login: {
            backgroundColor: 'rgba(0, 0, 0, 0.591)',
            width: '90%',
            minHeight: "50%",
            alignItems: "center",
            borderRadius: 10,
            shadowColor: 'black',
            shadowOffset: { width: 2, height: 4 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
        },
        input: {
            width: 320,
            textAlign: 'center',
            marginTop: 50,
            marginBottom: 10,
            color: 'black',
            backgroundColor: '#fff',
            padding: 10,
            borderRadius: 10,
            shadowColor: 'black',
            shadowOffset: { width: 2, height: 4 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
        },
        inputText: {
            fontSize: 25,
            textAlign: 'center'
        },
        titleInput: {
            alignSelf: 'center',
            justifyContent: 'center',
            fontSize: 14,
            color: '#fff',
            fontWeight: '800',
            textTransform: 'uppercase',
            textShadowRadius: 10,
            transform: [{ translateY: 40 }],
            fontWeight: '300',
        },
        botton: {
            margin: 30,
            backgroundColor: '#204D48',
            width: 250,
            height: 50,
            justifyContent: 'center',
            alignItems: "center",
            borderRadius: 10,
            shadowColor: 'black',
            shadowOffset: { width: 2, height: 4 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
        },
        h3: {
            color: '#FAFFD8',
        },
        title: {
            fontSize: 20,
            marginTop: 20,
            color: '#fff',
            fontWeight: '800',
            borderBottomColor: '#377771',
            borderBottomWidth: 2,
        },
        photo: {
            width: 200,
            height: 200,
            justifyContent: 'center',
            alignItems: "center",
            marginBottom: 30,
            marginTop: -100,
        },
        
    })