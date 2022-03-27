import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AppColors from '../../Constaint/AppColors';
import SearchBar from '../../Componants/ChatScreenComponents/SearchBar';
import Backbtn from '../../Componants/Backbtn';
import {useNavigation} from '@react-navigation/native';
import {AllMentors} from '../../dummy-data/AllMentors';
import MentorsList from '../../Componants/ChatScreenComponents/MentorsList';
import {GetUser} from '../../utils/fireBaseFunctions';

const ChatList = () => {
  const navigation = useNavigation();
  const [Matches, setMatches] = useState(true);
  const [Network, setNetwork] = useState(false);
  const [UserData, setUserData] = useState();

  //   GetUser().then(e => {
  //     setUserData(e);
  //   });

  // console.log(UserData.mentors);
  return (
    <View style={styles.screen}>
      <View style={styles.AppBar}>
        <Backbtn
          IconSize={40}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.headerText}>Message</Text>
      </View>
      <SearchBar />
      <View style={styles.Mentors}>
        {/* {UserData.mentors === [] ? (
          <TouchableOpacity>
            <Text>Find Mentors</Text>
          </TouchableOpacity>
        ) : (
          <MentorsList YourMentors={AllMentors} />
        )} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  AppBar: {
    flexDirection: 'row',
    paddingTop: '2%',
  },
  headerText: {
    width: '100%',
    alignSelf: 'center',
    paddingStart: '24%',
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
  Mentors: {
    marginTop: '2%',
  },
});

export default ChatList;
