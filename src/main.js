import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import Moment from 'moment'
import eventBus from 'vue3-eventbus'


const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).use(eventBus).mount('#app')
app.config.globalProperties.$moment = Moment;

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
