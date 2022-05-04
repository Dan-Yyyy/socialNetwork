import dialogs from './Dialogs.module.sass';
import DialogItem from './DialogItem/DialogItem';
import Message from  './Message/Message';

const Dialogs = (props) => {

  return (
    <div className={dialogs.dialogs}>
      <div className={ dialogs.dialogs__items }>
        { props.state.dialogData.map(dialog => <DialogItem name={ dialog.name } id={ dialog.id }/> )}
      </div>
      <div className="messages">
        { props.state.messagesData.map(message => <Message message={ message.message } id={ message.id }/> )}
        <div>
          <textarea name="" id="" cols="30" rows="3"></textarea>
          <button>Отправить</button>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;