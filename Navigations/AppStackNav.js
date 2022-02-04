import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import BottomTab from './BottomTab';
import Home from '../Screens/HomeScreens/Home';


const StackNavigation = createNativeStackNavigator();


const AppStackNav = () => {
    return (
        <NavigationContainer>
            <StackNavigation.Navigator>
                <StackNavigation.Screen name='BottomTab' component={BottomTab}
                    options={{ headerShown: false }} />
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
};

export default AppStackNav;