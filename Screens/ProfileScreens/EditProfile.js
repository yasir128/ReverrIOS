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
import React, {useState, useEffect, useContext} from 'react';
import AppColors from '../../Constaint/AppColors';
import {AuthContext} from '../../Navigations/AuthProvider';
import Backbtn from '../../Componants/Backbtn';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ChangeDp} from '../../utils/fireBaseFunctions';
import TitleCard from '../../Componants/ProfileScreenComponents/TitleCard';
import {useNavigation} from '@react-navigation/native';
import EditCard from '../../Componants/ProfileScreenComponents/EditCard';
import CustomBtn from '../../Componants/CustomBtn';
import { UserContext } from '../../App';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const EditProfile = () => {
  const {state,dispatch} = useContext(UserContext);
  const {user, logout} = React.useContext(AuthContext);

  const [Name, setName] = useState(state&&state.name);
  const [About, setAbout] = useState(state&&state.about);
  const [Industry, setIndustry] = useState(state&&state.industry);
  const [Experience, setExperience] = useState(state&&state.experience);
  const [Skills, setSkills] = useState(state&&state.skills);
  const [loading, setLoading] = useState(false);
  const [Education, setEducation] = useState(state&&state.education);
  
  const navigation = useNavigation();


  //console.log(UserData);

  const saveChanges = ()=>{
    // if(Name!=UserData.name){
  
    // } 
    // if(About!=UserData.about){
      
    // }
    // if(Industry!=UserData.industry){
      
    // }
    // if(Experience!=UserData.experience){
      
    // }
    // if(Skills!=UserData.skills){
      
    // }
    // if(Education!=UserData.education){
      
    // }
    const data = {
      name:Name,
      experience:Experience,
      skills:Skills,
      about:About,
      industry:Industry,
      education:Education
    }

    dispatch({type:"UPDATE",payload:data});
  }
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Backbtn
          IconSize={30}
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
          onPress={()=>saveChanges()}
          style={{backgroundColor: 'blue', marginTop: 15}}
        />
      </View>
      <View style={styles.dp}>
        
          <Image
            style={{width: '100%', height: '100%'}}
            source={{uri: state&&state.image}}
          />
       
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
