import Vue from 'vue'
import axios from 'axios'

// const api = axios.create({
//     baseURL: 'https://api.linketrack.com/track/json?token=f3594a068410eba222b114884dfab801f644172698f05ab52f49403c2bad67fd&user=leonardohuttner@gmail.com&codigo=OQ360293619BR'
// })

// export default api
axios.defaults.baseURL = 'https://api.linketrack.com/track/'
Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})