import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userAuthenticated: (user, action) => {
      user.user = action.payload;
    },
    loading: (user, action) => {
      user.isLoading = action.payload;
    },
  },
});

export const { userAuthenticated, loading } = userSlice.actions;

export default userSlice.reducer;

export const selectLoadingState = (state) => {
  return state.persistedReducer.user.isLoading;
};
