import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState, useContext} from 'react';
import Backbtn from '../Componants/Backbtn';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppColors from '../Constaint/AppColors';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import CustomBtn from '../Componants/CustomBtn';
import {UserContext} from '../App';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const Profile = props => {
  const {state, dispatch} = useContext(UserContext);
  const mentorData = state;
  const navigation = useNavigation();
  const [about, setAbout] = useState(true);
  const [exp, setExp] = useState(false);
  const [plan, setplan] = useState(false);

  // console.log(mentorData);
  return (
    <View style={styles.screen}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 5,
          justifyContent: 'space-between',
        }}>
        <Backbtn
          IconSize={30}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Icon size={27} name="heart" color="red" style={{marginRight: '8%'}} />
      </View>
      <View style={styles.dp}>
        <Image
          style={{
            width: 250,
            height: 250,
            alignSelf: 'center',
          }}
          source={
            mentorData.image == ''
              ? require('../assets/Images/mdp.png')
              : {uri: mentorData.image}
          }
        />
      </View>
      <LinearGradient
        colors={[AppColors.primarycolor, '#012437']}
        start={{x: 0, y: 1.3}}
        end={{x: 1, y: 0.5}}
        style={styles.Card}>
        <Text style={styles.Name}>{mentorData.name}</Text>
        <Text style={styles.skill}>
          {mentorData.skills == '' ? 'Not Avilable' : mentorData.skills}
        </Text>
      </LinearGradient>

      <View style={styles.details}>
        <LinearGradient
          colors={[AppColors.primarycolor, '#012437']}
          start={{x: 0, y: 1.3}}
          end={{x: 1, y: 0.5}}
          style={{
            paddingHorizontal: 16,
            paddingVertical: 6,
            borderRadius: 6,
          }}>
          <Text style={styles.txt1}>Industry</Text>
          <Text style={styles.txt2}>Fintech</Text>
        </LinearGradient>
        <LinearGradient
          colors={[AppColors.primarycolor, '#012437']}
          start={{x: 0, y: 1.3}}
          end={{x: 1, y: 0.5}}
          style={{
            paddingHorizontal: 16,
            paddingVertical: 6,
            marginStart: 10,
            borderRadius: 6,
          }}>
          <Text style={styles.txt1}>Appoinment</Text>
          <Text style={styles.txt2}>$1000/Hr</Text>
        </LinearGradient>
        <LinearGradient
          colors={[AppColors.primarycolor, '#012437']}
          start={{x: 0, y: 1.3}}
          end={{x: 1, y: 0.5}}
          style={{
            paddingHorizontal: 16,
            paddingVertical: 6,
            marginStart: 10,
            borderRadius: 6,
          }}>
          <Text style={styles.txt1}>Rating</Text>
        </LinearGradient>
      </View>
      <LinearGradient
        colors={[AppColors.primarycolor, '#012437']}
        start={{x: 0, y: 1.3}}
        end={{x: 1, y: 0.5}}
        style={styles.menu}>
        <TouchableOpacity
          onPress={() => {
            setAbout(true);
            setplan(false);
            setExp(false);
          }}
          activeOpacity={0.7}
          style={[
            styles.about,
            {backgroundColor: about ? AppColors.FontsColor : null},
          ]}>
          <Text style={{color: about ? 'black' : AppColors.FontsColor}}>
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setExp(true);
            setAbout(false);
            setplan(false);
          }}
          activeOpacity={0.7}
          style={[
            styles.about,
            {backgroundColor: exp ? AppColors.FontsColor : null},
          ]}>
          <Text style={{color: exp ? 'black' : AppColors.FontsColor}}>
            Experience
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setplan(true);
            setAbout(false);
            setExp(false);
          }}
          activeOpacity={0.7}
          style={[
            styles.about,
            {backgroundColor: plan ? AppColors.FontsColor : null},
          ]}>
          <Text style={{color: plan ? 'black' : AppColors.FontsColor}}>
            plan
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <Text style={styles.profiledetails}>
        {about ? 'about' : exp ? 'kdhkfd' : plan ? 'kdfhkdsjhfk' : null}
      </Text>
      <CustomBtn
        Title="Profile Settings"
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Settings');
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  Card: {
    position: 'absolute',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: '10%',
    paddingVertical: '1%',
    top: '40%',
    alignSelf: 'center',
  },
  dp: {
    borderRadius: 300,
    width: Width / 1.4,
    alignSelf: 'center',
    height: Height / 3,
  },
  Name: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 26,
  },
  skill: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
  details: {
    marginTop: '12%',
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
  profiledetails: {
    marginHorizontal: '5%',
    paddingHorizontal: '5%',
    paddingVertical: '3%',
    height: Height / 7,
    color: AppColors.infoFonts,
    fontFamily: 'Poppins-Regular',
  },
  btn: {
    paddingHorizontal: '25%',
  },
});
export default Profile;
