import { ImageBackground, Image, View, Button, StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'

export default function AboutUs() {
    return (
        <>
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
                    height: "100%",
                }}
            >
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.cardContainer}>
                            <View style={styles.photoContainer}>
                                <Image style={styles.photo1} source={{ uri: "http://drive.google.com/uc?export=view&id=1adYhjXvaoYIUTIGc6otH0xPmD79Fh4rA" }} />
                            </View>
                            <View>
                                <Text style={styles.titleCard}>NUESTRA HISTORIA</Text>
                                <Text style={styles.textCard}>Desde 1933 tostamos nuestro propio café. Lo cuidamos desde la selección de sus granos, hasta la taza, conservando el amor y el respeto que tenemos por lo que hacemos, desde el primer día. Por eso nuestro café es ÚNICO. A través de nuestro proceso exclusivo de tostación, logramos resaltar las notas y características propias de los diferentes granos. Un aroma pleno y un sabor con cuerpo, con un toque de frescura, es lo que hace inconfundible a un .Cafe, siempre..</Text>
                            </View>
                        </View>

                        <View style={styles.cardContainer1}>
                            <View style={styles.photoContainer}>
                                <Image style={styles.photo1} source={{ uri: "http://drive.google.com/uc?export=view&id=1wYF3aRbaOg5OOgSPnUkdvRmjqWY4Xi-u" }} />
                            </View>
                            <View>
                                <Text style={styles.titleCard}>NUESTRA MISIÓN</Text>
                                <Text style={styles.textCard}>Inspirar y nutrir el espíritu humano: Una persona, una taza y una comunidad a la vez.</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 800,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        marginTop: 50,
        marginBottom: 50,
    },
    cardContainer: {
        alignItems: 'center',
        backgroundColor: '#e4f5eb',
        paddingHorizontal: 20,
        borderRadius: 15,
        marginBottom: 20,
    },
    cardContainer1: {
        alignItems: 'center',
        backgroundColor: '#a3bbad',
        paddingHorizontal: 20,
        borderRadius: 15,
        marginBottom: 20,
    },
    photoContainer: {
        shadowColor: '#956031',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    photo1: {
        marginTop: 30,
        marginBottom: 30,
        width: 350,
        height: 200,
        borderRadius: 15,
        shadowColor: 'black',
    },
    titleCard: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 18,
        fontWeight: '600',
    },
    titleCard1: {
        marginBottom: 10,
        fontSize: 18,
        fontWeight: '600',
    },
    textCard: {
        margin: 5,
        marginBottom:20,
    },
})