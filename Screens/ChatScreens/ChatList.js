import { View, Text, StyleSheet, } from 'react-native';
import React, { useState } from 'react';
import AppColors from '../../Constaint/AppColors';
import SearchBar from '../../Componants/ChatScreenComponents/SearchBar';
import Backbtn from '../../Componants/Backbtn';
import { useNavigation } from '@react-navigation/native';
import MentorsList from '../../Componants/ChatScreenComponents/MentorsList';
import MenuBar from '../../Componants/ChatScreenComponents/MenuBar';
import MatchesScreen from './MatchesScreen';
import NetworkScreen from './NetworkScreen';


const ChatList = () => {

    const navigation = useNavigation()
    const [Matches, setMatches] = useState(true);
    const [Network, setNetwork] = useState(false)
    return (
        <View style={styles.screen}>
            <View style={styles.AppBar}>
                <Backbtn IconSize={40} onPress={() => { navigation.goBack() }} />
                <Text style={styles.headerText}>Message</Text>
            </View>
            <SearchBar />
            <View style={styles.Mentors}>
                <MentorsList />
            </View>
            <MenuBar Match={Matches} Net={Network}
                ClickOnNetwork={() => {
                    setNetwork(true);
                    setMatches(false);
                }}
                ClickOnMatches={() => {
                    setMatches(true);
                    setNetwork(false);
                }} />
            {
                Matches ? <MatchesScreen /> :
                    Network ? <NetworkScreen /> : null
            }
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: AppColors.primarycolor,
    },
    AppBar: {
        flexDirection: 'row',
        paddingTop: '2%'
    },
    headerText: {
        width: '100%',
        alignSelf: 'center',
        paddingStart: '24%',
        color: AppColors.FontsColor,
        fontFamily: 'Poppins-Regular',
        fontSize: 20
    },
    Mentors: {
        marginTop: '2%'

    },

})

export default ChatList;