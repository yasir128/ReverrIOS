import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AppColors from '../../Constaint/AppColors';
import Backbtn from '../../Componants/Backbtn';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomBtn from '../../Componants/CustomBtn';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

// const schedulingData = [20, 21, 22, 23, 24, 25, 26, 27];
const times = [11, 12, 1, 2];

var montharr = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
var fulldayarr = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
var dayarr = ['S', 'M', 'T', 'W', 'Th', 'F', 'Sa'];

const CalanderApointment = (props) => {
  const dates =  props.route.params.dates;
  const [selectedDate, setSelectedDate] = useState(-1);
  const navigation = useNavigation();
  // console.log(dates);
  var dt = new Date();
  var today = dt.getDate();
  // console.log(today);
  var schedulingData = [today,today+1,today+2,today+3,today+4,today+5,today+6];

  var temp=[];
  var ans=[];
  for(var i=0; i<7; i++){
    if(i<dt.getDay()){
      temp.push(dayarr[i]);
    }else{
      ans.push(dayarr[i]);
    }
  }
  for(var i=0; i<temp.length; i++){
    ans.push(temp[i]);
  }

  // useEffect(() => {}, [selectedDate]);

  const submitHandler = ()=>{
    
    var date = schedulingData[selectedDate];
    var time;

    
  }
  return (
    <View style={styles.screen}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Backbtn
          IconSize={30}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.headerTitle}>New Apointment</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: '5%',
          marginTop: '8%',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{color: 'gray', fontSize: 30, fontFamily: 'Poppins-Bold'}}>
            {today}
          </Text>
          <View style={{marginStart: '5%'}}>
            <Text
              style={{color: AppColors.BtnClr, fontFamily: 'Poppins-Regular'}}>
              {fulldayarr[dt.getDay()]}
            </Text>
            <Text
              style={{color: AppColors.BtnClr, fontFamily: 'Poppins-Regular'}}>
              {montharr[dt.getMonth()]} {dt.getFullYear()}
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Icon name="chevron-down" size={22} color={AppColors.BtnClr} />
        </TouchableOpacity>
        <CustomBtn Title="Today" style={styles.btn} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: '5%',
          paddingVertical: '7%',
          borderBottomWidth: 1,

          borderBottomColor: AppColors.FontsColor,
        }}>
        {schedulingData &&
          schedulingData.length > 0 &&
          schedulingData.map((item, index) => (
            <View key={index}>
              {index == 0 && (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedDate(index);
                  }}
                  style={{
                    backgroundColor: selectedDate == 0 ? AppColors.buttonFont:null,
                    paddingHorizontal: 8,
                    borderRadius: 6,
                  }}>
                  <Text style={styles.daysName}>{ans[index]}</Text>
                  <Text style={styles.date}>{item}</Text>
                </TouchableOpacity>
              )}
              {index == 1 && (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedDate(index);
                  }}
                  style={{
                    backgroundColor: selectedDate == 1 ? AppColors.buttonFont:null,
                    paddingHorizontal: 8,
                    borderRadius: 6,
                  }}>
                  <Text style={styles.daysName}>{ans[index]}</Text>
                  <Text style={styles.date}>{item}</Text>
                </TouchableOpacity>
              )}
              {index == 2 && (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedDate(index);
                  }}
                  style={{
                    backgroundColor: selectedDate == 2 ? AppColors.buttonFont:null,
                    paddingHorizontal: 8,
                    borderRadius: 6,
                  }}>
                  <Text style={styles.daysName}>{ans[index]}</Text>
                  <Text style={styles.date}>{item}</Text>
                </TouchableOpacity>
              )}
              {index == 3 && (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedDate(index);
                  }}
                  style={{
                    backgroundColor: selectedDate == 3 ? AppColors.buttonFont:null,
                    paddingHorizontal: 8,
                    borderRadius: 6,
                  }}>
                  <Text style={styles.daysName}>{ans[index]}</Text>
                  <Text style={styles.date}>{item}</Text>
                </TouchableOpacity>
              )}
              {index == 4 && (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedDate(index);
                  }}
                  style={{
                    backgroundColor: selectedDate == 4 ? AppColors.buttonFont:null,
                    paddingHorizontal: 8,
                    borderRadius: 6,
                  }}>
                  <Text style={styles.daysName}>{ans[index]}</Text>
                  <Text style={styles.date}>{item}</Text>
                </TouchableOpacity>
              )}
              {index == 5 && (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedDate(index);
                  }}
                  style={{
                    backgroundColor: selectedDate == 5 ? AppColors.buttonFont:null,
                    paddingHorizontal: 8,
                    borderRadius: 6,
                  }}>
                  <Text style={styles.daysName}>{ans[index]}</Text>
                  <Text style={styles.date}>{item}</Text>
                </TouchableOpacity>
              )}
              {index == 6 && (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedDate(index);
                  }}
                  style={{
                    backgroundColor: selectedDate == 6 ? AppColors.buttonFont:null,
                    paddingHorizontal: 8,
                    borderRadius: 6,
                  }}>
                  <Text style={styles.daysName}>{ans[index]}</Text>
                  <Text style={styles.date}>{item}</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.daysName}>Times</Text>
        <View style={styles.bottonContainer}>
          {times &&
            times.length > 0 &&
            times.map((item, index) => (
              <CustomBtn
                Title={index == 0 ? `${item}:00 am` : `${item}:00 pm`}
                style={styles.botton}
              />
            ))}
        </View>
        <View style={styles.bottonContainer}>
          {times &&
            times.length > 0 &&
            times.map((item, index) => (
              <CustomBtn
                Title={index == 0 ? `${item}:00 am` : `${item}:00 pm`}
                style={styles.botton}
              />
            ))}
        </View>
        <View style={styles.bottonContainer}>
          {times &&
            times.length > 0 &&
            times.map((item, index) => (
              <CustomBtn
                Title={index == 0 ? `${item}:00 am` : `${item}:00 pm`}
                style={styles.botton}
              />
            ))}
        </View>
      </View>
      <CustomBtn
        Title="Proceed"
        style={{marginTop: '12%'}}
        TextStyle={{fontFamily: 'Poppins-Regular'}}
        onPress={()=>submitHandler()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  headerTitle: {
    color: AppColors.FontsColor,
    marginStart: '20%',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
  btn: {
    paddingHorizontal: '2%',
    width: Width / 4,
    paddingVertical: '1%',
  },
  daysName: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
  },
  date: {
    color: AppColors.CardColor,
    fontFamily: 'Poppins-SemiBold',
  },
  timeContainer: {
    marginTop: '8%',
    paddingHorizontal: '4%',
  },
  bottonContainer: {
    flexDirection: 'row',
    marginTop: '3%',
    justifyContent: 'space-between',
  },
  botton: {
    width: Width / 5,
    borderRadius: 8,
  },
});
export default CalanderApointment;
