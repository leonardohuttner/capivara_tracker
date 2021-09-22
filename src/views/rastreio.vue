<template>
  <div>
      <Linha-tempo :dados="dados"/>
  </div>
</template>

<script>
import LinhaTempo from '../components/linha_tempo.vue'
import * as service from '../services/track'
export default {
    components: { LinhaTempo },
    data(){
      return {
        codigo:'',
        dados: {}
      }
    },
    created(){
      this.codigo = this.$route.params.codigo
      this.getData(this.codigo)
    },
    methods:{
      getData(codigo){
        service.getData(codigo)
          .then(async (res) => this.dados = res)
          .catch(e => console.log(e))
      }
    }
}
</script>

<style>

</style>