import React from 'react';
import dialogs from './Dialogs.module.sass';
import DialogItem from './DialogItem/DialogItem';
import Message from  './Message/Message';

const Dialogs = ( props ) => {

	let addMessage = () => {
		props.addNewMessage();
	};

	let chengeText = (e) => {
		let text = e.target.value;
		props.updateMessage(text);
	}
  
  return (
    <div className={dialogs.dialogs}>
      <div className={ dialogs.dialogs__items }>
        { props.state.dialogData.map(dialog => <DialogItem name={ dialog.name } id={ dialog.id }/> )}
      </div>
      <div className="messages">
        { props.state.messagesData.map(message => <Message message={ message.message } id={ message.id }/> )}
        <div>
          <textarea value={ props.state.newMessage } onChange={ chengeText }></textarea>
          <button onClick={ addMessage }>Отправить</button>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;