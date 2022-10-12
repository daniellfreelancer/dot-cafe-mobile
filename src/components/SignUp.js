import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Image, Pressable, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useUserSignupMutation } from '../features/usersAPI'
import { useNavigation } from '@react-navigation/native'

export default function SignUp() {
    const navigation = useNavigation()

    const [firstName, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [photo, setPhoto] = useState("")
    const [userSignup] = useUserSignupMutation()

    const handleSignUp = async (e) => {
        e.preventDefault()
        let newUserData = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim().toLowerCase(),
            password: password,
            photo: photo.trim(),
            from: "form",
            role: 'user'
        }
        userSignup(newUserData)
            .then(response => {
                if (response.error) {
                    Alert.alert('Error al crear usuario')
                } else {
                    Alert.alert('Usuario creado, verifica tu cuenta')
                    setTimeout(() => {
                        navigation.navigate('Ingresar')
                    }, 1500)
                }
            })
            .catch(error => {
                console.log(error)
            })
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
                <>
                    <KeyboardAvoidingView behavior="padding" style={styles.keyboard}>
                        <ScrollView>
                            <View style={styles.container}>
                                <Image style={styles.photo} source={{
                                    uri: "http://drive.google.com/uc?export=view&id=1wnHo20gsFBF0XRF6DFNDJ6FIwsqwb1IX"
                                }} />
                                <View style={styles.signup}>
                                    <Text style={styles.title}>REGISTRARSE</Text>
                                    <View>
                                        <Text style={styles.titleInput}>Nombre:</Text>
                                        <TextInput type="text" placeholder="ej Maria" style={[styles.input, styles.inputText]} onChangeText={(text) => setName(text)} />
                                    </View>
                                    <View>
                                        <Text style={styles.titleInput}>Apellido:</Text>
                                        <TextInput type="text" placeholder="ej Lopez" style={[styles.input, styles.inputText]} onChangeText={(text) => setLastName(text)} />
                                    </View>
                                    <View>
                                        <Text style={styles.titleInput}>Foto:</Text>
                                        <TextInput type="text" placeholder="Debe ser URL" style={[styles.input, styles.inputText]} onChangeText={(text) => setPhoto(text)} />
                                    </View>
                                    <View>
                                        <Text style={styles.titleInput}>Email:</Text>
                                        <TextInput type="email" placeholder="marialopez@gmail.com" style={[styles.input, styles.inputText]} onChangeText={(text) => setEmail(text)} />
                                    </View>
                                    <View>
                                        <Text style={styles.titleInput}>Contraseña:</Text>
                                        <TextInput type="password" secureTextEntry={true} placeholder="Contraseña" style={[styles.input, styles.inputText]} onChangeText={(text) => setPassword(text)} />
                                    </View>
                                    <Pressable style={styles.botton} onPress={handleSignUp}><Text style={styles.h3}>REGISTRAR</Text></Pressable>
                                </View>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    signup: {
        backgroundColor: 'rgba(0, 0, 0, 0.591)',
        width: '90%',
        minHeight: '60%',
        alignItems: "center",
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        marginTop: 20,
        marginBottom: 130,
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
        textAlign: 'center',
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
        color: '#fff',
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
        marginTop: 30,
    },
})