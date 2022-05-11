import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogReducer';

const DialogsConteiner = ( props ) => {

  const state = props.store.getState().dialogPage;

	let addMessage = () => {
		props.store.dispatch(addMessageActionCreator());
	};

	let chengeText = (text) => {
		props.store.dispatch(updateNewMessageActionCreator(text));
	}
  
  return (
    <Dialogs updateMessage={ chengeText } addNewMessage={ addMessage } state={ state }/>
  )
};

export default DialogsConteiner;