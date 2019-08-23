import Vue from "vue";

import Vuex from "vuex";

import car from "./store/modules/car";
import product from "./store/modules/product";
import productList from "./store/modules/productList";
import user from './store/modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    car,
    product,
    productList,
    user
  }
});
