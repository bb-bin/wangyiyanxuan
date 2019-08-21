import Vue from "vue";

import Vuex from "vuex";

import car from "./store/modules/car";
import product from "./store/modules/product";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    car,
    product
  }
});
