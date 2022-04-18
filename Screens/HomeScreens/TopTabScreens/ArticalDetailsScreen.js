import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, { useContext } from 'react';
import Backbtn from '../../../Componants/Backbtn';
import AppColors from '../../../Constaint/AppColors';
import {useNavigation} from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { UserContext } from '../../../App';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const ArticalDetailsScreen = props => { 
  const {state, dispatch} = useContext(UserContext);
  const navigation = useNavigation();
  const articaldetails = props.route.params.articalData;
  // console.log(articaldetails);
  return state&&(
    <View style={{flex: 1, backgroundColor: AppColors.primarycolor}}>
      <View style={styles.header}>
        <ImageBackground
          style={styles.articalImage}
          source={{
            uri: articaldetails && articaldetails.image,
          }}>
          <View style={styles.overlay}>
            <View
              style={{
                marginTop: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Backbtn
                IconSize={30}
                onPress={() => {
                  navigation.goBack();
                }}
              />
              <TouchableOpacity activeOpacity={0.7}>
                <Ionic
                  name="heart"
                  size={30}
                  color={state.savedArticles.includes(articaldetails.id)?"red":"grey"}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>{articaldetails.heading}</Text>
          </View>
        </ImageBackground>
      </View>
      <ScrollView style={styles.body}>
        <Text style={styles.text}>{articaldetails.body}</Text>
        <Text style={styles.author}>By {articaldetails.author}</Text>
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
    marginBottom: '5%',
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
