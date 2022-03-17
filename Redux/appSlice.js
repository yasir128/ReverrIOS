import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  Artical: 'dhk',
};
export const ArticalSlice = createSlice({
  name: 'ArticalReducer',
  initialState,
  reducers: {
    setArtical: (state, action) => {
      state.Artical = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setArtical} = ArticalSlice.actions;

export default ArticalSlice.reducer;
