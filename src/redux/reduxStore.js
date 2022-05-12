import { configureStore } from '@reduxjs/toolkit'
import dialogReducer from './dialogReducer';
import profileReduser from './profileReducer';
import usersReduser from './usersReducer';

export const store = configureStore({
  reducer: {
    dialogPage: dialogReducer,
    profilePage: profileReduser,
    usersPage: usersReduser,
  },
})