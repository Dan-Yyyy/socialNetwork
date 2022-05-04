import myPosts from './MyPosts.module.sass';
import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		alert(text);
	}

	return(
		<div className={ myPosts.posts }>
			<h3 className={ myPosts.posts__title}>My posts</h3>
			<div className={ myPosts.posts__container }>
				<div className={ myPosts.posts__newPost }>
					<textarea name="" id="" cols="30" rows="10" ref={ newPostElement }></textarea>
					<button onClick={ addPost }>Добавить</button>
				</div>
				{props.postData.map(postItem =>	<Post id={postItem.id} message={postItem.message} likesCount={postItem.likesCount}/> )}
			</div>
		</div>        
	)
};

export default MyPosts;