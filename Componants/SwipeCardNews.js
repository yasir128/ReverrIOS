import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import AppColors from '../Constaint/AppColors';
import {smallString} from '../utils/helper';
import {useNavigation} from '@react-navigation/native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const SwipeCardNews = props => {
  const navigation = useNavigation();
  var count = 5;
  return (
    <View>
      <FlatList
        data={props.data.reverse()}
        horizontal
        pagingEnabled={props.pagingEnabled}
        onScroll={props.onScroll}
        renderItem={({item}) => {
          if (item.image) {
            count--;
            if (count > -1)
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    console.log(item);
                    navigation.navigate('NewsDetails', {
                      articalData: item,
                    });
                  }}
                  style={{...styles.container, ...props.style}}>
                  <ImageBackground
                    style={{flex: 1}}
                    source={{uri: item.image.thumbnail.contentUrl}}>
                    <View style={{...styles.title}}>
                      <Text
                        style={{
                          ...{
                            color: AppColors.FontsColor,
                            fontFamily: 'Poppins-Bold',
                          },
                          ...props.title,
                        }}>
                        {item.name}
                      </Text>
                      {/* <Text
                  style={{
                    ...{
                      color: AppColors.BtnClr,
                      fontFamily: 'Poppins-Regular',
                    },
                    ...props.description,
                  }}>
                  {smallString(item.description, props.maxString)}
                </Text> */}
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              );
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginStart: 15,
    marginVertical: '2%',
    marginEnd: 10,
    width: Width / 1.1,
    height: Height > 684 ? Height / 4 : Height / 5,
    overflow: 'hidden',
    borderRadius: 20,
  },
  title: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '50%',
    paddingVertical: 5,
    paddingHorizontal: '3%',
    top: Height > 684 ? 115 : 50,
  },
});

export default SwipeCardNews;
