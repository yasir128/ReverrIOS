export const savedarticleintialState = [];

export const savedarticlereducer = (state, action) => {
  if (action.type === 'SET') {
    return action.payload;
  }
  if (action.type === 'CLEAR') {
    return null;
  }
  if (action.type === 'UPDATE') {
    console.log(action.payload.id+" added");
    return [...state, action.payload];
  }
  
  if (action.type === 'REMOVE') {
    console.log(action.payload+" removed from saves");
    return [
        ...state.filter(arti=>arti!=action.payload)
      ];
  }
  return state;
};
