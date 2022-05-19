import instanse from './instanse';

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
  return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
      return response.data
    })
  },

  follow(idUser) {
    return instanse.post(`follow/${idUser}`)
    .then(response => {
      return response.data
    })
  },

  unFollow(idUser) {
    return instanse.delete(`follow/${idUser}`)
    .then(response => {
      return response.data
    })
  }
}