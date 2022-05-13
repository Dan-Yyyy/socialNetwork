import { connect } from 'react-redux';
import UsersClass from './UsersClass';
import { followActionCreator, unFollowtActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalCountUsersActionCreator } from './../../redux/usersReducer';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
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
    setCurrentPage: (newCurrentPage) => {
      dispatch(setCurrentPageActionCreator(newCurrentPage))
    },
    setTotalUsers: (totalUsers) => {
      dispatch(setTotalCountUsersActionCreator(totalUsers))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer;