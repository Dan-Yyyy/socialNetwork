import { profileAPI } from './../api/profileApi';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const ADD_LIKE = 'ADD-LIKE';

const initState = {
  postData: [
    { id: 1, message: "Text for post 1", likesCount: 0 },
    { id: 2, message: "Text for post 2", likesCount: 4 },
  ],
  profile: null,
  status: '',
};

const profileReduser = (state = initState, action) => {
  switch(action.type) {
    case ADD_POST: 
      return {
        ...state,
        postData: [...state.postData, {id: state.postData.length+1, message: action.post, likesCount: 0}],
      }
    case SET_USER_PROFILE: 
      return {
        ...state, profile: action.profile
      };
    case SET_USER_STATUS: 
      return {
        ...state, status: action.status
      }
    case ADD_LIKE: 
      return {
        ...state, 
        postData: [...state.postData].map((item) => {
          if(item.id === action.idPost) {
            return { ...item, likesCount: item.likesCount + 1  }
          };
          return item;
        })
      }
    default: 
      return state;
  }
}

export const addPost = (post) => ({ type: ADD_POST, post});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const addLike = (idPost) => ({type: ADD_LIKE, idPost});


export const userProfile = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.userProfile(userId);
    dispatch(setUserProfile(response));
  }
};

export const getStatus = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(response.data));
  }
};

export const updateStatus = (status) => {
  return async (dispatch) => {
    const response = await profileAPI.updateUserStatus(status);
    if(response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  }
}

export default profileReduser;