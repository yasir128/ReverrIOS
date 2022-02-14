import { Image } from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/HomeScreens/Home';
import LearnScreen from '../Screens/LearnScreens/LearnScreen';
import MentorScreen from '../Screens/MentorScreens/MentorScreen';
import VibeScreen from '../Screens/VibeScreens/VibeScreen';
import RoomScreen from '../Screens/RoomScreens/RoomScreen';
import AppColors from '../Constaint/AppColors';

const MyTab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <MyTab.Navigator  >
            <MyTab.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: {
                        marginBottom: 10,
                        fontFamily: 'Poppins-Bold',
                    },
                    tabBarActiveBackgroundColor: AppColors.BtnClr,
                    tabBarLabelPosition: "below-icon",
                    tabBarActiveTintColor: AppColors.FontsColor,
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        height: 70,
                        backgroundColor: AppColors.BtnClr,
                    },
                    tabBarIcon: (tabinfo) => {

                        return <Icon name="home" size={30}
                            color={tabinfo.focused ? "#40BFFF" : "gray"} style={{
                                marginTop: 10
                            }} />
                    }
                }} />
            <MyTab.Screen name="MentorTab" component={MentorScreen}
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
                        marginTop: 15

                    },
                    tabBarLabel: 'Mentor',
                    tabBarLabelStyle: {
                        marginBottom: 10,
                        fontFamily: 'Poppins-Bold',
                    },
                    tabBarActiveBackgroundColor: AppColors.BtnClr,
                    tabBarLabelPosition: "below-icon",
                    tabBarActiveTintColor: AppColors.FontsColor,
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        height: 70,
                        backgroundColor: AppColors.BtnClr
                    },
                    tabBarIcon: (tabinfo) => {

                        return <Icon name="psychology" size={30}
                            color={tabinfo.focused ? "#40BFFF" : "gray"} style={{
                                marginTop: 10
                            }} />
                    }
                }} />
            <MyTab.Screen name="Vibe" component={VibeScreen}
                options={{
                    headerShown: false,
                    headerTintColor: 'blue',
                    tabBarLabel: 'Vibe',
                    tabBarLabelStyle: {
                        marginBottom: 10,
                        fontFamily: 'Poppins-Bold',
                    },
                    tabBarActiveBackgroundColor: AppColors.BtnClr,
                    tabBarLabelPosition: "below-icon",
                    tabBarActiveTintColor: AppColors.FontsColor,
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        height: 70,
                        backgroundColor: AppColors.BtnClr
                    },
                    tabBarIcon: (tabinfo) => {

                        return <Icon2 name="handshake" size={25}
                            color={tabinfo.focused ? "#40BFFF" : "gray"} style={{
                                marginTop: 10
                            }} />
                    }
                }} />
            <MyTab.Screen name="Room" component={RoomScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Room',
                    tabBarLabelStyle: {
                        marginBottom: 10,
                        fontFamily: 'Poppins-Bold',
                    },
                    tabBarActiveBackgroundColor: AppColors.BtnClr,
                    tabBarLabelPosition: "below-icon",
                    tabBarActiveTintColor: AppColors.FontsColor,
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        height: 70,
                        backgroundColor: AppColors.BtnClr
                    },
                    tabBarIcon: (tabinfo) => {

                        return <Ionic name="person-outline" size={25}
                            color={tabinfo.focused ? "#40BFFF" : "gray"} style={{
                                marginTop: 10
                            }} />
                    }
                }} />
            <MyTab.Screen name="Learn" component={LearnScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Learn',
                    tabBarLabelStyle: {
                        marginBottom: 10,
                        fontFamily: 'Poppins-Bold',
                    },
                    tabBarActiveBackgroundColor: AppColors.BtnClr,
                    tabBarLabelPosition: "below-icon",
                    tabBarActiveTintColor: AppColors.FontsColor,
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        height: 70,
                        backgroundColor: AppColors.BtnClr
                    },
                    tabBarIcon: (tabinfo) => {

                        return <Ionic name="person-outline" size={25}
                            color={tabinfo.focused ? "#40BFFF" : "gray"} style={{
                                marginTop: 10
                            }} />
                    }
                }} />
        </MyTab.Navigator>

    );
}
export default BottomTab;
