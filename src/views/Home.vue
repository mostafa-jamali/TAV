<template>
  <b-container class="main">
    <b-row class="justify-content-center">
      <b-col cols="9">
        <!-- <img src="../assets/images/Capture.jpg" alt=""> -->
        <special-offers></special-offers>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import SpecialOffers from '../components/main/SpecialOffers.vue';
export default {
  components: { SpecialOffers },
  name: 'Home',
};
</script>
