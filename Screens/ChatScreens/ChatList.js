import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useContext} from 'react';
import AppColors from '../../Constaint/AppColors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import HeaderLayout from '../HomeScreens/HeaderLayout';
import LinearGradient from 'react-native-linear-gradient';
import App, {ChatContext, UserContext} from '../../App';
import {CreateMessagePath} from '../../utils/fireBaseFunctions';
import CustomCard from '../../Componants/CustomCard';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const ChatList = () => {
  const navigation = useNavigation();
  const {state, dispatch} = useContext(UserContext);
  const {chatstate, chatdispatch} = useContext(ChatContext);
  // console.log(chatstate.email, 'chatlist');

  return (
    <HeaderLayout>
      <View style={styles.screen}>
        {/* <Text style={styles.headerText}>Message</Text> */}
        <Text style={[styles.headerText]}>
          {state && state.userType == 'Mentor' ? 'Learners' : 'Mentors'}
        </Text>

        <View style={{flexDirection: 'row', marginTop: '1%'}}>
          {chatstate !== undefined && chatstate.length > 0 ? (
            chatstate.map(item => (
              <CustomCard
                onPress={() => {
                  navigation.navigate('ViewIndividual', {
                    userData: item,
                  });
                }}
                image={item.image}
                name={item.name}
                skills={item.skills}
              />
            ))
          ) : (
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                width: '100%',
                fontSize: 18,
              }}>
              You don't have any mentors curently 😐
            </Text>
          )}
        </View>
        <LinearGradient
          style={styles.menu}
          colors={[AppColors.primarycolor, '#012437']}
          start={{x: -0.3, y: 1.8}}
          end={{x: 1, y: 1.5}}>
          <TouchableOpacity style={styles.chat}>
            <Text style={styles.btntxt}>Chats</Text>
          </TouchableOpacity>
        </LinearGradient>
        <View style={{paddingHorizontal: '2%', marginTop: '3%'}}>
          {chatstate !== undefined && chatstate.length > 0 ? (
            chatstate.map((item, index) => (
              <LinearGradient
                key={index}
                colors={[AppColors.primarycolor, '#012437']}
                start={{x: -1, y: 1.3}}
                end={{x: 1, y: 0.5}}
                style={{borderRadius: 7, height: '76%'}}>
                <TouchableOpacity
                  key={item.email}
                  onPress={() => {
                    CreateMessagePath(state, item);
                    alert('path created');
                    navigation.navigate('ChatBox', {
                      userData: item,
                    });
                  }}
                  style={styles.chatList}
                  activeOpacity={0.7}>
                  <Image style={styles.mentorDp} source={{uri: item.image}} />
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.skill}>{item.industry}</Text>
                </TouchableOpacity>
              </LinearGradient>
            ))
          ) : (
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                width: '100%',
                fontSize: 18,
              }}>
              You don't have any mentors curently 😐
            </Text>
          )}
          <TouchableOpacity style={styles.add}>
            <Icon name="plus-circle" size={62} color={AppColors.infoFonts} />
          </TouchableOpacity>
        </View>
      </View>
    </HeaderLayout>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  AppBar: {
    flexDirection: 'row',
    paddingTop: '2%',
  },
  headerText: {
    width: '100%',
    alignSelf: 'center',
    paddingStart: '4%',
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
  mentorDp: {
    width: Width / 6.5,
    height: Height / 14,
    borderRadius: 200,
  },
  name: {
    fontFamily: 'Poppins-Regular',
    color: AppColors.FontsColor,
    marginStart: '4%',
  },
  skill: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: AppColors.CardColor,
  },
  menu: {
    marginTop: '2%',
    width: '95%',
    marginStart: '3%',
    elevation: 5,
    borderRadius: 8,
    marginEnd: '3%',
    height: 40,
  },
  chat: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '75%',
    borderRadius: 6,
    marginVertical: 5,
    backgroundColor: AppColors.ActiveColor,
    marginHorizontal: Width / 2.7,
  },
  btntxt: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
  },
  chatList: {
    flexDirection: 'row',
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
    paddingHorizontal: '3%',
    paddingVertical: '1%',
    marginVertical: 7,
  },
  add: {
    bottom: '20%',
    marginStart: Width / 1.3,
    opacity: 0.2,
  },
});

export default ChatList;
