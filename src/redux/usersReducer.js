const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initState = {
  users: [
    { 
      id: 1, 
      imgUrl: 'data:image/png;base64,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',
      followStatus: true, 
      fullName: 'Stella S', 
      status: 'Do you have any problem?', 
      location: { 
        country: 'Belarus', 
        city: 'Minsk'
      },
     },
    { 
      id: 2, 
      imgUrl: 'data:image/png;base64,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',
      followStatus: false, 
      fullName: 'Vladislav V', 
      status: 'I am so pretty.', 
      location: { 
        country: 'Ukrane', 
        city: 'Kiev'
      },
    },
    { 
      id: 3, 
      imgUrl: 'https://w7.pngwing.com/pngs/148/892/png-transparent-computer-icons-user-symbol-light-client-icon-service-computer-orange.png',
      followStatus: false, 
      fullName: 'Andry A', 
      status: 'I like this country!', 
      location: { 
        country: 'Russia', 
        city: 'Moskov'
      },
    },
  ],
};

const usersReduser = (state = initState, action) => {
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
    default: 
      return state;
  }
}

export const followActionCreator = (idUser) => ({ type: FOLLOW, idUser});
export const unFollowtActionCreator = (idUser) => ({ type: UNFOLLOW, idUser});

export default usersReduser;