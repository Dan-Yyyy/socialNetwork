import { configureStore } from '@reduxjs/toolkit'
import dialogReducer from './dialogReducer';
import profileReduser from './profileReducer';

export const store = configureStore({
  reducer: {
    dialogPage: dialogReducer,
    profilePage: profileReduser
  },
})