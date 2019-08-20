<template>
  <div class="page-ind">
    <router-view></router-view>

    <Tabbar :tabs="tabs" />
  </div>
</template>

<script>
import Tabbar from "../../components/Tabbar/index";

export default {
  name: "Ind",

  components: {
    Tabbar
  },

  data() {
    return {
      tabs: [
        { id: 1, name: "首页", icon: "iconshouye", href: "/home" },
        { id: 2, name: "分类", icon: "iconfenlei", href: "/sort" },
        { id: 3, name: "识物", icon: "iconshiwu", href: "/topic" },
        { id: 4, name: "购物车", icon: "icongouwuche", href: "/car" },
        { id: 5, name: "个人", icon: "iconmy", href: "/center" }
      ]
    };
  }
};
</script>

<style lang="scss">
.page-ind {
  display: flex;
  flex-direction: column;
  height: 100%;

  > div:first-child {
    flex: 1;
  }
}
</style>
