import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react';
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import AppColors from '../../Constaint/AppColors';
import Backbtn from '../../Componants/Backbtn';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionic from 'react-native-vector-icons/Ionicons';
import TitleCard from '../../Componants/ProfileScreenComponents/TitleCard';
import AboutCard from '../../Componants/ProfileScreenComponents/AboutCard';
import { useNavigation } from '@react-navigation/native';
import FoundersCard from '../../Componants/ProfileScreenComponents/FoundersCard';

const MentorProfile = () => {

    const navigation = useNavigation();

    /* const GetUser = async () => {
         const email = await auth().currentUser
         var userEmail = email.email;
         const savedUser = await firestore().collection('Users').doc(userEmail).get();
         var name = savedUser._data.name
         setname(name);
         if (savedUser != undefined) {
             var dpurl = savedUser._data.image
             if (dpurl != "") {
                 setdp(dpurl);
                 setdefaultDp(false)
             }
         }
     };
     GetUser();*/
    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Backbtn
                    onPress={() => { navigation.goBack() }}
                />
                <Text style={{
                    color: AppColors.FontsColor,
                    fontFamily: 'Poppins-Regular',
                    marginStart: '26%',
                    fontSize: 20
                }}>Profile</Text>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.topIcons}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <Icon name='crown' size={20} color={AppColors.FontsColor} />
                        <Text style={styles.text}>Membership</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginStart: '55%' }}>
                        <Ionic name='settings' size={22} color={AppColors.FontsColor} />
                        <Text style={styles.text}>Setting</Text>
                    </View>
                </View>
                <View style={{ height: '5%' }}>
                    <TitleCard
                        firstText='Jatin khurana'
                        marginStart1='5%'
                        marginStart2='50%'
                    />
                </View>
                <View style={{ height: 'auto', marginTop: '10%' }}>
                    <AboutCard
                        title='About'
                        description='Whether you are looking to learn finance, get mentored, or join investing communities, we provide a one-stop solution.'
                    />
                </View>
                <View style={{ height: '5%' }}>
                    <TitleCard
                        firstText='Industry'
                        secoundText='Finance'
                        marginStart1='5%'
                        marginStart2='43%'
                    />
                </View>
                <View style={{ height: 'auto', marginTop: '10%' }}>
                    <AboutCard
                        title='Experience'
                        description='Product Designer
                        -InnerBuddha Internship
                        Dates EmployedJan 2021  Aug 2021
                        Duration-8 mos
                        LocationBengaluru, Karnataka, India'
                    />
                </View>
                <View style={styles.CompanyDetails}>
                    <Text style={styles.title}>Skills</Text>
                    <View style={{ flexDirection: 'row', marginTop: '0%', justifyContent: 'space-around' }}>
                        <Text style={styles.txt}>Design Research</Text>
                        <Text style={styles.txt}>Rapid Prototyping</Text>
                    </View>
                    <Text style={[styles.txt, { marginStart: '9%', marginTop: '2%', marginBottom: '2%' }]}>User InterFace Design</Text>
                </View>
                <View style={{ height: 'auto', marginTop: '5%' }}>
                    <AboutCard
                        title='Education'
                        description='Birla Institute of Technology and Science, Pilani
                        Bachelor of Engineering - BE Computer Science
                        '
                    />
                </View>
            </View>
            <View style={styles.dp}>
                <Image style={{ width: '100%', height: '100%' }} source={require("../../assets/Images/jatindp.png")} />
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
        height: '87%',
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
    topIcons: {
        flexDirection: 'row',
        paddingTop: '5%',
        marginHorizontal: '5%'


    },
    text: {
        color: AppColors.FontsColor,
        fontFamily: 'Poppins-Regular',
        fontSize: 10
    },
    CompanyDetails: {
        width: '100%',
        height: 'auto',
        backgroundColor: AppColors.CardColor,
        marginTop: '3%',
        borderRadius: 10
    },
    title: {
        color: AppColors.FontsColor,
        fontFamily: 'Poppins-Regular',
        marginStart: '3%',
        marginTop: '2%'
    },
    txt: {
        color: AppColors.infoFonts,
        fontFamily: 'Poppins-Regular',
        fontSize: 10

    }
});

export default MentorProfile;