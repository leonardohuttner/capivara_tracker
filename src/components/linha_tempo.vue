<template>
  <div class="q-px-lg q-pb-md q-mt-md">
    <q-card>
      <!-- {{dados.service_name}} -->
      <!-- {{dados.status}} -->
    </q-card>
    <q-stepper
      ref="stepper"
      v-model="step"
      color="primary"
      animated
      header-nav
      :horizontal="$q.screen.width < 720 "
      :contracted="$q.screen.width < 1030 "
    >
      <q-step
        v-for="(evento, index) in dados.events"
        :key="index"
        :name="index"
        :title="evento.events"
        :icon="getIcon(evento.events)"
        :active-icon="getIcon(evento.events)"
        :done-icon="getIcon(evento.events)"
        :done="step > index"
        done-color="green"
      >
      <p class="text-h4">{{evento.events}}</p>
        <div v-if="evento.tag== 'posted'">
          <p class="text-subtitle2">Em {{evento.local}} - {{evento.city}}-{{evento.uf}}</p>
        </div>
        
        <div v-if="evento.tag== 'movement'">
          <p>De {{evento.local}} - {{evento.city}}-{{evento.uf}}</p>
          <p>Para {{evento.destination_local}} - {{evento.destination_city}}-{{evento.destination_uf}}</p>
        </div>
        <div v-if="evento.tag== 'onroute'">
          <p>{{evento.local}} - {{evento.city}}</p>
        </div>
        <p>{{formatDataAPI(evento.date)}}</p>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import mixinDatas from '../mixins/moment'
export default {
  props: { dados: Object, step: Number },
  mixins: [ mixinDatas ],
  data() {
    return {
      encomenda: "",
    };
  },
  mounted(){
    this.step = this.dados.events.length - 1 

  },
  computed:{

  },
  methods: {
      formatDataAPI(data){
        return this.formatDateFromNow(data)
      },

    getIcon(status) {
      if (status == "Objeto postado") return "place";
      else if (status == "Objeto em trânsito - por favor aguarde") return "local_shipping";
      else if (status == "Fiscalização aduaneira finalizada")
        return "fact_check";
      else if (status == "Objeto recebido pelos Correios do Brasil")
        return "flight_land";
      else if (status == "Objeto saiu para entrega ao destinatário")
        return "local_shipping";
      else if (status == "Objeto entregue ao destinatário") return "done";
    },
  },
};
</script>

<style>

</style>