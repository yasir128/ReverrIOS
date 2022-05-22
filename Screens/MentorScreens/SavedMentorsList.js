import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Backbtn from '../../Componants/Backbtn';
import AppColors from '../../Constaint/AppColors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const SavedMentorsList = props => {
  const navigation = useNavigation();
  // const mentorData = props.route.params.mentorData;
  const [listColumn, setListColumn] = useState(2);
  const mentorlist = props.route.params.mentors;

  return (
    <View style={styles.screen}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Backbtn
          IconSize={30}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.headerTitle}>Saved Mentors</Text>
      </View>
      <View>
        <FlatList
          data={mentorlist}
          numColumns={2}
          renderItem={({item}) => (
            <LinearGradient
              colors={[AppColors.primarycolor, '#012437']}
              start={{x: 0.4, y: 1.3}}
              end={{x: 1, y: 0.5}}
              style={styles.Card}>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => {
                  navigation.navigate('MentorsProfile', {
                    profileDetails: item,
                  });
                }}>
                <Image style={styles.Dp} source={{uri: item.image}} />
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.Name}>{item.name}</Text>
                  <Text style={styles.Skills}>{item.industry}</Text>
                </View>
                <View style={styles.rating}>
                  <Icon name="star" size={12} color={AppColors.infoFonts} />
                  <Icon
                    name="star"
                    size={12}
                    style={{marginStart: '3%'}}
                    color={AppColors.infoFonts}
                  />
                  <Icon
                    name="star"
                    size={12}
                    style={{marginStart: '3%'}}
                    color={AppColors.infoFonts}
                  />
                  <Icon
                    name="star"
                    size={12}
                    style={{marginStart: '3%'}}
                    color={AppColors.infoFonts}
                  />
                  <Icon
                    name="star"
                    size={12}
                    style={{marginStart: '3%'}}
                    color={AppColors.infoFonts}
                  />
                  <Text
                    style={{
                      color: AppColors.ActiveColor,
                      marginStart: '5%',
                    }}>
                    {item.reviews.length != 0
                      ? ' '
                      : item.reviews.length + ' Reviews'}
                  </Text>
                </View>
              </TouchableOpacity>
            </LinearGradient>
          )}
        />
      </View>
    </View>
    // </HeaderLayout>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  Header: {
    height: Height / 12,
    marginHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: '2%',
  },
  headerTitle: {
    color: AppColors.FontsColor,
    marginStart: '25%',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
  Card: {
    marginVertical: 10,
    width: Width / 2.18,
    marginHorizontal: '2%',
    borderRadius: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  Dp: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  container: {
    flexDirection: 'row',
  },
  Name: {
    color: AppColors.FontsColor,
    fontSize: 13,
    marginTop: '4%',
    fontFamily: 'Poppins-Regular',
  },
  Skills: {
    color: AppColors.infoFonts,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  schedule: {
    paddingHorizontal: Width / 50,
    paddingVertical: 5,
    marginVertical: '5%',
    flexDirection: 'row',
    borderColor: AppColors.FontsColor,
    borderWidth: 2,
    alignItems: 'center',
    borderRadius: 15,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default SavedMentorsList;
