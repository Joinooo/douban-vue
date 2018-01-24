// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuerouter from 'vue-router'
import { fetch } from './stote/api'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
Vue.use(Vuerouter);
Vue.prototype.$fetch = fetch;
Vue.use(Mint);
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})