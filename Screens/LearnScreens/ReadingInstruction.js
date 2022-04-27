import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AppColors from '../../Constaint/AppColors';
import Backbtn from '../../Componants/Backbtn';

const ReadingInstruction = props => {
  const bookData = props.route.params.BookData;
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.replace('openBook', {
      BookData: bookData.page,
    });
  }, 1000);
  return (
    <View style={styles.screen}>
      <Backbtn
        IconSize={30}
        onPress={() => {
          navigation.goBack();
        }}
        style={{marginVertical: '5%'}}
      />
      <View style={{flex: 1, paddingHorizontal: '4%', paddingVertical: '2%'}}>
        <View style={styles.container}>
          <View style={styles.p}>
            <Text style={styles.text}>Tap to go back</Text>
          </View>
          <View style={styles.n}>
            <Text style={styles.text}>Tap to go forward</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  container: {
    backgroundColor: AppColors.BtnClr,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 30,
  },
  p: {
    width: '40%',
    marginVertical: '20%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: '20%',
    borderRightColor: 'gray',
    borderRightWidth: 4,
  },
  n: {
    width: '50%',
    marginVertical: '20%',
    paddingTop: '20%',
    paddingStart: '12%',
  },
  text: {
    color: 'black',
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
  },
});
export default ReadingInstruction;
