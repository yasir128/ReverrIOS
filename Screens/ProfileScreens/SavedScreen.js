import {View, Text, StyleSheet} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import AppColors from '../../Constaint/AppColors';
import {AllMentors} from '../../dummy-data/AllMentors';
import SavedCard from '../../Componants/ProfileScreenComponents/SavedCard';
import Backbtn from '../../Componants/Backbtn';
import {useNavigation} from '@react-navigation/native';
import {courseData} from '../../dummy-data/courseData';
import { UserContext, SavedArticleContext, SavedPostContext } from '../../App';
import firestore from '@react-native-firebase/firestore';

const SavedScreen = (props) => {
  const navigation = useNavigation();
  const {state,dispatch} = useContext(UserContext);
  const {savedarticlestate,savedarticledispatch} = useContext(SavedArticleContext);
  const {savedpoststate, savedpostdispatch} = useContext(SavedPostContext);
  var Mentors =[];
  var Books =[];
  var Courses =[];


  return state&&(
    <View style={styles.screen}>
      <View
        style={{
          marginStart: '5%',
          alignItems: 'center',
          paddingBottom: '5%',
          flexDirection: 'row',
        }}>
        <Backbtn
          IconSize={30}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.text}>Saved</Text>
      </View>
      <SavedCard Title="Your Favourite Mentor" SavedList={Mentors} name="Mentor" />
      <SavedCard Title="Saved Posts" SavedList={savedpoststate} name="Post" />
      <SavedCard Title="Saved courses" SavedList={Courses} name="Course" />
      <SavedCard Title="Saved Articles" SavedList={savedarticlestate} name="Article" />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  text: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-SemiBold',
    marginStart: '5%',
  },
});
export default SavedScreen;
