const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
  users: []
};

const usersReduser = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW: 
      return {
        ...state,
        users: state.users.map((item) => {
          if(item.id === action.idUser) {
            return { ...item, followStatus: true}
          }
          return item;
        })
      }
    case UNFOLLOW: 
    return {
      ...state,
      users: state.users.map((item) => {
        if(item.id === action.idUser) {
          return { ...item, followStatus: false}
        }
        return item;
      })
    }
    case SET_USERS: 
    return { ...state, users: action.users }
    default: 
      return state;
  }
}

export const followActionCreator = (idUser) => ({ type: FOLLOW, idUser});
export const unFollowtActionCreator = (idUser) => ({ type: UNFOLLOW, idUser});
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users});

export default usersReduser;