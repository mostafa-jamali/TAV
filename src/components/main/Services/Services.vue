<template>
  <div class="services mt-4">
    <div class="d-flex justify-content-between">
      <p><b>Services</b></p>
      <a href="/"><b class="see-all-link">See All</b></a>
    </div>
    <div class="d-flex flex-wrap">
      <div v-for="service in servicesList" class="col-3 text-center">
        <service-item :service="service"></service-item>
      </div>
    </div>
    <hr />
  </div>
</template>
<script>
import ServiceItem from './ServiceItem.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components: { ServiceItem },
  name: 'Services',
  mounted() {
    console.log(this.$store.state.servicesList);
  },
  computed: {
    ...mapState({
      servicesList: state => state.servicesList,
    }),
  },
  methods: {
    // ...mapActions({
    //   resultOfQuerySeached: 'resultOfQuerySeached',
    // }),
  },
};
</script>
