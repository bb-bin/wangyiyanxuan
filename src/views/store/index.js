import Vue from "vue";

import Vuex from "vuex";

import car from "./modules/car";
import product from "./modules/produect";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    car,
    product,
  }
});
