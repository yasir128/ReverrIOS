import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import BottomTab from './BottomTab';
import Home from '../Screens/HomeScreens/Home';
import IndividuaProfile from '../Screens/ProfileScreens/IndividuaProfile';
import MentorProfile from '../Screens/ProfileScreens/MentorProfile';
import Settings from '../Screens/ProfileScreens/Settings';


const StackNavigation = createNativeStackNavigator();


const AppStackNav = () => {
    return (
        <NavigationContainer>
            <StackNavigation.Navigator>
                <StackNavigation.Screen name='BottomTab' component={BottomTab}
                    options={{ headerShown: false }} />
                <StackNavigation.Screen name='Individual' component={IndividuaProfile}
                    options={{ headerShown: false }} />
                <StackNavigation.Screen name='MentorProfile' component={MentorProfile}
                    options={{ headerShown: false }} />
                <StackNavigation.Screen name='Setting' component={Settings}
                    options={{ headerShown: false }} />
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
};

export default AppStackNav;