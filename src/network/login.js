import axios from 'network/axios'

export function auth(username, password) {
  return axios({
    url: '/user/auth',
    method: 'post',
    data: {
      username: username,
      password: password
    }
  })
}
