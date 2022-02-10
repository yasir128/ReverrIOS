import { View, Text, FlatList, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Backbtn from '../../Backbtn';
import { AllMentors } from '../../../dummy-data/AllMentors';
import AppColors from '../../../Constaint/AppColors';

const MentorsScreen = (props) => {

    const [nclm, setnclm] = useState(2);
    return (
        <View style={{ flex: 1, marginTop: "-38%" }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Backbtn onPress={props.onPress} />
                <Text style={styles.header}>Popular Mentors</Text>
            </View>
            <View style={{ marginBottom: 50 }}>
                <FlatList
                    data={AllMentors}
                    numColumns={nclm}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View>
                            <TouchableOpacity style={styles.Card}>
                                <ImageBackground style={styles.img} source={{ uri: item.image }}>
                                    <View style={styles.Details}>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <Text style={styles.skill}>{item.skills}</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        flex: 1,
    },
    Card: {
        height: 160,
        marginHorizontal: 5,
        marginVertical: 10,
        width: 170,
        borderRadius: 10,
        overflow: 'hidden'

    },
    Details: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        width: '100%',
        height: 70,
        marginTop: '60%',
        paddingHorizontal: 5
    },
    name: {
        color: AppColors.FontsColor,
        fontFamily: "Poppins-Regular",
    },
    skill: {
        color: AppColors.FontsColor,
        fontFamily: "Poppins-Regular",
        fontSize: 10
    }, header: {
        color: AppColors.FontsColor,
        fontFamily: "Poppins-Bold",
        marginStart: "10%",
        fontSize: 20
    }
});

export default MentorsScreen;
