import {View, StyleSheet, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../Componants/HomeScreenComponants/Header';
import AppColors from '../../Constaint/AppColors';
import {useNavigation} from '@react-navigation/native';
import TopTabBar from '../../Componants/HomeScreenComponants/TopTabBar';
import ProgressScreen from './TopTabScreens/ProgressScreen';
import NewsScreen from './TopTabScreens/NewsScreen';
import ArticleScreen from './TopTabScreens/ArticleScreen';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {setArtical} from '../../Redux/appSlice';
import SavedScreen from './TopTabScreens/SavedScreen';
import {GetUser} from '../../utils/fireBaseFunctions';
import ArticalDetailsScreen from './TopTabScreens/ArticalDetailsScreen';
import MentorsScreen from '../../Componants/HomeScreenComponants/ProgressScreenComponants/MentorsScreen';

const Home = () => {
  const [Progress, setProgress] = useState(true);
  const [News, setNews] = useState(false);
  const [Article, setArticle] = useState(false);
  const [Saved, setSaved] = useState(false);
  const [ArticalDetails, setArticalDetails] = useState(true);
  const [defaultDp, setdefaultDp] = useState(true);
  const [defaultMentors, setdefaultMentors] = useState(true);
  const [AllMentors, setAllMentors] = useState(false);
  const [dp, setdp] = useState();
  const [AllData, setAllData] = useState();
  const [name, setname] = useState();
  const [UserType, setUserType] = useState(''); //"Individual","MentorProfile"
  const [qoute, setQoute] = useState('loading...');
  const [authors, setAuthors] = useState('-null');

  const MyArtical = useSelector(state => state.ArticalReducer.Artical);
  // const dispatch = useDispatch();
  // console.log(MyArtical);

  const navigation = useNavigation();

  var options = {
    method: 'POST',
    url: 'https://motivational-quotes1.p.rapidapi.com/motivation',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'motivational-quotes1.p.rapidapi.com',
      'x-rapidapi-key': '4a01d589d6msh0d43b1f33cc9008p105745jsn14a9e364f1ea',
    },
    data: {key1: 'value', key2: 'value'},
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        var string = '';
        var author = '';
        var isString = false;
        var isAuthor = false;
        for (let i in response.data) {
          if (response.data[i] == '"') isString = !isString;
          if (isString) string += response.data[i];
          else if (response.data[i] == '-') isAuthor = !isAuthor;
          if (isAuthor) author += response.data[i];
        }
        isAuthor = false;
        string += '"';
        setQoute(string);
        setAuthors(author);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [dp]);

  GetUser().then(x => {
    if (x.image != '') {
      setdefaultDp(false);
    }
    setname(x.name);
    setUserType(x.userType);
    setdp(x.image);
    setAllData(x);
  });

  return (
    <View style={styles.screen}>
      {ArticalDetails ? (
        <View style={{flex: 1}}>
          <Header
            onPressDp={() => {
              navigation.navigate(UserType, {Data: AllData});
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
            Dp={defaultDp}
            DpUrl={dp}
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
                      UserName={name}
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
                  <ArticleScreen
                    ArticalDetails={ArticalDetails}
                    onPress={() => {
                      setArticalDetails(false);
                    }}
                  />
                ) : Saved ? (
                  <SavedScreen />
                ) : null}
              </View>
            </View>
          )}
        </View>
      ) : (
        <View style={{flex: 1}}>
          <ArticalDetailsScreen
            BackBotton={() => {
              setArticalDetails(true);
            }}
          />
        </View>
      )}
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
