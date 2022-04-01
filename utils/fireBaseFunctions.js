import auth from '@react-native-firebase/auth';
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

export const GetUser = async setData => {
  const udata = await auth().currentUser;
  const savedUser = await firestore()
    .collection('Users')
    .doc(udata.email)
    .get();
  setData(savedUser._data);
};

export const ChangeDp = (loading, setLoading) => {
  ImagePicker.openPicker({
    cropping: true,
  }).then(image => {
    try {
      loading;
      const url = image.path;
      const imageURL = url.substring(url.lastIndexOf('/') + 1);
      storage()
        .ref('Images/' + imageURL)
        .putFile(url)
        .then(async () => {
          const udata = await auth().currentUser;
          var userEmail = udata.email;
          var imgURL = await storage()
            .ref('Images/' + imageURL)
            .getDownloadURL();
          await firestore().collection('Users').doc(userEmail).update({
            image: imgURL,
          });
          setLoading(false);
          alert('changed');
        });
    } catch (error) {
      console.log(error);
    }
  });
};

export const GetAllMentors = async setFn => {
  const subscriber = await firestore()
    .collection('Users')
    .onSnapshot(querySnapshot => {
      const users = [];
      querySnapshot.forEach(documentSnapshot => {
        users.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
      setFn(users.filter(y => y.userType == 'mentor'));
    });
};
export const UpdateUserData = async (
  name,
  about,
  industry,
  experience,
  skills,
  education,
) => {
  const udata = await auth().currentUser;
  const savedUser = await firestore()
    .collection('Users')
    .doc(udata.email)
    .update({
      name: name,
      about: about,
      industry: industry,
      experience: experience,
      skills: skills,
      education: education,
    });
};
