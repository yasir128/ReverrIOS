import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AppColors from '../../Constaint/AppColors';
import Backbtn from '../../Componants/Backbtn';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import CustomMenuBar from '../../Componants/CustomMenuBar';
import {postData} from '../../dummy-data/postData';
import CreatePostButton from '../../Componants/LearnComponents/CreatePostButton';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Room = () => {
  const [features, setFeatures] = useState(true);
  const [subs, setSubs] = useState(false);
  const navigation = useNavigation();
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
            marginStart: Width / 3.5,
            fontFamily: 'Poppins-SemiBold',
            fontSize: 21,
          }}>
          Room
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity>
          <LinearGradient
            colors={[AppColors.primarycolor, '#012437']}
            start={{x: 0, y: 1.3}}
            end={{x: 1, y: 0.5}}
            style={styles.btn}>
            <Icon name="users" size={20} color={AppColors.infoFonts} />
            <Text
              style={{
                color: AppColors.FontsColor,
                fontFamily: 'Poppins-Regular',
                fontSize: 12,
                left: 10,
              }}>
              Join a Group Session
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity>
          <LinearGradient
            colors={[AppColors.primarycolor, '#012437']}
            start={{x: 0, y: 1.3}}
            end={{x: 1, y: 0.5}}
            style={styles.btn}>
            <Icon name="people-arrows" size={20} color={AppColors.infoFonts} />
            <Text
              style={{
                color: AppColors.FontsColor,
                fontFamily: 'Poppins-Regular',
                fontSize: 12,
                left: 10,
              }}>
              Join a 1 V 1 Session
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <CustomMenuBar
        Item1="Featured"
        Item2="Discussion"
        active1={features}
        active2={subs}
        ClickOnItem1={() => {
          setFeatures(true);
          setSubs(false);
        }}
        ClickOnItem2={() => {
          setSubs(true);
          setFeatures(false);
        }}
      />
      <ScrollView>
        {postData &&
          postData.length > 0 &&
          postData.map((item, index) => (
            <View
              key={index}
              style={{paddingHorizontal: '4%', marginVertical: '5%'}}>
              <View style={styles.creatorDetails}>
                <Image style={styles.dp} source={{uri: item.dp}} />
                <View style={{marginStart: '5%'}}>
                  <Text style={styles.name}>{item.postCreator}</Text>
                  <Text style={styles.company}>{item.creatorCompany}</Text>
                </View>
              </View>
              <View style={{paddingVertical: '3%'}}>
                <Text style={styles.details}>{item.details}</Text>
                <Image style={styles.image} source={{uri: item.image}} />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: '2%',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="eye" size={22} color={AppColors.infoFonts} />
                  <Text style={[styles.company, {marginStart: '8%'}]}>
                    {item.Views} Views
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity>
                    <Icon name="heart" size={22} color={AppColors.infoFonts} />
                  </TouchableOpacity>
                  <Text style={[styles.company, {marginStart: '8%'}]}>
                    {item.likes} Likes
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity>
                    <Icon name="share" size={22} color={AppColors.infoFonts} />
                  </TouchableOpacity>
                  <Text style={[styles.company, {marginStart: '8%'}]}>
                    {item.share} Shares
                  </Text>
                </View>
              </View>
            </View>
          ))}
      </ScrollView>
      <CreatePostButton
        style={styles.createBtn}
        onPress={() => {
          navigation.navigate('CreatePost');
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
  header: {
    flexDirection: 'row',
  },
  btnContainer: {
    marginTop: '2.5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  btn: {
    flexDirection: 'row',
    paddingHorizontal: '4%',
    paddingVertical: '3%',
    borderRadius: 10,
  },
  creatorDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dp: {
    height: Height / 14,
    width: Width / 7,
    borderRadius: 56,
  },
  name: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
  },
  company: {
    color: AppColors.infoFonts,
    fontFamily: 'Poppins-Regular',
  },
  image: {
    width: '100%',
    height: Height / 4,
    marginTop: '2%',
    borderRadius: 10,
  },
  details: {
    color: AppColors.BtnClr,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  createBtn: {
    bottom: 20,
    right: 12,
  },
});
export default Room;
