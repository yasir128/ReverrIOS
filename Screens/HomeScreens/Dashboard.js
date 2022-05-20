import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useContext} from 'react';
import HomeCard from '../../Componants/HomeScreenComponants/HomeCard';
import TopTabBar from '../../Componants/HomeScreenComponants/TopTabBar';
import ArticleScreen from './TopTabScreens/ArticleScreen';
import NewsScreen from './TopTabScreens/NewsScreen';
import AppColors from '../../Constaint/AppColors';
import HeaderLayout from './HeaderLayout';
import {UserContext} from '../../App';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const Dashboard = props => {
  const [news, setNews] = useState(false);
  const [article, setArticle] = useState(true);
  const {state, dispatch} = useContext(UserContext);
  console.log(state);

  return state ? (
    <HeaderLayout>
      <ScrollView>
        <View style={styles.wlcmConatiner}>
          <View>
            <Text style={styles.welcmTxt}>Hi {state && state.name}</Text>
            <Text style={styles.subText}>
              Today is a good day to learn something new !
            </Text>
          </View>
          <View style={styles.vectorContainer}>
            <Image
              style={styles.vector}
              source={require('../../assets/Images/HomeVector.png')}
            />
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
  ) : (
    <View style={styles.Screen}>
      <View style={styles.container}>
        <Image
          style={styles.Logo}
          source={require('../../assets/Images/logo.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.logoText}>Reverr</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wlcmConatiner: {
    paddingTop: Height / 25,
    paddingStart: Width / 13,
  },
  welcmTxt: {
    textTransform: 'capitalize',
    color: 'white',
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
  },
  subText: {
    color: AppColors.infoFonts,
    fontFamily: 'Poppins-Regular',
    width: Width / 2,
  },
  vectorContainer: {
    position: 'absolute',
    zIndex: 2,
    width: 180,
    height: Height > 684 ? Height / 4 : Height / 4,
    marginStart: Width / 1.6,
  },
  vector: {
    height: Height > 684 ? '100%' : 175,
    width: 160,
  },
  menu: {
    alignItems: 'center',
    marginTop: '4%',
  },
  Screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  container: {
    alignItems: 'center',
  },
  Logo: {
    marginTop: 100,
  },
  logoText: {
    color: 'gray',
    fontFamily: 'Poppins-Bold',
    fontSize: 35,
  },
  textContainer: {
    position: 'absolute',
    marginTop: 320,
  },
});

export default Dashboard;
