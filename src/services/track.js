// // import api from '../plugins/axios'
import axios from 'axios'
const formato = 'json'


const getData = (codigo) => {
    const request = axios.get(`${formato}?token=${process.env.VUE_APP_TOKEN}&user=${process.env.VUE_APP_USER}&codigo=${codigo}`)
    return request.then(res => res.data)
}

export { getData } 