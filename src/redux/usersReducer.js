const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT_USERS = 'SET-TOTAL-COUNT-USESR';
const TOGGLE_FETCHING = 'TOGGLE-FETCHING';

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 20,
  currentPage: 1,
  isFetching: false
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
    default: 
      return state;
  }
}

export const followActionCreator = (idUser) => ({ type: FOLLOW, idUser});
export const unFollowtActionCreator = (idUser) => ({ type: UNFOLLOW, idUser});
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users});
export const setCurrentPageActionCreator = (newCurrentPage) => ({ type: SET_CURRENT_PAGE, newCurrentPage});
export const setTotalCountUsersActionCreator = (totalUsers) => ({ type: SET_TOTAL_COUNT_USERS, totalUsers});
export const toggleFetchingActionCreator = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching});

export default usersReduser;