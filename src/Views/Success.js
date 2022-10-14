import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'

const Success = () => {
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
                <Text style={{ padding: 7,width: '100%',textAlign:'center',backgroundColor:'rgba(0, 0, 0, .65)',color: 'white', fontWeight: 'bold', fontSize: 23, marginTop: 100 }}>¡ Su compra se realizo con éxito !</Text>
                <Image style={{ marginTop: 150,margin: 20, width: 200, height: 200, display: 'flex', alignSelf: 'center' }} source={{
                    uri: "http://drive.google.com/uc?export=view&id=1pUHWzQ0_R4F7sJ3chwq4TWKBz6MRlMaa"
                }} />
            </ImageBackground>
        </>
    )
}

export default Success

