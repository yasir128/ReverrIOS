import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppColors from '../Constaint/AppColors';
import {NavigationContainer} from '@react-navigation/native';
import {
  MentorCalanderStack,
  MentorDashBoardStack,
  MentorHomeStack,
  MentorProfileStack,
} from './MentorStack';

const MyTab = createBottomTabNavigator();

const MentorNav = () => {
  return (
    <NavigationContainer>
      <MyTab.Navigator>
        <MyTab.Screen
          name="HomeTab"
          component={MentorHomeStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarLabelStyle: {
              marginBottom: 7,
              fontFamily: 'Poppins-Bold',
              fontSize: 10,
            },
            tabBarActiveBackgroundColor: AppColors.bottomBg,
            tabBarLabelPosition: 'below-icon',
            tabBarActiveTintColor: AppColors.FontsColor,
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              height: 60,
              backgroundColor: AppColors.bottomBg,
            },
            tabBarIcon: tabinfo => {
              return (
                <Icon
                  name="home"
                  size={30}
                  color={tabinfo.focused ? '#40BFFF' : 'gray'}
                  style={{
                    marginTop: 5,
                  }}
                />
              );
            },
          }}
        />
        <MyTab.Screen
          name="CalanderTab"
          component={MentorCalanderStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Calandar',
            tabBarLabelStyle: {
              marginBottom: 7,
              fontFamily: 'Poppins-Bold',
              fontSize: 10,
            },
            tabBarActiveBackgroundColor: AppColors.bottomBg,
            tabBarLabelPosition: 'below-icon',
            tabBarActiveTintColor: AppColors.FontsColor,
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              height: 60,
              backgroundColor: AppColors.bottomBg,
            },
            tabBarIcon: tabinfo => {
              return (
                <Icon
                  name="event"
                  size={30}
                  color={tabinfo.focused ? '#40BFFF' : 'gray'}
                  style={{
                    marginTop: 5,
                  }}
                />
              );
            },
          }}
        />
        <MyTab.Screen
          name="ProfileTab"
          component={MentorProfileStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarLabelStyle: {
              marginBottom: 7,
              fontFamily: 'Poppins-Bold',
              fontSize: 10,
            },
            tabBarActiveBackgroundColor: AppColors.bottomBg,
            tabBarLabelPosition: 'below-icon',
            tabBarActiveTintColor: AppColors.FontsColor,
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              height: 60,
              backgroundColor: AppColors.bottomBg,
            },
            tabBarIcon: tabinfo => {
              return (
                <Icon2
                  name="address-card"
                  size={28}
                  color={tabinfo.focused ? '#40BFFF' : 'gray'}
                  style={{
                    marginTop: 5,
                  }}
                />
              );
            },
          }}
        />
        <MyTab.Screen
          name="DashboardTab"
          component={MentorDashBoardStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Dashboard',
            tabBarLabelStyle: {
              marginBottom: 7,
              fontFamily: 'Poppins-Bold',
              fontSize: 10,
            },
            tabBarActiveBackgroundColor: AppColors.bottomBg,
            tabBarLabelPosition: 'below-icon',
            tabBarActiveTintColor: AppColors.FontsColor,
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              height: 60,
              backgroundColor: AppColors.bottomBg,
            },
            tabBarIcon: tabinfo => {
              return (
                <Icon
                  name="dashboard"
                  size={30}
                  color={tabinfo.focused ? '#40BFFF' : 'gray'}
                  style={{
                    marginTop: 5,
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
export default MentorNav;
