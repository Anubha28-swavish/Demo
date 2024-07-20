import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import LoginOTP from '../screens/LoginOTP';
import ForgetPassword from '../screens/ForgetPassword';
import ForgetPasswordOTP from '../screens/ForgetPasswordOTP';
import ResetPassword from '../screens/ResetPassword';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Applications from '../BottomTabs/Applications';
import Commission from '../BottomTabs/Commission';
import Notification from '../BottomTabs/Notification';
import Message from '../BottomTabs/Message';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return(
        <Tab.Navigator>
      <Tab.Screen name="Applications" component={Applications}/>
      <Tab.Screen name="Commission" component={Commission} />
      <Tab.Screen name="Notification" component={Notification}/>
      <Tab.Screen name="Message" component={Message}/>
    </Tab.Navigator>
    )
   }

const StackNavigatorNew = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginOTP'>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="LoginOTP" component={LoginOTP} options={{ headerShown: false }} />
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
                <Stack.Screen name="ForgetPasswordOTP" component={ForgetPasswordOTP} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen name="Dashboard" component={BottomTabs}  options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigatorNew

