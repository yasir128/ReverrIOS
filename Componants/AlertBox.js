import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomPopup from './CustomPopup';
import AppColors from '../Constaint/AppColors';
import Icon from 'react-native-vector-icons/Ionicons';
import ModelView from './ModelView';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const AlertBox = ({text}) => {
  const [popup, setPopup] = useState(true);
  return (
    <ModelView
      visible={popup}
      onRequestClose={() => {
        setPopup(false);
      }}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Alert</Text>
          <Text style={styles.desc}>{text}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setPopup(false);
              }}>
              <Text style={styles.btntxt}>Ok</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setPopup(false);
              }}>
              <Text style={styles.btntxt}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ModelView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  box: {
    height: Height / 4,
    width: '95%',
    borderRadius: 8,
    backgroundColor: AppColors.BtnClr,
  },
  text: {
    color: 'black',
    alignSelf: 'center',
    marginTop: '2%',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  desc: {
    color: 'black',
    alignSelf: 'center',
    marginTop: '5%',
    paddingHorizontal: '6%',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around',
    paddingHorizontal: '10%',
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: '10%',
    borderRadius: 8,
    paddingVertical: '2%',
  },
  btntxt: {
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
  },
});
export default AlertBox;
