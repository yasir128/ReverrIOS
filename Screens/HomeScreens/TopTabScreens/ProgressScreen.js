import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import AppColors from '../../../Constaint/AppColors';
import ProgressCard from '../../../Componants/HomeScreenComponants/ProgressScreenComponants/ProgressCard';
import MentorListCard from '../../../Componants/HomeScreenComponants/ProgressScreenComponants/MentorListCard';
const ProgressScreen = (props) => {
    return (
        <View style={styles.screen}>
            <View style={styles.DetailsConatainer}>
                <Text style={styles.wlcm}>Hello,{props.UserName}</Text>
                <Text style={styles.subtext}>{props.qoute}</Text>
                <Text style={styles.subtext}>{props.author == "-null" ? "" : props.author}</Text>
            </View>
            <View style={styles.ProgressCard}>
                <ProgressCard />
            </View>
            <View style={styles.listCard}>
                <MentorListCard
                    onPress={props.onPress}
                />
            </View>
            <View style={{ marginHorizontal: 15, marginTop: 10, }}>
                <Text style={styles.text}>Article</Text>
                <View style={styles.line}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.text, { fontFamily: "Poppins-Bold", }]}>
                        How to create a start up
                    </Text>
                    <Ionic name='heart' size={20} color="red" style={{ paddingStart: "31%" }} />
                </View>
                <Text style={[styles.text, { fontSize: 14, }]}>GPS software boost lets smartphones pinpoint location to within 20 cm
                </Text>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,

    },
    DetailsConatainer: {
        paddingHorizontal: 50,
        paddingVertical: 10

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
    listCard: {
        marginTop: 10,
        paddingHorizontal: 0
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
    }
});

export default ProgressScreen;
