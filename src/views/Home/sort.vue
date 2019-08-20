<template>
  <!-- 分类页 -->
  <div class="home-sort">
      <van-search placeholder="搜索商品,共21527款好物" />
      <div class="center">
        <div class="left" ref="left">
          <ul>
            <li 
              v-for="item in sorts" 
              :key="item.id" 
              :class="{'active': item.id === sortId}"
              @click="fn1( item.id )">{{ item.name }}</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
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
  // js样式
  // 引入request
import request from "../../utils/request";
import BScroll from 'better-scroll'

export default {
  name: 'sort',

  data(){
    return{
      sorts: {},
      sortId: '',
      // lists:{},
    }
  },

  // 方法写在methods里
  methods: {
    // 获取左侧列表数据 获取数据需要在created里调用执行这个方法
    getSorts(){
      request
      .get('http://129.204.72.71:8000/api/category/listmap')
      .then(res => {
        if(res.status === 0){
          this.sorts = res.data
          console.log(res);
        }

        // 初始化
        new BScroll(this.$refs['left'])
      })
    },
    // getLists(){
    //   request
    //   .get('http://129.204.72.71:8000/api/category/listmap')
    //   .then(res => {
    //     console.log(res)
    //   })
    // },

    fn1(id){
      this.sortId = id
    }
  },

  created(){
    // 执行
    this.getSorts()
    // this.getList()
  }
}
</script>

<style lang="scss">
  // css样式
.home-sort{
  overflow: hidden;

  .center{
    display: flex;
    height: 100%;

    .left{
      width: 80px;
      margin: 20px 0 50px;
      overflow-y: auto;
      height: 100%;
      box-sizing: border-box;

      li{
        height: 25px;
        text-align: center;
        margin-top: 17px;
        font-size: 14px;
        line-height: 25px;
        position: relative;

        &.active{
          color: #ab2b2b;

          &::before{
            content: ' ';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 4px;
            height: 100%;
            background-color: #ab2b2b;
          }
        }
      }
    }
    .right{
      flex: 1;
      padding: 10px 10px 5px;
      overflow-y: auto;
      height: 100%;
      
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
}

</style>