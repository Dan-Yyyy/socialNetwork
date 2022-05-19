import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Preloading from './../Preloading/Preloading';
import { 
  setCurrentPage,
  getUsers,
  unFollow,
  follow } from './../../redux/usersReducer';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onChangePage = (newCurrentPage) => {
    this.props.setCurrentPage(newCurrentPage);
    this.props.getUsers(newCurrentPage, this.props.pageSize);
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
          followingInProgress = { this.props.followingInProgress }
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
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
};

export default connect(mapStateToProps, { 
  setCurrentPage, getUsers, unFollow, follow })(UsersContainer);