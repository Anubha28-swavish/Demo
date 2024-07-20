import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import ForgetPassword from "../screens/ForgetPassword";
import OTP from "../screens/ForgetPasswordOTP";
import ResetPassword from "../screens/ResetPassword";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Applications from "../BottomTabs/Applications";
import Commission from "../BottomTabs/Commission";
import Notification from "../BottomTabs/Notification";
import Message from "../BottomTabs/Message";

const Stack:any= createStackNavigator;
const Tabs:any = createBottomTabNavigator;

const BottomTabs = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screeen name="Applications" component={Applications} />
            <Tabs.Screeen name="Commission" component={Commission} />
            <Tabs.Screeen name="Notification" component={Notification} />
            <Tabs.Screeen name="Message" component={Message} />
        </Tabs.Navigator>
    )
}

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}
export const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

// export default StackNavigation;