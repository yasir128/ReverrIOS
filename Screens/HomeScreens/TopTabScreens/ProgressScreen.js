import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
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
                <Text style={styles.subtext}>{props.author == "-null" ? "" : props.author}</Text>
            </View>
            <View style={styles.ProgressCard}>
                {props.default ?
                    <DefaultProgressCard /> :
                    <ProgressCard />
                }
            </View>
            <View style={styles.listCard}>
                <MentorListCard
                    onPress={props.onPress}
                />
            </View>
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <Text style={styles.text}>Article</Text>
                {/* <FlatList
                    data={ArticalData}
                    renderItem={({ item }) => (

                        <View>
                            <Text>{item.title}</Text>
                        </View>

                    )}
                /> */}
                <ArticalList
                    data={ArticalData}
                />
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
        paddingVertical: 10,

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
    ProgressCard: {
        width: '100%',
        height: 110,
        marginHorizontal: 5

    },
    listCard: {
        marginTop: 10,
        paddingHorizontal: 0,
        marginHorizontal: 5
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
