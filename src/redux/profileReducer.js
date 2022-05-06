const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const profileReduser = (state, action) => {
  switch(action.type) {
    case ADD_POST: 
      let newPost = {
        id: 3,
        message: state.newPost, 
        likesCount: 0
      };

      state.postData.push(newPost);
      state.newPost = '';
      return state;
    case UPDATE_NEW_POST: 
      state.newPost = action.newPost;
      return state;
    default: 
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST, newPost: text,
});

export default profileReduser;