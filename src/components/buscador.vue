<template>
  <div>
      <div class="q-ma-md">
          <h3 class="q-ma-md">Rastreador de encomendas</h3>
          <p>Digite o codigo apenas do Correios (por enquanto) e rastreie seu pacote.</p>
          <q-input label="Digite o codigo de rastreamento" v-model="codigo"/>
          <q-btn class="q-ma-sm" color="green" @click="buscar(codigo)">Buscar</q-btn>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            codigo: 'OQ360293619BR', //brasil
            // codigo:'NX287870895BR', //china
            // codigo:'',
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