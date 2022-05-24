import { connect } from 'react-redux';
import { addPost, addLike } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage
	}
};


const MyPostsContainer = connect(mapStateToProps, { addPost, addLike })(MyPosts);

export default MyPostsContainer;