<template>
  <div class="hjapp">
        <div class="hj-nav">
            <h1>网易严选</h1>
            <form>
              <i class="iconfont iconfangdajing"></i>
              <input type="text" placeholder="来了老弟">
            </form>
            <button>登录</button>
        </div>
  </div>
</template>
<style lang="scss" scoped>
.hjapp{
  width :100%;
  height :100%;
  font-size: 12px;
  background :red;
  .hj-nav{
    height: 44px;
    background: lavenderblush;
    display: flex;
    // justify-content: space-between;
    form{
      width: 221px;
      height: 28px;
      border: 1px solid teal;
      i{
        width: 13px;
        height: 13px;
      }
      input{
        width: 155px;
        height: 20px;
      }
    }
    button{
      width: 40px;
      height: 20px;
    }
  }
}
</style>