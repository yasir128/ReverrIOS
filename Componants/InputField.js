import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import AppColors from '../Constaint/AppColors';
import Icon from 'react-native-vector-icons/FontAwesome';


const InputField = (props) => {
    return (
        <View style={styles.screen}>
            <View style={{ ...styles.box, ...props.style }}>
                <Icon name={props.iconName} size={props.size} color={"white"} style={{ marginStart: 15 }} />
                <View>
                    <Text style={[styles.heading, { color: props.error ? "red" : AppColors.FontsColor }]} >{props.Title}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={props.placeholder}
                        placeholderTextColor={AppColors.infoFonts}
                        onChangeText={props.onChangeText}
                        secureTextEntry={props.secureTextEntry}
                        keyboardType={props.keyboardType}
                        value={props.value}
                        maxLength={props.maxLength} />
                </View>
                <TouchableOpacity onPress={props.Eyelick}>
                    <Icon name={props.showIcon} size={props.showIconsize} color={props.showIconolor} />
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        marginBottom: 20

    },
    box: {
        backgroundColor: AppColors.inputFieldColor,
        width: '90%',
        borderRadius: 15,
        alignItems: 'center',
        flexDirection: 'row'
    },
    heading: {
        color: AppColors.FontsColor,
        fontFamily: "Poppins-Regular",
        marginTop: 5,
        marginStart: 20

    },
    input: {
        fontSize: 13,
        color: AppColors.FontsColor,
        paddingTop: 0,
        paddingStart: 20,
        fontFamily: "Poppins-Regular",
        marginTop: -5,
        paddingBottom: 0,
        height: 40,
        width: 250
    }
})


export default InputField;
