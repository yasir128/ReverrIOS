import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {notification} from '../dummy-data/notificationData';
import HeaderLayout from '../Screens/HomeScreens/HeaderLayout';
import AppColors from '../Constaint/AppColors';
import CustomBtn from '../Componants/CustomBtn';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const Notifications = () => {
  return (
    <HeaderLayout>
      <View>
        <Text style={styles.type}>New</Text>
        <View style={styles.main}>
          {notification &&
            notification.length > 0 &&
            notification.map((item, index) => (
              <View key={index} style={styles.container}>
                <Text style={styles.noti}>{item}</Text>
                <CustomBtn
                  style={styles.btn}
                  TextStyle={styles.btntxt}
                  Title="View session details"
                />
              </View>
            ))}
        </View>
      </View>
    </HeaderLayout>
  );
};
const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  type: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    marginStart: '5%',
  },
  container: {
    paddingVertical: '2%',
  },
  noti: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-thin',
    fontSize: 18,
  },
  btn: {
    marginTop: '2%',
    paddingVertical: '1%',
    paddingHorizontal: '5%',
  },
  btntxt: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Light',
    fontSize: 16,
  },
});
export default Notifications;
