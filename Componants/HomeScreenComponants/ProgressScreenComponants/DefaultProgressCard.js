import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import React from 'react';
import AppColors from '../../../Constaint/AppColors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { DiscoverData } from '../../../dummy-data/DiscoverData';

const DefaultProgressCard = () => {
    return (
        <TouchableOpacity>
            <View style={styles.Container}>
                <View style={styles.heading}>
                    <Text style={styles.text}>Discover Mentors</Text>
                    <Icon name='arrow-right' size={20} color={AppColors.FontsColor} />
                </View>
                <View>
                    <FlatList
                        data={DiscoverData}
                        horizontal
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={0.6} style={styles.Card}>
                                <Image style={styles.dp} source={{ uri: item.image }} />
                                <Text style={styles.Name}>{item.name}</Text>
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
        marginBottom: 20,
        backgroundColor: AppColors.BtnClr,
        elevation: 5
    },
    heading: {
        paddingTop: 5,
        marginHorizontal: -100,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    text: {
        color: AppColors.FontsColor,
        fontFamily: "Poppins-Regular",
        fontSize: 16
    },
    Card: {
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    dp: {
        width: "120%",
        height: "55%",
        borderRadius: 10
    },
    Name: {
        color: AppColors.FontsColor,
        width: '100%',
        fontFamily: "Poppins-Regular",
        fontSize: 10,
        paddingTop: 7
    },
});

export default DefaultProgressCard;
