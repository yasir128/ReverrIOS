import {View, Text} from 'react-native';
import React, {useState} from 'react';
import MentorsList from './MentorsList';
import MentorsProfile from './MentorsProfile';
import {GetAllMentors} from '../../utils/fireBaseFunctions';

const Mentors = props => {
  const [profile, setProfile] = useState(false);

  return (
    <View>
      {profile ? (
        <MentorsProfile
          onBack={() => {
            setProfile(false);
          }}
        />
      ) : (
        <MentorsList
          onBack={props.onBack}
          onPress={() => {
            setProfile(true);
          }}
        />
      )}
    </View>
  );
};

export default Mentors;
