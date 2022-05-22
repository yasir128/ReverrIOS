import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import HeaderLayout from './HomeScreens/HeaderLayout';
import {individualNoti} from '../dummy-data/notificationData';
import LinearGradient from 'react-native-linear-gradient';
import AppColors from '../Constaint/AppColors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Backbtn from '../Componants/Backbtn';
import {useNavigation} from '@react-navigation/native';

const Notification = () => {
  const navigation = useNavigation();
  return (
    <HeaderLayout>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Backbtn
            IconSize={30}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={styles.noti}>Notification</Text>
        </View>
        {individualNoti && individualNoti.length > 0 && (
          <FlatList
            data={individualNoti}
            renderItem={({item}, index) => (
              <TouchableOpacity>
                <LinearGradient
                  colors={[AppColors.primarycolor, '#012437']}
                  start={{x: 0, y: 1.3}}
                  end={{x: 1, y: 0.5}}
                  style={styles.card}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subText}>{item.subtext}</Text>
                    <Text style={styles.ago}>{item.createdAt}</Text>
                  </View>
                  <TouchableOpacity style={{paddingRight: '5%'}}>
                    <Icon name="times" size={22} color={AppColors.FontsColor} />
                  </TouchableOpacity>
                </LinearGradient>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </HeaderLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '3%',
    borderRadius: 7,
  },
  noti: {
    color: AppColors.FontsColor,
    paddingHorizontal: '5%',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
  },
  card: {
    marginVertical: '2%',
    marginTop: '3%',
    alignItems: 'center',
    overflow: 'hidden',
    paddingVertical: '1%',
    borderRadius: 7,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  subText: {
    color: AppColors.infoFonts,
    paddingHorizontal: '10%',
    paddingRight: '4%',
    fontFamily: 'Poppins-Regular',
    paddingBottom: '1%',
  },
  title: {
    color: AppColors.FontsColor,
    paddingHorizontal: '5%',
    fontFamily: 'Poppins-Regular',
  },
  ago: {
    color: AppColors.infoFonts,
    paddingHorizontal: '10%',
    fontFamily: 'Poppins-Regular',
  },
});
export default Notification;
