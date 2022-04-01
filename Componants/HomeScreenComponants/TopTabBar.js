import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import AppColors from '../../Constaint/AppColors';

const TopTabBar = props => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={props.onPressNews}
        style={[
          styles.Progress,
          {
            backgroundColor: props.news
              ? AppColors.ActiveColor
              : AppColors.BtnClr,
          },
        ]}>
        <Text style={styles.text}>News</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.onPressArticle}
        style={[
          styles.Progress,
          {
            backgroundColor: props.article
              ? AppColors.ActiveColor
              : AppColors.BtnClr,
          },
        ]}>
        <Text style={styles.text}>Article</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: AppColors.BtnClr,
    height: 40,
    marginTop: -135,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
    width: '100%',
    borderRadius: 15,
  },
  Progress: {
    height: 25,
    width: '22.5%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    backgroundColor: AppColors.ActiveColor,
  },
  text: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
  },
});

export default TopTabBar;
