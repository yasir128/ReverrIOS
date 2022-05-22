import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useContext} from 'react';
import HeaderLayout from '../Screens/HomeScreens/HeaderLayout';
import AppColors from '../Constaint/AppColors';
import LinearGradient from 'react-native-linear-gradient';
import CustomCard from '../Componants/CustomCard';
import {ChatContext} from '../App';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const Dashboard = () => {
  const learner = Trending;
  const {chatstate, chatdispatch} = useContext(ChatContext);
  return (
    <HeaderLayout>
      <View>
        <Text style={styles.header}>Dashboard</Text>
        <Text style={styles.listHeader}>Learner</Text>
        <View style={{paddingStart: '5%'}}>
          <FlatList
            data={chatstate}
            horizontal
            renderItem={({item}, index) => (
              <CustomCard
                key={index}
                image={item.image}
                name={item.name}
                skills={item.industry}
              />
            )}
          />
        </View>
        <View>
          <LinearGradient
            colors={[AppColors.primarycolor, '#012437']}
            start={{x: -0.7, y: 1.3}}
            end={{x: 1, y: 0.5}}
            style={styles.Container}>
            <TouchableOpacity>
              <Text
                style={[
                  styles.text,
                  {backgroundColor: true ? AppColors.ActiveColor : null},
                ]}>
                Payments
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </HeaderLayout>
  );
};
const styles = StyleSheet.create({
  header: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-SemiBold',
    marginStart: '3%',
    fontSize: 18,
  },
  listHeader: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    marginStart: '3%',
  },
  card: {
    paddingHorizontal: 3,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  dp: {
    width: Width / 5,
    borderRadius: 6,
    height: Height / 12,
  },
  name: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 4,
    fontSize: 13,
    marginTop: 3,
  },
  Skill: {
    color: AppColors.infoFonts,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 4,
    fontSize: 9,
  },
  Container: {
    width: '95%',
    height: Height / 20,
    flexDirection: 'row',
    paddingHorizontal: '15%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: '3%',
  },
  text: {
    color: AppColors.FontsColor,
    paddingVertical: '1.08%',
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: '10%',
    borderRadius: 5,
  },
});
export default Dashboard;
