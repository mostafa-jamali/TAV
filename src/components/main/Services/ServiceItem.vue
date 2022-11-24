<template>
  <div class="service-item mb-3">
    <div :style="{ 'background-color': service.color }" class="service-bg mx-auto p-auto"></div>
    <div class="d-flex justify-content-center">
      <i :class="`icon-${service.icon}`" class="service-icon position-absolute" :style="{ color: service.color }"></i>
    </div>

    <a :href="`services/${service.url}`" class="service-name">{{ service.name }}</a>
  </div>
</template>
<script>
export default {
  name: 'ServiceItem',
  props: {
    service: {
      type: Object,
    },
  },
  data() {
    return {};
  },
};
</script>
