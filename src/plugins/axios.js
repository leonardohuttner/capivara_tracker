import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.melhorrastreio.com.br/api/v1/trackings/'
})


export { api }
// axios.defaults.baseURL = 'https://api.melhorrastreio.com.br/api/v1/trackings/'
// Vue.use({
//     install(Vue) {
//         Vue.prototype.$http = axios
//     }
// })