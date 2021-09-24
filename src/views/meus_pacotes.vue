<template>
  <div class="geral">
    <q-card class="q-pa-xs row">
      <q-list v-for="pacote in pacotes" :key="pacote.codigo">
        <q-item>
          <q-card bordered class="card col-auto q-pa-xs">
            <q-card-section>
              <q-item-label>{{ pacote.codigo }}</q-item-label>
            </q-card-section>
            <q-separator></q-separator>
            <q-card-section class="no-margin no-padding">
                {{ pacote.status }}
            </q-card-section>
            <q-card-section class="no-margin no-padding">
                {{ pacote.data_hora }}
            </q-card-section>
            <q-card-action align="around">
              <q-btn icon="close" flat size="10px"></q-btn>
              <q-btn icon="done" flat size="10px"></q-btn>
            </q-card-action>
          </q-card>
        </q-item>
      </q-list>
    </q-card>
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
          codigo: "QE891600715BR",
          status: "Objeto encaminhado",
          data_hora: "Entregue há um mês atrás",
        },
        {
          codigo: "QE856930216BR",
          status: "Objeto postado",
          data_hora: "Hoje as 16:00",
        },
      ],
    };
  },
};
</script>

<style>
geral {
  width: 100vw;
  height: 100vh;
}
</style>