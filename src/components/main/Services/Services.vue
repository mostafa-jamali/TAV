<template>
  <div class="services mt-4 border">
    <div class="d-flex justify-content-between">
      <p><b>Services</b></p>
      <a href="/"><b class="see-all-link">See All</b></a>
    </div>
    <div class="d-flex flex-wrap">
      <div v-for="service in servicesList" class="col-3 text-center">
        <service-item></service-item>
      </div>
    </div>
  </div>
</template>
<script>
import ServiceItem from './ServiceItem.vue';
export default {
  components: { ServiceItem },
  name: 'Services',
  data() {
    return {
      servicesList: ['Cleaning', 'Repairing', 'Painting', 'Laundry', 'Appliance', 'Plumbing', 'Shifting', 'More'],
    };
  },
};
</script>
