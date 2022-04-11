import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import HomeCard from '../../Componants/HomeScreenComponants/HomeCard';
import TopTabBar from '../../Componants/HomeScreenComponants/TopTabBar';
import ArticleScreen from './TopTabScreens/ArticleScreen';
import NewsScreen from './TopTabScreens/NewsScreen';
import AppColors from '../../Constaint/AppColors';
import HeaderLayout from './HeaderLayout';
import { UserContext } from '../../App';

const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

const Dashboard = props => {
  const [news, setNews] = useState(false);
  const [article, setArticle] = useState(true);
  const {state, dispatch} = useContext(UserContext);

  return (
    <HeaderLayout>
      <ScrollView>
        <View style={styles.wlcmConatiner}>
          <View>
            <Text style={styles.welcmTxt}>Hii,{state&&state.name}</Text>
            <Text style={styles.subText}>
              Today is a good day to learn something new !
            </Text>
          </View>
          <View style={styles.vector}>
            <Image source={require('../../assets/Images/HomeVector.png')} />
          </View>
        </View>
        <HomeCard />
        <View style={styles.menu}>
          <TopTabBar
            news={news}
            article={article}
            onPressNews={() => {
              setNews(true);
              setArticle(false);
            }}
            onPressArticle={() => {
              setArticle(true);
              setNews(false);
            }}
          />
          <View />
          {article ? <ArticleScreen /> : news ? <NewsScreen /> : null}
        </View>
      </ScrollView>
    </HeaderLayout>
  );
};

const styles = StyleSheet.create({
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
    height: Height / 4,
    marginStart: Width / 2,
  },
  menu: {
    alignItems: 'center',
    marginTop: '4%',
  },
});

export default Dashboard;
