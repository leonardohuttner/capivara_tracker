import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './quasar'
import router from './router'
import OneSignalVue from 'onesignal-vue'

require('dotenv').config()
Vue.config.productionTip = false

Vue.use(OneSignalVue)

new Vue({
  router,
  render: h => h(App),
  beforeMount(){
    this.$OneSignal.init({ appId: 'a0b7f69d-71e7-4925-9e38-c7af21cd74c8' });
  }
}).$mount('#app')
