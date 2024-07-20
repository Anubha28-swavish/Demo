import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomCard from "../components/CustomCard/CustomCard";
import CustomText from "../components/CustomText/CustomText";

const LoginScreen = () => {
    const [text, setText] = useState('');
    return (
        <View>
            {/* <Image source={require('../../assets/Login.png')} /> */}
            
            <View style={styles.container}>
                <CustomCard
                    icon="newspaper-outline"
                    text1="2235.88"
                    text2="Total Applications"
                    progress={0.6}
                    percentage="60%"
                    containerStyle={styles.customCardContainer}
                />

            </View>
            <View style={styles.appContainer}>
                <CustomText label="Trading Name" value="Trading_Name_01" />
                </View>

        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        alignItems: 'center'
    },
    customContainer: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 10,
    },
    customInput: {
        borderColor: '#DCDCDC',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 30,
        backgroundColor: '#f8f8f8',

    },
    customCardContainer: {
        width: '90%',
        marginBottom: 20,
    },
    appContainer: {
        // flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
    },
})
export default LoginScreen;