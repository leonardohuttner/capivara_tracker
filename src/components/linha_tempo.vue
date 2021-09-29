<template>
  <div class="q-px-lg q-pb-md q-mt-md">
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
        v-for="(evento, index) in dados.eventos.slice().reverse()"
        :key="index"
        :name="index"
        :title="evento.status"
        :icon="getIcon(evento.status)"
        :active-icon="getIcon(evento.status)"
        :done-icon="getIcon(evento.status)"
        :done="step > index"
        done-color="green"
      >
        <p class="text-h4">{{evento.status}}</p>
        <p class="text-subtitle2">{{evento.local}}</p>
        <p class="text-subtitle2"> {{evento.data}} as {{evento.hora}}</p>
        <p class="text-subtitle2" v-html="evento.subStatus ? evento.subStatus[0] : ''">
          {{ evento.subStatus[0] }}
        </p>
        <p class="text-subtitle2" >{{ evento.subStatus[1] }}</p>
      </q-step>
    </q-stepper>


    <!-- <q-timeline color="secondary">
      <q-card class="bg-black text-white">
        <h3>
          {{ dados.codigo }}
        </h3>
      </q-card>

      <q-timeline-entry
        v-for="evento in dados.eventos"
        :key="evento.hora"
        :title="evento.status"
        :icon="getIcon(evento.status)"
      >
        <q-list>
          <q-item v-ripple>
            <q-item-section>{{ evento.local }}</q-item-section>
          </q-item>

          <q-item v-ripple>
            <q-item-section>{{ evento.data }} {{ evento.hora }}</q-item-section>
          </q-item>

          <q-item v-ripple>
            <q-item-section
              v-html="evento.subStatus ? evento.subStatus[0] : ''"
              >{{ evento.subStatus[0] }}</q-item-section
            >
            <q-item-section>{{ evento.subStatus[1] }}</q-item-section>
          </q-item>
        </q-list>
        <hr />
      </q-timeline-entry>
    </q-timeline> -->
  </div>
</template>

<script>
// import * as service from '../services/track'
export default {
  props: { dados: Object },
  data() {
    return {
      encomenda: "",
      step: this.dados.quantidade -1
    };
  },
  updated(){
    this.step = this.dados.quantidade - 1
  },
  computed:{
  },
  methods: {
    getIcon(status) {
      if (status == "Objeto postado") return "place";
      else if (status == "Objeto encaminhado") return "local_shipping";
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