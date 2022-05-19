import React from "react"
import profileInfo from './ProfileInfo.module.sass';

class ProfileStatus extends React.Component {
  state ={
    editMode: false,
    status: this.props.status
  }

  activateMode = () => {
    this.setState({
      editMode: true
    })
  };

  deactivateMode = (e) => {
    let newStatus = e.target.value;
    this.setState({
      editMode: false,
    })
    this.props.updateStatus(newStatus)
  }

  onChangeText = (e) => {
    let newStatus = e.target.value;
    this.setState({
      status: newStatus
    })
  } 

  render() {
    return(
      <div className={ profileInfo.status }>
        { !this.state.editMode
          ? <div>
            <span onClick={ this.activateMode }
              className={ profileInfo.status__span }> { this.props.status || 'Add new status' } </span>
          </div>
          : <div className={ profileInfo.newStatus}>
            <input type="text" value={ this.state.status } 
              onBlur={ this.deactivateMode } 
              autoFocus 
              onChange={ this.onChangeText }
              className={ profileInfo.newStatus_input}/>
          </div>
        }
      </div>
    )
  }
};

export default ProfileStatus;