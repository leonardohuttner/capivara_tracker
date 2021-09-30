import moment from 'moment'
import 'moment/locale/pt-br'

export default {
    methods: {
        formatDateFromNow(date){
            const string = moment(date).fromNow()
            return string
        }
    }
}