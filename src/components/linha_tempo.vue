<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <q-timeline-entry heading body="Timeline heading" />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :body="body"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 21, 1986"
        icon="delete"
        :body="body"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        :body="body"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        :body="body"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        color="orange"
        icon="done_all"
        :body="body"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        :body="body"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        :body="body"
      />
    </q-timeline>
  </div>
</template>

<script>
export default {
  props: { dados: Object },
  data() {
    return {
    encomenda: '',
    
    
    // encomenda_mockup: {
    //     codigo: "OQ360293619BR",
    //     host: "rd",
    //     eventos: [
    //       {
    //         data: "21/09/2021",
    //         hora: "20:45",
    //         local: "PORTO ALEGRE",
    //         status: "Objeto encaminhado",
    //         subStatus: ["Encaminhado para Unidade de Tratamento / CAMAQUA RS"],
    //       },
    //       {
    //         data: "20/09/2021",
    //         hora: "21:53",
    //         local: "SAO PAULO",
    //         status: "Objeto encaminhado",
    //         subStatus: [
    //           "Encaminhado para Unidade de Tratamento / PORTO ALEGRE RS",
    //         ],
    //       },
    //       {
    //         data: "20/09/2021",
    //         hora: "17:57",
    //         local: "SAO PAULO",
    //         status: "Objeto encaminhado",
    //         subStatus: ["Encaminhado para Agência dos Correios / SAO PAULO SP"],
    //       },
    //       {
    //         data: "20/09/2021",
    //         hora: "17:02",
    //         local: "SAO PAULO",
    //         status: "Objeto postado",
    //         subStatus: ["Registrado por Agência dos Correios"],
    //       },
    //     ],
    //     time: 0.001,
    //     quantidade: 4,
    //     servico: "",
    //     ultimo: "2021-09-21T23:45:00.000Z",
    //   },
    };
  },
};
</script>

<style>
</style>