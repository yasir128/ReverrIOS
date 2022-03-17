import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import AppColors from '../../Constaint/AppColors';
import Backbtn from '../../Componants/Backbtn';
import Icon from 'react-native-vector-icons/FontAwesome5';
import storage from '@react-native-firebase/storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Ionic from 'react-native-vector-icons/Ionicons';
import TitleCard from '../../Componants/ProfileScreenComponents/TitleCard';
import {useNavigation} from '@react-navigation/native';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
const Settings = props => {
  const useremail = props.route.params.email;
  const navigation = useNavigation();

  console.log(useremail);

  const StoreImage = async () => {
    // You can also use as a promise without 'callback':
    const result = await launchImageLibrary({
      mediaType: 'mixed',
    });
    console.log(result);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Backbtn
          IconSize={40}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text
          style={{
            color: AppColors.FontsColor,
            fontFamily: 'Poppins-Regular',
            marginStart: Width / 3.3,
            fontSize: 22,
          }}>
          Settings
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={{height: '5%', marginTop: '20%'}}>
          <TitleCard firstText="Edit profile" />
        </TouchableOpacity>
        <TouchableOpacity style={{height: '5%', marginTop: '5%'}}>
          <TitleCard firstText="Change password" />
        </TouchableOpacity>
        <TouchableOpacity style={{height: '5%', marginTop: '5%'}}>
          <TitleCard firstText="Terms and conditions" />
        </TouchableOpacity>
        <TouchableOpacity style={{height: '5%', marginTop: '5%'}}>
          <TitleCard firstText="Contact us" />
        </TouchableOpacity>
        <TouchableOpacity style={{height: '5%', marginTop: '5%'}}>
          <TitleCard firstText="Logout" />
        </TouchableOpacity>
      </View>
      <View style={styles.dp}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('../../assets/Images/profilepic.png')}
        />
      </View>
      <TouchableOpacity
        style={styles.camera}
        onPress={() => {
          StoreImage();
        }}>
        <Icon name="camera" size={15} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2%',
  },
  text: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    marginStart: '26%',
    fontSize: 25,
  },
  mainContainer: {
    backgroundColor: AppColors.BtnClr,
    height: Height / 1.45,
    marginVertical: Height / 9.8,
    paddingHorizontal: '2%',
    marginHorizontal: '2.5%',
    borderRadius: 10,
  },
  dp: {
    height: Height / 7.5,
    width: Width / 5.2,
    overflow: 'hidden',
    borderRadius: 200,
    marginStart: '35%',
    marginTop: '12%',
    position: 'absolute',
    backgroundColor: AppColors.CardColor,
  },
  camera: {
    position: 'absolute',
    backgroundColor: AppColors.infoFonts,
    padding: 5,
    marginTop: Height / 5.4,
    marginStart: Width / 1.7,
    borderRadius: 20,
  },
});

export default Settings;
