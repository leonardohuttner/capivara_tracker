import moment from 'moment'
import 'moment/locale/pt-br'

export default {
    methods: {
        formatDateFromNow(date){
            const hoje = moment()
            const data = moment(date)
            const diff = hoje.diff(data,'days')
            let string = ''
            if(diff > 31){
                string = moment(date).fromNow()
            } else {
                string = moment(date).format('DD MMMM YYYY dddd HH:mm a')
            }
            return string
        }
    }
}