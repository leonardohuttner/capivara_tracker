<template>
  <div class="cards q-pa-xs" :style="(width = $q.screen.width)">
    <div
      v-for="pacote in pacotes"
      :key="pacote.codigo"
      @click="rastrear(pacote.codigo)"
    >
      <section class="card shadow-3">
        <!-- <q-btn round icon="close" class="botao no-padding no-margin" size="5px"></q-btn> -->
        <div class="titulo">
          <h5 class="header">{{ pacote.codigo }}</h5>
        </div>
        <span>{{ pacote.eventos[0].status }}</span>
        <span>{{ formatDateFromNow(pacote.ultimo) }}</span>

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
import moment from '../mixins/moment'

export default {
  created() {
    this.buscaDadosStorage()
  },

  mixins: [mixinMessage, moment],
  data() {
    return {
      isLoading: false,
      pacotes: [],
      codigos: []
    };
  },
  computed:{

  },
  methods: {
    buscaDadosStorage(){
      this.codigos = storage.getHistorico()
      this.pacotes = this.codigos.map((codigo)=>{
            var obj = new Object
            obj.codigo = codigo
            obj.eventos = [{}]
            obj.ultimo = ''
            return obj
        })
      this.atualizaStatus();
    },

    atualizaStatus() {
      this.isLoading = true;
      this.pacotes.map((pacote,index) => {
          setTimeout(()=> {
            service
                .getData(pacote.codigo)
                .then((data) => {
                    console.log(data)
                    this.pacotes[index].eventos = data.eventos
                    this.pacotes[index].ultimo = data.ultimo
                    this.pacotes[index].quantidade = data.quantidade
                    this.isLoading = false;
                })
                .catch((e) => {
                    console.log(e);
                    this.isLoading = false;
                });
                },1000*index)
      });
    },

    rastrear(codigo){
      this.$router.push(`/rastreamento/${codigo}`)
    },
  },
};
</script>

<style scoped>
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

  background: rgba(117, 117, 115, 0.678);
  color: aliceblue;
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