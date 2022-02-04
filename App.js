import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { AuthProvider } from './Navigations/AuthProvider';
import Routes from './Navigations/Routes';
import AppColors from './Constaint/AppColors';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' backgroundColor={AppColors.primarycolor} />
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </View>
  );
};

export default App;
