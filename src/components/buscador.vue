<template>
  <div>
      <div class="q-ma-md">
          <h4 class="q-ma-md">Rastreador de encomendas</h4>
          <p>Digite o codigo apenas do Correios e rastreie seu pacote.</p>
          <q-input
            label="Digite o codigo de rastreamento"
            maxlength="13"
            v-model="codigo"
            mask="AA#########AA"
            counter
            :style="disableAutoFocusIOS ? 'font-size: 17px' : ''"
            />
          <q-btn class="q-ma-sm" color="green" @click="buscar(codigo)">Buscar</q-btn>
      </div>
  </div>
</template>

<script>
import mixinMessage from '../mixins/message'

export default {
    mixins: [ mixinMessage ],
    data(){
        return {
            codigo:'',
        }
    },
    methods:{
        disableAutoFocusIOS(){
            return this.$q.platform.is.ios
        },

        buscar(codigo){
            if(!codigo){
                this.warningMessage({
                    title:'Codigo invalido',
                    message:'O codigo não pode ser em branco.',
                    duration:5000
              })
            }else if (codigo.length > 13 || codigo.length < 13){
                this.warningMessage({
                    title:'Codigo invalido',
                    message:'O codigo tem que ter 13 digitos.',
                    duration:5000
              })
            } else {
                this.$router.push(`/rastreamento/${codigo}`)
            }
        }
    }
}
</script>

<style>
 h4 {
     font: 1.4rem 'Roboto', sans-serif;
 }
</style>