import { combineReducers } from '@reduxjs/toolkit';
import showsReducer from './showsSlice';
import userReducer from './userSlice';

export default combineReducers({
  shows: showsReducer,
  user: userReducer,
});
