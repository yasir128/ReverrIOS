export const intialState = null

export const reducer =(state,action)=>{
  if(action.type==="USER"){
      console.log("user data added ")
    return action.payload
  }
  if(action.type==="CLEAR"){
    return null
  }
  if(action.type==="UPDATE"){
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
  if(action.type==="UPDATEPHOTO"){
    return{
      ...state,
      photo:action.payload
    }
  }
  if(action.type==="UPDATEPROFILE"){
    return{
      ...state,
      description:action.payload.description,
      city:action.payload.city,
      dob:action.payload.dob
    }
  }
  if(action.type==="MEETING"){
    return{
      ...state,
      meeting:action.payload.meeting
    }
  }
  return state
}
