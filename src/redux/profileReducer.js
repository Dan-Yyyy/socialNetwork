const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initState = {
  postData: [
    { id: 1, message: "Text for post 1", likesCount: 0 },
    { id: 2, message: "Text for post 2", likesCount: 4 },
  ],
  newPost: "default",
  profile: null,
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
    default: 
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST, newPost: text,
});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReduser;