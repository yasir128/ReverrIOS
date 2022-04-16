import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import HeaderLayout from '../Screens/HomeScreens/HeaderLayout';
import AppColors from '../Constaint/AppColors';
import {Trending} from '../dummy-data/TrendingMentorsData';
import LinearGradient from 'react-native-linear-gradient';
import CustomCard from '../Componants/CustomCard';
import App from '../App';
import CustomMenuBar from '../Componants/CustomMenuBar';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const Dashboard = () => {
  const learner = Trending;
  return (
    <HeaderLayout>
      <View>
        <Text style={styles.header}>Dashboard</Text>
        <Text style={styles.listHeader}>Learner</Text>
        <View style={{alignItems: 'center'}}>
          <FlatList
            data={learner}
            horizontal
            renderItem={({item}, index) => (
              <CustomCard
                key={index}
                image={item.image}
                name={item.name}
                skills={item.skills}
              />
            )}
          />
          <CustomMenuBar
            Item1="Chat"
            active1={true}
            itemStyle={styles.itemStyle}
          />
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
});
export default Dashboard;
