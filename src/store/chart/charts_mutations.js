const mutations = {
    updateOverview(state, payload) {
        state.userId = payload.id
        state.username = payload.username
        state.nickname = payload.nickname
    }
}

export default mutations

