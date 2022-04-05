import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AppColors from '../../Constaint/AppColors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ShowCalander} from '../../utils/calanderFunctionality';

const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

const CalanderScreen = props => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [dayname, setDayname] = useState([]);
  useEffect(() => {
    ShowCalander(setMonth, setYear, setDayname);
  }, []);
  console.log(dayname);
  return (
    <View
      style={{
        width: '100%',
        height: Height / 2.6,
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
        backgroundColor: AppColors.poupopbg,
      }}>
      <TouchableOpacity onPress={props.onClose} style={styles.close}>
        <Icon name="times" size={25} color="black" />
      </TouchableOpacity>
      <View style={styles.header}>
        <TouchableOpacity style={styles.arrow}>
          <Icon name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.txt}>{month}</Text>
          <Text style={styles.txt}>{year}</Text>
        </View>
        <TouchableOpacity style={styles.arrow}>
          <Icon name="arrow-right" size={20} color="black" />
        </TouchableOpacity>
      </View>
      {/* <View>{dayname}</View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  close: {
    left: Width / 1.07,
    top: 2,
  },
  header: {
    flexDirection: 'row',
    width: Width,
    justifyContent: 'space-evenly',
  },
  arrow: {
    borderWidth: 2,
    borderColor: 'black',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 50,
  },
  txt: {
    color: 'black',
    marginEnd: 10,
    fontSize: 18,
    fontFamily: 'Poppins-semibold',
  },
});
export default CalanderScreen;
