import { connect } from 'react-redux';
import Users from './Users';
import { followActionCreator, unFollowtActionCreator } from './../../redux/usersReducer';

const mapStateToProps = (state) => {
  return {
    state: state.usersPage.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    follow: (idUser) => {
      dispatch(followActionCreator(idUser));
    },
    unFollow: (idUser) => {
      dispatch(unFollowtActionCreator(idUser));
    },
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer