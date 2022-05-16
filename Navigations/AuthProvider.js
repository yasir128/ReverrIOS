import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AlertBox from '../Componants/AlertBox';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            if (e.code === 'auth/wrong-password') {
              // <AlertBox text="Wrong password try again!" />;
              alert('Wrong password try again!');
            }
            if (e.code === 'auth/user-not-found') {
              // <AlertBox text="No user registered with that email" />;
              alert('No user registered with that email');
            }
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
            // .then(()=>{
            //     console.log(auth().currentUser);
            // })
          } catch (e) {
            if (e.code === 'auth/email-already-in-use') {
              //<AlertBox text="Email id already used" />;
              alert('Email id already used');
            }

            if (e.code === 'auth/invalid-email') {
              //<AlertBox text="Invalid-email !" />;
              alert('Invalid-email !');
            }
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
        updatePassword: async Password => {
          try {
            await auth()
              .currentUser.updatePassword(Password)
              .then(() => {
                // <AlertBox text="Password Change Sucessfully." />;
                alert('Password Change Sucessfully.');
              });
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
