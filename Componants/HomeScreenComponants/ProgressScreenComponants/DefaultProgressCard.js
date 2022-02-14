import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import React from 'react';
import AppColors from '../../../Constaint/AppColors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { DiscoverData } from '../../../dummy-data/DiscoverData';

const DefaultProgressCard = () => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.card}>
            <View style={styles.heading}>
                <Text style={styles.text}>Discover Mentor</Text>
                <Icon name='arrow-right' size={20} color={AppColors.FontsColor} />
            </View>
            <FlatList
                horizontal
                data={DiscoverData}
                renderItem={({ item }) => (
                    <View style={styles.list}>
                        <Image style={{ width: 50, height: 50, borderRadius: 10 }} source={{ uri: item.image }} />
                        <Text style={styles.name}>{item.name}</Text>
                    </View>

                )}

            />

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: AppColors.BtnClr,
        width: "100%",
        height: "100%",
        borderRadius: 10,

    },
    heading: {
        paddingTop: 5,
        flexDirection: 'row',
    },
    text: {
        color: AppColors.FontsColor,
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        width: '85%',
        marginStart: '5%'
    },
    list: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        color: AppColors.FontsColor,
        fontFamily: 'Poppins-Regular',
        fontSize: 13
    }
});

export default DefaultProgressCard;
