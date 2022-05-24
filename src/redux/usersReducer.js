import { userAPI } from './../api/userApi';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT_USERS = 'SET-TOTAL-COUNT-USESR';
const TOGGLE_FETCHING = 'TOGGLE-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 20,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

const usersReduser = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW: 
      return {
        ...state,
        users: state.users.map((item) => {
          if(item.id === action.idUser) {
            return { ...item, followed: true}
          }
          return item;
        })
      }
    case UNFOLLOW: 
      return {
        ...state,
        users: state.users.map((item) => {
          if(item.id === action.idUser) {
            return { ...item, followed: false}
          }
          return item;
        })
      }
    case SET_USERS: 
      return { ...state, users: action.users }
    case SET_CURRENT_PAGE: 
      return { ...state, currentPage: action.newCurrentPage }
    case SET_TOTAL_COUNT_USERS: 
      return { ...state, totalUsersCount: action.totalUsers }
    case TOGGLE_FETCHING: 
      return { ...state, isFetching: action.isFetching }
    case TOGGLE_IS_FOLLOWING_PROGRESS: 
      return { 
        ...state,
        followingInProgress: action.isFetching 
        ? [ ...state.followingInProgress, action.idUser ] 
        : state.followingInProgress.filter( id => id !== action.idUser) } 
    default: 
      return state;
  }
}

export const followSucces = (idUser) => ({ type: FOLLOW, idUser});
export const unFollowSucces = (idUser) => ({ type: UNFOLLOW, idUser});
export const setUsers = (users) => ({ type: SET_USERS, users});
export const setCurrentPage = (newCurrentPage) => ({ type: SET_CURRENT_PAGE, newCurrentPage});
export const setTotalUsers = (totalUsers) => ({ type: SET_TOTAL_COUNT_USERS, totalUsers});
export const toggleFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching});
export const toggleIsFollowingProgress = (isFetching) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching});

export const getUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleFetching(true));
    dispatch(setCurrentPage(currentPage));
    const response = await userAPI.getUsers(currentPage, pageSize);
    dispatch(toggleFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsers(response.totalCount));
  }
};

const followUnfollowFlow = async (dispatch, apiMethod, actionCreator, idUser) => {
  dispatch(toggleIsFollowingProgress(true, idUser));
    const response = await apiMethod( idUser );
    if(response.resultCode === 0){
      dispatch(actionCreator( idUser ));
    };
    dispatch(toggleIsFollowingProgress(false, idUser))
};

export const unFollow = (idUser) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userAPI.unFollow.bind(userAPI), unFollowSucces, idUser);
  };
};

export const follow = (idUser) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userAPI.follow.bind(userAPI), followSucces, idUser);
  };
};

export default usersReduser;