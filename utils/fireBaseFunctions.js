import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

export const GetUser = async () => {
  const udata = await auth().currentUser;
  var userEmail = udata.email;
  const savedUser = await firestore().collection('Users').doc(userEmail).get();
  return savedUser._data;
};

export const ChangeDp = () => {
  ImagePicker.openPicker({
    cropping: true,
  }).then(image => {
    try {
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
          alert('changed');
        });
    } catch (error) {
      console.log(error);
    }
  });
};
