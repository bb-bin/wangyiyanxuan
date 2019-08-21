<template>
  <div class="hjapp">
        <div class="hj-nav">
            <div class="hj-top">
              <h1>网易严选</h1>
            <form>
              <i class="iconfont iconfangdajing"></i>
              <input type="text" placeholder="来了老弟">
            </form>
            <button>登录</button>
            </div>
            <div class="hj-button">
                  <ul>
                    <li>推选</li>
                    <li>居家生活</li>
                    <li>服饰鞋包</li>
                    <li>美食酒水</li>
                  </ul>
                  <h3 class="iconfont iconxiajiantou"></h3>
            </div>
            </div>


            <div class="hj-box">
                  <van-swipe :autoplay="3000" indicator-color="white" class="hj-box">
                    <van-swipe-item v-for="item in hello" :key="item.id"><img :src="item.picUrl" alt=""></van-swipe-item>
                      <!-- <van-swipe-item>2</van-swipe-item>
                     <van-swipe-item>3</van-swipe-item>
                      <van-swipe-item>4</van-swipe-item> -->
                   </van-swipe>
            </div>




            <div class="hj-box-nav">
                     <ul>
                       <li class="iconfont iconjiaoyiliebiao">网易自营品牌</li>
                       <li class="iconfont iconTick">30天无忧退货</li>
                       <li class="iconfont iconjiaoyiliebiao">48小时快速退款</li>
                     </ul>
            </div>
            <div class="hj-box-top">
                      <ul>
                        <li>
                          <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="">
                          <span>美食酒水</span>
                          </li>
                            <li>
                          <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="">
                          <span>美食酒水</span>
                          </li>
                            <li>
                          <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="">
                          <span>美食酒水</span>
                          </li>
                            <li>
                          <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="">
                          <span>美食酒水</span>
                          </li>
                            <li>
                          <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="">
                          <span>美食酒水</span>
                          </li>
                            <li>
                          <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="">
                          <span>美食酒水</span>
                          </li>
                            <li>
                          <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="">
                          <span>美食酒水</span>
                          </li>
                           <li>
                          <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="">
                          <span>美食酒水</span>
                          </li>
                           <li>
                          <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="">
                          <span>美食酒水</span>
                          </li>
                           <li>
                          <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="">
                          <span>美食酒水</span>
                          </li>
                      </ul>
            </div>
             <div class="hj-box-left">
                   <div class="hj-pao">
                        <h1><i>一</i> 新人专享礼 <i>一</i></h1>
                   </div>
                   <div class="hj-pao-top">
                         <div class="hj-pao-left">
                               <h1>新人专享礼包</h1>
                            <span><img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt=""></span>
                         </div>
                         <div class="hj-pao-right">
                             <div class="hj-num">
                               <div class="hj-head">
                                  <h1>福利社</h1>
                                  <span>今日特价</span>
                               </div>
                               <div class="hj-head-top">
                                     <ul>
                                 <li>$7.5</li>
                                 <li><sup>$0.0</sup></li>
                               </ul>
                                     <span><img src="https://yanxuan.nosdn.127.net/a3a8b2d59bce415e253c8d8e23fc6589.png?imageView&thumbnail=200x200&quality=75" alt=""></span>
                               </div>
                              
                             </div>
                             <!---->
                             <div class="hj-num-top">
                             <div class="hj-all">
                                  <h1>福利社</h1>
                                  <span>今日特价</span>
                               </div>
                               <div class="hj-all-top">
                                     <ul>
                                 <li>$7.5</li>
                                 <li><sup>$0.0</sup></li>
                               </ul>
                                     <span><img src="https://yanxuan-item.nosdn.127.net/bb9025c24057dfb89403055ac5b9f85c.png?imageView&thumbnail=200x200&quality=75" alt=""></span>
                               </div>
                             </div>
                         </div>
                   </div>
             </div>

  </div>

</template>
 
<script>


  import request from '../../utils/request' 
export default {
  nane:'nace',
  data(){
    return {
      hello:{},
      getbox:{},
    }
  },
  methods:{
    gethello(){
      request .get('http://129.204.72.71:8000/api/home/bannerlist').then(res =>{
         
//  console.log(res)
        if(res.status === 0){
          this.hello =res.data
          //  console.log(this.hello)
        }
      })
    },
    getworld(){
     request .get('http://129.204.72.71:8000/api/catelist').then(res =>{
       console.log(res);
          if(res.status === 0){
          this.getbox =res.data
           console.log(this.getbox)
        }
     })      
    }
  },
  created(){
    this.gethello();
    this.getworld()
  }
}

 </script>


<style lang="scss" scoped>
.hjapp{
  width :100%;
  height :100%;
  font-size: 12px;
  
  overflow: hidden;
  overflow: scroll;
  overflow: auto;
 .hj-nav{
   width: 100%;
   min-height: 74px;
   background: #ffffff;
  position: fixed;
  z-index: 999;
    .hj-top{
    height: 44px;
    display: flex;
   padding: 7px 15px;
   box-sizing: border-box;
    justify-content: space-between;
    h1{
     line-height: 33px;
    }
    form{
      width: 221px;
      height: 28px;
     margin: 0 13px 0 10px;
      border: 1px solid teal;
      background: #ededed;
      padding:1px 0 0 10px; 
      box-sizing: border-box;
      line-height: 28px;
        border:none;
      border-radius:4px; 
      input{
        width: 155px;
        height: 20px;
        border: none;
      background: #ededed;
      margin-left:5px; 

      }
    }
    button{
      width: 40px;
      height: 20px;
      margin: 5px 0 0 0;
      background: #ffffff;
      border: 1px solid #b4282d;
      border-radius:4px; 
    }
  }
  .hj-button{
    height: 30px;
     display: flex;
    justify-content: space-between;
   ul{
      display: flex;
      width: 300px;
      background: #ccc;
       overflow-y: hidden;
        overflow: scroll;
         overflow: auto;
      li{
        width: 72px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        //   overflow-y: hidden;
        // overflow: scroll;
        //  overflow: auto;
      }
   }
   h3{
     width: 50px;
     height: 30px;
    
     text-align: center;
     line-height: 30px;
   }
  }
 }
  .hj-box{
    margin-top:74px; 
    height: 185px;
     img{
       width: 100%;
       height: 185px;
     }
  }
  .hj-box-nav{
    background: #ededed;
    height: 36px;
    padding: 0 15px;
   box-sizing: border-box;
  //  font-size: 12px;
    // justify-content: space-between;
    
ul{
  display: flex;
    justify-content: space-between;
   li{
     line-height: 36px;
     font-size: 12px;
   }
}
  }
  .hj-box-top{
    height: 186px;
    background: #ffffff;
    ul{
        text-align: center;
        display: flex;
        flex-wrap: wrap;
      li{
        width: 55px;
        height: 78px;
        // text-align: center;
        // display: flex;
        margin: 5px 10px;
      }
      img{
        width: 55px;
        height: 55px;
      }
    }
  }
  .hj-box-left{
   min-height: 280px;
  
   padding: 15px;
   box-sizing: border-box;
   .hj-pao{
     height: 45px;
     background: #ededed;
     h1{
       text-align: center;
       line-height: 45px;
     }
   }
   .hj-pao-top{
     height: 216px;
     background: salmon;
     display: flex;
     .hj-pao-left{
       background:#F9E9CF; 
       flex: 1;
       text-align: center;
       border-right: 1px solid floralwhite;
       h1{
         font-size: 16px;
         padding: 15px 0 23px 0;
         box-sizing: border-box;
       }
       img{
         width: 129px;
         height: 129px;
        //  text-align: center;
       }
     }
      .hj-pao-right{
       background: aliceblue;
       flex: 1;
          .hj-num{
            height: 50%;
             background: #FBE2D3;
             border-bottom: 1px solid floralwhite;
             display: flex;
             padding: 10px 0 0 15px;
             box-sizing: border-box;
             .hj-head{
               h1{
                 font-size: 16px;
               }
             }
            .hj-head-top{
              // width: 100px
              position: relative;
              ul{
              width: 40px;
              height: 40px;
              border-radius:50%;
              text-align: center;
              line-height: 20px;
               background: hsl(93, 80%, 60% ,0.6); 
            //  background: opacify($color:salmon $amount: 0)
              position: absolute;
              top: -3px;
              left: 43px;
            }
              img{
                width: 100px;
                height: 100px;
              }
            }
            
          }
           .hj-num-top{
            height: 50%;
            background: #FFECC2;
             display: flex;
             padding: 10px 0 0 15px;
             box-sizing: border-box;
             .hj-all{
               h1{
                 font-size: 16px;
               }
             }
            .hj-all-top{
              // width: 100px
              position: relative;
              ul{
              width: 40px;
              height: 40px;
              border-radius:50%;
              text-align: center;
              line-height: 20px;
              background: hsl(93, 80%, 60% ,0.6); 
              position: absolute;
              top: -3px;
              left: 43px;
            }
              img{
                width: 100px;
                height: 100px;
              }
            }
          }
     }
   }
  }
}
</style>