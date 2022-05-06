import profileReduser from "./profileReducer";
import dialogReducer from "./dialogReducer";

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
      
      newMessage: "",
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
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;