import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionic from 'react-native-vector-icons/Ionicons';

const Header = props => {
  return (
    <View>
      <View style={styles.Container}>
        <TouchableOpacity style={styles.dp} onPress={props.onPressDp}>
          {props.Dp ? (
            <Image
              style={{
                height: 40,
                width: 40,
                borderRadius: 200,
              }}
              source={require('../../assets/Images/dp.png')}
            />
          ) : (
            <Image
              style={{
                height: 40,
                width: 40,
                borderRadius: 200,
              }}
              source={{uri: props.DpUrl}}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.onPressCalander}
          style={styles.calender}>
          <Icon name="calendar-alt" size={22} color="black" />
        </TouchableOpacity>
        <View style={styles.logo}>
          <Image
            style={{
              height: 100,
              width: 100,
            }}
            source={require('../../assets/Images/logo.png')}
          />
        </View>
        <TouchableOpacity
          onPress={props.onPressNoti}
          style={styles.notification}>
          <Icon name="bell" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onPressChat} style={styles.chat}>
          <Ionic name="chatbox-ellipses-outline" size={22} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '30%',
  },
  dp: {
    marginStart: 10,
  },
  calender: {
    backgroundColor: 'white',
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
    marginStart: '8%',
  },
  logo: {
    marginStart: '6%',
  },
  notification: {
    backgroundColor: 'white',
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
    marginStart: '8%',
  },
  chat: {
    backgroundColor: 'white',
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
    marginStart: '8%',
  },
});

export default Header;
