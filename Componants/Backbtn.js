import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppColors from '../Constaint/AppColors';


const Backbtn = (props) => {
    return (
        <View>
            <TouchableOpacity style={styles.btn} onPress={props.onPress}>
                <Icon name='angle-left' size={40} color={AppColors.FontsColor} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: AppColors.BtnClr,
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 10,
        width: 40

    }
})

export default Backbtn;
