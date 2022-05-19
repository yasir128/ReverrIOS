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
    return {
      ...state,
      savedArticles:[
        ...state.savedArticles,
        action.payload,
      ]
    };
  }
  if (action.type === 'REMOVEARTICLE') {
    return {
      ...state,
      savedArticles:[
        ...state.savedArticles.filter(arti=>arti!=action.payload)
      ]
    };
  }
  if (action.type === 'SAVEPOST') {
    return {
      ...state,
      savedPosts:[
        ...state.savedPosts,
        action.payload,
      ]
    };
  }
  if (action.type === 'REMOVEPOST') {
    return {
      ...state,
      savedPosts:[
        ...state.savedPosts.filter(arti=>arti!=action.payload)
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
  if (action.type === 'REMOVECOURSE') {
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
  if (action.type === 'REMOVEMENTOR') {
    return {
      ...state,
      savedMentors:[
        ...state.savedMentors.filter(arti=>arti!=action.payload)
      ]
    };
  }
  if (action.type === 'NEWPAYMENT') {
    return {
      ...state,
      orders:[
        ...state.orders,
        action.payload,
      ]
    };
  }

  return state;
};
