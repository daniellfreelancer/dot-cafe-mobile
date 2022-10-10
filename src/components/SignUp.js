import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

export default function SignUp() {
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
                <Text
                    style={{
                        color: "white"
                    }}>Registro de Usuario</Text>
            </View>

        </ImageBackground>
    )
}