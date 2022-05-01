import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons';
import AppColors from '../../Constaint/AppColors';
import CustomBtn from '../../Componants/CustomBtn';
import LinearGradient from 'react-native-linear-gradient';
import ModelView from '../../Componants/ModelView';
import {useNavigation} from '@react-navigation/native';
import {
  AddCameraImage,
  AddCameraVideo,
  AddGalleryImage,
  AddGalleryVideo,
} from '../../utils/fireBaseFunctions';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const CreatePost = () => {
  const [poupop, setPoupop] = useState(false);
  const [image, setImage] = useState(false);
  const [video, setVideo] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.cross}>
          <Icon name="times" size={18} color={AppColors.FontsColor} />
        </TouchableOpacity>
        <Text
          style={{
            color: AppColors.FontsColor,
            fontFamily: 'Poppins-Regular',
            fontSize: 18,
          }}>
          Ask question
        </Text>
        <CustomBtn Title="Post" style={styles.post} />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.card}>
          <View style={styles.profile}>
            <Image
              style={styles.dp}
              source={require('../../assets/Images/jatindp.png')}
            />
            <View style={{justifyContent: 'center', marginStart: '3%'}}>
              <Text style={styles.name}>Jatin khurana</Text>
              <Text style={styles.company}>Co-Founder (Fimple)</Text>
            </View>
          </View>
          <TextInput
            style={styles.msg}
            multiline={true}
            placeholder="What do you want to share?"
            numberOfLines={8}
            maxLength={150}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: '5%',
              marginTop: '50%',
            }}>
            <TouchableOpacity
              onPress={() => {
                setPoupop(true);
                setImage(true);
                setVideo(false);
              }}>
              <Icon name="camera" size={27} color={AppColors.FontsColor} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginStart: '5%'}}
              onPress={() => {
                setPoupop(true);
                setVideo(true);
                setImage(false);
              }}>
              <Icon name="video" size={27} color={AppColors.FontsColor} />
            </TouchableOpacity>
            <TouchableOpacity style={{marginStart: '5%'}}>
              <Icon2
                name="stats-chart"
                size={27}
                color={AppColors.FontsColor}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{marginStart: '5%'}}>
              <Icon2
                name="alert-circle"
                size={27}
                color={AppColors.FontsColor}
              />
            </TouchableOpacity>
          </View>
          <ModelView
            ShowModal={poupop}
            onRequestClose={() => {
              setPoupop(false);
            }}>
            <LinearGradient
              colors={[AppColors.primarycolor, '#012437']}
              start={{x: -0.7, y: 1.3}}
              end={{x: 1, y: 0.5}}
              style={styles.BottomPoupop}>
              <TouchableOpacity
                onPress={() => {
                  setPoupop(false);
                }}
                style={{marginStart: Width / 1.1, paddingVertical: '3%'}}>
                <Icon name="times" size={26} color={AppColors.FontsColor} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (image) {
                    AddCameraImage();
                  }
                  if (video) {
                    AddCameraVideo();
                  }
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: '8%',
                  marginTop: '5%',
                }}>
                <Icon name="camera" color={AppColors.FontsColor} size={25} />
                <Text style={[styles.name, {marginStart: '5%'}]}>
                  Open Camera
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (image) {
                    AddGalleryImage();
                  }
                  if (video) {
                    AddGalleryVideo();
                  }
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: '8%',
                  marginTop: '6%',
                }}>
                <Icon name="images" color={AppColors.FontsColor} size={25} />
                <Text style={[styles.name, {marginStart: '5%'}]}>
                  Select From Gallary
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </ModelView>
        </View>
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
    justifyContent: 'space-between',
    paddingHorizontal: '7%',
  },
  cross: {
    backgroundColor: AppColors.CardColor,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  post: {
    width: 90,
    paddingVertical: '1%',
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    paddingHorizontal: '2%',
    paddingTop: '5%',
    overflow: 'hidden',
  },
  card: {
    width: '100%',
    height: '85%',
    borderRadius: 12,
    backgroundColor: AppColors.CardColor,
  },
  profile: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    paddingVertical: '3%',
  },
  dp: {
    height: 60,
    width: 60,
  },
  name: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
  company: {
    color: AppColors.infoFonts,
    fontFamily: 'Poppins-Regular',
  },
  msg: {
    borderRadius: 7,
    marginHorizontal: '5%',
    fontSize: 20,
    paddingLeft: 12,
    height: 250,
    paddingRight: 10,
    lineHeight: 23,
    textAlignVertical: 'top',
  },
  BottomPoupop: {
    width: '100%',
    height: Height / 3.5,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: 'absolute',
    backgroundColor: 'red',
    bottom: 0,
  },
});
export default CreatePost;
