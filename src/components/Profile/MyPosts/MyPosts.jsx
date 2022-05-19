import myPosts from './MyPosts.module.sass';
import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {
	
	let addPost = () => {
		props.addNewPost();
	};

	let chengeText = (e) => {
		let text = e.target.value;
		props.updateNewPostText(text);
	}

	return(
		<div className={ myPosts.posts }>
			<h3 className={ myPosts.posts__title}>My posts</h3>
			<div className={ myPosts.posts__container }>
				<div className={ myPosts.posts__newPost }>
					<textarea value={ props.profilePage.newPost } onChange={ chengeText }/>
					<button onClick={ addPost }>Добавить</button>
				</div>
				<div className={ myPosts.posts__items }>
					{ props.profilePage.postData.map(postItem =>	
						<Post key={postItem.id} message={postItem.message} likesCount={postItem.likesCount}/> 
					)}
				</div>
			</div>
		</div>        
	)
};

export default MyPosts;