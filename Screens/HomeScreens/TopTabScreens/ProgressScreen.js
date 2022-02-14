import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import AppColors from '../../../Constaint/AppColors';
import ProgressCard from '../../../Componants/HomeScreenComponants/ProgressScreenComponants/ProgressCard';
import MentorListCard from '../../../Componants/HomeScreenComponants/ProgressScreenComponants/MentorListCard';
import DefaultProgressCard from '../../../Componants/HomeScreenComponants/ProgressScreenComponants/DefaultProgressCard';
import ArticalList from '../../../Componants/HomeScreenComponants/ArticalScreenComponants/ArticalList';
import { ArticalData } from '../../../dummy-data/Artical-Data';

const ProgressScreen = (props) => {
    return (
        <View style={styles.screen}>
            <View style={styles.DetailsConatainer}>
                <Text style={styles.wlcm}>Hello,{props.UserName}</Text>
                <Text style={styles.subtext}>{props.qoute}</Text>
                <Text style={styles.subtext2}>{props.author == "-null" ? "" : props.author}</Text>
            </View>
            <View style={styles.ProgressCard}>
                {props.default ?
                    <DefaultProgressCard onPress={props.onPress} /> :
                    <ProgressCard />
                }
            </View>
            <View style={styles.listCard}>
                <MentorListCard
                    onPress={props.onPress}
                />
            </View>
            <View style={{ height: "100%", paddingHorizontal: '3%' }}>
                <Text style={[styles.text, { fontSize: 18 }]}>Artical</Text>
                {ArticalData.map((item) => {
                    return <TouchableOpacity key={item.id} >
                        <View style={styles.line}></View>
                        <View style={styles.title}>
                            <Text style={styles.text}>{item.title}</Text>
                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', }}>
                                <Ionic name='heart' size={20} color="red" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.desc}>{item.description}</Text>
                        </View>
                    </TouchableOpacity>
                })}
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    DetailsConatainer: {
        paddingHorizontal: "5%",
        paddingVertical: "2%",


    },
    wlcm: {
        color: AppColors.FontsColor,
        fontFamily: "Poppins-Regular",
        fontSize: 22

    },
    subtext: {
        color: AppColors.infoFonts,
        fontFamily: "Poppins-Regular",
        fontSize: 15,

    },
    subtext2: {
        color: AppColors.infoFonts,
        fontFamily: "Poppins-Regular",
        fontSize: 15,
        paddingStart: '55%',
        marginBottom: 5
    },
    ProgressCard: {
        width: '100%',
        height: 110,
        alignSelf: 'center',
        justifyContent: 'center',
        paddingHorizontal: '3%'
    },
    listCard: {
        marginTop: 10,
        paddingHorizontal: '3%',
        width: '100%',
        marginBottom: "12%",
        height: 220,
    },
    line: {
        width: '100%',
        height: 2,
        backgroundColor: AppColors.FontsColor
    },
    text: {
        color: AppColors.FontsColor,
        fontFamily: "Poppins-Regular",
        fontSize: 15,
    }, line: {
        backgroundColor: AppColors.infoFonts,
        width: '100%',
        height: 1
    },
    title: {
        paddingTop: 10,
        paddingStart: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    text: {
        color: AppColors.FontsColor,
        fontFamily: "Poppins-Bold"
    },
    description: {
        paddingBottom: 20,
        paddingStart: 5

    },
    desc: {
        color: AppColors.FontsColor,
        fontFamily: "Poppins-Regular"
    }
});

export default ProgressScreen;
