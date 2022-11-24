import Vue from 'vue';

import './plugins/bootstrap-vue';

import App from './App.vue';
import './assets/styles/app.scss';

// icons
import './assets/font-icons/style.css';

import router from './Router/router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
