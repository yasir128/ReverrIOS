import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AppColors from '../../Constaint/AppColors';
import Backbtn from '../../Componants/Backbtn';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const ChatBox = props => {
  const userData = props.route.params.userData;
  const [message, setmessage] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [Recive, setRecive] = useState();
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  const navigation = useNavigation();

  const SendMessage = async () => {
    const email = auth().currentUser;
    firestore()
      .collection('Messages')
      .doc(email.email)
      .collection('YourMatches')
      .doc(userData.email)
      .update({
        messages: firestore.FieldValue.arrayUnion({
          msg: message,
          createdAt: date + '-' + month + '-' + year,
          sendBy: email.email,
        }),
      })
      .then(() => {
        firestore()
          .collection('Messages')
          .doc(userData.email)
          .collection('YourMatches')
          .doc(email.email)
          .update({
            messages: firestore.FieldValue.arrayUnion({
              msg: message,
              createdAt: date + '-' + month + '-' + year,
              sendBy: email.email,
            }),
          });
        setmessage(''), console.log('sent');
      });
  };
  const ReciveMessage = async () => {
    const email = await auth().currentUser;
    var userEmail = email.email;
    setuserEmail(userEmail);
    const Allmsg = await firestore()
      .collection('Messages')
      .doc(userEmail)
      .collection('YourMatches')
      .doc(userData.email)
      .get();
    setRecive(Allmsg._data.messages);

    console.log(Recive);
  };
  useEffect(() => {
    ReciveMessage();
  }, [Recive]);
  //console.log(userEmail);
  return (
    <LinearGradient
      style={styles.screen}
      colors={[AppColors.infoFonts, '#012437']}
      start={{x: 0.2, y: 1.1}}
      end={{x: 1.3, y: 0.6}}>
      <LinearGradient
        style={styles.AppBar}
        colors={[AppColors.infoFonts, AppColors.CardColor]}
        start={{x: -0, y: 1.3}}
        end={{x: 1, y: 0.5}}>
        <Backbtn
          style={styles.backbtn}
          IconSize={25}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Image style={styles.dp} source={{uri: userData.image}} />
        <Text style={styles.Name}>{userData.name}</Text>
        <TouchableOpacity>
          <Icon2
            name="phone-volume"
            size={20}
            color={AppColors.FontsColor}
            style={{transform: [{rotate: '-50deg'}]}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{marginStart: '12%'}}>
          <Icon2 name="ellipsis-v" size={20} color={AppColors.FontsColor} />
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.MessageInput}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={m => {
              setmessage(m);
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: AppColors.CardColor,
              padding: 5,
              borderRadius: 5,
            }}
            onPress={() => {
              SendMessage();
              //    console.log(userData.email);
            }}>
            <Icon name="send" color={AppColors.FontsColor} size={25} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: AppColors.CardColor,
            padding: 8,
            borderRadius: 5,
            marginStart: '3.5%',
          }}>
          <Icon2 name="camera" color={AppColors.FontsColor} size={23} />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={Recive}
          renderItem={({item}) => (
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                height: 'auto',
              }}>
              <Text
                style={{
                  color: item.sendBy == userEmail ? 'red' : 'yellow',
                  width: '30%',
                  justifyContent: 'center',
                  borderRadius: 5,
                  padding: 10,
                  marginTop: '2%',
                  backgroundColor: item.sendBy == userEmail ? 'gray' : 'gray',
                  marginStart: item.sendBy == userEmail ? '65%' : '2%',
                }}>
                {item.msg == '' ? null : item.msg}
              </Text>
            </View>
          )}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  AppBar: {
    backgroundColor: AppColors.CardColor,
    paddingVertical: '1.5%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dp: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginStart: '5%',
  },
  backbtn: {
    width: 30,
    height: 30,
  },
  Name: {
    width: Width / 2,
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Bold',
    marginStart: '6%',
  },
  MessageInput: {
    bottom: 5,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    position: 'absolute',
    width: '85%',
    height: 40,
    marginStart: '2%',
  },
  input: {
    paddingStart: 8,
    width: '88%',
    paddingVertical: 8,
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
});

export default ChatBox;
