import React from "react";
import users from './Users.module.sass';
import * as axios from 'axios';
import userSmallAva from './../../user.png';

class UsersClass extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsers(response.data.totalCount)
    })
  }

  onChangePage(newCurrentPage) {
    this.props.setCurrentPage(newCurrentPage);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newCurrentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
    })
  }
  
  render() {
    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let allPages = [];
    for(let i = 1; i <= pageCount; i++ ) {
      allPages.push(i);
    }

    const fixCountPage = 15;

    return(
      <div>
        <h3 className={ users.title }>Users</h3>

        <div className={ users.pagination}>
          {
            allPages?.map((page, index) => {
              if(index < fixCountPage) return (
                <span 
                  key={ page } 
                  className={this.props.currentPage === page ? users.page_active : null }
                  onClick={() => this.onChangePage(page)}
                >
                  { page }
                </span>
              ); else return null
            })
          }
        </div>

        {
          this.props.users.map(user => 
            <div className={ users.users } key={ user.id }>
              <div className={ users.users__item }>
                <div className={ users.image }>
                  <img src={ user.photos.small != null ? user.photos.small : userSmallAva } alt="userAvatar" />
                  { 
                    user.followed 
                    ? <button className={ users.button } onClick={ () => { this.props.unFollow(user.id) } }>Unfollow</button> 
                    : <button className={ users.button } onClick={ () => { this.props.follow(user.id) } }>Follow</button>
                  } 
                </div>
                <div className={ users.content }>
                  <div className={ users.name }> { user.name } </div>
                  <div className={ users.status }> { user.status != null ? users.status : 'Has not status' } </div>
                </div>
              </div>
            </div>
          )
        }
      
      </div>
    )
  }
}

export default UsersClass;