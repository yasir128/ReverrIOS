import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useState, useContext} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons';
import AppColors from '../../Constaint/AppColors';
import CustomBtn from '../../Componants/CustomBtn';
import LinearGradient from 'react-native-linear-gradient';
import ModelView from '../../Componants/ModelView';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {
  AddCameraImage,
  AddCameraVideo,
  AddGalleryImage,
  AddGalleryVideo,
} from '../../utils/fireBaseFunctions';
import {UserContext} from '../../App';
import CustomPopup from '../../Componants/CustomPopup';
import BottomPopup from '../../Componants/BottomPopup';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const CreatePost = props => {
  const {state, dispatch} = useContext(UserContext);
  const [popup, setPopup] = useState(false);
  const [image, setImage] = useState(false);
  const [video, setVideo] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [text, setText] = useState('');
  const navigation = useNavigation();

  const {setPosts, fetchPosts2} = props.route.params;

  const submitPost = async () => {
    var post = {
      postedby: firestore().collection('Users').doc(state.email),
      image: imageUrl,
      comments: [],
      likes: [],
      text,
      createdat: firestore.Timestamp.fromDate(new Date()),
    };
    //  console.log('Post: ', post);

    await firestore()
      .collection('Posts')
      .add(post)
      .then(() => {
        setPosts([]);
        fetchPosts2();
        console.log('Post Added!');
        Alert.alert(
          'Post published!',
          'Your post has been published Successfully!',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed!'),
              style: 'cancel',
            },
            {
              text: 'okay',
              onPress: () => navigation.navigate('Room'),
            },
          ],
          {cancelable: false},
        );
      })
      .catch(error => {
        console.log(
          'Something went wrong with added post to firestore.',
          error,
        );
      });
  };
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
        <CustomBtn
          Title="Post"
          style={styles.post}
          onPress={() => submitPost()}
        />
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
            value={text}
            onChangeText={e => {
              setText(e);
            }}
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
                setPopup(true);
                setImage(true);
                setVideo(false);
              }}>
              <Icon name="camera" size={27} color={AppColors.FontsColor} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginStart: '5%'}}
              onPress={() => {
                setPopup(true);
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
        </View>
      </View>
      <BottomPopup
        visible={popup}
        handleOpen={() => {
          setPopup(true);
        }}
        handleClose={() => {
          setPopup(false);
        }}
        animationConfig={{
          speed: 14,
          bounciness: 4,
        }}
        containerStyle={{backgroundColor: 'rgba(0,0,0,0)'}}
        overlayColor="rgba(0,0,0,0.4)">
        <LinearGradient
          colors={[AppColors.primarycolor, '#012437']}
          start={{x: -0.7, y: 1.3}}
          end={{x: 1, y: 0.5}}
          style={styles.BottomPoupop}>
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
              marginTop: '15%',
            }}>
            <Icon name="camera" color={AppColors.FontsColor} size={25} />
            <Text style={[styles.name, {marginStart: '5%'}]}>Open Camera</Text>
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
              Select From Gallary
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </BottomPopup>
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
    borderRadius: 4,
    marginHorizontal: '5%',
    color: AppColors.FontsColor,
    fontSize: 20,
    paddingHorizontal: 9,
    fontFamily: 'Poppins-Regular',
    height: Height / 3,
    lineHeight: 23,
    textAlignVertical: 'top',
  },
  BottomPoupop: {
    width: '100%',
    height: Height / 4.5,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    bottom: 0,
  },
});
export default CreatePost;

/*<TouchableOpacity
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
    <Text style={[styles.name, {marginStart: '5%'}]}>Open Camera</Text>
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
  </TouchableOpacity>*/
