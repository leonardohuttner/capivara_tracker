<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <q-timeline-entry heading :body="dados.codigo" />

      <q-timeline-entry
        v-for="evento in dados.eventos"
        :key="evento.hora"
        :title="evento.status"
        :icon="getIcon(evento.status)"
      >
        <q-list>
          <q-item clickable v-ripple>
            <q-item-section>{{evento.local}}</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>{{evento.data}} {{evento.hora}}</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section v-html="evento.subStatus ? evento.subStatus[0] : ''">{{evento.subStatus[0]}}</q-item-section>
            <q-item-section>{{evento.subStatus[1]}}</q-item-section>
          </q-item>
        </q-list>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
// import * as service from '../services/track'
export default {
  props: { dados: Object },
  data() {
    return {
      encomenda: ""
    };
  },
  methods: {
    getIcon(status){
      if(status == 'Objeto postado') return 'place'
      else if(status == 'Objeto encaminhado') return 'local_shipping'
      else if(status == 'Fiscalização aduaneira finalizada') return 'fact_check'
      else if(status == 'Objeto recebido pelos Correios do Brasil') return 'flight_land'
      else if(status == 'Objeto saiu para entrega ao destinatário') return 'local_shipping'
      else if(status == 'Objeto entregue ao destinatário') return 'done'
    }
  },
};
</script>

<style>
</style>