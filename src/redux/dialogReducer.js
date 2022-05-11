const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

const initState = {
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
}

const dialogReducer = (state = initState, action) => {
  switch(action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 4,
        message: state.newMessage, 
      };
      state.messagesData.push(newMessage);
      state.newMessage = '';
      return state;
    case UPDATE_NEW_MESSAGE :
      state.newMessage = action.newMessage;
      return state;
    default: 
      return state;
  }
  
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE, newMessage: text,
});

export default dialogReducer;