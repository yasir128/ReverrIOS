import {View, Text} from 'react-native';
import React, {useState} from 'react';
import MentorsList from './MentorsList';
import MentorsProfile from './MentorsProfile';
import firestore from '@react-native-firebase/firestore';

const Mentors = props => {
  const [profile, setprofile] = useState(false);
  const [Mentorsdata, setMentorsdata] = useState([]);

  const GetAllMentors = async () => {
    const data = await firestore().collection('Users').get();
    setMentorsdata(data._docs._data);
    console.log(Mentorsdata);
  };

  GetAllMentors();
  return (
    <View>
      {profile ? (
        <MentorsProfile
          onBack={() => {
            setprofile(false);
          }}
        />
      ) : (
        <MentorsList
          onBack={props.onBack}
          onPress={() => {
            setprofile(true);
          }}
        />
      )}
    </View>
  );
};

export default Mentors;
