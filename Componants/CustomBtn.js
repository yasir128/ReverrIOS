import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AppColors from '../Constaint/AppColors';
import LinearGradient from 'react-native-linear-gradient';

const CustomBtn = props => {
  return (
    <View style={styles.screen}>
      <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
        <LinearGradient
          colors={[AppColors.primarycolor, '#012437']}
          start={{x: 0, y: 1.3}}
          end={{x: 0, y: 0.5}}
          style={{...styles.Btn, ...props.style}}>
          <Text style={styles.txt}>{props.Title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
  },
  Btn: {
    borderRadius: 6,
    paddingHorizontal: '40%',
    paddingVertical: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontFamily: 'Poppins-SemiBold',
    color: AppColors.FontsColor,
    fontSize: 18,
  },
});

export default CustomBtn;
