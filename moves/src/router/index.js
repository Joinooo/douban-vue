import Vue from 'vue'
import Router from 'vue-router'
import INDEX from '@/components/index'
import HOME from '../components/pages/home'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: INDEX,
        children: [{
            path: '/home',
            component: HOME
        }]
    }]
})