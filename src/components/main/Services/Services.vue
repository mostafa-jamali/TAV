<template>
  <div class="services mt-4">
    <div class="d-flex justify-content-between">
      <p><b>Services</b></p>
      <a href="/services/all" v-if="getResultOfQuerySearch.length > 0"><b class="see-all-link">See All</b></a>
    </div>
    <div v-if="getResultOfQuerySearch.length > 0" class="d-flex flex-wrap">
      <div v-for="service in getResultOfQuerySearch" class="col-3 text-center">
        <service-item :service="service"></service-item>
      </div>
    </div>
    <div v-else>no service</div>
    <hr />
  </div>
</template>
<script>
import ServiceItem from './ServiceItem.vue';
import { mapGetters } from 'vuex';

export default {
  components: { ServiceItem },
  name: 'Services',
  computed: {
    ...mapGetters(['getResultOfQuerySearch']),
  },
};
</script>
