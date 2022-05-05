const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Text for post 1", likesCount: 0 },
        { id: 2, message: "Text for post 2", likesCount: 4 },
      ],
      newPost: "default",
    },
  
    dialogPage: {
      dialogData: [
        {id: 1, name: 'Irina'},
        {id: 2, name: 'Olga'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Tania'},
      ],
      
      messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "What's up?"},
      ],
    },
  },
  _callSubscriber() {
    console.log();
  },
  getState() {
    return this._state;
  },
  subscibe( observer ) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if(action.type === ADD_POST) {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPost, 
        likesCount: 0
      };
    
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newText = '';
      this._callSubscriber(this._state);
    } else if(action.type === UPDATE_NEW_POST) {
      this._state.profilePage.newPost = action.newPost;
      this._callSubscriber(this._state);
    }
  },
}

export const addPostActionCreator = () => ({ type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST, newPost: text,
})

export default store;