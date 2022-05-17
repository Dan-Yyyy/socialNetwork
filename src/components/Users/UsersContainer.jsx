import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Preloading from './../Preloading/Preloading';
import { userAPI } from './../../api/userApi';
import { 
  followActionCreator, 
  unFollowtActionCreator, 
  setUsersActionCreator, 
  setCurrentPageActionCreator, 
  setTotalCountUsersActionCreator,
  toggleFetchingActionCreator,
  toggleIsFollowingProgress } from './../../redux/usersReducer';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setFetching(true);
    userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
      this.props.setFetching(false);
      this.props.setUsers(response.items)
      this.props.setTotalUsers(response.totalCount)
    })
  }

  onChangePage = (newCurrentPage) => {
    this.props.setCurrentPage(newCurrentPage);
    this.props.setFetching(true);
    userAPI.getUsers(newCurrentPage, this.props.pageSize).then(response => {
      this.props.setFetching(false);
      this.props.setUsers(response.items)
    })
  }
  render() {
    return(
      <>
        <Preloading isFetching = { this.props.isFetching }/>
        <Users 
          totalUsersCount = { this.props.totalUsersCount}
          pageSize = {this.props.pageSize}
          currentPage = { this.props.currentPage }
          onChangePage = { this.onChangePage }
          users = { this.props.users }
          unFollow = { this.props.unFollow }
          follow = { this.props.follow }
          toggleIsFollowing = { this.props.toggleIsFollowingProgress}
          followingInProgress = { this.props.followingInProgress }
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
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
    },
    setFetching: (isFetching) => {
      dispatch(toggleFetchingActionCreator(isFetching))
    },
    toggleIsFollowingProgress: (isFetching) => {
      dispatch(toggleIsFollowingProgress(isFetching))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);