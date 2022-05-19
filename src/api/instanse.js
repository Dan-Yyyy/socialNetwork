import * as axios from 'axios';

const instanse = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '84512d94-69e4-456a-81e9-1ab207d96e38',
  }
});

export default instanse;