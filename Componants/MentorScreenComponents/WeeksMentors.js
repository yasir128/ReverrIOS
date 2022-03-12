import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {Data} from '../../dummy-data/dummyData';
import AppColors from '../../Constaint/AppColors';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const WeeksMentors = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text
          style={{
            color: AppColors.FontsColor,
            fontFamily: 'Poppins-Regular',
            fontSize: 17,
            width: Width / 1.25,
          }}>
          Mentor of week
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
        data={Data}
        horizontal
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.6} style={styles.Card}>
            <Image style={styles.dp} source={{uri: item.image}} />
            <Text style={styles.Name}>{item.name}</Text>
            <Text style={styles.skills}>{item.skills}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Card: {
    backgroundColor: AppColors.CardColor,
    padding: 5,
    paddingTop: 10,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dp: {
    width: 90,
    height: 100,
    borderRadius: 10,
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

export default WeeksMentors;
