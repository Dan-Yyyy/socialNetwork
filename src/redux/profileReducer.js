const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const initState = {
  postData: [
    { id: 1, message: "Text for post 1", likesCount: 0 },
    { id: 2, message: "Text for post 2", likesCount: 4 },
  ],
  newPost: "default",
};

const profileReduser = (state = initState, action) => {
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