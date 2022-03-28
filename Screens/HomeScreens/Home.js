import {View, StyleSheet, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../Componants/HomeScreenComponants/Header';
import AppColors from '../../Constaint/AppColors';
import {useNavigation} from '@react-navigation/native';
import TopTabBar from '../../Componants/HomeScreenComponants/TopTabBar';
import ProgressScreen from './TopTabScreens/ProgressScreen';
import NewsScreen from './TopTabScreens/NewsScreen';
import ArticleScreen from './TopTabScreens/ArticleScreen';
import {homeScreenQuotes} from '../../utils/basicsFunctions';
import SavedScreen from './TopTabScreens/SavedScreen';
import {GetUser} from '../../utils/fireBaseFunctions';
import MentorsScreen from '../../Componants/HomeScreenComponants/ProgressScreenComponants/MentorsScreen';

const Home = () => {
  const [Progress, setProgress] = useState(true);
  const [News, setNews] = useState(false);
  const [Article, setArticle] = useState(false);
  const [Saved, setSaved] = useState(false);
  const [defaultMentors, setdefaultMentors] = useState(true);
  const [AllMentors, setAllMentors] = useState(false);
  const [AllData, setAllData] = useState();
  const [qoute, setQoute] = useState('loading...');
  const [authors, setAuthors] = useState('-null');

  const navigation = useNavigation();

  useEffect(() => {
    homeScreenQuotes(setQoute, setAuthors);
    GetUser(setAllData);
    console.log(AllData);
  }, []);

  return (
    <View style={styles.screen}>
      <View style={{flex: 1}}>
        <Header
          onPressDp={() => {
            navigation.navigate(AllData.userType, {Data: AllData});
          }}
          onPressCalander={() => {
            /// logout();
          }}
          onPressNoti={() => {
            console.log('Notification');
          }}
          onPressChat={() => {
            navigation.navigate('Chat');
          }}
          DpUrl={AllData.image}
        />
        {AllMentors ? (
          <MentorsScreen
            onPress={() => {
              setAllMentors(false);
            }}
          />
        ) : (
          <View style={{flex: 1}}>
            <TopTabBar
              onPressProgress={() => {
                setProgress(true);
                setNews(false);
                setArticle(false);
                setSaved(false);
              }}
              onPressNews={() => {
                setNews(true);
                setProgress(false);
                setArticle(false);
                setSaved(false);
                console.log('clecked');
              }}
              onPressArticle={() => {
                setArticle(true);
                setNews(false);
                setProgress(false);
                setSaved(false);
              }}
              onPressSaved={() => {
                setSaved(true);
                setNews(false);
                setArticle(false);
                setProgress(false);
              }}
              progress={Progress}
              news={News}
              article={Article}
              save={Saved}
            />
            <View style={{flex: 1}}>
              {Progress ? (
                <ScrollView showsVerticalScrollIndicator={false}>
                  <ProgressScreen
                    UserName={AllData.name}
                    qoute={qoute}
                    default={defaultMentors}
                    author={authors}
                    onPress={() => {
                      setAllMentors(true);
                    }}
                  />
                </ScrollView>
              ) : News ? (
                <NewsScreen />
              ) : Article ? (
                <ArticleScreen />
              ) : Saved ? (
                <SavedScreen />
              ) : null}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
});

export default Home;
