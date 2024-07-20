import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/Ionicons';

interface CustomCardProps {
    icon: string;
    text1: string;
    text2: string;
    progress: number;
    percentage: string;
    containerStyle?: ViewStyle;
    iconStyle?: ViewStyle;
    heading1Style?: TextStyle;
    heading2Style?: TextStyle;
    progressStyle?: ViewStyle;
    percentageStyle?: TextStyle;
}
const CustomCard: React.FC<CustomCardProps> = ({
    icon,
    text1,
    text2,
    progress,
    percentage,
    containerStyle,
    iconStyle,
    heading1Style,
    heading2Style,
    progressStyle,
    percentageStyle,
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.iconText}>
            <Text style={styles.text1}>{text1}</Text>
            <View style={[styles.iconBar, iconStyle]}>
                <Icon name={icon} size={30} color="#900"/>
            </View>
            </View>
            <Text style={styles.text2}>{text2}</Text>
            <View style={[styles.progressContainer, progressStyle]}>
                <Progress.Bar progress={progress} width={220}/>
                <Text style={[styles.percentage, percentageStyle]}>{percentage}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
       },
    iconBar: {
        marginBottom: 10,
        },
    text1: {
        fontSize: 22,
        fontWeight: '600',
        color: "black",
    },
    text2: {
        fontSize: 18,
        color: "#898989",
       },
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    percentage: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight:"500",
        color: "#898989",
    },
    iconText: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
export default CustomCard;