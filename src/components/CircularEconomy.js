import { ImageBackground, Image, View, Button, StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'

export default function CircularEconomy() {
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
                    height: 760,
                }}
            >
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.cardContainer}>
                            <View style={styles.photoContainer}>
                                <Image style={styles.photo1} source={{ uri: "http://drive.google.com/uc?export=view&id=12uxYB8CXYI7koAQYXBWvfwOds8xhDY24" }} />
                            </View>
                            <View>
                                <Text style={styles.titleCard}>COMPROMISO COMPOSTA</Text>
                                <Text style={styles.textCard}>En la actualidad se estan creando en diferentes puntos de la ciudad, donde se destina a la creacion de abonos y sustratos por su alto contenido nutricional. Esto no sucede con los plasticos ni aluminios, que necesitan un tratamiento distinto para no convertirse en basura ambiental. Nuestros vasos son 100% de caña de azúcar que son biodegradables, y nos brinda excelentes ventajas: su resistencia, no liberan plastificantes, sino que garantiza una experiencia de sabor sin adulterar y sostenible en el tiempo. Claramente la compostabilidad.</Text>
                            </View>
                        </View>

                        <View style={styles.cardContainer1}>
                            <View style={styles.photoContainer}>
                                <Image style={styles.photo1} source={{ uri: "http://drive.google.com/uc?export=view&id=1VAd8tUcGnWSHxw_m4_Z3Qzur1zHpRCz8" }} />
                            </View>
                            <View>
                                <Text style={styles.titleCard1}>CONCIENCIA COLECTIVA</Text>
                                <Text style={styles.textCard}>La economía circular representa un cambio que requiere de educación, capacitación y conocimiento, pero sobre todo de responsabilidad. Para comenzar a transitar hacia ella, hay que tener en cuenta varios consejos: Cambiar los hábitos, tomar conciencia y aplicar las medidas para reducir la generación de residuos. Muchos de los artículos que se consumen pueden tener un segundo uso si está en buenas condiciones, por ejemplo, la ropa e incluso muebles. Ser conscientes y estar informados sobre el resultado del destino que tendrán los productos que utilizamos. La mayoría de los desechos terminan en un vertedero, una acción sencilla es reciclar plásticos, vidrio, pet y cartón. En el país existen empresas y hasta pequeños emprendimientos dedicados a la recolección de estos materiales para ser llevados a plantas de reciclaje.Adquirir productos que sean de calidad es una inversión, los hace más duraderos y evita desecharlos en el corto plazo.</Text>
                            </View>
                        </View>

                        <View style={styles.cardContainer}>
                            <View style={styles.photoContainer}>
                                <Image style={styles.photo1} source={{ uri: "http://drive.google.com/uc?export=view&id=1ppjAb2VKu5o4wR_4eh2RmipbEla1QR9V" }} />
                            </View>
                            <View>
                                <Text style={styles.titleCard}>ECONOMÍA CIRCULAR</Text>
                                <Text style={styles.textCard}>El municipio de Godoy Cruz (Mendoza) está llevando a cabo una iniciativa denominada “Café circular”. La propuesta invita a los vecinos a pedir café para llevar en un vaso retornable, que luego se puede devolver en cualquiera de los negocios adheridos. Quienes participen deben dejar una seña que será reintegrada al ser devuelto el vaso utilizado o puede comprar el recipiente y utilizarlo en cualquier momento. Todos los envases utilizados son 100% lavables y reutilizables, aptos para el consumo de bebidas calientes y 100% reciclables al final de su vida útil.</Text>
                            </View>
                        </View>

                        <View style={styles.cardContainer1}>
                            <View style={styles.photoContainer}>
                                <Image style={styles.photo1} source={{ uri: "http://drive.google.com/uc?export=view&id=11ht5B8sBxePs8KEzGCm56Egu7afxIZAD" }} />
                            </View>
                            <View>
                                <Text style={styles.titleCard1}>COMPROMISO CORPORATIVO</Text>
                                <Text style={styles.textCard}>Una de las empresas que más ha hecho en este camino circular para conseguir un mundo con menos plástico, pero también para implementar la EC a gran escala es la variante de Nestlé, Nespresso, quien presenta una amplia carta para el reciclaje de los residuos: “El 96% de los consumidores Nespresso disponen de un punto de recogida de cápsulas usadas a menos de 5 kilómetros de sus hogares”, explicó Nayara Fuentes, responsable de Sostenibilidad de Nespresso España.</Text>
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
        marginTop: 750,
        marginBottom: 750,
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
        textAlign: 'right',
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