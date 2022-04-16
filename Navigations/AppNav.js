import {Image} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../App';
import MentorNav from './MentorNav';
import LearnerNav from './LearnerNav';

const AppNav = () => {
  const {state, dispatch} = useContext(UserContext);

  return state && state.userType == 'Mentor' ? <MentorNav /> : <LearnerNav />;
};
export default AppNav;
