export const intialState = null;

export const reducer = (state, action) => {
  if (action.type === 'USER') {
    return action.payload;
  }
  if (action.type === 'CLEAR') {
    return null;
  }
  if (action.type === 'UPDATE') {
    return {
      ...state,
     name:action.payload.name,
     about:action.payload.about,
     experience:action.payload.experience,
     education:action.payload.education,
     industry:action.payload.industry,
     skills:action.payload.skills
    }

  }
  if (action.type === 'UPDATEPHOTO') {
    return {
      ...state,
      image:action.payload
    }
  }
  if (action.type === 'MEETING') {
    return {
      ...state,
      meeting: action.payload.meeting,
    };
  }
  if (action.type === 'SAVEARTICLE') {
    console.log(action.payload+" added to saves");
    return {
      ...state,
      savedArticles:[
        ...state.savedArticles,
        action.payload,
      ]
    };
  }
  if (action.type === 'REMOVEARTICLE') {
    console.log(action.payload+" removed from saves");
    return {
      ...state,
      savedArticles:[
        ...state.savedArticles.filter(arti=>arti!=action.payload)
      ]
    };
  }
  if (action.type === 'SAVEBOOK') {
    return {
      ...state,
      savedBooks:[
        ...state.savedBooks,
        action.payload,
      ]
    };
  }
  if (action.type === 'REMOVEARTICLE') {
    return {
      ...state,
      savedBooks:[
        ...state.savedBooks.filter(arti=>arti!=action.payload)
      ]
    };
  }
  if (action.type === 'SAVECOURSE') {
    return {
      ...state,
      savedCourses:[
        ...state.savedCourses,
        action.payload,
      ]
    };
  }
  if (action.type === 'REMOVEARTICLE') {
    return {
      ...state,
      savedCourses:[
        ...state.savedCourses.filter(arti=>arti!=action.payload)
      ]
    };
  }
  if (action.type === 'SAVEMENTOR') {
    return {
      ...state,
      savedMentors:[
        ...state.savedMentors,
        action.payload,
      ]
    };
  }
  if (action.type === 'REMOVEARTICLE') {
    return {
      ...state,
      savedMentors:[
        ...state.savedMentors.filter(arti=>arti!=action.payload)
      ]
    };
  }

  return state;
};
