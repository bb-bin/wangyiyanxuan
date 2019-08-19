import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { SubmitBar, Checkbox, CheckboxGroup, Swipe, SwipeItem, Search  } from "vant";

import "./assets/style/base.scss";

Vue.use(SubmitBar)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Swipe)
  .use(Swipe)
  .use(Search);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
