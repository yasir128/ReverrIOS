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
import Icon2 from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import CustomMenuBar from '../../Componants/CustomMenuBar';
import {postData} from '../../dummy-data/postData';
import CreatePostButton from '../../Componants/LearnComponents/CreatePostButton';
import {smallString} from '../../utils/helper';
import CustomModal from './CustomModal';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Room = () => {
  const [features, setFeatures] = useState(true);
  const [subs, setSubs] = useState(false);
  let popupRef = React.createRef();
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
      <ScrollView style={{marginTop: '5%'}}>
        {postData &&
          postData.length > 0 &&
          postData.map((item, index) => (
            <LinearGradient
              key={index}
              colors={[AppColors.primarycolor, '#012437']}
              start={{x: -3, y: 1.3}}
              end={{x: 3, y: 0.5}}
              style={styles.postCard}>
              <View style={styles.creatorDetails}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image style={styles.dp} source={{uri: item.dp}} />
                  <View style={{marginStart: '3%'}}>
                    <Text style={styles.name}>{item.postCreator}</Text>
                    <Text style={styles.company}>{item.creatorCompany}</Text>
                  </View>
                </View>
                <TouchableOpacity /* onPress={() => popupRef.onOpenModal()} */>
                  <Icon2
                    name="ellipsis-vertical"
                    size={22}
                    color={AppColors.FontsColor}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.postContainer}>
                {item.image != '' ? (
                  <Image style={styles.image} source={{uri: item.image}} />
                ) : null}
                {item.details != '' || item.details.length > 300 ? (
                  <View>
                    <Text style={styles.details}>
                      {smallString(item.details, 82)}
                    </Text>
                    <TouchableOpacity>
                      <Text style={{color: AppColors.BtnClr}}>Read More</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <Text style={styles.details}>{item.details}</Text>
                )}
              </View>
              <View style={styles.IconContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="heart" size={29} color={AppColors.FontsColor} />
                  <Text style={[styles.name, {marginStart: '8%'}]}>
                    {item.likes}
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="comment" size={29} color={AppColors.FontsColor} />
                  <Text style={[styles.name, {marginStart: '8%'}]}>
                    {item.comments}
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon
                    name="share-square"
                    size={29}
                    color={AppColors.FontsColor}
                  />
                  <Text style={[styles.name, {marginStart: '8%'}]}>
                    {item.share}
                  </Text>
                </View>
                {/* <CustomModal
                  ref={target => (popupRef = target)}
                  height={38}
                  onTouchOutside={() => popupRef.onCloseModal()}>
                  <TouchableOpacity>
                    <Text style={styles.modalText}>Add Members</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.modalText}>Delete Group</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.modalText}>View Members</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.modalText}>Privacy Policy</Text>
                  </TouchableOpacity>
                </CustomModal> */}
              </View>
            </LinearGradient>
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
  postCard: {
    marginTop: '4%',
    borderRadius: 20,
    marginHorizontal: '2%',
    paddingHorizontal: '3%',
    paddingVertical: '3%',
  },
  postContainer: {
    marginTop: 10,
    paddingVertical: '5%',
    borderTopColor: AppColors.FontsColor,
    borderTopWidth: 2,
    borderBottomColor: AppColors.FontsColor,
    borderBottomWidth: 2,
  },
  creatorDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    borderRadius: 10,
  },
  details: {
    marginTop: '3%',
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  createBtn: {
    bottom: 20,
    right: 12,
  },
  IconContainer: {
    flexDirection: 'row',
    paddingVertical: '2%',
  },
});
export default Room;
