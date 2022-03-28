import {Image} from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeStack,
  MentorStack,
  VibeStack,
  RoomStack,
  LearnStack,
} from './CustomNavigation';
import AppColors from '../Constaint/AppColors';
import {NavigationContainer} from '@react-navigation/native';

const MyTab = createBottomTabNavigator();

const AppNav = () => {
  return (
    <NavigationContainer>
      <MyTab.Navigator>
        <MyTab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarLabelStyle: {
              marginBottom: 10,
              fontFamily: 'Poppins-Bold',
            },
            tabBarActiveBackgroundColor: AppColors.BtnClr,
            tabBarLabelPosition: 'below-icon',
            tabBarActiveTintColor: AppColors.FontsColor,
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              height: 70,
              backgroundColor: AppColors.BtnClr,
            },
            tabBarIcon: tabinfo => {
              return (
                <Icon
                  name="home"
                  size={30}
                  color={tabinfo.focused ? '#40BFFF' : 'gray'}
                  style={{
                    marginTop: 10,
                  }}
                />
              );
            },
          }}
        />
        <MyTab.Screen
          name="MentorTab"
          component={MentorStack}
          options={{
            headerShown: false,
            headerStyle: {
              borderBottomColor: '#D4D4D4',
              borderBottomWidth: 2,
            },
            headerTitleStyle: {
              fontFamily: 'Poppins-Bold',
              color: '#223263',
              marginStart: 20,
              marginTop: 15,
            },
            tabBarLabel: 'Mentor',
            tabBarLabelStyle: {
              marginBottom: 10,
              fontFamily: 'Poppins-Bold',
            },
            tabBarActiveBackgroundColor: AppColors.BtnClr,
            tabBarLabelPosition: 'below-icon',
            tabBarActiveTintColor: AppColors.FontsColor,
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              height: 70,
              backgroundColor: AppColors.BtnClr,
            },
            tabBarIcon: tabinfo => {
              return (
                <Icon
                  name="psychology"
                  size={30}
                  color={tabinfo.focused ? '#40BFFF' : 'gray'}
                  style={{
                    marginTop: 10,
                  }}
                />
              );
            },
          }}
        />
        <MyTab.Screen
          name="VibeStack"
          component={VibeStack}
          options={{
            headerShown: false,
            headerTintColor: 'blue',
            tabBarLabel: 'Vibe',
            tabBarLabelStyle: {
              marginBottom: 10,
              fontFamily: 'Poppins-Bold',
            },
            tabBarActiveBackgroundColor: AppColors.BtnClr,
            tabBarLabelPosition: 'below-icon',
            tabBarActiveTintColor: AppColors.FontsColor,
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              height: 70,
              backgroundColor: AppColors.BtnClr,
            },
            tabBarIcon: tabinfo => {
              return (
                <Icon2
                  name="handshake"
                  size={25}
                  color={tabinfo.focused ? '#40BFFF' : 'gray'}
                  style={{
                    marginTop: 10,
                  }}
                />
              );
            },
          }}
        />
        <MyTab.Screen
          name="RoomStack"
          component={RoomStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Room',
            tabBarLabelStyle: {
              marginBottom: 10,
              fontFamily: 'Poppins-Bold',
            },
            tabBarActiveBackgroundColor: AppColors.BtnClr,
            tabBarLabelPosition: 'below-icon',
            tabBarActiveTintColor: AppColors.FontsColor,
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              height: 70,
              backgroundColor: AppColors.BtnClr,
            },
            tabBarIcon: tabinfo => {
              return (
                <Ionic
                  name="person-outline"
                  size={25}
                  color={tabinfo.focused ? '#40BFFF' : 'gray'}
                  style={{
                    marginTop: 10,
                  }}
                />
              );
            },
          }}
        />
        <MyTab.Screen
          name="LearnStack"
          component={LearnStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Learn',
            tabBarLabelStyle: {
              marginBottom: 10,
              fontFamily: 'Poppins-Bold',
            },
            tabBarActiveBackgroundColor: AppColors.BtnClr,
            tabBarLabelPosition: 'below-icon',
            tabBarActiveTintColor: AppColors.FontsColor,
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              height: 70,
              backgroundColor: AppColors.BtnClr,
            },
            tabBarIcon: tabinfo => {
              return (
                <Ionic
                  name="person-outline"
                  size={25}
                  color={tabinfo.focused ? '#40BFFF' : 'gray'}
                  style={{
                    marginTop: 10,
                  }}
                />
              );
            },
          }}
        />
      </MyTab.Navigator>
    </NavigationContainer>
  );
};
export default AppNav;
