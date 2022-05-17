import { configureStore } from '@reduxjs/toolkit'
import authReduser from './authReduser';
import dialogReducer from './dialogReducer';
import profileReduser from './profileReducer';
import usersReduser from './usersReducer';

export const store = configureStore({
  reducer: {
    dialogPage: dialogReducer,
    profilePage: profileReduser,
    usersPage: usersReduser,
    auth: authReduser,
  },
})