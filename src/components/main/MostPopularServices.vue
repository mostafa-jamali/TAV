<template>
  <div class="most-popular-services mt-4 border">
    <div class="d-flex justify-content-between">
      <p><b>Most Popular Services</b></p>
      <a href="/"><b class="see-all-link">See All</b></a>
    </div>
    <div>
      <ul class="d-flex list-unstyled">
        <li class="pl-3" v-for="service in servicesList">
          <a href="/" class="text-secondary">{{ service }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MostPopularServices',
  data() {
    return {
      servicesList: ['All', 'Cleaning', 'Repairing', 'Painting', 'Laundry', 'Appliance'],
    };
  },
};
</script>
