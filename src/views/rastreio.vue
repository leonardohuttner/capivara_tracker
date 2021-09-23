<template>
  <div>
      <Linha-tempo :dados="dados"/>
      <Loading :loading="isLoading" :message="message"/>
  </div>
</template>

<script>
import * as service from '../services/track'

import LinhaTempo from '../components/linha_tempo.vue'
import Loading from '../components/loading.vue'
import mixinMessage from '../mixins/mixinsMessages'
export default {
    components: { LinhaTempo, Loading },
    mixins:{ mixinMessage },
    data(){
      return {
        codigo:'',
        dados: {},
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
            this.dados = res
            this.isLoading = false
            })
          .catch(e => {
            console.log(e)
            this.isLoading = false
            })
      }
    }
}
</script>

<style>

</style>