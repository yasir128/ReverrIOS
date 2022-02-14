import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import AppColors from '../../Constaint/AppColors';
import Backbtn from '../../Componants/Backbtn';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionic from 'react-native-vector-icons/Ionicons';
import TitleCard from '../../Componants/ProfileScreenComponents/TitleCard';
import AboutCard from '../../Componants/ProfileScreenComponents/AboutCard';
import { useNavigation } from '@react-navigation/native';
import FoundersCard from '../../Componants/ProfileScreenComponents/FoundersCard';

const Settings = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Backbtn
                    IconSize={40}
                    onPress={() => { navigation.goBack() }}
                />
                <Text style={{
                    color: AppColors.FontsColor,
                    fontFamily: 'Poppins-Regular',
                    marginStart: '26%',
                    fontSize: 20
                }}>Settings</Text>
            </View>
            <View style={styles.mainContainer}>
                <TouchableOpacity style={{ height: '5%', marginTop: "30%" }}>
                    <TitleCard
                        firstText='Edit profile'
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: '5%', marginTop: "5%" }}>
                    <TitleCard
                        firstText='Change password'
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: '5%', marginTop: "5%" }}>
                    <TitleCard
                        firstText='Terms and conditions'
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: '5%', marginTop: "5%" }}>
                    <TitleCard
                        firstText='Contact us'
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: '5%', marginTop: "5%" }}>
                    <TitleCard
                        firstText='Logout'
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.dp}>
                <Image style={{ width: '100%', height: '100%' }} source={require("../../assets/Images/profilepic.png")} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        backgroundColor: AppColors.primarycolor
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '2%'
    },
    text: {
        color: AppColors.FontsColor,
        fontFamily: 'Poppins-Regular',
        marginStart: '26%',
        fontSize: 25
    },
    mainContainer: {
        backgroundColor: AppColors.BtnClr,
        height: '85%',
        marginVertical: '12%',
        paddingHorizontal: '2%',
        marginHorizontal: '2.5%',
        borderRadius: 10
    },
    dp: {
        height: "12%",
        width: '14%',
        overflow: 'hidden',
        borderRadius: 200,
        marginStart: '35%',
        marginTop: '12%',
        position: 'absolute',
        backgroundColor: AppColors.CardColor

    },

});

export default Settings;