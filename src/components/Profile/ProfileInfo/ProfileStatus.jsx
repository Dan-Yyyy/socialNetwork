import React, { useEffect, useState } from 'react';
import profileInfo from './ProfileInfo.module.sass';

const ProfileStatus = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activateMode = () => {
    setEditMode(true)
  };

  useEffect(() => {
    setStatus(props.status)
  }, [props.status]);

  const deactivateMode = () => {
    setEditMode(false);
    props.updateStatus(status)
  };

  const onChangeText = (e) => {
    setStatus(e.target.value)
  };

  return(
    <div className={ profileInfo.status }>
      { ! editMode
        ? <div>
          <span onClick={ activateMode }
            className={ profileInfo.status__span }> { props.status || 'Add new status' } </span>
        </div>
        : <div className={ profileInfo.newStatus }>
          <input type="text" value={ status } 
            onBlur={ deactivateMode } 
            autoFocus 
            onChange={ onChangeText }
            className={ profileInfo.newStatus_input}/>
        </div>
      }
    </div>
  )
};

export default ProfileStatus;