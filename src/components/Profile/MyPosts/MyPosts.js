import myPosts from './MyPosts.module.sass';
import React from 'react';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';

const MyPosts = ({ data, dispatch }) => {
	let newPostElement = React.createRef();

	let addPost = () => {
		dispatch(addPostActionCreator());
	};

	let chengeText = () => {
		let text = newPostElement.current.value;
		dispatch(updateNewPostActionCreator(text));
	}

	return(
		<div className={ myPosts.posts }>
			<h3 className={ myPosts.posts__title}>My posts</h3>
			<div className={ myPosts.posts__container }>
				<div className={ myPosts.posts__newPost }>
					<textarea ref={ newPostElement } value={ data.profilePage.newPost } onChange={ chengeText }/>
					<button onClick={ addPost }>Добавить</button>
				</div>
				<div className={ myPosts.posts__items }>
					{ data.profilePage.postData.map(postItem =>	<Post id={postItem.id} message={postItem.message} likesCount={postItem.likesCount}/> )}
				</div>
			</div>
		</div>        
	)
};

export default MyPosts;