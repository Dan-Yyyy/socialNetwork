import instanse from './instanse';

export const authAPI = {
  me() {
    return instanse.get('auth/me')
    .then(response => {
      return response.data
    })
  },
  login(email, password, rememberMe = false ) {
    return instanse.post('auth/login', {email, password, rememberMe})
    .then(response => {
      return response.data
    })
  },
  logout() {
    return instanse.delete('auth/login')
  }
};