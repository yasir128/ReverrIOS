import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MentorScreen from '../Screens/MentorScreens/MentorScreen';
import LearnScreen from '../Screens/LearnScreens/LearnScreen';
import IndividuaProfile from '../Screens/ProfileScreens/IndividuaProfile';
import Settings from '../Screens/ProfileScreens/Settings';
import ChatList from '../Screens/ChatScreens/ChatList';
import ChatBox from '../Screens/ChatScreens/ChatBox';
import GroupChatBox from '../Screens/ChatScreens/GroupChatBox';
import EditProfile from '../Screens/ProfileScreens/EditProfile';
import ArticalDetailsScreen from '../Screens/HomeScreens/TopTabScreens/ArticalDetailsScreen';
import MentorsList from '../Screens/MentorScreens/MentorsList';
import ArticleScreen from '../Screens/HomeScreens/TopTabScreens/ArticleScreen';
import ArticleScreen2 from '../Screens/HomeScreens/TopTabScreens/ArticleScreen2';
import MentorDetails from '../Screens/MentorScreens/MentorDetails';
import FundingScreen from '../Screens/FundingScreens/FundingScreen';
import Dashboard from '../Screens/HomeScreens/Dashboard';
import ApplyFunding from '../Screens/FundingScreens/ApplyFunding';
import Plans from '../Screens/MentorScreens/Plans';
import {VideoCall} from '../Screens/videocall/videoCall';
import PlansDetails from '../Screens/MentorScreens/PlansDetails';
import Subscription from '../Screens/SubscriptionScreen/Subscription';
import ViewIndividuaProfile from '../Screens/ProfileScreens/ViewProfile';
import SavedScreen from '../Screens/ProfileScreens/SavedScreen';
import Notification from '../Screens/Notification';
import NewsDetailScreen from '../Screens/HomeScreens/TopTabScreens/NewsDetailsScreen';
import Webview from '../Screens/WebView';
import StartCourse from '../Screens/LearnScreens/StartCourse';
import OpenBook from '../Screens/LearnScreens/OpenBook';
import ReadingInstruction from '../Screens/LearnScreens/ReadingInstruction';
import Room from '../Screens/RoomScreens/Room';
import CreatePost from '../Screens/RoomScreens/CreatePost';
import Room2 from '../Screens/RoomScreens/Room2';
<<<<<<< HEAD
import SkeltonLoader from '../Componants/SkeltonLoader';
import AlertBox from '../Componants/AlertBox';
=======
import Courses from '../Screens/LearnScreens/Courses';
import MentorsList2 from '../Screens/MentorScreens/MentorsList2';
>>>>>>> 1d18fd7e30c6693820b639efbcb1e465b5c48ee5

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DashBoard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Alert"
        component={AlertBox}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Individual"
        component={IndividuaProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewIndividual"
        component={ViewIndividuaProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Setting"
        component={Settings}
        options={{
          headerShown: false,
        }}
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
        name="videoCall"
        component={VideoCall}
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
        name="NewsDetails"
        component={NewsDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Webview"
        component={Webview}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ArticalDetails"
        component={ArticalDetailsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Artical"
        component={ArticleScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Artical2"
        component={ArticleScreen2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Subscription"
        component={Subscription}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Saved"
        component={SavedScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="savedposts"
        component={Room2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="openBook"
        component={OpenBook}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="courses"
        component={Courses}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="savedmentorlist"
        component={MentorsList2}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export const MentorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FindMentor"
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
      <Stack.Screen
        name="Plans"
        component={Plans}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PlanDetails"
        component={PlansDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export const FundingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FundingScreen"
        component={FundingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Apply"
        component={ApplyFunding}
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
        component={Room}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreatePost"
        component={CreatePost}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="demo"
        component={SkeltonLoader}
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
      <Stack.Screen
        name="StartCourse"
        component={StartCourse}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="instruction"
        component={ReadingInstruction}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="openBook"
        component={OpenBook}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
