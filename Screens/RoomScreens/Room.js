import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import AppColors from '../../Constaint/AppColors';
import Backbtn from '../../Componants/Backbtn';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import CustomMenuBar from '../../Componants/CustomMenuBar';
import {postData} from '../../dummy-data/postData';
import CreatePostButton from '../../Componants/LearnComponents/CreatePostButton';
import {smallString} from '../../utils/helper';
import CustomModal from './CustomModal';
import firestore from '@react-native-firebase/firestore';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {UserContext} from '../../App';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

const Room = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [features, setFeatures] = useState(true);
  const [subs, setSubs] = useState(false);
  const [message, setMessage] = useState();
  const [writeComments, setWriteComments] = useState(false);
  const navigation = useNavigation();
  const {state, dispatch} = useContext(UserContext);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const list = [];
      await firestore()
        .collection('Posts')
        .orderBy('createdat', 'desc')
        .get()
        .then(querySnapshot => {
          // console.log('Total Posts: ', querySnapshot.size);

          querySnapshot.forEach(doc => {
            let post = doc.data();
            post.id = doc.id;
            if (post.postedby) {
              post.postedby
                .get()
                .then(res => {
                  let response = res.data();
                  delete response.password;
                  post.postedby = response;
                  if (post.comments.length > 0) {
                    post.comments.forEach(comment => {
                      comment.commentedby
                        .get()
                        .then(res => {
                          let commentor = res.data();
                          delete commentor.password;
                          comment.commentedby = commentor;
                        })
                        .catch(err => console.log(err));
                    });
                  }
                  console.log(post);
                  list.push(post);
                  setPosts(list);
                  if (loading) {
                    setLoading(false);
                  }
                })
                .catch(err => console.error(err));
            } else {
              list.push(post);
              setPosts(list);
              if (loading) {
                setLoading(false);
              }
            }
          });
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPosts();
    setDeleted(false);
  }, [deleted]);

  const handleDelete = postId => {
    Alert.alert(
      'Delete post',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed!'),
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => deletePost(postId),
        },
      ],
      {cancelable: false},
    );
  };

  const deletePost = postId => {
    console.log('Current Post Id: ', postId);

    firestore()
      .collection('Posts')
      .doc(postId)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          const {image} = documentSnapshot.data();

          if (image != null) {
            const storageRef = storage().refFromURL(image);
            const imageRef = storage().ref(storageRef.fullPath);

            imageRef
              .delete()
              .then(() => {
                console.log(`${image} has been deleted successfully.`);
                deleteFirestoreData(postId);
              })
              .catch(e => {
                console.log('Error while deleting the image. ', e);
              });
            // If the post image is not available
          } else {
            deleteFirestoreData(postId);
          }
        }
      });
  };

  const deleteFirestoreData = postId => {
    firestore()
      .collection('Posts')
      .doc(postId)
      .delete()
      .then(() => {
        Alert.alert(
          'Post deleted!',
          'Your post has been deleted successfully!',
        );
        setDeleted(true);
      })
      .catch(e => console.log('Error deleting post.', e));
  };

  const likePost = async (postId, post) => {
    var list = [];

    if (post.likes.includes(state.email)) {
      list = post.likes.filter(like => like != state.email);
    } else {
      list = [...post.likes, state.email];
    }

    console.log(list);

    try {
      await firestore().collection('Posts').doc(postId).update({likes: list});
      var list2 =[]; 
      posts.map(post=>{
        if(post.id==postId){
          post.likes=list;
        }
        list2.push(post);
      });
      setPosts(list2);

    } catch (err) {
      console.log(err);
    }
  };

  const commentPost = async (postId, post, text) => {
    var list = [];

    console.log(text);

    var comment = {
      commentedby: firestore().collection('Users').doc(state.email),
      commentid: generateString(8),
      text,
    };

    setMessage('');

    list = [...post.comments, comment];
    console.log(list);

    try {
      await firestore()
        .collection('Posts')
        .doc(postId)
        .update({comments: list});

        var list2 =[]; 
        posts.map(post=>{
          if(post.id==postId){
            post.comments=list;
          }
          list2.push(post);
        });
        setPosts(list2);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCommentPost = async (postId, post, commentid) => {
    var list = [];

    list = post.comments.filter(comment => comment.commentid != commentid);

    console.log(list);

    try {
      await firestore()
        .collection('Posts')
        .doc(postId)
        .update({comments: list});
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.screen}>
        <View style={styles.header}>
          <Backbtn
            IconSize={30}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text
            style={{
              color: AppColors.FontsColor,
              marginStart: Width / 3.5,
              fontFamily: 'Poppins-SemiBold',
              fontSize: 21,
            }}>
            Room 
          </Text>
        </View>
        <CustomMenuBar
          Item1="Featured"
          Item2="Discussion"
          active1={features}
          active2={subs}
          ClickOnItem1={() => {
            setFeatures(true);
            setSubs(false);
          }}
          ClickOnItem2={() => {
            setSubs(true);
            setFeatures(false);
          }}
        />
        <ScrollView style={{marginTop: '5%'}}>
          {posts &&
            posts.map((item, index) => 
            {
              console.log(index)
            return(
              <LinearGradient
                key={index}
                colors={[AppColors.primarycolor, '#012437']}
                start={{x: -3, y: 1.3}}
                end={{x: 3, y: 0.5}}
                style={styles.postCard}>
                <View style={styles.creatorDetails}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={styles.dp}
                      source={{uri: item.postedby.image}}
                    />
                    <View style={{marginStart: '3%'}}>
                      <Text style={styles.name}>{item.postedby.name}</Text>
                      <Text style={styles.company}>
                        {item.postedby.designation}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity /* onPress={() => popupRef.onOpenModal()} */
                  >
                    <Icon2
                      name="ellipsis-vertical"
                      size={22}
                      color={AppColors.FontsColor}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.postContainer}>
                  {item.image !== '' && item.image !== undefined ? (
                    <View>
                      {item.text !== '' ? (
                        <View>
                          {seeMore ? (
                            <View style={[styles.image, {overflow: 'hidden'}]}>
                              <ImageBackground
                                style={{width: '100%', height: '100%'}}
                                source={{uri: item.image}}>
                                <View style={{paddingHorizontal: '5%'}}>
                                  <Text style={styles.details}>
                                    {item.text}
                                  </Text>
                                  <TouchableOpacity
                                    onPress={() => {
                                      setSeeMore(false);
                                    }}>
                                    <Text style={styles.company}>Hide</Text>
                                  </TouchableOpacity>
                                </View>
                              </ImageBackground>
                            </View>
                          ) : (
                            <View>
                              <Image
                                style={styles.image}
                                source={{uri: item.image}}
                              />
                              <View>
                                <Text style={styles.details}>
                                  {smallString(item.text, 100)}
                                </Text>
                                <TouchableOpacity
                                  onPress={() => {
                                    setSeeMore(true);
                                  }}>
                                  <Text style={styles.company}>See More</Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                          )}
                        </View>
                      ) : (
                        <Image
                          style={styles.image}
                          source={{uri: item.image}}
                        />
                      )}
                    </View>
                  ) : (
                    <View>
                      <Text style={styles.details}>{item.text}</Text>
                    </View>
                  )}
                </View>
                <View style={styles.IconContainer}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity
                      onPress={()=>likePost(item.id, item)}
                    >
                      <Icon
                        name="heart"
                        size={22}
                        color={AppColors.FontsColor}
                      />
                    </TouchableOpacity>
                    <Text style={[styles.name, {marginStart: '8%'}]}>
                      {item.likes.length}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity
                      onPress={() => {
                        setWriteComments(true);
                      }}>
                      <Icon
                        name="comment"
                        size={22}
                        color={AppColors.FontsColor}
                      />
                    </TouchableOpacity>
                    <Text style={[styles.name, {marginStart: '8%'}]}>
                      {item.comments.length}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity>
                      <Icon
                        name="share-square"
                        size={22}
                        color={AppColors.FontsColor}
                      />
                    </TouchableOpacity>
                    <Text style={[styles.name, {marginStart: '8%'}]}>
                      {item.share}
                    </Text>
                  </View>
                </View>
                {writeComments && (
                  <View
                    style={{
                      width: '100%',
                      paddingVertical: 2,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <TextInput
                      placeholder="Write Something"
                      style={{color: AppColors.FontsColor}}
                      placeholderTextColor={AppColors.infoFonts}
                      value={message}
                      onChangeText={e => {
                        setMessage(e);
                      }}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity 
                        onPress={()=>{commentPost(item.id, item, message )}}
                      >
                        <Icon3
                          name="send"
                          size={22}
                          color={AppColors.FontsColor}
                        />
                      </TouchableOpacity>
                      {/* <TouchableOpacity>
                        <Icon3
                          name="close"
                          size={22}
                          color={AppColors.FontsColor}
                        />
                      </TouchableOpacity> */}
                    </View>
                  </View>
                )}
              </LinearGradient>
            )})
                    
          }
        </ScrollView>
        <CreatePostButton
          style={styles.createBtn}
          onPress={() => {
            navigation.navigate('CreatePost');
          }}
        />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primarycolor,
  },
  header: {
    flexDirection: 'row',
  },
  btnContainer: {
    marginTop: '2.5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  btn: {
    flexDirection: 'row',
    paddingHorizontal: '4%',
    paddingVertical: '3%',
    borderRadius: 10,
  },
  postCard: {
    marginTop: '4%',
    borderRadius: 20,
    marginHorizontal: '2%',
    paddingHorizontal: '3%',
    paddingVertical: '3%',
  },
  postContainer: {
    marginTop: 10,
    paddingVertical: '5%',
    borderTopColor: AppColors.FontsColor,
    borderTopWidth: 2,
    borderBottomColor: AppColors.FontsColor,
    borderBottomWidth: 2,
  },
  creatorDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dp: {
    height: Height / 14,
    width: Width / 7,
    borderRadius: 56,
  },
  name: {
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
  },
  company: {
    color: AppColors.infoFonts,
    fontFamily: 'Poppins-Regular',
  },
  image: {
    width: '100%',
    height: Height / 4,
    borderRadius: 10,
  },
  details: {
    marginTop: '3%',
    color: AppColors.FontsColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  createBtn: {
    bottom: 20,
    right: 12,
  },
  IconContainer: {
    flexDirection: 'row',
    paddingVertical: '2%',
  },
});
export default Room;
