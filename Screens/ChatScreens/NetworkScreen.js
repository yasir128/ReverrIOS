import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AppColors from '../../Constaint/AppColors';
import { DiscoverData } from '../../dummy-data/DiscoverData'

const NetworkScreen = () => {
    return (
        <View style={styles.Conatainer}>
            <FlatList
                data={DiscoverData}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.Items}>
                        <Image style={styles.dp} source={{ uri: item.image }} />
                        <View style={styles.details}>
                            <Text style={styles.Name}>{item.name}</Text>
                            <Text style={styles.skills} >{item.skills}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    Conatainer: {
        backgroundColor: AppColors.CardColor,
        marginHorizontal: '2%',
        borderRadius: 8,
        marginTop: '2%',
    },
    Items: {
        flexDirection: 'row',
        padding: '3%'
    },
    dp: {
        width: 50,
        borderRadius: 100,
        height: 50
    },
    details: {
        alignItems: 'center',
        marginTop: '1%',
        marginStart: '2%'
    },
    Name: {
        color: AppColors.FontsColor,
        fontFamily: 'Poppins-Regular'
    },
    skills: {
        color: AppColors.infoFonts,
        fontFamily: 'Poppins-Regular',
        fontSize: 11,
    }
})

export default NetworkScreen