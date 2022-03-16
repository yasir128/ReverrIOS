import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import Backbtn from '../../Componants/Backbtn';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppColors from '../../Constaint/AppColors';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
const MentorsProfile = props => {
  const [about, setabout] = useState(true);
  const [Exp, setExp] = useState(false);
  const [Plans, setPlans] = useState(false);
  return (
    <View style={styles.screen}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 5,
          backgroundColor: AppColors.inputFieldColor,
          justifyContent: 'space-between',
        }}>
        <Backbtn IconSize={40} onPress={props.onBack} />
        <Icon size={35} name="heart" color="red" />
      </View>
      <View style={{backgroundColor: AppColors.inputFieldColor}}>
        <Image
          style={{
            width: '95%',
            height: 280,
            marginTop: -15,
            alignSelf: 'center',
          }}
          source={require('../../assets/Images/mdp.png')}
        />
        <View style={styles.Card}>
          <Text style={styles.Name}>Neetan Sachdeva</Text>
          <Text style={styles.skill}>Market Research</Text>
        </View>
      </View>
      <View style={styles.details}>
        <View
          style={{
            backgroundColor: AppColors.BtnClr,
            paddingHorizontal: 16,
            paddingVertical: 6,
            borderRadius: 6,
            marginTop: Height / 13,
          }}>
          <Text style={styles.txt1}>Industry</Text>
          <Text style={styles.txt2}>Fintech</Text>
        </View>
        <View
          style={{
            backgroundColor: AppColors.BtnClr,
            paddingHorizontal: 16,
            paddingVertical: 6,
            marginStart: 10,
            borderRadius: 6,
            marginTop: Height / 13,
          }}>
          <Text style={styles.txt1}>Appoinment</Text>
          <Text style={styles.txt2}>$1000/Hr</Text>
        </View>
        <View
          style={{
            backgroundColor: AppColors.BtnClr,
            paddingHorizontal: 16,
            paddingVertical: 6,
            marginStart: 10,
            borderRadius: 6,
            marginTop: Height / 13,
          }}>
          <Text style={styles.txt1}>Rating</Text>
        </View>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity
          onPress={() => {
            setabout(true);
            setPlans(false);
            setExp(false);
          }}
          activeOpacity={0.7}
          style={[
            styles.about,
            {backgroundColor: about ? AppColors.FontsColor : null},
          ]}>
          <Text>About</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setExp(true);
            setabout(false);
            setPlans(false);
          }}
          activeOpacity={0.7}
          style={[
            styles.about,
            {backgroundColor: Exp ? AppColors.FontsColor : null},
          ]}>
          <Text>Experience</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setPlans(true);
            setabout(false);
            setExp(false);
          }}
          activeOpacity={0.7}
          style={[
            styles.about,
            {backgroundColor: Plans ? AppColors.FontsColor : null},
          ]}>
          <Text>Plans</Text>
        </TouchableOpacity>
      </View>
      {about ? (
        <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
          <Text
            style={{color: AppColors.infoFonts, fontFamily: 'Poppins-Regular'}}>
            Market Research Mentor is the terminal where all industrial,
            commercial and profitmaking venture will get the best research
            reports of the market in all sectors like automotive, electronics,
            pharmaceuticals and healthcare, food and beverages etc.
          </Text>
        </View>
      ) : Exp ? (
        <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
          <Text
            style={{color: AppColors.infoFonts, fontFamily: 'Poppins-Regular'}}>
            Experience
          </Text>
        </View>
      ) : Plans ? (
        <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
          <Text
            style={{color: AppColors.infoFonts, fontFamily: 'Poppins-Regular'}}>
            Plans
          </Text>
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    width: Width,
    height: Height / 1.28,
  },
  Card: {
    backgroundColor: AppColors.BtnClr,
    height: Height / 8,
    position: 'absolute',
    borderRadius: 40,
    alignItems: 'center',
    width: Width / 1.1,
    marginTop: Height / 4,
    marginStart: Width / 22,
  },
  Name: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 26,
    marginTop: 10,
  },
  skill: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txt1: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  txt2: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  menu: {
    backgroundColor: AppColors.CardColor,
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 8,
    marginTop: '3%',
    paddingHorizontal: 10,
  },
  about: {
    backgroundColor: AppColors.FontsColor,
    paddingHorizontal: 25,
    borderRadius: 6,
    marginStart: 10,
    paddingVertical: 5,
  },
});
export default MentorsProfile;
