import React from 'react';
import {StatusBar} from 'react-native';
import {AuthProvider} from './Navigations/AuthProvider';
import {Provider} from 'react-redux';
import Routes from './Navigations/Routes';
import AppColors from './Constaint/AppColors';
import {store} from './Redux/store';

const App = () => {
  return (
    <Provider store={store} style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={AppColors.primarycolor}
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Provider>
  );
};
export default App;
