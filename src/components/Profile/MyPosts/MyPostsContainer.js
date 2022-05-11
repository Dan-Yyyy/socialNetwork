import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  const state = props.store.getState().profilePage;
  
	let addPost = () => {
		props.store.dispatch(addPostActionCreator());
	};

	let chengeText = (text) => {
		props.store.dispatch(updateNewPostActionCreator(text));
	}

	return(
    <MyPosts updateNewPostText={ chengeText } addNewPost={ addPost } state={ state }/>
	)
};

export default MyPostsContainer;