import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    state: state.dialogPage,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: (text) => {
      dispatch(updateNewMessageActionCreator(text));
    },
    addNewMessage: () => {
      dispatch(addMessageActionCreator());
    }
  }
}

const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsConteiner;