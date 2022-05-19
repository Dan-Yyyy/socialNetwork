import instanse from './instanse';

export const authAPI = {
  login() {
  return instanse.get('auth/me')
    .then(response => {
      return response.data
    })
  }
};