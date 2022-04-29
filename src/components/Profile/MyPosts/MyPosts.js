// import myPosts from './MyPosts.module.sass';
import Post from './Post/Post';

const MyPosts = () => {
	return(
		<div className="posts">
			<span className="posts__title">My posts</span>
			<form action="">
				<textarea name="" id="" cols="30" rows="10"></textarea>
				<input type="submit" />
			</form>
			<Post message="Text for post 1"/>
			<Post message="Text for post 2"/>
		</div>        
	)
};

export default MyPosts;