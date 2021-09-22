// // import api from '../plugins/axios'
import axios from 'axios'


const getData = () => {
    const request = axios.get()
    return request.then(res => res.data)
}

// function getData(){
//     axios.get()
//         .then(async (res)=>{
//             return res
//         }).catch((err)=>{
//             console.log(err)
//         })
// }

export { getData } 