import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import HeaderLayout from '../Screens/HomeScreens/HeaderLayout';
import {UserContext} from '../App';
import AppColors from '../Constaint/AppColors';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const Home = () => {
  const {state, dispatch} = useContext(UserContext);
  const [upcoming, setUpcoming] = useState(true);
  const [previous, setPrevious] = useState(false);
  return (
    <HeaderLayout>
      <View style={styles.wlcmConatiner}>
        <View>
          <Text style={styles.welcmTxt}>Hi {state && state.name}</Text>
        </View>
        <View style={styles.topSection}>
          <TouchableOpacity
            onPress={() => {
              setUpcoming(true);
              setPrevious(false);
            }}
            style={styles.btn}>
            <Text
              style={{
                color: upcoming ? AppColors.ActiveColor : AppColors.FontsColor,
              }}>
              Upacoming
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPrevious(true);
              setUpcoming(false);
            }}
            style={styles.btn}>
            <Text
              style={{
                color: previous ? AppColors.ActiveColor : AppColors.FontsColor,
              }}>
              Previous
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </HeaderLayout>
  );
};
const styles = StyleSheet.create({
  wlcmConatiner: {
    alignItems: 'center',
  },
  welcmTxt: {
    textTransform: 'capitalize',
    color: 'white',
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
  },
  topSection: {
    marginTop: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '13%',
    paddingVertical: '3%',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderTopColor: AppColors.FontsColor,
    borderBottomColor: AppColors.FontsColor,
  },
  btn: {
    marginHorizontal: '10%',
  },
});
export default Home;
