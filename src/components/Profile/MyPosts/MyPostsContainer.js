import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => dispatch(updateNewPostActionCreator(text)),
		addNewPost: () => dispatch(addPostActionCreator())
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;