import axios from 'network/axios'

export function rating() {
    return axios({
        url: '/user/ranklist',
        method: 'get'
    })
}

export function modifyNickname(id, nickname) {
    return axios({
        url: '/user/modifyNickname',
        method: 'post',
        data: {
            id: id,
            nickname: nickname
        }
    })
}

export function modifyPassword(id, oldPassword, newPassword) {
    return axios({
        url: '/user/modifyPassword',
        method: 'post',
        data: {
            id: id,
            oldPassword: oldPassword,
            newPassword: newPassword
        }
    })
}

export function modifyCodeforces(id, handle) {
    return axios({
        url: '/user/modifyCodeforces',
        method: 'post',
        data: {
            id: id,
            handle: handle
        }
    })
}
