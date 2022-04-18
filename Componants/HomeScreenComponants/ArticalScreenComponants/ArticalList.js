import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useContext} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import AppColors from '../../../Constaint/AppColors';
import {useNavigation} from '@react-navigation/native';
import {ArticleContext, UserContext, SavedArticleContext} from '../../../App';
import {SaveArticle, RemoveArticle} from '../../../utils/fireBaseFunctions';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const ArticalList = props => {
  const {state, dispatch} = useContext(UserContext);
  const {articlestate, articledispatch} = useContext(ArticleContext);
  const {savedarticlestate, savedarticledispatch} =
    useContext(SavedArticleContext);
  function saveArticle(item) {
    if (state.savedArticles.includes(item.id)) {
      dispatch({type: 'REMOVEARTICLE', payload: item.id});
      savedarticledispatch({type: 'REMOVE', payload: item});
      RemoveArticle(item, state.email, state.savedArticles);
    } else {
      dispatch({type: 'SAVEARTICLE', payload: item.id});
      savedarticledispatch({type: 'UPDATE', payload: item});
      SaveArticle(item, state.email, state.savedArticles);
    }
  }
  const naigation = useNavigation();
  return (
    <View style={{marginTop: '2%'}}>
      <FlatList
        data={articlestate && articlestate}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              naigation.navigate('ArticalDetails', {
                articalData: item,
              });
            }}>
            <View style={styles.line}></View>
            <View style={styles.title}>
              <Text style={styles.text}>{item.heading}</Text>
              <TouchableOpacity
                onPress={() => saveArticle(item)}
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Ionic
                  name="heart"
                  size={20}
                  color={state.savedArticles.includes(item.id)?"red":"grey"}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.description}>
              <Text style={styles.desc}>{item.body.substring(0, 100)}...</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  line: {
    backgroundColor: AppColors.infoFonts,
    width: '100%',
    height: 1,
  },
  title: {
    paddingTop: Height > 684 ? 20 : 7,
    paddingStart: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Bold',
  },
  description: {
    paddingBottom: 20,
    paddingStart: 5,
  },
  desc: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
  },
});

export default ArticalList;
