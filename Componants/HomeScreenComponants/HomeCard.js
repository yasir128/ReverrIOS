import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import {cardData} from '../../dummy-data/defaultHomeCardData';
import {AllMentors} from '../../dummy-data/AllMentors';
import AppColors from '../../Constaint/AppColors';
import {courseData} from '../../dummy-data/courseData';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

const HomeCard = () => {
  return (
    <View style={styles.CardContainer}>
      <FlatList
        data={cardData}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item}) => (
          <View style={styles.Card}>
            <Text style={styles.heading}>{item.heading}</Text>
            <Text style={styles.subheading}>{item.subHeading}</Text>
            <View style={{flexDirection: 'row', marginTop: Width / 28}}>
              {item.id == 0
                ? AllMentors.map(item2 => (
                    <View
                      key={item2.id}
                      style={{
                        marginStart: Width / 35,
                        marginBottom: 20,
                        alignItems: 'center',
                      }}>
                      <Image
                        style={styles.mentorDp}
                        source={{uri: item2.image}}
                      />
                      <Text style={styles.name}>{item2.name}</Text>
                      <Text style={styles.skill}>{item2.skills}</Text>
                    </View>
                  ))
                : item.id == 1
                ? courseData.map(item3 => (
                    <ImageBackground
                      key={item3.id}
                      style={styles.courseimage}
                      source={{uri: item3.image}}>
                      <View
                        style={{
                          width: '100%',
                          height: '100%',
                          backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        }}>
                        <Text style={styles.title}>{item3.title}</Text>
                        <View
                          style={[
                            styles.overlay,
                            {
                              backgroundColor:
                                item3.id == 2 ? 'rgba(0, 0, 0, 0.5)' : '',
                            },
                          ]}>
                          {item3.id == 2 ? (
                            <Icon
                              name="lock"
                              size={25}
                              style={{
                                alignSelf: 'center',
                                marginTop: '50%',
                              }}
                              color={AppColors.FontsColor}
                            />
                          ) : null}
                          <Icon
                            name="arrow-right"
                            size={25}
                            style={{
                              marginTop:
                                item3.id == 2 ? Height / 45 : Height / 9,
                              marginStart: Width / 30,
                            }}
                            color={AppColors.FontsColor}
                          />
                        </View>
                      </View>
                    </ImageBackground>
                  ))
                : null}
            </View>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Card: {
    backgroundColor: AppColors.CardColor,
    marginHorizontal: Width / 30,
    width: Width / 1.08,
    borderRadius: 10,
  },
  CardContainer: {
    paddingStart: Width / 108,
    marginTop: Height / 11,
  },
  heading: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    width: Width / 1.6,
    marginStart: Width / 19,
    marginTop: Height / 24,
  },
  subheading: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    marginStart: Width / 19,
    marginTop: Height / 74,
  },
  mentorDp: {
    width: Width / 7,
    height: Height / 14,
    borderRadius: 40,
  },
  name: {
    marginTop: 10,
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
  },
  skill: {
    color: AppColors.infoFonts,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
  },
  courseimage: {
    width: Width / 4,
    height: Height / 6,
    marginStart: Width / 35,
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
  },
  overlay: {
    width: '100%',
    position: 'absolute',
    height: '100%',
  },
  title: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    alignSelf: 'center',
    marginTop: Height / 22,
  },
});

export default HomeCard;
