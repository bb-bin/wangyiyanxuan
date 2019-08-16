import Vue from "vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("./views/Home/index.vue"),
    children: [
      {
        path: "/home",
        component: () => import("./views/Home/home.vue"),
        meta: {
          title: "主页"
        }
      },
      {
        path: "/sort",
        component: () => import("./views/Home/sort.vue"),
        meta: {
          title: "分类"
        }
      },
      {
        path: "/topic",
        component: () => import("./views/Home/topic.vue"),
        meta: {
          title: "识物"
        }
      },
      {
        path: "/car",
        component: () => import("./views/Home/car.vue"),
        meta: {
          title: "购物车"
        }
      },
      {
        path: "/center",
        component: () => import("./views/Home/center.vue"),
        meta: {
          title: "个人"
        }
      }
    ]
  },
  {
    path: "/login",
    component: () => import("./views/Login/index.vue"),
    meta: {
      title: "登录页"
    }
  },
  {
    path: "/register",
    component: () => import("./views/register/index.vue"),
    meta: {
      title: "注册页"
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
