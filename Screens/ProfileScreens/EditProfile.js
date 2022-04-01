import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AppColors from '../../Constaint/AppColors';
import {AuthContext} from '../../Navigations/AuthProvider';
import Backbtn from '../../Componants/Backbtn';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ChangeDp} from '../../utils/fireBaseFunctions';
import TitleCard from '../../Componants/ProfileScreenComponents/TitleCard';
import {useNavigation} from '@react-navigation/native';
import EditCard from '../../Componants/ProfileScreenComponents/EditCard';
import CustomBtn from '../../Componants/CustomBtn';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const EditProfile = props => {
  const {user, logout} = React.useContext(AuthContext);
  const UserData = props.route.params.mydata;
  const [Name, setName] = useState(UserData.name);
  const [About, setAbout] = useState(UserData.about);
  const [Industry, setIndustry] = useState(UserData.industry);
  const [Experience, setExperience] = useState(UserData.experience);
  const [Skills, setSkills] = useState(UserData.skills);
  const [loading, setLoading] = useState(false);
  const [Education, setEducation] = useState(UserData.education);
  const [defaultdp, setdefaultdp] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    if (UserData.image != '') {
      setdefaultdp(false);
    }
  }, [defaultdp]);
  //console.log(UserData);

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
            marginStart: Width / 4.5,
            fontSize: 22,
          }}>
          Edit Profile
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <TextInput
          value={Name}
          style={styles.name}
          onChangeText={n => {
            setName(n);
          }}
        />
        <EditCard
          Title="About"
          onChangeText={a => {
            setAbout(a);
          }}
          value={About == '' ? 'Enter About' : About}
        />
        <TextInput
          value={Industry == '' ? 'Enter Your Industry' : Industry}
          style={[
            styles.name,
            {marginTop: Height / 90, color: AppColors.infoFonts},
          ]}
          onChangeText={i => {
            setIndustry(i);
          }}
        />
        <EditCard
          Title="Experience"
          onChangeText={e => {
            setExperience(e);
          }}
          value={Experience == '' ? 'Enter Experience' : Experience}
        />
        <EditCard
          Title="Skills"
          onChangeText={e => {
            setSkills(e);
          }}
          value={Skills == '' ? 'Enter Skills' : Skills}
        />
        <EditCard
          Title="Education"
          onChangeText={e => {
            setEducation(e);
          }}
          value={Education == '' ? 'Enter Education' : Education}
        />
        <CustomBtn
          Title="Save Changes"
          style={{backgroundColor: 'blue', marginTop: 15}}
        />
      </View>
      <View style={styles.dp}>
        {defaultdp ? (
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
      <ActivityIndicator
        animating={loading}
        style={styles.loader}
        size="large"
        color="white"
      />

      <TouchableOpacity
        style={styles.camera}
        onPress={() => {
          setLoading(true);
          ChangeDp(loading, setLoading);
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
    height: Height / 1.55,
    marginVertical: Height / 9.8,
    paddingHorizontal: '2%',
    marginHorizontal: '2.5%',
    borderRadius: 10,
  },
  dp: {
    height: Height / 8.9,
    width: Width / 8,
    overflow: 'hidden',
    borderRadius: 200,
    marginStart: '35%',
    marginTop: '15%',
    position: 'absolute',
    backgroundColor: AppColors.CardColor,
  },
  camera: {
    position: 'absolute',
    backgroundColor: AppColors.infoFonts,
    padding: 5,
    marginTop: Height / 5.2,
    marginStart: Width / 1.8,
    borderRadius: 20,
  },
  loader: {
    position: 'absolute',
    marginTop: Height / 8.2,
    marginStart: Width / 2.15,
  },
  name: {
    backgroundColor: AppColors.CardColor,
    height: Height / 24,
    paddingBottom: 4.5,
    fontFamily: 'Poppins-Regular',
    color: AppColors.infoFonts,
    paddingStart: 9,
    marginTop: Height / 13,
    borderRadius: 10,
    width: '99%',
  },
});

export default EditProfile;
