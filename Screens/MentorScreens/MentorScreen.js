import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import AppColors from '../../Constaint/AppColors';
import SearchBar from '../../Componants/SearchBar';
import MentorListCard from '../../Componants/HomeScreenComponants/ProgressScreenComponants/MentorListCard';
import WeeksMentors from '../../Componants/MentorScreenComponents/WeeksMentors';
import TrendingMentors from '../../Componants/MentorScreenComponents/TrendingMentors';
import MentorsCategories from '../../Componants/MentorScreenComponents/MentorsCategories';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
const MentorScreen = () => {
  return (
    <ScrollView style={styles.screen}>
      <View>
        <Text style={styles.Text1}>Find best</Text>
        <Text style={styles.Text2}>mentor</Text>
      </View>
      <SearchBar />
      <TrendingMentors />
      <WeeksMentors />
      <MentorsCategories />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  Text1: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    marginStart: '4%',
  },
  Text2: {
    color: AppColors.infoFonts,
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    marginTop: '-3%',
    marginStart: '4%',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',

    marginTop: '2%',
    alignItems: 'center',
  },
});

export default MentorScreen;
