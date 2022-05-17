import * as axios from 'axios';

const instanse = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  // headers: {
  //   'API-KEY': '84512d94-69e4-456a-81e9-1ab207d96e38',
  // }
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
    return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  }
}