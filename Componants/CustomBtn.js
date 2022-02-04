import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import AppColors from '../Constaint/AppColors';

const CustomBtn = (props) => {
    return (
        <View style={styles.screen}>
            <TouchableOpacity activeOpacity={0.6} style={{ ...styles.Btn, ...props.style }} onPress={props.onPress}>
                <Text style={styles.txt}>
                    {props.Title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center'
    },
    Btn: {
        backgroundColor: AppColors.BtnClr,
        height: 65,
        width: '90%',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontFamily: "Poppins-Regular",
        color: AppColors.FontsColor,
        fontSize: 18
    }


})

export default CustomBtn;
