<template>
    <q-card>
        <div class="q-ma-md">
            <h4 class="q-mt-xl">Rastreador de encomendas</h4>
            <p>Digite o codigo e rastreie seu pacote.</p>
            <q-input
                rounded
                outlined 
                label="Digite o codigo de rastreamento"
                v-model="codigo"
                counter
                :style="disableAutoFocusIOS ? 'font-size: 17px' : ''"
            />
            <q-btn class="q-ma-sm" color="green" @click="buscar(codigo)">Buscar</q-btn>
        </div>
    </q-card>
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