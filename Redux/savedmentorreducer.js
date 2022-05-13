export const savedmentorintialState = [];

export const savedmentorreducer = (state, action) => {
  if (action.type === 'SET') {
    return action.payload;
  }
  if (action.type === 'CLEAR') {
    return null;
  }
  if (action.type === 'UPDATE') {
    return [...state, action.payload];
  }
  
  if (action.type === 'REMOVE') {
    return [
        ...state.filter(arti=>arti!=action.payload)
      ];
  }
  return state;
};
