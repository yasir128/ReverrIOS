import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {MentorsCategory} from '../../dummy-data/MentorsCategoriesData';
import AppColors from '../../Constaint/AppColors';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const MentorsCategories = () => {
  const [clmn, setclmn] = useState(2);
  return (
    <View>
      <View style={styles.container}>
        <Text
          style={{
            color: AppColors.FontsColor,
            fontSize: 17,
            fontFamily: 'Poppins-Regular',
            width: Width / 1.25,
          }}>
          Explore Categories
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: AppColors.FontsColor,
              fontFamily: 'Poppins-Regular',
            }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={MentorsCategory}
        numColumns={clmn}
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.6} style={styles.Card}>
            <Image style={styles.dp} source={{uri: item.image}} />
            <Text
              style={{
                marginStart: '6%',
                color: AppColors.FontsColor,
                fontFamily: 'Poppins-Regular',
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Card: {
    backgroundColor: AppColors.CardColor,
    width: Width / 2.23,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 5,
  },
  dp: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  Name: {
    color: AppColors.FontsColor,
    width: '50%',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    paddingTop: 7,
  },
  skills: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MentorsCategories;
