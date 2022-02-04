import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import AppColors from '../../../Constaint/AppColors';

const ProgressCard = () => {
    return (
        <View style={{ alignItems: 'center' }}>
            <View style={styles.Container}>
                <View style={styles.profile}>
                    <Image style={{
                        height: 50,
                        width: 50,
                        borderRadius: 200
                    }} source={require("../../../assets/Images/dp.png")} />
                    <View>
                        <Text style={styles.name}>William vetrovs</Text>
                        <Text style={styles.skill}>Market Research</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <View style={styles.ProgressBar}>
                        <View style={styles.done}>
                        </View>
                    </View>
                    <Text style={{ color: AppColors.FontsColor, marginStart: 10, fontFamily: "Poppins-Regular" }}>80%</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.date}>Next session Date </Text>
                    <Text style={[styles.date, { color: AppColors.FontsColor, marginStart: 20 }]}>12-02-2022</Text>
                </View>

            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    Container: {
        width: '95%',
        paddingHorizontal: 20,
        borderRadius: 10,
        paddingVertical: 5,
        backgroundColor: AppColors.BtnClr,
        elevation: 5
    },
    profile: {
        flexDirection: 'row'
    },
    name: {
        color: AppColors.FontsColor,
        fontSize: 17,
        fontFamily: "Poppins-Regular",
    },
    skill: {
        color: AppColors.infoFonts,
        fontSize: 13,
        fontFamily: "Poppins-Regular",
    },
    ProgressBar: {
        width: '85%',
        marginHorizontal: 2,
        height: 10,
        borderRadius: 10,
        backgroundColor: AppColors.FontsColor
    },
    done: {
        flex: 1,
        width: "80%",
        borderRadius: 10,
        backgroundColor: 'gray'
    },
    date: {
        color: AppColors.infoFonts,
        fontFamily: "Poppins-Regular",
        fontSize: 17
    }
});
export default ProgressCard;
