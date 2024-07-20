import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigation } from './src/navigation/StackNavigation';
import StackNavigatorNew from './src/navigation/StackNavigatorNew';

export default function App() {

  return (
    <StackNavigatorNew/>
  );
}


const styles = StyleSheet.create({
});

