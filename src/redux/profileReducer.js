import { profileAPI } from './../api/profileApi';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

const initState = {
  postData: [
    { id: 1, message: "Text for post 1", likesCount: 0 },
    { id: 2, message: "Text for post 2", likesCount: 4 },
  ],
  newPost: "default",
  profile: null,
  status: '',
};

const profileReduser = (state = initState, action) => {
  switch(action.type) {
    case ADD_POST: 
      let post = state.newPost;
      return {
        ...state,
        newPost: '',
        postData: [...state.postData, {id: state.postData.length+1, message: post, likesCount: 0}],
      }
    case UPDATE_NEW_POST: 
      return {
        ...state, newPost: action.newPost
      };
    case SET_USER_PROFILE: 
      return {
        ...state, profile: action.profile
      };
    case SET_USER_STATUS: 
      return {
        ...state, status: action.status
      }
    default: 
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST, newPost: text,
});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});


export const userProfile = (userId) => {
  return (dispatch) => {
    profileAPI.userProfile(userId).then(response => {
      dispatch(setUserProfile(response));
    })
  }
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getUserStatus(userId).then(response => {
      dispatch(setUserStatus(response.data));
    })
  }
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateUserStatus(status).then(response => {
      if(response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    })
  }
}

export default profileReduser;