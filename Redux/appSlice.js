import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  Artical: 'dhk',
  Users: [],
};
export const ArticalSlice = createSlice({
  name: 'ArticalReducer',
  initialState,
  reducers: {
    setArtical: (state, action) => {
      state.Artical = action.payload;
    },
    setUsers: (state, action) => {
      state.Users = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setArtical, setUsers} = ArticalSlice.actions;

export default ArticalSlice.reducer;
