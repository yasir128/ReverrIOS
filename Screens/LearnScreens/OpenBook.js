import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import AppColors from '../../Constaint/AppColors';
import Backbtn from '../../Componants/Backbtn';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const OpenBook = props => {
  const bookData = props.route.params.BookData;
  //  console.log(bookData);
  const pagesRef = useRef();
  const [currIndex, setCurrIndex] = useState(0);
  const [progress, setProgress] = useState('10%');
  const Next = index => {
    setCurrIndex(index + 1);
    setProgress(((currIndex + 2) / 7) * 100 + '%');
    pagesRef.current.scrollToIndex({index: index + 1});
  };
  const Preious = index => {
    setCurrIndex(index - 1);
    setProgress((currIndex / 7) * 100 + '%');
    pagesRef.current.scrollToIndex({index: index - 1});
  };
  const navigation = useNavigation();
  return (
    <View style={styles.screen}>
      <Backbtn
        IconSize={30}
        onPress={() => {
          navigation.goBack();
        }}
      />
      {bookData && bookData.length > 0 && (
        <FlatList
          data={bookData}
          horizontal
          ref={pagesRef}
          pagingEnabled
          renderItem={({item, index}) => {
            return (
              <View style={styles.pageContainer}>
                <View style={styles.overlay}>
                  <TouchableOpacity
                    onPress={() => {
                      if (index > 0) {
                        Preious(index);
                      }
                    }}
                    style={styles.previous}></TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      if (index < bookData.length - 1) {
                        Next(index);
                      }
                    }}
                    style={styles.next}></TouchableOpacity>
                </View>
                <View style={styles.page}>
                  {item.type == 'TEXT' ? (
                    <>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.body}>{item.body}</Text>
                    </>
                  ) : (
                    <>
                      <Text style={styles.question}>{item.question}</Text>
                      <TouchableOpacity>
                        <Text>A. {item.option[0]}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text>B. {item.option[1]}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text>C. {item.option[2]}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text>D. {item.option[3]}</Text>
                      </TouchableOpacity>
                      <Text>{item.ans}</Text>
                    </>
                  )}
                </View>
              </View>
            );
          }}
        />
      )}
      <View style={styles.StatusContainer}>
        <View style={styles.progressContainer}>
          <View style={[styles.complete, {width: progress}]}></View>
        </View>
        <TouchableOpacity style={{marginStart: '12%'}}>
          <Icon2
            name="bookmark-outline"
            size={28}
            color={AppColors.ActiveColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    height: Height,
    flexDirection: 'row',
    zIndex: 7,
    width: Width,
    position: 'absolute',
  },
  previous: {
    height: Height,
    width: Width / 2,
  },
  next: {
    height: Height,
    width: Width / 2,
  },
  pageContainer: {
    width: Width,
    paddingHorizontal: '3%',
    paddingVertical: '5%',
  },
  page: {
    backgroundColor: AppColors.BtnClr,
    flex: 1,
    paddingHorizontal: '5%',
    paddingVertical: '9%',
    borderRadius: 30,
  },
  StatusContainer: {
    flexDirection: 'row',
    paddingVertical: '3%',
    alignItems: 'center',
    paddingHorizontal: '2%',
  },
  progressContainer: {
    height: 10,
    width: '76%',
    borderRadius: 20,
    backgroundColor: AppColors.BtnClr,
  },
  complete: {
    height: '100%',
    backgroundColor: AppColors.ActiveColor,
    borderRadius: 20,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: AppColors.primarycolor,
    fontSize: 22,
    alignSelf: 'center',
  },
  body: {
    marginTop: '10%',
    fontFamily: 'Poppins-Regular',
    color: AppColors.infoFonts,
    paddingHorizontal: '4%',
    fontSize: 16,
    alignSelf: 'center',
  },
  question: {
    fontFamily: 'Poppins-Bold',
    color: AppColors.primarycolor,
    fontSize: 22,
  },
});
export default OpenBook;
