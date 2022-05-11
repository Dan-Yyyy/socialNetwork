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
    let bodyMessage = state.newMessage;
    return {
      ...state,
      newMessage: '',
      messagesData: [ ...state.messagesData, {id: state.messagesData.length+1, message: bodyMessage}]
    }
    case UPDATE_NEW_MESSAGE:
      return {
        ...state,
        newMessage: action.newMessage
      };
    default: 
      return state;
  }
  
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE, newMessage: text,
});

export default dialogReducer;