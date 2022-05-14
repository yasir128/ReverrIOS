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
import { courseintialState, coursereducer } from './Redux/coursereducer';
import {savedarticlereducer,savedarticleintialState} from './Redux/savedarticlereducer';
import { savedpostreducer, savedpostintialState } from './Redux/savedpostreducer';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import axios from 'axios';
import { savedcourseintialState, savedcoursereducer } from './Redux/savedcoursereducer';
import { savedmentorintialState, savedmentorreducer } from './Redux/savedmentorreducer';

export const UserContext = createContext();
export const NewsContext = createContext();
export const ChatContext = createContext();
export const ArticleContext = createContext();
export const SavedArticleContext = createContext();
export const SavedPostContext = createContext();
export const CourseContext = createContext();
export const SavedCourseContext = createContext();
export const SavedMentorContext = createContext();

const Routing = () => {
  const {state, dispatch} = useContext(UserContext);
  const {newsstate, newsdispatch} = useContext(NewsContext);
  const {chatstate, chatdispatch} = useContext(ChatContext);
  const {articlestate, articledispatch} = useContext(ArticleContext);
  const {savedarticlestate,savedarticledispatch} = useContext(SavedArticleContext);
  const {savedpoststate,savedpostdispatch} = useContext(SavedPostContext);
  const {coursestate, coursedispatch} = useContext(CourseContext);
  const {savedcoursestate, savedcoursedispatch} = useContext(SavedCourseContext);
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

  async function loadsavedcourse(courses){
    courses.map(async(id)=>{
      const res = await firestore().collection('Courses').doc(id).get();
      savedcoursedispatch({type:"UPDATE",payload:res.data()});
    })
  }

  async function loadsavedmentor(mentors){
    mentors.map(async(id)=>{
      const res = await firestore().collection('Users').doc(id).get();
      delete res.password;
      savedcoursedispatch({type:"UPDATE",payload:res.data()});
    })
  }

  async function loadsavedposts(posts){
    posts.map(async(id)=>{
      const res = await firestore().collection('Posts').doc(id).get();
      const post = res.data();
      post.id = res.id;

      let response =await post.postedby.get()
      response = response.data();
      delete response.password;
      post.postedby = response;

      if(post.comments.length>0)
        for(var i=0; i<post.comments.length; i++){
          let commentor= await post.comments[i].commentedby.get()
          commentor= commentor.data()
          delete commentor.password;
          post.comments[i].commentedby = commentor;
        }
      savedpostdispatch({type:"UPDATE",payload:post});
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
        loadsavedposts(savedUser._data.savedPosts);
        loadsavedcourse(savedUser._data.savedCourses);
        loadsavedmentor(savedUser._data.savedMentors);
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

    async function getCourse(){
      await firestore()
      .collection('Courses')
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          coursedispatch({type: 'UPDATE', payload: doc.data()});
        });
      });
    }

    getCourse();

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
  const [newsstate, newsdispatch] = useReducer(newsreducer, newsintialState);
  const [coursestate, coursedispatch] = useReducer(coursereducer, courseintialState);
  const [savedarticlestate, savedarticledispatch] = useReducer(savedarticlereducer, savedarticleintialState);
  const [savedpoststate, savedpostdispatch] = useReducer(savedpostreducer, savedpostintialState);
  const [savedcoursestate, savedcoursedispatch] = useReducer(savedcoursereducer, savedcourseintialState);
  const [savedmentorstate, savedmentordispatch] = useReducer(savedmentorreducer, savedmentorintialState);
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
                  <CourseContext.Provider value={{coursestate, coursedispatch}}>
                    <SavedPostContext.Provider value={{savedpoststate, savedpostdispatch}}>
                      <SavedCourseContext.Provider value={{savedcoursestate, savedcoursedispatch}}>
                        <SavedMentorContext.Provider value={{savedmentorstate, savedmentordispatch}}>
                          <Routing />
                        </SavedMentorContext.Provider>
                      </SavedCourseContext.Provider>
                    </SavedPostContext.Provider>
                  </CourseContext.Provider>
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
