<template>
  <ul class="wy-tabbar">
    <li v-for="item in tabs" :key="item.id">
      <router-link :to="item.href">
        <i class="iconfont" :class="[item.icon]"></i>
        <span>{{ item.name }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Tabbar",

  props: {
    tabs: Array
  }
};
</script>

<style lang="scss">
.wy-tabbar {
  display: flex;
  height: 50px;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background: #ededed;
    transform: scale(0.5);
  }

  li {
    flex: 1;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #666;
  }

  .iconfont {
    font-size: 20px;
  }
}
</style>
