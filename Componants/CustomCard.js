import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppColors from '../Constaint/AppColors';
import LinearGradient from 'react-native-linear-gradient';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const CustomCard = props => {
  return (
    <TouchableOpacity key={props.email+'i'} onPress={props.onPress}>
      <LinearGradient
        colors={[AppColors.primarycolor, '#012437']}
        start={{x: 0.4, y: 1.3}}
        end={{x: 1, y: 0.5}}
        style={styles.card}>
        <Image style={styles.dp} source={{uri: props.image}} />
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.Skill}>{props.skills}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  dp: {
    width: Width / 5,
    borderRadius: 6,
    height: Height / 12,
  },
  name: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 4,
    fontSize: 13,
    marginTop: 3,
  },
  Skill: {
    color: AppColors.infoFonts,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 4,
    fontSize: 9,
  },
});
export default CustomCard;
