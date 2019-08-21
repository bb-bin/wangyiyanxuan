import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  SubmitBar,
  Checkbox,
  CheckboxGroup,
  Swipe,
  SwipeItem,
  Search
} from "vant";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import "./assets/style/base.scss";


Vue.use(SubmitBar)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(SwipeItem)
  .use(Swipe)
  .use(Search)
  .use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
