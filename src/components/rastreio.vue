<template>
  <div>
      <div>
          <q-input v-model="codigo"/>
          <q-btn class="q-ma-sm" color="green" @click="buscar_encomenda(codigo)">Buscar</q-btn>
      </div>
  </div>
</template>

<script>
import * as service from '../services/track'
export default {
    data(){
        return {
            codigo: '',
            data:''
        }
    },
    methods:{
        buscar_encomenda(codigo_rastreio){
            service.getData(codigo_rastreio)
                .then(async (res) =>{
                    this.data = res
                })
        }
    }
}
</script>

<style>

</style>