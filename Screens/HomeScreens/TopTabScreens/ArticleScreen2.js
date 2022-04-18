import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import React, {useContext, useState} from 'react';
import HeaderCard from '../../../Componants/HomeScreenComponants/ArticalScreenComponants/HeaderCard';
import ArticalList2 from '../../../Componants/HomeScreenComponants/ArticalScreenComponants/ArticalList2';
import { SavedArticleContext } from '../../../App';


const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

console.log(Height);

const ArticleScreen2 = props => {
  const {savedarticlestate,savedarticledispatch} = useContext(SavedArticleContext);

  return (
    <View style={styles.screen}>
      <View style={styles.ListContainer}>
        <ArticalList2 data={savedarticlestate} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    display:'flex',
    flex:1,
    backgroundColor:'black',
  },
  ListContainer: {
    paddingHorizontal: 20,
    marginTop: Height > 684 ? 20 : 10,

    width: '100%',
    height: Height > 684 ? '100%' : '100%',
  },
});

export default ArticleScreen2;
