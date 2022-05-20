import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import React, {useContext, useState} from 'react';
import {SavedArticleContext} from '../../../App';
import AppColors from '../../../Constaint/AppColors';
import Backbtn from '../../../Componants/Backbtn';
import {useNavigation} from '@react-navigation/native';
import SavedArticalsList from '../../../Componants/HomeScreenComponants/ArticalScreenComponants/SavedArticalsList';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

console.log(Height);

const SavedArticals = props => {
  const {savedarticlestate, savedarticledispatch} =
    useContext(SavedArticleContext);

  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Backbtn
          IconSize={30}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.headerTitle}>Saved Articals</Text>
      </View>
      <View style={styles.ListContainer}>
        <SavedArticalsList data={savedarticlestate} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    display: 'flex',
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  ListContainer: {
    paddingHorizontal: 20,
    marginTop: Height > 684 ? 20 : 10,

    width: '100%',
    height: Height > 684 ? '100%' : '100%',
  },
  headerTitle: {
    color: AppColors.FontsColor,
    marginStart: '25%',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
});

export default SavedArticals;
