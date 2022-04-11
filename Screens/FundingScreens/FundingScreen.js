import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import AppColors from '../../Constaint/AppColors';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const FundingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.screen}>
      <Image source={require('../../assets/Images/funding.png')} />

      <LinearGradient
        colors={[AppColors.primarycolor, '#012437']}
        start={{x: 0, y: 1.3}}
        end={{x: 0, y: 0.5}}
        style={styles.card}>
        <Text style={styles.title}>Funding</Text>
        <Text style={styles.subtext}>
          Market Research Mentor is the terminal where all industrial,
          commercial and profitmaking venture will get the best research reports
          of the market in all sectors like automotive, electronics,
          pharmaceuticals and healthcare, food and beverages etc.
        </Text>
      </LinearGradient>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('Apply');
        }}>
        <LinearGradient
          colors={[AppColors.primarycolor, '#012437']}
          start={{x: 0, y: 1.3}}
          end={{x: 0, y: 0.5}}
          style={styles.button}>
          <Text style={styles.title}>Apply for Funding</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  title: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
  },
  card: {
    paddingVertical: '1%',
    paddingHorizontal: '2%',
    alignItems: 'center',
    marginHorizontal: '2%',
    borderRadius: 10,
  },
  subtext: {
    color: AppColors.infoFonts,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    paddingVertical: '6%',
    paddingHorizontal: '2%',
    alignItems: 'center',
    marginHorizontal: '2%',
    marginTop: '8%',
    borderRadius: 10,
  },
});

export default FundingScreen;
