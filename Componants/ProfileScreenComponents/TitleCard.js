import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import AppColors from '../../Constaint/AppColors';
import Icon from 'react-native-vector-icons/FontAwesome5'

const TitleCard = (props) => {
    return (
        <View style={styles.NameContainer}>
            <Text style={[styles.text2, { color: AppColors.FontsColor, marginStart: '5%', width: '65%' }]}>{props.firstText}</Text>
            <Text style={[styles.text2, { color: AppColors.infoFonts, width: '22%', textAlign: 'center' }]}>{props.secoundText}</Text>
            <Icon name='angle-right' size={25} color={AppColors.infoFonts} />
        </View>
    )
};
const styles = StyleSheet.create({
    NameContainer: {
        backgroundColor: AppColors.CardColor,
        height: "100%",
        marginTop: '5%',
        flexDirection: 'row',
        borderRadius: 25,
        alignItems: 'center',
        width: "100%",
        overflow: 'hidden'
    },
    text2: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
    }
});

export default TitleCard