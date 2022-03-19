import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AppColors from '../../Constaint/AppColors';
import Backbtn from '../../Componants/Backbtn';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionic from 'react-native-vector-icons/Ionicons';
import TitleCard from '../../Componants/ProfileScreenComponents/TitleCard';
import AboutCard from '../../Componants/ProfileScreenComponents/AboutCard';
import {useNavigation} from '@react-navigation/native';
import FoundersCard from '../../Componants/ProfileScreenComponents/FoundersCard';

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
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={{width: '40%'}}>
          <Backbtn
            IconSize={40}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <Text
          style={{
            color: AppColors.FontsColor,
            fontFamily: 'Poppins-Regular',
            marginStart: Width / 3.3,
            fontSize: 22,
          }}>
          Profile
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.topIcons}>
          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Icon name="crown" size={20} color={AppColors.FontsColor} />
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
            <Ionic name="settings" size={22} color={AppColors.FontsColor} />
            <Text style={styles.text}>Setting</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: '5%'}}>
          <TitleCard firstText="Name" secoundText="Fimple" />
        </View>
        <View style={{height: '17%', marginTop: '4%'}}>
          <AboutCard
            title="About"
            description="Whether you are looking to learn finance, get mentored, or join investing communities, we provide a one-stop solution."
          />
        </View>
        <View style={{height: '5%'}}>
          <TitleCard firstText="Industry" secoundText="Finance" />
        </View>
        <FoundersCard title="Founders" />
        <View style={styles.CompanyDetails}>
          <Text style={styles.title}>Company Details</Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '3%',
              justifyContent: 'space-around',
            }}>
            <Text style={styles.txt}>Operation</Text>
            <Text style={styles.txt}>Members</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '5%',
              marginBottom: '8%',
              justifyContent: 'space-around',
            }}>
            <Text style={styles.txt}>Stage</Text>
            <Text style={styles.txt}>Location</Text>
          </View>
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
  topIcons: {
    flexDirection: 'row',
    paddingTop: '5%',
    marginHorizontal: '5%',
  },
  text: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
  CompanyDetails: {
    width: '100%',
    height: 'auto',
    backgroundColor: AppColors.CardColor,
    marginTop: '2%',
    borderRadius: 10,
  },
  title: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    marginStart: '3%',
    marginTop: '2%',
  },
  txt: {
    color: AppColors.infoFonts,
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
});

export default IndividuaProfile;
