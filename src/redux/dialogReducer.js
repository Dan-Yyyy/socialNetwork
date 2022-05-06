const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogReducer = (state, action) => {
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