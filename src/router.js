import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'

Vue.use(Router)

const routes = [
    {path: '/login', component: Login}
]

export default new Router({
    routes
})