import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './quasar'
import router from './router'

require('dotenv').config()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
