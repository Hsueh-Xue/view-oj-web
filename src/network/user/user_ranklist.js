import axios from 'network/axios'

export function rating() {
    return axios({
        url: '/user/ranklist',
        method: 'get'
    })
}
