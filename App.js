import React, {
  useContext,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import {StatusBar} from 'react-native';
import {AuthProvider} from './Navigations/AuthProvider';
import {Provider} from 'react-redux';
import Routes from './Navigations/Routes';
import AppColors from './Constaint/AppColors';
import {store} from './Redux/store';
import {reducer, intialState} from './Redux/userReducer';
import {chatreducer, chatintialState} from './Redux/chatReducer';
import {articlereducer, articleintialState} from './Redux/articlereducer';
import { newsreducer,newsintialState } from './Redux/newsReducer';
import {savedarticlereducer,savedarticleintialState} from './Redux/savedarticlereducer';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import axios from 'axios';

export const UserContext = createContext();
export const NewsContext = createContext();
export const ChatContext = createContext();
export const ArticleContext = createContext();
export const SavedArticleContext = createContext();

const Routing = () => {
  const {state, dispatch} = useContext(UserContext);
  const {newsstate, newsdispatch} = useContext(NewsContext);
  const {chatstate, chatdispatch} = useContext(ChatContext);
  const {articlestate, articledispatch} = useContext(ArticleContext);
  const {savedarticlestate,savedarticledispatch} = useContext(SavedArticleContext);
  async function loadChatUser(list) {
    list.forEach(async user => {
      const User = await firestore().collection('Users').doc(user).get();
      delete User._data.password;
      chatdispatch({type: 'UPDATE', payload: User._data});
    });
  }

  async function loadsavedarticle(articles){
    articles.map(async(id)=>{
      const res = await firestore().collection('Blogs').doc(id).get();
      savedarticledispatch({type:"UPDATE",payload:res.data()});
    })
  }

  const options = {
    method: 'GET',
    url: 'https://api.bing.microsoft.com/v7.0/news/search',
    params: {q: 'startup',safeSearch: 'Off', textFormat: 'Raw'},
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key':'bd03e8f8f29b46479ee4c2004280308f'
    }
  }; 

  useEffect(() => {
    async function getUser() {
      try {
        const udata = await auth().currentUser;
        const savedUser = await firestore()
          .collection('Users')
          .doc(udata.email)
          .get();

        savedUser._data.userType == 'Mentor'
          ? loadChatUser(savedUser._data.clients)
          : loadChatUser(savedUser._data.mentors);

        dispatch({type: 'USER', payload: savedUser._data});
        loadsavedarticle(savedUser._data.savedArticles);
      } catch (err) {
        console.log(err);
      }
    }



    async function getArticles() {
      await firestore()
        .collection('Blogs')
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            articledispatch({type: 'UPDATE', payload: doc.data()});
          });
        });

    }

    async function getNews(){
      try{
        const response = await axios.request(options);
        newsdispatch({type:"SET", payload:response.data.value});
      }catch(err){
        console.log(err);
      }

    }

    getNews();

    getArticles();

    getUser();

  }, []);
  return <Routes />;
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const [chatstate, chatdispatch] = useReducer(chatreducer, chatintialState);
  const [articlestate, articledispatch] = useReducer(articlereducer, articleintialState);
  const [savedarticlestate, savedarticledispatch] = useReducer(savedarticlereducer, savedarticleintialState);
  const [newsstate, newsdispatch] = useReducer(newsreducer, newsintialState);

  return (
    <Provider store={store} style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={AppColors.primarycolor}
      />
      <AuthProvider>
        <UserContext.Provider value={{state, dispatch}}>
          <ChatContext.Provider value={{chatstate, chatdispatch}}>
            <ArticleContext.Provider value={{articlestate, articledispatch}}>
              <SavedArticleContext.Provider value={{savedarticlestate,savedarticledispatch}}>
                <NewsContext.Provider value={{newsstate,newsdispatch}}>
                  <Routing />
                </NewsContext.Provider>
            </SavedArticleContext.Provider>
            </ArticleContext.Provider>
          </ChatContext.Provider>
        </UserContext.Provider>
      </AuthProvider>
    </Provider>
  );
};

export default App;
