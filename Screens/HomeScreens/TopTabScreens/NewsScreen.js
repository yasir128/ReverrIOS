import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState, useRef, useContext} from 'react';
import AppColors from '../../../Constaint/AppColors';
import {NewsData} from '../../../dummy-data/Dummy_News';
import TrendingNewsCard from '../../../Componants/SwipeCard';
import NewsCard from '../../../Componants/HomeScreenComponants/NewsScreenComponants/NewsCard';
import Paginator from '../../../Componants/HomeScreenComponants/NewsScreenComponants/Paginator';
<<<<<<< HEAD
import SwipeCard from '../../../Componants/SwipeCard';
=======
import { NewsContext } from '../../../App';
>>>>>>> 6466a390998e355e4e5c0a558bad83f859cedc7a

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const NewsScreen = () => {

  // const options = {
  //   method: 'GET',
  //   url: 'https://api.bing.microsoft.com/v7.0/news/search',
  //   params: {q: 'startup',mkt: 'en-IN',freshness: 'Day',safeSearch: 'Off', textFormat: 'Raw'},
  //   headers: {
  //       'Content-Type': 'application/json',
  //       'Ocp-Apim-Subscription-Key':'bd03e8f8f29b46479ee4c2004280308f'
  //   }
  // }; 

  const {newsstate,newsdispatch} = useContext(NewsContext);

  console.log(newsstate[0].category);
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    
    <View style={styles.screen}>
      <View>
        <View>
          <Text style={styles.heading}>Trending</Text>
        </View>
<<<<<<< HEAD
        <SwipeCard
          data={NewsData}
=======
        <TrendingNewsCard
          data={newsstate}
>>>>>>> 6466a390998e355e4e5c0a558bad83f859cedc7a
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
        />
        <Paginator data={newsstate} scrollX={scrollX} />
        <View style={{height: Height > 684 ? Height / 2.38 : Height / 2.4}}>
          <View>
            <Text style={styles.news}>News</Text>
          </View>
          <NewsCard data={newsstate} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  heading: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    paddingStart: 22,
    paddingTop: 5,
    fontSize: 16,
  },
  news: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    marginStart: '5%',
    marginTop: '3%',
  },
});
export default NewsScreen;
