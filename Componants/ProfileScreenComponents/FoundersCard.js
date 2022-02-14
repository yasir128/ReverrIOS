import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react';
import AppColors from '../../Constaint/AppColors';
import { Founders } from '../../dummy-data/Founders_Data';
import Icon from 'react-native-vector-icons/Ionicons';

const FoundersCard = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                data={Founders}
                renderItem={({ item }) => (
                    <View style={styles.Container}>
                        <Image style={{ height: 40, width: 40, borderRadius: 20, marginStart: '3%', }} source={{ uri: item.image }} />
                        <View style={{ marginStart: '3%', width: '70%' }}>
                            <Text style={styles.name}>{item.name}   </Text>
                            <Text style={styles.role}>{item.role}</Text>
                        </View>
                        <Icon name="logo-linkedin" size={20} color='white' />
                    </View>
                )}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: 'auto',
        marginTop: '10%',
        justifyContent: 'center',
        backgroundColor: AppColors.CardColor,
        borderRadius: 10
    },
    title: {
        color: AppColors.FontsColor,
        fontFamily: 'Poppins-Regular',
        marginStart: '3%',
        marginTop: '2%'
    },
    Container: {
        flexDirection: 'row',
        paddingVertical: '2%'

    },
    name: {
        color: AppColors.FontsColor,
        fontFamily: 'Poppins-Regular',
        width: '100%',
        fontSize: 13
    },
    role: {
        color: AppColors.infoFonts,
        fontFamily: 'Poppins-Regular',
        fontSize: 9
    }
});

export default FoundersCard