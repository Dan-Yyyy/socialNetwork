import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import dialogReducer from './dialogReducer';
import profileReduser from './profileReducer';

const redusers = combineReducers({
  dialogPage: dialogReducer,
  profilePage: profileReduser
});

export const store = configureStore({
  reducer: redusers,
})