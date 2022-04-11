import {View, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../Componants/HomeScreenComponants/Header';
import AppColors from '../../Constaint/AppColors';
import {useNavigation} from '@react-navigation/native';
import {GetUser} from '../../utils/fireBaseFunctions';
import CalanderScreen from '../CalanderScreen/CalanderScreen';
import ModelView from '../../Componants/ModelView';

const HeaderLayout = props => {
  const [AllData, setAllData] = useState();
  const [qoute, setQoute] = useState('loading...');
  const [modelVisible, setModelVisible] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    GetUser(setAllData);
  }, [qoute]);

  return (
    <View style={styles.screen}>
      <Header
        onPressDp={() => {
          navigation.navigate(AllData && AllData.userType, {Data: AllData});
        }}
        onPressCalander={() => {
          setModelVisible(true);
        }}
        onPressNoti={() => {
          console.log('Notification');
        }}
        onPressChat={() => {
          navigation.navigate('Chat');
        }}
        DpUrl={AllData && AllData.image}
      />
      <ModelView
        ShowModal={modelVisible}
        onCloseModal={() => {
          setModelVisible(false);
        }}>
        <CalanderScreen
          onClose={() => {
            setModelVisible(false);
          }}
        />
      </ModelView>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
});

export default HeaderLayout;
