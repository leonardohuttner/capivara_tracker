import { api } from '../plugins/axios'
// import { api } from 'axios'

const getData = (codigo) => {
    const request = api.get(`${codigo}`)
    return request.then(res => res.data)
}

export { getData } 