<template>
  <div class="wy-product_head">
    <i class="iconfont iconshouye"></i>
    <router-link to="#" class="wy-product_title">网易严选</router-link>
    <div>
      <i class="iconfont iconfangdajing"></i>
      <i class="iconfont icongouwuche"></i>
    </div>
  </div>
</template>

<style lang="scss">
.wy-product_head {
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px 0 12px;
  position: relative;

  .wy-product_title {
    font-size: 20px;
    color: #333;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .iconshouye {
    font-size: 26px;
  }

  .iconfangdajing {
    margin-right: 10px;
    font-size: 24px;
  }

  .icongouwuche {
    font-size: 24px;
  }
}
</style>
