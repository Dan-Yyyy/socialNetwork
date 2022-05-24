import myPosts from './MyPosts.module.sass';
import React, { useState } from 'react';
import Post from './Post/Post';

const MyPosts = ({addPost, addLike, profilePage}) => {

	let [post, setPost] = useState('');
	
	let addPostInState = () => {
		addPost(post);
		setPost('');
	};

	let changeText = (e) => {
		setPost(e.target.value);
	}

	const click = (id) => {
		addLike(id);
	}

	return(
		<div className={ myPosts.posts }>
			<h3 className={ myPosts.posts__title}>My posts</h3>
			<div className={ myPosts.posts__container }>
				<div className={ myPosts.posts__newPost }>
					<textarea onChange={ changeText } value={ post }/>
					<button onClick={ addPostInState }>Добавить</button>
				</div>
				<div className={ myPosts.posts__items }>
					{ profilePage.postData.map(postItem =>	
						<Post key={postItem.id} 
							message={postItem.message} 
							likesCount={postItem.likesCount} 
							idPost={postItem.id} 
							click={ click }/> 
					)}
				</div>
			</div>
		</div>        
	)
};

export default MyPosts;