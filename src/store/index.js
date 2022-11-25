import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Create a new store instance.
export default new Vuex.Store({
  state: {
    servicesList: [
      {
        name: 'Cleaning',
        color: '#7c42ec',
        icon: 'cleaning',
        url: 'cleaning',
      },
      {
        name: 'Repairing',
        color: '#FF9313',
        icon: 'repairing',
        url: 'repairing',
      },
      {
        name: 'Painting',
        color: '#2291FA',
        icon: 'painting',
        url: 'painting',
      },
      {
        name: 'Laundry',
        color: '#FBC126',
        icon: 'laundry',
        url: 'laundry',
      },
      {
        name: 'Appliance',
        color: '#F6473A',
        icon: 'appliance',
        url: 'appliance',
      },
      {
        name: 'Plumbing',
        color: '#3FA855',
        icon: 'plumbing',
        url: 'plumbing',
      },
      {
        name: 'Shifting',
        color: '#03BBD9',
        icon: 'shifting',
        url: 'shifting',
      },
      {
        name: 'More',
        color: '#7c42ec',
        icon: 'more',
        url: 'more',
      },
    ],
  },
  mutations: {
    SERVICES(state, payload) {
      state.servicesList = state.servicesList.filter(item => item.name.toLowerCase().includes(payload.toLowerCase()))
    },
  },
  // getters: {
  //   resultOfQuerySeached: function (state) {
  //     return `${state.firstName} ${state.lastName}!!!!`;
  //   },
  // },
  actions: {
    resultOfQuerySeached({ commit }, payload) {
      commit("SERVICES", payload);
    },
  },
});
