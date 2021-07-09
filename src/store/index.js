import {createStore} from 'vuex'
import user from "store/user/user";
import chart from "store/chart/chart";

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        user: user,
        chart: chart
    }
})
