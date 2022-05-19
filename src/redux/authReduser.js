import { authAPI } from './../api/authApi';

const LOGIN_USER = 'LOGIN-USER';

const initialState = {
  idUser: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReduser = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_USER: 
      return { ...state, ...action.data, isAuth: true }
    default:
      return state
  }
}

export const setUserAuthData = (idUser, email, login) => ({type: LOGIN_USER, data: {idUser, email, login}});

export const authLogin = () => {
  return (dispatch) => {
    authAPI.login().then(response => {
      if(response.resultCode === 0) {
        let { id, email, login } = response.data;
        dispatch(setUserAuthData(id, email, login));
      }
    })
  }
}

export default authReduser;