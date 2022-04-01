import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../Componants/HomeScreenComponants/Header';
import AppColors from '../../Constaint/AppColors';
import {useNavigation} from '@react-navigation/native';
import TopTabBar from '../../Componants/HomeScreenComponants/TopTabBar';
import NewsScreen from './TopTabScreens/NewsScreen';
import ArticleScreen from './TopTabScreens/ArticleScreen';
import {homeScreenQuotes} from '../../utils/basicsFunctions';
import {GetUser} from '../../utils/fireBaseFunctions';
import {cardData} from '../../dummy-data/defaultHomeCardData';
import {AllMentors} from '../../dummy-data/AllMentors';
import HomeCard from '../../Componants/HomeScreenComponants/HomeCard';

const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;
const Home = () => {
  const [News, setNews] = useState(false);
  const [Article, setArticle] = useState(false);
  const [AllData, setAllData] = useState();
  const [qoute, setQoute] = useState('loading...');
  const [authors, setAuthors] = useState('-null');

  const navigation = useNavigation();

  useEffect(() => {
    homeScreenQuotes(setQoute, setAuthors);
    GetUser(setAllData);
    // console.log(AllData.image);
  }, [qoute]);

  return (
    <View style={styles.screen}>
      <Header
        onPressDp={() => {
          navigation.navigate(AllData.userType, {Data: AllData});
        }}
        onPressCalander={() => {
          navigation.navigate('calander');
        }}
        onPressNoti={() => {
          console.log('Notification');
        }}
        onPressChat={() => {
          navigation.navigate('Chat');
        }}
        DpUrl={''}
      />
      <View style={styles.wlcmConatiner}>
        <View>
          <Text style={styles.welcmTxt}>Hii,Dhruv</Text>
          <Text style={styles.subText}>
            Today is a good day to learn something new !
          </Text>
        </View>
        <View style={styles.vector}>
          <Image source={require('../../assets/Images/HomeVector.png')} />
        </View>
      </View>
      <HomeCard />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  wlcmConatiner: {
    paddingTop: Height / 25,
    paddingStart: Width / 13,
  },
  welcmTxt: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
  },
  subText: {
    color: AppColors.infoFonts,
    fontFamily: 'Poppins-Regular',
    width: Width / 2,
  },
  vector: {
    position: 'absolute',
    marginStart: Width / 2,
  },
});

export default Home;
