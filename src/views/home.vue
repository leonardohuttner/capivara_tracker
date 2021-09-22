<template>
  <div class="q-gutter-y-md">
    <q-card>
      <div class="q-mt-">
        <hr>
      </div>
      <Buscador/>
    </q-card>
</div>
</template>

<script>
import Buscador from '../components/buscador.vue'

export default {
  components: { Buscador },
  name: 'Home',
  data(){
    return {
      tab:'rastreio'
    }
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
