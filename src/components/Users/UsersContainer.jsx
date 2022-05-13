import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import * as axios from 'axios';
import Preloading from './../Preloading/Preloading';
import { 
  followActionCreator, 
  unFollowtActionCreator, 
  setUsersActionCreator, 
  setCurrentPageActionCreator, 
  setTotalCountUsersActionCreator,
  toggleFetchingActionCreator } from './../../redux/usersReducer';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setFetching(false);
      this.props.setUsers(response.data.items)
      this.props.setTotalUsers(response.data.totalCount)
    })
  }

  onChangePage = (newCurrentPage) => {
    this.props.setCurrentPage(newCurrentPage);
    this.props.setFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newCurrentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setFetching(false);
      this.props.setUsers(response.data.items)
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
    isFetching: state.usersPage.isFetching
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);