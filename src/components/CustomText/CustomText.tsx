import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

interface CustomTextProps{
    label:string;
    value:string;
}

const CustomText: React.FC<CustomTextProps> = ({ label, value }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.separator}>:</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        maxWidth: 600, 
        marginVertical: 10,
      },
    label: {
        flex: 1,
        textAlign: 'left',
        paddingRight: 10, 
    },
      separator: {
        paddingHorizontal: 10, 
      },
      value: {
        flex: 1,
        textAlign: 'right',
        paddingLeft: 10, 
      },
  })

export default CustomText