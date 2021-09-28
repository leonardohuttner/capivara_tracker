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

export default {
  created() {
    this.buscaDadosStorage()
  },
  data() {
    return {
      isLoading: false,
      pacotes: [],
      codigos: []
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
            this.pacotes.push(data)
            this.isLoading = false;
          })
          .catch((e) => {
            console.log(e);
            this.isLoading = false;
          });
      });
    },

  rastrear(codigo){
    this.$router.push(`/rastreamento/${codigo}`)
  }
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
  background: #fdbc18b9;
  background: linear-gradient(
    180deg,
    rgba(49, 49, 49, 0.5) 0%,
    rgba(75, 75, 75, 0.5) 82%
  );
  padding: 0.5rem 1rem;
  border-radius: 5px;
  max-height: 300px;
  margin-left: 15px;
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