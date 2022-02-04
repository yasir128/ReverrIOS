import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AppColors from '../../../Constaint/AppColors';
import { Data } from '../../../dummy-data/dummyData';

const YourLibrary = () => {
    return (
        <View>
            <View style={styles.Container}>
                <View style={styles.heading}>
                    <Text style={styles.text}>Your Library</Text>
                    <Icon name='arrow-right' size={20} color={AppColors.FontsColor} />
                </View>
                <View>
                    <FlatList
                        data={Data}
                        horizontal
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={0.6} style={styles.Card}>
                                <Image style={styles.dp} source={{ uri: item.image }} />
                                <Text style={styles.Name}>{item.name}</Text>
                                <Text style={styles.skills}>{item.skills}</Text>
                            </TouchableOpacity>
                        )
                        } />
                </View>
            </View>
        </View>
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
        marginHorizontal: -180,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    text: {
        color: AppColors.FontsColor,
        fontFamily: "Poppins-Regular",
        fontSize: 16
    },
    Card: {
        backgroundColor: AppColors.CardColor,
        padding: 5,
        paddingTop: 10,
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'

    },
    dp: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    Name: {
        color: AppColors.FontsColor,
        width: '50%',
        fontFamily: "Poppins-Regular",
        fontSize: 14,
        paddingTop: 7
    },
    skills: {
        color: AppColors.FontsColor,
        fontFamily: "Poppins-Regular",
        fontSize: 11,

    }
});
export default YourLibrary;
