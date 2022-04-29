import dialogs from './Dialogs.module.sass';

const Dialogs = () => {
  return (
    <div className={dialogs.dialogs}>
      <div className={ dialogs.dialogs__items }>
        <div className="dialog">
          Irina
        </div>
        <div className="dialog">
          Olga
        </div>
        <div className="dialog">
          Sveta
        </div>
        <div className="dialog">
          Tania
        </div>
      </div>
      <div className="messages">
        <div className="message">Test1</div>
        <div className="message">Test2</div>
        <div className="message">Test3</div>
      </div>
    </div>
  )
};

export default Dialogs;