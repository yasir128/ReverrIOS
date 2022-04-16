import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AppColors from '../../Constaint/AppColors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AllMentors} from '../../dummy-data/AllMentors';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const SavedCard = props => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[AppColors.primarycolor, '#012437']}
        start={{x: -0.2, y: 1}}
        end={{x: 1, y: 0}}
        style={styles.Card}>
        <View style={styles.header}>
          <Text style={styles.txt}>{props.Title}</Text>
          <Icon
            name="long-arrow-right"
            size={24}
            color={AppColors.FontsColor}
          />
        </View>
        {props.SavedList && props.SavedList.length > 0 && (
          <FlatList
            horizontal
            data={props.SavedList}
            renderItem={({item}, index) => (
              <TouchableOpacity style={styles.listContainer}>
                <ImageBackground style={styles.img} source={{uri: item.image}}>
                  <View style={styles.overlay}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.skills}>{item.skills}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
        )}
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: '8%',
    paddingHorizontal: Width / 25,
  },
  Card: {
    borderRadius: Width / 42,
    paddingHorizontal: '2%',
  },
  header: {
    flexDirection: 'row',
    paddingTop: 6,
    paddingHorizontal: '3%',
    justifyContent: 'space-between',
  },
  txt: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-SemiBold',
  },
  listContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  img: {
    width: Width / 4,
    height: Height / 8,
    alignItems: 'center',
  },
  overlay: {
    width: '100%',
    marginTop: Height / 12,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  name: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  skills: {
    color: AppColors.infoFonts,
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
  },
});
export default SavedCard;
