import Vue from 'vue';

import './plugins/bootstrap-vue';

import App from './App.vue';
import './assets/styles/app.scss';

// icons
import './assets/font-icons/style.css';

import router from './Router/router';

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app');
