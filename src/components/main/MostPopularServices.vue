<template>
  <div class="most-popular-services mt-4">
    <div class="d-flex justify-content-between">
      <p><b>Most Popular Services</b></p>
      <a href="/services/all"><b class="see-all-link">See All</b></a>
    </div>
    <div>
      <ul class="d-flex list-unstyled">
        <li class="pl-3" v-for="service in servicesList">
          <a :href="`services/${service.link}`" class="most-popular-service-name text-secondary">{{ service.name }}</a>
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
      servicesList: [
        {
          name: 'All',
          link: 'all',
        },
        {
          name: 'Cleaning',
          link: 'cleaning',
        },
        {
          name: 'Repairing',
          link: 'repairing',
        },
        {
          name: 'Painting',
          link: 'painting',
        },
        {
          name: 'Laundry',
          link: 'laundry',
        },
        {
          name: 'Appliance',
          link: 'appliance',
        },
      ],
    };
  },
};
</script>
