import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AppColors from '../../Constaint/AppColors';
import Backbtn from '../../Componants/Backbtn';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionic from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const IndividuaProfile = props => {
  const [defaultDp, setdefaultDp] = useState(true);
  const UserData = props.route.params.Data;
  const navigation = useNavigation();

  const finddp = () => {
    if (UserData.image != '') {
      setdefaultDp(false);
    }
  };

  useEffect(() => {
    finddp();
  }, [defaultDp]);
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.header}>
        <View style={{width: '40%'}}>
          <Backbtn
            IconSize={30}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <Text
          style={{
            color: AppColors.FontsColor,
            fontFamily: 'Poppins-Regular',
            marginStart: Width / 30,
            fontSize: 22,
          }}>
          Profile
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.topIcons}>
          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Icon name="star" size={25} color={AppColors.ActiveColor} />
            <Text style={styles.text}>Membership</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Setting', {
                data: UserData,
              });
            }}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginStart: Width / 1.83,
            }}>
            <Ionic
              name="settings-outline"
              size={28}
              color={AppColors.ActiveColor}
            />
            <Text style={styles.text}>Setting</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: '5%'}}>
          <Text style={[styles.text, {alignSelf: 'center', fontSize: 17}]}>
            {UserData && UserData.name}
          </Text>
        </View>
        <View
          style={{
            height: '17%',
            marginTop: '2%',
            borderBottomColor: AppColors.FontsColor,
            borderBottomWidth: 1,
          }}>
          <Text style={[styles.text, {fontSize: 18}]}>About</Text>
          <Text style={styles.about}>
            Whether you are looking to learn finance, get mentored, or join
            investing communities, we provide a one-stop solution.
          </Text>
        </View>
        <View
          style={{
            height: '9%',
            flexDirection: 'row',
            marginTop: '2%',
            alignItems: 'center',
            paddingBottom: '4%',
            justifyContent: 'space-between',
            borderBottomColor: AppColors.FontsColor,
            borderBottomWidth: 1,
          }}>
          <Text style={[styles.text, {fontSize: 18}]}>Industry</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={[styles.text, {fontSize: 18, paddingRight: '5%'}]}>
              finance
            </Text>
            <Icon
              name="angle-right"
              size={25}
              color={AppColors.FontsColor}
              style={{paddingRight: '2%', marginTop: '3%'}}
            />
          </View>
        </View>
        <View style={styles.CompanyDetails}>
          <Text style={[styles.text, {fontSize: 18}]}>Experience</Text>
          <Text style={[styles.txt, {width: Width / 2}]}>
            Product Designer -InnerBuddha Internship Dates EmployedJan 2021 –
            Aug 2021 Duration-8 mos LocationBengaluru, Karnataka, India{' '}
          </Text>
        </View>
        <View style={[styles.CompanyDetails, {height: Height / 9}]}>
          <Text style={[styles.text, {fontSize: 18}]}>Skills</Text>
          <Text style={[styles.txt, {width: Width / 2}]}>
            Design Research Rapid Prototyping User Interface Design
          </Text>
        </View>
        <View style={[styles.CompanyDetails, {height: Height / 9}]}>
          <Text style={[styles.text, {fontSize: 18}]}>Education</Text>
          <Text style={[styles.txt, {width: Width / 2}]}>
            Design Research Rapid Prototyping User Interface Design
          </Text>
        </View>
      </View>
      <View style={styles.dp}>
        {defaultDp ? (
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../../assets/Images/jatindp.png')}
          />
        ) : (
          <Image
            style={{width: '100%', height: '100%'}}
            source={{uri: UserData.image}}
          />
        )}
      </View>
    </ScrollView>
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
  topIcons: {
    flexDirection: 'row',
    paddingTop: '2%',
    marginHorizontal: '1%',
  },
  text: {
    color: AppColors.FontsColor,
    marginTop: Height / 82,
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
  },
  CompanyDetails: {
    width: '100%',
    height: Height / 7,
    marginTop: '2%',
    borderBottomColor: AppColors.FontsColor,
    borderBottomWidth: 1,
  },
  title: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    marginTop: '2%',
  },
  txt: {
    color: AppColors.infoFonts,
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
  about: {
    color: AppColors.infoFonts,
  },
});

export default IndividuaProfile;
