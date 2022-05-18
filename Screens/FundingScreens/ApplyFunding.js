import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState, useContext} from 'react';
import AppColors from '../../Constaint/AppColors';
import Backbtn from '../../Componants/Backbtn';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomBtn from '../../Componants/CustomBtn';
import DocumentPicker, {types} from 'react-native-document-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {UserContext} from '../../App';

const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

const ApplyFunding = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const {state, dispatch} = useContext(UserContext);
  const [uriPath, seturiPath] = useState('');
  const handleDocumentSelection = async () => {
    try {
      const response = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
      });
      seturiPath(response);
    } catch (err) {
      alert(err);
    }
  };

  const submitHandler = () => {
    storage()
      .ref('FundingFiles/' + uriPath.name)
      .putFile(uriPath.uri)
      .then(async () => {
        var deckFile = await storage()
          .ref('FundingFiles/' + uriPath.name)
          .getDownloadURL();
        await firestore()
          .collection('Funding')
          .doc(state.email)
          .set({
            name: name,
            companyName: companyName,
            file: deckFile,
          })
          .then(() => {
            setName('');
            setCompanyName('');
            seturiPath('');
            alert('submited');
          });
      });
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <SafeAreaView style={styles.screen}>
        <View style={styles.header}>
          <Backbtn
            IconSize={30}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={styles.headerText}>Funding</Text>
        </View>
        <Image
          style={styles.img}
          source={require('../../assets/Images/funding.png')}
        />
        <View style={styles.form}>
          <Text style={[styles.title]}>Name</Text>
          <TextInput
            value={name}
            style={styles.input}
            onChangeText={e => {
              setName(e);
            }}
          />
          <Text style={styles.title}>Company Name</Text>
          <TextInput
            value={companyName}
            style={styles.input}
            onChangeText={e => {
              setCompanyName(e);
            }}
          />
          <Text style={styles.title}>Pitch deck</Text>
          <TouchableOpacity
            style={styles.deck}
            onPress={handleDocumentSelection}>
            <Icon name="upload" size={30} color={AppColors.infoFonts} />
          </TouchableOpacity>
          <Text style={{color: 'white'}}>{uriPath.name}</Text>
          <CustomBtn
            style={styles.btn}
            Title="Submit"
            onPress={submitHandler}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  headerText: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Bold',
    marginStart: '30%',
    fontSize: 18,
  },
  img: {
    width: Width / 2,
    height: Height / 4,
    alignSelf: 'center',
    marginTop: '15%',
  },
  form: {
    paddingHorizontal: '3%',
    marginTop: '-6%',
  },
  title: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
  input: {
    backgroundColor: AppColors.inputFieldColor,
    paddingVertical: 8,
    paddingStart: '3%',
    color: AppColors.FontsColor,
    borderRadius: 7,
    marginBottom: '7%',
    fontSize: 18,
  },
  deck: {
    backgroundColor: AppColors.inputFieldColor,
    paddingVertical: 7,
    alignItems: 'center',
    borderRadius: 7,
    paddingStart: '5%',
  },
  btn: {
    marginTop: '16%',
  },
});
export default ApplyFunding;
