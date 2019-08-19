<template>
  <!-- 分类页 -->
  <div class="home-sort">
      <van-search placeholder="搜索商品,共21527款好物" />
      <div class="center">
        <div class="left">
          <ul>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
          </ul>
        </div>
        <div class="right">
          <img src="../../../public/img/singbanner.jpg" alt="">
          <div class="right_list">
            <ul>
              <li>
                <img src="../../../public/img/singicon.png" alt="">
                <p>员工精选好货</p>
              </li>
              <li>
                <img src="../../../public/img/singicon.png" alt="">
                <p>员工精选好货</p>
              </li>
              <li>
                <img src="../../../public/img/singicon.png" alt="">
                <p>员工精选好货</p>
              </li>
              <li>
                <img src="../../../public/img/singicon.png" alt="">
                <p>员工精选好货</p>
              </li>
              <li>
                <img src="../../../public/img/singicon.png" alt="">
                <p>员工精选好货</p>
              </li>
              <li>
                <img src="../../../public/img/singicon.png" alt="">
                <p>员工精选好货</p>
              </li>
              <li>
                <img src="../../../public/img/singicon.png" alt="">
                <p>员工精选好货</p>
              </li>
              <li>
                <img src="../../../public/img/singicon.png" alt="">
                <p>员工精选好货</p>
              </li>
              <li>
                <img src="../../../public/img/singicon.png" alt="">
                <p>员工精选好货</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'sort',
}
</script>

<style lang="scss">
.center{
  display: flex;
  height: 100%;

  .left{
    width: 80px;
    background: #cccccc;
    margin: 20px 0;
    // box-sizing: border-box;

    li{
      height: 25px;
      text-align: center;
      margin-top: 17px;
      font-size: 14px;
      line-height: 25px;
    }
  }
  .right{
    flex: 1;
    background: pink;
    padding: 10px 10px 5px;
    
    >img{
      width: 264px;
      height: 96px;
    }
    .right_list ul li{
      width: 72px;
      height: 108px;
      float: left;
      text-align: center;
      margin-right: 10px;

      >img{
        width: 100%;
      }

      p{
        font-size: 12px;
        color: #333333;
      }
    }
  }
}
</style>