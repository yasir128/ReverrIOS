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
import React, {useState, useEffect} from 'react';
import Backbtn from '../../Componants/Backbtn';
import AppColors from '../../Constaint/AppColors';
import SearchBar from '../../Componants/SearchBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GetAllMentors} from '../../utils/fireBaseFunctions';
import {useNavigation} from '@react-navigation/native';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const MentorsList = () => {
  const navigation = useNavigation();
  const [all, setAll] = useState();
  useEffect(() => {
    GetAllMentors(setAll);
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.Header}>
        <Backbtn
          IconSize={40}
          onPress={() => {
            navigation.goBack();
          }}
        />
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
          data={all}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.Card}
              onPress={() => {
                navigation.navigate('MentorsProfile', {
                  profileDetails: item,
                });
              }}>
              <View style={styles.container}>
                <View style={{marginStart: '2%', flexDirection: 'row'}}>
                  <Image
                    style={styles.Dp}
                    source={
                      item.image == ''
                        ? require('../../assets/Images/jatin.png')
                        : {uri: item.image}
                    }
                  />
                  <View>
                    <Text style={styles.Name}>{item.name}</Text>
                    <Text style={styles.Skills}>{item.skills}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.schedule}>
                  <Text style={{color: 'black'}}>Schedule</Text>
                </TouchableOpacity>
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
    flex: 1,
    backgroundColor: AppColors.primarycolor,
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
    fontSize: 19,
    width: 200,
    marginStart: '3%',
    fontFamily: 'Poppins-Regular',
  },
  Skills: {
    color: AppColors.infoFonts,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  schedule: {
    backgroundColor: AppColors.infoFonts,
    marginStart: '1%',
    width: 80,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
});
export default MentorsList;
