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
import App from '../../App';
import CustomBtn from '../../Componants/CustomBtn';
import LinearGradient from 'react-native-linear-gradient';
import ModelView from '../../Componants/ModelView';
import {useNavigation} from '@react-navigation/native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const CreatePost = () => {
  const [bottomSlid, setBottomSlid] = useState(true);
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
        </View>
        <ModelView ShowModal={bottomSlid}>
          <LinearGradient
            colors={[AppColors.primarycolor, '#012437']}
            start={{x: 1.5, y: 1.3}}
            end={{x: 0, y: 0.5}}
            style={styles.BottomPoupop}>
            <TouchableOpacity
              onPress={() => setBottomSlid(false)}
              style={{
                height: 5,
                backgroundColor: AppColors.FontsColor,
                marginHorizontal: '25%',
                marginTop: '2%',
                borderRadius: 10,
              }}></TouchableOpacity>
            <View style={{justifyContent: 'center', marginTop: '7%'}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: '6%',
                  paddingVertical: '5%',
                }}>
                <Icon name="camera" size={22} color={AppColors.FontsColor} />
                <Text
                  style={{
                    color: AppColors.BtnClr,
                    fontFamily: 'Poppins-Regular',
                    marginStart: '2%',
                  }}>
                  Add a photo
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: '6%',
                  marginTop: '3%',
                }}>
                <Icon name="video" size={22} color={AppColors.FontsColor} />
                <Text
                  style={{
                    color: AppColors.BtnClr,
                    fontFamily: 'Poppins-Regular',
                    marginStart: '2%',
                  }}>
                  Take a video
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: '6%',
                  paddingVertical: '5%',
                  marginTop: '3%',
                }}>
                <Icon2
                  name="stats-chart"
                  size={22}
                  color={AppColors.FontsColor}
                />
                <Text
                  style={{
                    color: AppColors.BtnClr,
                    fontFamily: 'Poppins-Regular',
                    marginStart: '2%',
                  }}>
                  Create a poll
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: '6%',
                  marginTop: '3%',
                }}>
                <Icon2
                  name="alert-circle"
                  size={22}
                  color={AppColors.FontsColor}
                />
                <Text
                  style={{
                    color: AppColors.BtnClr,
                    fontFamily: 'Poppins-Regular',
                    marginStart: '2%',
                  }}>
                  Find an expert
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ModelView>
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
    height: '100%',
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
    height: 250,
    paddingRight: 10,
    lineHeight: 23,
    textAlignVertical: 'top',
  },
  BottomPoupop: {
    width: '100%',
    height: Height / 2.5,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: 'absolute',
    backgroundColor: 'red',
    bottom: 0,
  },
});
export default CreatePost;
