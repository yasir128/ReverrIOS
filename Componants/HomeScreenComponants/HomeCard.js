import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Animated,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useRef} from 'react';
import {cardData} from '../../dummy-data/defaultHomeCardData';
import {AllMentors} from '../../dummy-data/AllMentors';
import AppColors from '../../Constaint/AppColors';
import {courseData} from '../../dummy-data/courseData';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import CustomBtn from '../CustomBtn';

const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

const HomeCard = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const p = useRef(4);

  // setTimeout(() => {
  //   AutoScroll();
  // }, 3000);

  // const AutoScroll = () => {
  //   p.current.scrollToIndex({index: 1});
  //   setTimeout(() => {
  //     p.current.scrollToIndex({index: 2});
  //     setTimeout(() => {
  //       p.current.scrollToIndex({index: 3});
  //       setTimeout(() => {
  //         p.current.scrollToIndex({index: 2});
  //         setTimeout(() => {
  //           p.current.scrollToIndex({index: 1});
  //           setTimeout(() => {
  //             p.current.scrollToIndex({index: 0});
  //             setTimeout(() => {
  //               AutoScroll();
  //             }, 2000);
  //           }, 3000);
  //         }, 3000);
  //       }, 3000);
  //     }, 3000);
  //   }, 3000);
  // };
  return (
    <View style={styles.CardContainer}>
      <FlatList
        data={cardData}
        ref={p}
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item}) => (
          <LinearGradient
            colors={[AppColors.primarycolor, '#012437']}
            start={{x: 0.4, y: 1.3}}
            end={{x: 1, y: 0.5}}
            style={styles.Card}>
            <Text style={styles.heading}>{item.heading}</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.subheading}>{item.subHeading}</Text>
              {item.id == 2 ? (
                <Icon
                  name="dollar-sign"
                  size={20}
                  color={AppColors.infoFonts}
                />
              ) : null}
              {item.id == 3 ? (
                <Icon
                  name="comment-dots"
                  size={20}
                  color={AppColors.infoFonts}
                />
              ) : null}
            </View>
            <View style={{flexDirection: 'row', marginTop: Width / 28}}>
              {item.id == 0 ? (
                AllMentors.map(item2 => (
                  <View
                    key={item2.id}
                    style={{
                      marginStart: Width / 35,
                      marginBottom: 5,
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
              ) : item.id == 1 ? (
                courseData.map(item3 => (
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
                            marginTop: item3.id == 2 ? Height / 45 : Height / 9,
                            marginStart: Width / 30,
                          }}
                          color={AppColors.FontsColor}
                        />
                      </View>
                    </View>
                  </ImageBackground>
                ))
              ) : (
                <CustomBtn
                  style={styles.button}
                  Title={item.id == 2 ? 'Get funding' : 'Enter room'}
                />
              )}
            </View>
          </LinearGradient>
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
    elevation: 8,
    borderRadius: 10,
  },
  CardContainer: {
    height: Height / 3.2,
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
    marginEnd: '5%',
    marginStart: Width / 19,
    marginTop: Height / 74,
  },
  mentorDp: {
    width: Width / 7,
    height: Height / 14,
    borderRadius: 40,
  },
  bg: {
    width: '100%',
    height: '100%',
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
    marginTop: -Height / 25,
    marginBottom: 15,
    marginStart: Width / 35,
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
  button: {
    width: Width / 1.2,
    height: Height / 16,
    marginTop: Height / 28,
    marginStart: Width / 20,
  },
});

export default HomeCard;
