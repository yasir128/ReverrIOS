export const savedpostintialState = [];

export const savedpostreducer = (state, action) => {
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
        ...state.filter(post=>post!=action.payload)
      ];
  }
  return state;
};
