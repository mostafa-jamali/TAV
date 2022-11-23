import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './Router/router';

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app');
