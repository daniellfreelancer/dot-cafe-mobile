import { ImageBackground, Image, View, Button, StyleSheet, Pressable, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useSelector } from 'react-redux'

export default function Welcome({ navigation }) {
    const user = useSelector(state => state.auth.user)

    return (
            <ImageBackground
                source={{
                    uri: "http://drive.google.com/uc?export=view&id=1gxxNlSqQtQyETsRn43uon6Uhn_WzIBc5"
                }}
                resizeMode="cover"
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: 800
                }}
            >
                <Image
                    source={{
                        uri: "http://drive.google.com/uc?export=view&id=1wnHo20gsFBF0XRF6DFNDJ6FIwsqwb1IX"
                    }}
                    style={{
                        width: "50%",
                        height: 250,
                        marginBottom: 400
                    }}
                    resizeMode="contain"
                />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 22
                }}>
                    {
                        !user &&
                        <>
                            <Pressable style={styles.buttonLeft} onPress={() => navigation.navigate('Registro')} >
                                <Text style={styles.textLeft}> REGISTRARSE</Text>
                            </Pressable>
                            <Pressable style={styles.buttonRight} onPress={() => navigation.navigate('Ingresar')}>
                                <Text style={styles.textRight}> INICIAR SESIÓN</Text>
                            </Pressable>
                        </>
                    }
                </View>
                <StatusBar style="auto" backgroundColor="#204d48" />
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    buttonLeft: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        margin: "5%",
        borderRadius: 4,
        backgroundColor: '#204d48',
    },
    buttonRight: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        margin: "5%",
        borderRadius: 4,
        backgroundColor: '#faffd8',
    },
    textLeft: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#faffd8',
    },
    textRight: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#204d48',
    },
});