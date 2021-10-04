<template>
  <q-layout view="hHh lpR fFr">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="/logo.png" />
          </q-avatar>
          Capivara Track
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>

      <q-tabs
        v-model="tab"
        dense
        class="bg-grey-3 text-grey-7"
        active-color="primary"
        indicator-color="green"
        align="justify"
      >
        <q-route-tab to="/" label="Rastreio" />
        <q-route-tab to="/pacotes" label="Meus pacotes" />
        <q-route-tab to="/historico" label="Historico" />
      </q-tabs>

      <!-- <q-tab-panels v-model="tab" animated class="text-black">
        <q-tab-panel name="rastreio">
          <div class="text-h6">Rastreio</div>
          <Rastreio />
        </q-tab-panel>

        <q-tab-panel name="pacotes">
          <div class="text-h6">Meus pacotes</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="historico">
          <div class="text-h6">Historico</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels> -->
    </q-header>

    <q-drawer v-model="right" side="right" overlay behavior="desktop" bordered>
      <q-list>
        <div class="text-subtitle1 q-mt-md">Configurações:</div>

        <q-item>
          <q-btn class="full-width bg-black text-white" @click="limparEncomendas" icon="delete" label="Limpar encomendas" />
        </q-item>

        <q-item>
          <q-btn class="full-width bg-black text-white" @click="limparHistorico" icon="delete" label="Limpar historico" />
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label overline>Notificações Push:</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-btn-toggle
              class="full-width q-ma-xs"
              v-model="notificacao"
              spread
              no-caps
              rounded
              unelevated
              toggle-color="primary"
              color="grey"
              :options="[
                { label: 'Habilitado', value: true },
                { label: 'Desabilitado', value: false },
              ]"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-7 text-white">
      <q-toolbar>
        <div class="col">
          <q-list class="items-center" style="max-width: 500px">
            <div class="text-subtitle1 q-mt-md">Social:</div>
            <q-item class="q-pa-md">
              <q-item-section class="q-pa-sm">
                <a href="https://www.linkedin.com/in/leonardo-huttner/"
                  ><img src="/linkedin.svg" alt=""
                /></a>
              </q-item-section>
              <q-item-section class="q-pa-sm">
                <a href="https://github.com/leonardohuttner"
                  ><img src="/github.svg" alt=""
                /></a>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="col">
          <q-item>
            <q-avatar size="72px">
              <img src="/Perfil.png" />
            </q-avatar>
            <q-item-section class="" v-if="$q.screen.width >= 713">
              CapivaraDev
            </q-item-section>
          </q-item>
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="col">
          <div class="text-subtitle2 q-mt-md">API:</div>
          <q-item>
            <q-item-section>
              <a href="https://linketrack.com">link&track</a>
            </q-item-section>
          </q-item>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import mixinMessage from '../mixins/message'
import * as storage from '../services/storage';

export default {
  name: "Home",
  mixins: [mixinMessage],
  data() {
    return {
      tab: "rastreio",
      right: false,
      notificacao: false,
    };
  },
  watch:{
    notificacao: function(value){
      if(value){
        Notification.requestPermission( permission => {
          if(permission === 'granted'){ 
            // this.registerBackgroundSync()
          } else this.notificacao = false
        })
      } else this.notificacao = false
    }
  },

  methods:{
    limparEncomendas(){
      if(storage.limpaPacotes()){
        this.succesMessage({
          title:'Atualização',
          message: `As encomendas foram limpas com sucesso`,
          duration:3000
        })
      } else {
        this.errorMessage({
          title:'Erro',
          message: `Não foi possivel limpar as encomendas`,
          duration:3000
        })
      }
    },

    limparHistorico(){
      if(storage.limpaHistorico()){
        this.succesMessage({
          title:'Atualização',
          message: `O historico foi limpo com sucesso`,
          duration:3000
        })
      } else {
        this.errorMessage({
          title:'Erro',
          message: `Não foi possivel limpar historico`,
          duration:3000
        })
      }
    },
  }
};
</script>

<style>
a {
  color: white;
  text-decoration: none;
}
</style>