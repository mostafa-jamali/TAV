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
    <hr>
  </div>
</template>
<script>
import ServiceItem from './ServiceItem.vue';
export default {
  components: { ServiceItem },
  name: 'Services',
  data() {
    return {
      servicesList: [
        {
          name: 'Cleaning',
          color: '#7c42ec',
          icon: 'cleaning',
        },
        {
          name: 'Repairing',
          color: '#FF9313',
          icon: 'repairing',
        },
        {
          name: 'Painting',
          color: '#2291FA',
          icon: 'painting',
        },
        {
          name: 'Laundry',
          color: '#FBC126',
          icon: 'laundry',
        },
        {
          name: 'Appliance',
          color: '#F6473A',
          icon: 'appliance',
        },
        {
          name: 'Plumbing',
          color: '#3FA855',
          icon: 'plumbing',
        },
        {
          name: 'Shifting',
          color: '#03BBD9',
          icon: 'shifting',
        },
        {
          name: 'More',
          color: '#7c42ec',
          icon: 'more',
        },
      ],
    };
  },
};
</script>
