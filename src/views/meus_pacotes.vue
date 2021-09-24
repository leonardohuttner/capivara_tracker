<template>
  <div class="cards q-pa-xs" :style="(width = $q.screen.width)">
    <div
      v-for="pacote in pacotes"
      :key="pacote.codigo"
      @click="log(pacote.codigo)"
    >
      <section class="card shadow-3">
        <!-- <q-btn round icon="close" class="botao no-padding no-margin" size="5px"></q-btn> -->
        <div class="titulo">
          <h5 class="header">{{ pacote.codigo }}</h5>
        </div>
        <span>{{ pacote.status }}</span>

        <q-inner-loading :showing="isLoading">
          <q-spinner-ios size="40px" color="white" />
        </q-inner-loading>
      </section>
    </div>
  </div>
</template>

<script>
import * as service from "../services/track";

export default {
  created() {
    this.atualizaStatus();
  },
  data() {
    return {
      isLoading: false,
      pacotes: [
        {
          codigo: "OQ360293619BR",
          status: "",
          data_hora: "2021-09-22T18:36:00.000Z",
        },
        {
          codigo: "QE856930216BR",
          status: "",
          data_hora: "2021-09-22T18:36:00.000Z",
        },
        {
          codigo: "NX287870895BR",
          status: "",
          data_hora: "2021-09-22T18:36:00.000Z",
        },
        {
          codigo: "QC856930216BR",
          status: "",
          data_hora: "H2021-09-22T18:36:00.000Z",
        },
      ],
    };
  },
  methods: {
    atualizaStatus() {
      this.isLoading = true;
      this.pacotes.map((pacote) => {
        service
          .getData(pacote.codigo)
          .then((data) => {
            if (data.eventos.length == 0) {
              pacote.status = "Não encontrado no sistema.Por favor aguarde.";
              this.isLoading = false;
            } else {
              pacote.status = data.eventos[0].status;
              this.isLoading = false;
            }
          })
          .catch((e) => {
            console.log(e);
            this.isLoading = false;
          });
      });
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