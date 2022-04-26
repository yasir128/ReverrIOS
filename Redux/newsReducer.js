export const newsintialState = [];

export const newsreducer = (state, action) => {
  if (action.type === 'SET') {
      console.log("setting news")
    return action.payload;
  }
  if (action.type === 'CLEAR') {
    return null;
  }
  if (action.type === 'UPDATE') {
      console.log("Added news");
    return [...state, action.payload];
  }
  return state;
};