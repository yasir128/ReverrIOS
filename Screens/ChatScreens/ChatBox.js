import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import AppColors from '../../Constaint/AppColors';
import Backbtn from '../../Componants/Backbtn';
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChatBox = (props) => {

    const userData = props.route.params.userData;
    const [placeholder, setplaceholder] = useState("Enter Message")
    const navigation = useNavigation()
    console.log(userData);
    return (
        <View style={styles.screen}>
            <View style={styles.AppBar}>
                <Backbtn style={styles.backbtn} IconSize={25} onPress={() => { navigation.goBack() }} />
                <Image style={styles.dp} source={{ uri: userData.image }} />
                <Text style={styles.Name}>{userData.name}</Text>
                <TouchableOpacity style={{ marginStart: '12%' }}>
                    <Icon2 name='phone-volume' size={20} color={AppColors.FontsColor} style={{ transform: [{ rotate: '-50deg' }] }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginStart: '12%' }}>
                    <Icon2 name="ellipsis-v" size={20} color={AppColors.FontsColor} />
                </TouchableOpacity>
            </View>
            <View style={{ height: '100%' }}>
                <View style={styles.MessageInput}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput style={styles.input} value={placeholder} onFocus={() => { setplaceholder("") }} />
                        <TouchableOpacity style={{ backgroundColor: AppColors.CardColor, padding: 5, borderRadius: 5 }}>
                            <Icon name='send' color={AppColors.FontsColor} size={25} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: AppColors.CardColor, padding: 8, borderRadius: 5, marginStart: '2%' }}>
                        <Icon2 name='camera' color={AppColors.FontsColor} size={23} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: AppColors.primarycolor
    },
    AppBar: {
        backgroundColor: AppColors.CardColor,
        paddingVertical: '1.5%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    dp: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginStart: '5%'
    },
    backbtn: {
        width: 30,
        height: 30
    },
    Name: {
        color: AppColors.FontsColor,
        fontFamily: 'Poppins-Regular',
        marginStart: '3%'

    },
    MessageInput: {
        backgroundColor: 'black',
        position: 'absolute',
        top: '85%',
        alignItems: 'center',
        flexDirection: 'row',
        marginStart: '1%',
        borderRadius: 10,
        width: "85%"
    },
    input: {
        paddingStart: 8,
        width: '88%',
        paddingVertical: 8,
        color: AppColors.FontsColor,
        fontFamily: 'Poppins-Regular'
    }
})

export default ChatBox;