<template>
  <div>
      <div>
          <q-input label="Digite o codigo de rastreamento" v-model="codigo"/>
          <q-btn class="q-ma-sm" color="green" @click="buscar(codigo)">Buscar</q-btn>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // codigo: 'OQ360293619BR', //brasil
            // codigo:'NX287870895BR', //china
            codigo:'',
            data:''
        }
    },
    methods:{
        buscar(codigo){
            this.$router.push(`/rastreamento/${codigo}`)
        }
    }
}
</script>

<style>

</style>