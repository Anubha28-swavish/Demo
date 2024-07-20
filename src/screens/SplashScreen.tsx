import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const SplashScreen = () => {
    return (
        <View style={styles.splashscreen}>
            <Image source={require('../../assets/Appicon.png')} />
            <Text style={styles.text}>Card Transact</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    splashscreen: {
        backgroundColor: "#589E58",
        justifyContent: "center",
        alignItems:"center",
        flex: 4

    },
    text: {
        color: "#FFFFFF",
        fontWeight: 'bold',
        fontSize: 44,
    }
})
export default SplashScreen;