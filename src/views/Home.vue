<template>
  <b-container class="main">
    <b-row class="justify-content-center">
      <b-col cols="12" lg="9">
        <!-- <img src="../assets/images/Capture.jpg" alt=""> -->
        <special-offers></special-offers>
        <services></services>
        <most-popular-services></most-popular-services>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import MostPopularServices from '../components/main/MostPopularServices.vue';
import Services from '../components/main/Services/Services.vue';
import SpecialOffers from '../components/main/SpecialOffers.vue';
export default {
  components: { SpecialOffers, Services, MostPopularServices },
  name: 'Home',
};
</script>
