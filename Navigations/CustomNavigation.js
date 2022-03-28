import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/HomeScreens/Home';
import MentorScreen from '../Screens/MentorScreens/MentorScreen';
import VibeScreen from '../Screens/VibeScreens/VibeScreen';
import RoomScreen from '../Screens/RoomScreens/RoomScreen';
import LearnScreen from '../Screens/LearnScreens/LearnScreen';
import IndividuaProfile from '../Screens/ProfileScreens/IndividuaProfile';
import Settings from '../Screens/ProfileScreens/Settings';
import MentorProfile from '../Screens/ProfileScreens/MentorProfile';
import ChatList from '../Screens/ChatScreens/ChatList';
import ChatBox from '../Screens/ChatScreens/ChatBox';
import GroupChatBox from '../Screens/ChatScreens/GroupChatBox';
import EditProfile from '../Screens/ProfileScreens/EditProfile';
import ArticalDetailsScreen from '../Screens/HomeScreens/TopTabScreens/ArticalDetailsScreen';
import MentorsList from '../Screens/MentorScreens/MentorsList';
import MentorDetails from '../Screens/MentorScreens/MentorDetails';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Individual"
        component={IndividuaProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Mentor"
        component={MentorProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Setting"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chat"
        component={ChatList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatBox"
        component={ChatBox}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GroupChatBox"
        component={GroupChatBox}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ArticalDetails"
        component={ArticalDetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export const MentorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Mentor"
        component={MentorScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="List"
        component={MentorsList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MentorsProfile"
        component={MentorDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export const VibeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Vibe"
        component={VibeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export const RoomStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Room"
        component={RoomScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export const LearnStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Learn"
        component={LearnScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
