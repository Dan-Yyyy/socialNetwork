import { connect } from 'react-redux';
import Users from './Users';
import { followActionCreator, unFollowtActionCreator, setUsersActionCreator } from './../../redux/usersReducer';

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
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer