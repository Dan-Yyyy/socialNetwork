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
      return { ...state, ...action.data }
    default:
      return state
  }
}

export const setUserAuthData = (idUser, email, login, isAuth) => ({type: LOGIN_USER, data: {idUser, email, login, isAuth}});

export const authLogin = () => {
  return async (dispatch) => {
    const response = await authAPI.me();
    if(response.resultCode === 0) {
      let { email, id, login } = response.data;
      dispatch(setUserAuthData(id, email, login, true));
    }
  }
};

export const login = (email, password, rememberMe) => {
  return async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe);
    if(response.resultCode === 0) {
      dispatch(authLogin());
    }
  }
};

export const logout = () => {
  return async (dispatch) => {
    const response = await authAPI.logout();
    if(response.resultCode === 0) {
      dispatch(setUserAuthData(null, null, null, false));
    };
  };
};

export default authReduser;