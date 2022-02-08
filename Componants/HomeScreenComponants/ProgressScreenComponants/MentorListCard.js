import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AppColors from '../../../Constaint/AppColors';
import { Data } from '../../../dummy-data/dummyData';

const MentorListCard = (props) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={props.onPress}>
            <View style={styles.Container}>
                <View style={styles.heading}>
                    <Text style={styles.text}>Popular Today</Text>
                    <Icon name='arrow-right' size={20} style={{ marginStart: '50%' }} color={AppColors.FontsColor} />
                </View>
                <View>
                    <FlatList
                        data={Data}
                        horizontal
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={props.onPress} activeOpacity={0.6} style={styles.Card}>
                                <Image style={styles.dp} source={{ uri: item.image }} />
                                <Text style={styles.Name}>{item.name}</Text>
                                <Text style={styles.skills}>{item.skills}</Text>
                            </TouchableOpacity>
                        )
                        } />
                </View>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    Container: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: AppColors.BtnClr,
        elevation: 5
    },
    heading: {
        paddingTop: 5,
        flexDirection: 'row',
    },
    text: {
        color: AppColors.FontsColor,
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        marginStart: '3%'
    },
    Card: {
        backgroundColor: AppColors.CardColor,
        marginHorizontal: 3,
        marginVertical: 10,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        borderRadius: 10

    },
    dp: {
        width: 80,
        height: 80,
        borderRadius: 10
    },
    Name: {
        color: AppColors.FontsColor,
        width: '60%',
        fontFamily: "Poppins-Regular",
        fontSize: 14,
        paddingTop: 7
    },
    skills: {
        color: AppColors.FontsColor,
        fontFamily: "Poppins-Regular",
        fontSize: 8,

    }
});
export default MentorListCard;
