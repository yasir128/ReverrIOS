import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Backbtn from '../../Componants/Backbtn';
import AppColors from '../../Constaint/AppColors';
import {useSelector} from 'react-redux';
import SearchBar from '../../Componants/SearchBar';
import {AllMentors} from '../../dummy-data/AllMentors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GetAllMentors} from '../../utils/fireBaseFunctions';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const MentorsList = ({onBack, onPress}) => {
  // const us = useSelector(state => state.ArticalReducer.Users);
  // console.log(us);
  return (
    <View style={styles.screen}>
      <View style={styles.Header}>
        <Backbtn IconSize={40} onPress={onBack} />
        <Text
          style={{
            color: AppColors.FontsColor,
            fontSize: 22,
            marginStart: Width / 4,
            fontFamily: 'Poppins-Regular',
          }}>
          Mentors
        </Text>
      </View>
      <SearchBar />
      <View>
        <FlatList
          data={AllMentors}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.Card} onPress={onPress}>
              <View style={styles.container}>
                <Image style={styles.Dp} source={{uri: item.image}} />
                <View style={{marginStart: '2%'}}>
                  <Text style={styles.Name}>{item.name}</Text>
                  <Text style={styles.Skills}>{item.skills}</Text>
                </View>
                <View style={styles.schedule}>
                  <Text style={{color: 'black'}}>Schedule</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginStart: '10%',
                  alignItems: 'center',
                }}>
                <Icon
                  name="star"
                  size={10}
                  color="white"
                  style={{marginStart: 5}}
                />
                <Icon
                  name="star"
                  size={10}
                  color="white"
                  style={{marginStart: 5}}
                />
                <Icon
                  name="star"
                  size={10}
                  color="white"
                  style={{marginStart: 5}}
                />
                <Icon
                  name="star"
                  size={10}
                  color="white"
                  style={{marginStart: 5}}
                />
                <Icon
                  name="star"
                  size={10}
                  color="white"
                  style={{marginStart: 5}}
                />
                <Text style={{fontSize: 12, marginStart: 10, color: 'blue'}}>
                  76 Reviews
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    marginStart: 10,
                    color: AppColors.infoFonts,
                  }}>
                  • 15 Years Experience
                </Text>
                <Icon
                  name="heart"
                  size={15}
                  color={AppColors.infoFonts}
                  style={{marginStart: 15}}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    height: Height,
    width: Width,
  },
  Header: {
    flexDirection: 'row',
    marginBottom: '2%',
  },
  Card: {
    backgroundColor: AppColors.CardColor,
    marginVertical: 10,
    marginHorizontal: '4%',
    borderRadius: 10,
    paddingVertical: 10,
    paddingStart: 10,
  },
  Dp: {
    width: 60,
    height: 60,
    borderRadius: 80,
  },
  container: {
    flexDirection: 'row',
  },
  Name: {
    color: AppColors.FontsColor,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  Skills: {
    color: AppColors.infoFonts,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  schedule: {
    backgroundColor: AppColors.infoFonts,
    marginStart: '9%',
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
});
export default MentorsList;
