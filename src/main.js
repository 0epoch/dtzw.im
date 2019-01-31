import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css'
import './assets/sass/app.scss'
import router from './router'
import store from './store/store'
import axios from './utils/http'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
