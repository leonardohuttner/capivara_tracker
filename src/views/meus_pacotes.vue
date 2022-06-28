<template>
  <div class="cards q-pa-xs" :style="(width = $q.screen.width)">
    <div
      v-for="pacote in pacotes"
      :key="pacote.codigo"
      @click="rastrear(pacote.tracking_code ? pacote.tracking_code : pacote.tracking)"
    >
      <section class="card shadow-3">
        <!-- <q-btn round icon="close" class="botao no-padding no-margin" size="5px"></q-btn> -->
        <div class="titulo">
          <h5 class="header">{{ pacote.tracking_code ? pacote.tracking_code : pacote.tracking }}</h5>
        </div>
        <p>{{pacote.company.name}}</p>
        <span>{{ pacote.events ? pacote.events[ultimo].events : pacote.event[ultimo].events}}</span>

        <q-inner-loading :showing="isLoading">
          <q-spinner-ios size="40px" color="white" />
        </q-inner-loading>
      </section>
    </div>
  </div>
</template>

<script>
import * as service from "../services/track";
import * as storage from '../services/storage';
import mixinMessage from '../mixins/message'

export default {
  created() {
    this.buscaDadosStorage()
  },

  mixins: [mixinMessage],
  data() {
    return {
      isLoading: false,
      pacotes: [],
      codigos: [],
      ultimo: 0
    };
  },
  methods: {
    buscaDadosStorage(){
      this.codigos = storage.getStorage()
      this.atualizaStatus();
    },

    atualizaStatus() {
      this.isLoading = true;
      this.codigos.map((codigo) => {
        service
          .getData(codigo)
          .then((data) => {
            const objeto = data.data
            if(objeto){
              if(objeto.company.name === "Correios"){
                if(objeto.events){
                  this.ultimo = objeto.events.length - 1
                  if(objeto.events[this.ultimo] === 'Objeto saiu para entrega ao destinatário'){
                    this.pacotes.push(objeto)
                    this.succesMessage({
                      title:'Atualização',
                      message: `O objeto ${objeto.codigo} saiu para entrega ao destinatário`,
                      duration:3000
                    })
                  } else if (objeto.events[this.ultimo] === 'Objeto entregue ao destinatário'){
                    storage.setHistorico(objeto.codigo)
                  } else {
                    this.pacotes.push(objeto)
                  }
                  this.isLoading = false
                }
              } else {
                if(objeto.event){
                  this.ultimo = objeto.event.length - 1
                  if(objeto.event[this.ultimo].tag === 'onroute'){
                    this.pacotes.push(objeto)
                    this.succesMessage({
                      title:'Atualização',
                      message: `O objeto ${objeto.codigo} saiu para entrega ao destinatário`,
                      duration:3000
                    })
                  } else if (objeto.is_delivered > 0){
                    console.log("movement")
                    storage.setHistorico(objeto.codigo)
                  } else {
                    console.log(objeto)
                    this.pacotes.push(objeto)
                  }
                }
                this.isLoading = false
              }
            }
          })
          .catch((e) => {
            console.log(e);
            this.isLoading = false;
          });
      });
    },

    rastrear(codigo){
      this.$router.push(`/rastreamento/${codigo}`)
    },
  },
};
</script>

<style>
.geral {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cards {
  width: 100%;
  display: flex;
  padding: 0.5rem;
}

.card:first {
  margin-left: 0.5rem;
}

.titulo {
  width: 190px;
}

.titulo h5 {
  font-size: 1.5rem;
  margin: 2px 0;
  width: 100%;
}

.card {
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  max-height: 300px;
  margin-left: 15px;

  background: rgba(253, 188, 24, 0.822);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.card span {
  font-size: 1rem;
  font-weight: 300;
  max-width: 250px;
}

.botao {
  position: absolute;
  right: 10px;
  top: 0px;
}
@media (max-width: 1028px) {
  .cards {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
  }
  .card {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }
}
</style>