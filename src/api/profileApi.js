import instanse from './instanse';

export const profileAPI = {
  userProfile(userId) {
    return instanse.get(`profile/${userId}`)
    .then(response => {
      return response.data
    })
  },
  getUserStatus(userId) {
    return instanse.get(`profile/status/${userId}`)
  },
  updateUserStatus(status) {
    return instanse.put(`profile/status`, {status: status})
  }
}