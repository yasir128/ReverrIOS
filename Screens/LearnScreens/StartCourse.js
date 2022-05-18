import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useContext} from 'react';
import AppColors from '../../Constaint/AppColors';
import Backbtn from '../../Componants/Backbtn';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {SavedCourseContext, UserContext} from '../../App';
import {SaveCourse, RemoveCourse} from '../../utils/fireBaseFunctions';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const StartCourse = props => {
  const courseData = props.route.params.CourseDetails;
  const navigation = useNavigation();
  const {savedcoursestate, savedcoursedispatch} =
    useContext(SavedCourseContext);
  const {state, dispatch} = useContext(UserContext);

  const SaveCourses = () => {
    if (state.savedCourses.includes(courseData.id)) {
      dispatch({type: 'REMOVECOURSE', payload: courseData.id});
      savedcoursedispatch({type: 'REMOVE', payload: courseData});
      RemoveCourse(courseData, state.email, state.savedCourses);
    } else {
      dispatch({type: 'SAVECOURSE', payload: courseData.id});
      savedcoursedispatch({type: 'UPDATE', payload: courseData});
      SaveCourse(courseData, state.email, state.savedCourses);
    }
  };
  return (
    <View style={styles.screen}>
      <ImageBackground
        style={{width: '100%', height: Height / 2.7, paddingTop: '5%'}}
        source={{uri: courseData.image}}>
        <Backbtn
          IconSize={30}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            alignItems: 'center',
            paddingVertical: '3%',
            top: 160,
            height: '100%',
          }}>
          <Text
            style={{
              color: AppColors.FontsColor,
              fontFamily: 'Poppins-SemiBold',
              fontSize: 16,
            }}>
            {courseData.name}
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.circle}>
          <Icon name="link" size={28} color={AppColors.ActiveColor} />
        </TouchableOpacity>
        {state.savedCourses.includes(courseData.id) ? (
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.circle}
            onPress={() => SaveCourses()}>
            <Icon2 name="bookmark" size={28} color="blue" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.circle}
            onPress={() => SaveCourses()}>
            <Icon2 name="bookmark-outline" size={28} color="blue" />
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.ContinueButton}>
          <Text style={styles.btnTxt}>Continue</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.txt}>Chapters</Text>
      <ScrollView style={styles.ChapterContainer}>
        <FlatList
          data={courseData.chapter}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('instruction', {
                  BookData: item,
                });
              }}
              key={index}
              style={styles.ChapterCard}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={styles.chapter}>Chapter - {index + 1}</Text>
                  <Text>{item.name}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('instruction', {
                      BookData: item,
                    });
                  }}
                  style={[
                    styles.circle,
                    {backgroundColor: AppColors.ActiveColor},
                  ]}>
                  <Icon2
                    name="chevron-forward-outline"
                    size={28}
                    color={AppColors.FontsColor}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  actionContainer: {
    paddingVertical: '4%',
    flexDirection: 'row',
  },
  circle: {
    height: 45,
    width: 45,
    borderRadius: 50,
    marginStart: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.FontsColor,
  },
  ContinueButton: {
    backgroundColor: AppColors.ActiveColor,
    marginStart: '15%',
    paddingHorizontal: '10%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
  },
  txt: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: '6%',
  },
  ChapterContainer: {
    paddingHorizontal: '5%',
    paddingVertical: '3%',
  },
  ChapterCard: {
    backgroundColor: AppColors.BtnClr,
    borderRadius: 18,
    marginVertical: '2%',
    paddingVertical: '4%',
    paddingHorizontal: '5%',
  },
  chapter: {
    color: AppColors.CardColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  progressContainer: {
    height: 5,
    marginVertical: '3%',
    borderRadius: 50,
    width: '100%',
    backgroundColor: AppColors.CardColor,
  },
});
export default StartCourse;
