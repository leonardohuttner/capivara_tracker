<template>
  <div class="cards q-pa-xs " :style="width= $q.screen.width">
      <div v-for="pacote in pacotes" :key="pacote.codigo">
          <section class="card shadow-3">
            <!-- <q-btn round icon="close" class="botao no-padding no-margin" size="5px"></q-btn> -->
            <div class="titulo">
              <h5 class="header">{{ pacote.codigo }}</h5>
            </div>
            <span>{{ pacote.status }}</span>
            <span>{{ pacote.data_hora }}</span>
          </section>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pacotes: [
        {
          codigo: "OQ360293619BR",
          status: "Objeto encaminhado",
          data_hora: "Hoje as 15:36",
        },
        {
          codigo: "QE856930216BR",
          status: "Objeto encaminhado",
          data_hora: "Entregue as 16/09/21",
        },
        {
          codigo: "QB891600715BR",
          status: "Objeto encaminhado",
          data_hora: "Entregue há um mês atrás",
        },
        {
          codigo: "QC856930216BR",
          status: "Objeto postado",
          data_hora: "Hoje as 16:00",
        },
      ],
    };
  },
  methods: {
    atualizaStatus(codigo) {
      console.log(codigo);
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #fdbc18b9;
  background: linear-gradient(180deg, rgba(49, 49, 49, 0.5) 0%, rgba(75, 75, 75, 0.5) 82%);
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
@media (max-width: 1028px){
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