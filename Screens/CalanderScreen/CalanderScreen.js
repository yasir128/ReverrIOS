import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AppColors from '../../Constaint/AppColors';

const CalanderScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>CalanderScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
});
export default CalanderScreen;
