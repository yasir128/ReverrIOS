import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AppColors from '../../Constaint/AppColors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {AllMentors} from '../../dummy-data/AllMentors';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const SavedCard = props => {
  console.log(props.SavedList[0]);
  const naigation = useNavigation();
  if (props.name == 'Article') {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[AppColors.primarycolor, '#012437']}
          start={{x: -0.2, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.Card}>
          <View style={styles.header}>
            <Text style={styles.txt}>{props.Title}</Text>
            <TouchableOpacity
              onPress={() => {
                naigation.navigate('Artical2');
              }}>
              <Icon
                name="long-arrow-right"
                size={24}
                color={AppColors.FontsColor}
              />
            </TouchableOpacity>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            {props.SavedList && props.SavedList.length > 0 ? (
              <TouchableOpacity
                style={styles.listContainer}
                onPress={() => {
                  naigation.navigate('ArticalDetails', {
                    articalData: props.SavedList[0],
                  });
                }}>
                <ImageBackground
                  style={styles.img}
                  source={{uri: props.SavedList[0].image}}>
                  <View style={styles.overlay}>
                    <Text style={styles.name}>
                      {props.SavedList[0].heading}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ) : (
              <Text style={styles.name}>Your List is empty</Text>
            )}
            {props.SavedList && props.SavedList.length > 1 && (
              <TouchableOpacity
                style={styles.listContainer}
                onPress={() => {
                  naigation.navigate('ArticalDetails', {
                    articalData: props.SavedList[1],
                  });
                }}>
                <ImageBackground
                  style={styles.img}
                  source={{uri: props.SavedList[1].image}}>
                  <View style={styles.overlay}>
                    <Text style={styles.name}>
                      {props.SavedList[1].heading}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
            {props.SavedList && props.SavedList.length > 2 && (
              <TouchableOpacity
                style={styles.listContainer}
                onPress={() => {
                  naigation.navigate('ArticalDetails', {
                    articalData: props.SavedList[2],
                  });
                }}>
                <ImageBackground
                  style={styles.img}
                  source={{uri: props.SavedList[2].image}}>
                  <View style={styles.overlay}>
                    <Text style={styles.name}>
                      {props.SavedList[2].heading}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          </View>
        </LinearGradient>
      </View>
    );
  }else if(props.name == 'Post') {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[AppColors.primarycolor, '#012437']}
          start={{x: -0.2, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.Card}>
          <View style={styles.header}>
            <Text style={styles.txt}>{props.Title}</Text>
            <TouchableOpacity
              onPress={() => {
                naigation.navigate('savedposts',
                {posts: props.SavedList});
              }}>
              <Icon
                name="long-arrow-right"
                size={24}
                color={AppColors.FontsColor}
              />
            </TouchableOpacity>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            {props.SavedList && props.SavedList.length > 0 ? (
              <Text style={styles.name}>You have {props.SavedList.length} Saved Post</Text>
            ) : (
              <Text style={styles.name}>Your List is empty ☹️</Text>
            )}
            {props.SavedList && props.SavedList.length > 1 && (
              <TouchableOpacity
                style={styles.listContainer}
                onPress={() => {
                  naigation.navigate('ArticalDetails', {
                    articalData: props.SavedList[1],
                  });
                }}>
                <ImageBackground
                  style={styles.img}
                  source={{uri: props.SavedList[1].image}}>
                  <View style={styles.overlay}>
                    <Text style={styles.name}>
                      {props.SavedList[1].heading}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
            {props.SavedList && props.SavedList.length > 2 && (
              <TouchableOpacity
                style={styles.listContainer}
                onPress={() => {
                  naigation.navigate('ArticalDetails', {
                    articalData: props.SavedList[2],
                  });
                }}>
                <ImageBackground
                  style={styles.img}
                  source={{uri: props.SavedList[2].image}}>
                  <View style={styles.overlay}>
                    <Text style={styles.name}>
                      {props.SavedList[2].heading}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          </View>
        </LinearGradient>
      </View>
    );
    
  }else {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[AppColors.primarycolor, '#012437']}
          start={{x: -0.2, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.Card}>
          <View style={styles.header}>
            <Text style={styles.txt}>{props.Title}</Text>
            <Icon
              name="long-arrow-right"
              size={24}
              color={AppColors.FontsColor}
            />
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            {props.SavedList && props.SavedList.length > 0 ? (
              <TouchableOpacity style={styles.listContainer}>
                <ImageBackground
                  style={styles.img}
                  source={{uri: props.SavedList[0].image}}>
                  <View style={styles.overlay}>
                    <Text style={styles.name}>{props.SavedList[0].name}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ) : (
              <Text style={styles.name}>Your List is empty</Text>
            )}
            {props.SavedList && props.SavedList.length > 1 && (
              <TouchableOpacity style={styles.listContainer}>
                <ImageBackground
                  style={styles.img}
                  source={{uri: props.SavedList[1].image}}>
                  <View style={styles.overlay}>
                    <Text style={styles.name}>{props.SavedList[1].name}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
            {props.SavedList && props.SavedList.length > 2 && (
              <TouchableOpacity style={styles.listContainer}>
                <ImageBackground
                  style={styles.img}
                  source={{uri: props.SavedList[2].image}}>
                  <View style={styles.overlay}>
                    <Text style={styles.name}>{props.SavedList[2].name}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          </View>
        </LinearGradient>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    marginTop: '8%',
    paddingHorizontal: Width / 25,
  },
  Card: {
    borderRadius: Width / 42,
    paddingHorizontal: '2%',
  },
  header: {
    flexDirection: 'row',
    paddingTop: 6,
    paddingHorizontal: '3%',
    justifyContent: 'space-between',
  },
  txt: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-SemiBold',
  },
  listContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  img: {
    width: Width / 4,
    height: Height / 8,
    alignItems: 'center',
  },
  overlay: {
    width: '100%',
    marginTop: Height / 12,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  name: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    marginStart: '2.8%',
  },
  skills: {
    color: AppColors.infoFonts,
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
  },
});
export default SavedCard;
