<template>
  <div>
      <Linha-tempo :dados="dados" :step="step"/>
      <Loading :loading="isLoading" :message="message"/>
  </div>
</template>

<script>
import * as service from '../services/track'
import * as storage from '../services/storage'

import LinhaTempo from '../components/linha_tempo.vue'
import Loading from '../components/loading.vue'

import mixinMessage from '../mixins/message'
export default {
    components: { LinhaTempo, Loading },
    mixins: [ mixinMessage ],
    data(){
      return {
        codigo:'',
        dados: {},
        step:0,
        isLoading: false,
        message: 'As capivaras estão procurando sua encomenda...'
      }
    },
    created(){
      this.codigo = this.$route.params.codigo
      this.getData(this.codigo)
    },
    methods:{
      getData(codigo){
        this.isLoading = true
        service.getData(codigo)
          .then(async (res) => {
              this.dados = res.data
              if(res.data.event){
                res.data.events = res.data.event
              }
              this.step = res.data.events.length - 1
              storage.setStorage(res.data.tracking_code ? res.data.tracking_code : res.data.tracking)
              this.isLoading = false
            })
          .catch(e => {
            this.isLoading = false
              this.waningMessage({
                title:'Linha do tempo',
                message:'Não foi encontrado dados da encomenda, talvez não tenha sido postado ainda.Por favor tente novamente mais tarde',
                duration:5000
              })
            console.log(e)
            this.$router.push('/')
            })
      }
    }
}
</script>

<style>

</style>