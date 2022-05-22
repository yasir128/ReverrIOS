import {View, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import ArticalList from '../../../Componants/HomeScreenComponants/ArticalScreenComponants/ArticalList';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

console.log(Height);

const ArticleScreen = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.ListContainer}>
        <ArticalList />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    height: Height > 684 ? Height / 1.32 : Height / 1.41,
  },
  ListContainer: {
    paddingHorizontal: 20,
    marginTop: Height > 684 ? 20 : 10,

    width: '100%',
    height: Height > 684 ? '100%' : '100%',
  },
});

export default ArticleScreen;
