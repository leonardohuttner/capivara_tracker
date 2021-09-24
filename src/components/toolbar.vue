<template>
  <q-layout view="hHh lpR fFf">
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

    <q-drawer v-model="right" side="right" bordered>
      <!-- drawer content -->
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

  <!-- <div class="column items-center">
      <q-avatar size="72px">
        <img src="/Perfil.png" />
      </q-avatar>

      <div class="text-subtitle1 q-mt-md">Capivara Dev</div>
    </div> -->
</template>

<script>
// import Rastreio from '../components/rastreio.vue'

export default {
  //   components: { Rastreio },
  name: "Home",
  data() {
    return {
      tab: "rastreio",
      right: false,
    };
  },
};
</script>

<style>
a {
  color: white;
  text-decoration: none;
}
</style>