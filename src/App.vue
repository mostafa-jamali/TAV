<template>
  <div>
    <tav-header></tav-header>
    <!-- main -->
    <main>
      <RouterView />
    </main>

    <!--  Footer  -->
    <tav-footer></tav-footer>
  </div>
</template>

<script>
import TavHeader from './components/header/TavHeader.vue';
import TavFooter from './components/footer/TavFooter.vue';

export default {
  name: 'App',
  components: {
    TavHeader,
    TavFooter,
  },
};
</script>

<style lang="scss"></style>
