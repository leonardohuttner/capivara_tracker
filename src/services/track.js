// // import api from '../plugins/axios'
import axios from 'axios'
const formato = 'json'
const token = 'f3594a068410eba222b114884dfab801f644172698f05ab52f49403c2bad67fd'
const user = 'leonardohuttner@gmail.com'


const getData = (codigo) => {
    const request = axios.get(`${formato}?token=${token}&user=${user}&codigo=${codigo}`)
    return request.then(res => res.data)
}

export { getData } 