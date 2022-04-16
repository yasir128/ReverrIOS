import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Backbtn from '../../../Componants/Backbtn';
import AppColors from '../../../Constaint/AppColors';
import {useNavigation} from '@react-navigation/native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const ArticalDetailsScreen = props => {
  const navigation = useNavigation();
  const articaldetails = props.route.params.articalData;
  console.log(articaldetails);
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primarycolor}}>
      <View style={styles.header}>
        <ImageBackground
          style={styles.articalImage}
          source={{
            uri: articaldetails && articaldetails.image,
          }}>
          <View style={styles.overlay}>
            <View style={{marginTop: '5%'}}>
              <Backbtn
                IconSize={30}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </View>
            <Text style={styles.title}>{articaldetails.heading}</Text>
            <Text style={styles.author}>Auther:{articaldetails.author}</Text>
          </View>
        </ImageBackground>
      </View>
      <ScrollView style={styles.body}>
        <Text style={styles.text}>{articaldetails.body}</Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  articalImage: {
    width: '100%',
    height: Height / 2.5,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    paddingHorizontal: '8%',
    height: Height / 2.5,
  },
  title: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 19,
    marginTop: Height / 5,
  },
  author: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
  },
  body: {
    paddingHorizontal: '8%',
  },
  text: {
    color: AppColors.infoFonts,
    fontFamily: 'Poppins-Regular',
  },
});

export default ArticalDetailsScreen;
