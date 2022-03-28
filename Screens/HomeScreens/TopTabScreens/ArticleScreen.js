import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import HeaderCard from '../../../Componants/HomeScreenComponants/ArticalScreenComponants/HeaderCard';
import ArticalList from '../../../Componants/HomeScreenComponants/ArticalScreenComponants/ArticalList';
import {ArticalData} from '../../../dummy-data/Artical-Data';

const ArticleScreen = props => {
  return (
    <View style={styles.screen}>
      <View style={{flex: 1}}>
        <View style={styles.HeaderContainer}>
          <HeaderCard />
        </View>
        <View style={styles.ListContainer}>
          <ArticalList data={ArticalData} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  HeaderContainer: {
    alignItems: 'center',
    height: '35%',
    width: '98%',
    marginVertical: 10,
    marginHorizontal: 3.5,
    overflow: 'hidden',
    borderRadius: 20,
  },
  ListContainer: {
    paddingHorizontal: 20,
    width: '100%',
    height: '58%',
    marginTop: 20,
  },
});

export default ArticleScreen;
