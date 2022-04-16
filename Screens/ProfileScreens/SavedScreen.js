import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AppColors from '../../Constaint/AppColors';
import {AllMentors} from '../../dummy-data/AllMentors';
import SavedCard from '../../Componants/ProfileScreenComponents/SavedCard';
import Backbtn from '../../Componants/Backbtn';
import {useNavigation} from '@react-navigation/native';
import {courseData} from '../../dummy-data/courseData';

const SavedScreen = () => {
  const navigation = useNavigation();
  return (
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
      <SavedCard Title="Your Favourite Mentor" SavedList={AllMentors} />
      <SavedCard Title="Your Library" SavedList={courseData} />
      <SavedCard Title="Saved courses" SavedList={AllMentors} />
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
