const mutations = {
    modifyUserInfo(state, payload) {
        state.userId = payload.id
        state.username = payload.username
        state.nickname = payload.nickname
    },
    logout(state) {
        state.userId = ''
        state.username = ''
        state.nickname = ''
    },
    modifyNickname(state, payload) {
        state.nickname = payload
    }
}

export default mutations

