import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AppColors from '../../../Constaint/AppColors';
import { Data } from '../../../dummy-data/dummyData';

const MentorListCard = (props) => {
    return (
        <TouchableOpacity style={styles.Container} activeOpacity={1} onPress={props.onPress} style={styles.Container}>
            <View style={{ flexDirection: 'row', borderRadius: 10, alignItems: 'center' }}>
                <Text style={styles.heading}>Today Popular</Text>
                <Icon name='arrow-right' style={{ marginStart: '40%' }} size={20} color={AppColors.FontsColor} />
            </View>
            <FlatList
                data={Data}
                horizontal
                renderItem={({ item }) => (
                    <View style={styles.Container2}>
                        <View style={styles.card}>
                            <Image style={{ width: 70, height: 80, borderRadius: 10 }} source={{ uri: item.image }} />
                            <Text style={styles.Name}>{item.name}</Text>
                            <Text style={styles.skills}>{item.skills}</Text>
                        </View>
                    </View>
                )}
            />
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        borderRadius: 10,
        marginVertical: 5,
        backgroundColor: AppColors.BtnClr
    },
    heading: {
        color: AppColors.FontsColor,
        fontFamily: 'Poppins-Regular',
        fontSize: 19,
        marginStart: '5%'
    },
    Container2: {
        height: "100%",
    },
    card: {
        width: 93,
        backgroundColor: AppColors.CardColor,
        marginHorizontal: 10,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10
    },
    Name: {
        color: AppColors.FontsColor,
        fontFamily: "Poppins-Regular",
        fontSize: 12,
        paddingHorizontal: 4
    },
    skills: {
        color: AppColors.FontsColor,
        fontFamily: "Poppins-Regular",
        fontSize: 8,

    }
});
export default MentorListCard;
