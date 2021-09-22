<template>
  <div class="hello">
    Capivara Track
    <hr>
    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="bg-grey-3 text-grey-7"
          active-color="primary"
          indicator-color="green"
          align="justify"
        >
          <q-tab name="rastreio" label="Rastreio" />
          <q-tab name="pacotes" label="Meus pacotes" />
          <q-tab name="historico" label="Historico" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated class="text-black">
          <q-tab-panel name="rastreio">
            <div class="text-h6">Rastreio</div>
            <Rastreio/>
          </q-tab-panel>

          <q-tab-panel name="pacotes">
            <div class="text-h6">Meus pacotes</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="historico">
            <div class="text-h6">Historico</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
  </div>
  </div>
</template>

<script>
import Rastreio from '../components/rastreio.vue'
import * as service from '../services/track'

export default {
  components: { Rastreio },
  name: 'Home',
  data(){
    return {
      dados:{},
      dados2: {},
      tab:'rastreio'
    }
  },
  mounted(){
    service.getData().then(async (res)=>{
      this.dados = res
    })
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
