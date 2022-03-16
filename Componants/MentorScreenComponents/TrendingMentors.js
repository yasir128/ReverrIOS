import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Trending} from '../../dummy-data/TrendingMentorsData';
import AppColors from '../../Constaint/AppColors';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
const TrendingMentors = props => {
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
          Trending
        </Text>
        <TouchableOpacity onPress={props.onPress}>
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
        data={Trending}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.7} style={styles.conatiner}>
            <Image style={styles.img} source={{uri: item.image}} />
            <View style={styles.overlay}>
              <Text
                style={{
                  color: AppColors.FontsColor,
                  fontFamily: 'Poppins-Regular',
                }}>
                {item.skills}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    paddingHorizontal: 15,
    paddingTop: '5%',
    paddingBottom: 25,
    overflow: 'hidden',
  },
  img: {
    width: 200,
    borderRadius: 6,
    height: 120,
  },
  overlay: {
    height: Height / 25,
    marginTop: -33,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    // position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '2%',
    alignItems: 'center',
  },
});
export default TrendingMentors;
