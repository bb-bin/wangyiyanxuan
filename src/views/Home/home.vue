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
              <div class="r-head">

                    <p>推选</p>
                    <p>居家生活</p>
                    <p>服饰鞋包</p>
                    <p>美食酒水</p>
                   
                </div>
                  <h3 class="iconfont iconxiajiantou"></h3>
            </div>
            </div>


            <div class="hj-box">
                  <van-swipe :autoplay="3000" indicator-color="white" class="hj-box">
                    <van-swipe-item v-for="item in hello" :key="item.id"><img :src="item.picUrl" alt=""></van-swipe-item>
                    
                   </van-swipe>
            </div>




            <div class="hj-box-nav">
                     <ul>
                       <li class="iconfont iconjiaoyiliebiao"  v-for="item in getlistCathome" :key="item.id">
                       
                         {{item.desc}}
                         </li>
                       <!-- <li class="iconfont iconTick">30天无忧退货</li>
                       <li class="iconfont iconjiaoyiliebiao">48小时快速退款</li> -->
                     </ul>
            </div>
            <div class="hj-box-top">
                      <ul>
                        <li v-for="item in getbox" :key="item.text">
                          <img :src="item.picUrl" alt="">
                          <span>{{item.text}}</span>
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
          <div class="hj-all-bottom">
                        <div class="list">
                              <h1>品牌制造商直供</h1> 
                              <h2><span>更多</span> <span class="iconfont iconjiantouyou"></span></h2>             
                        </div>
                        <div class="list-top">
                          <!-- item.picUrl 背景图-->
                          <div class="list-left"  v-for="item in getpao" :key="item.id" :style="{backgroundImage: 'url(' + item.picUrl + ')'}">
                                     <h1>{{item.name}} </h1>
                                     <span>{{item.floorPrice}}元起 </span>
                                         
                          </div>
                        </div>
          </div>

          <div class="list-right">
               <div class="hj-get">
                 <h1>类目热销</h1>
               </div>
               <div class="hj-get-list">
               <div class="hj-get-left">
                 <!-- gethead -->
                   <!-- v-for="item in gethead" :key="item.categoryName" -->
                 <!-- {{item.categoryName}} -->
                    <h1>
                      <p>热销好 </p>
                       <span></span>
                    </h1>
                   
                    <img src="https://yanxuan-item.nosdn.127.net/6fd807743e8e25472aca8b6b0b8f3039.png?imageView&quality=65&thumbnail=200x200" alt="" srcset="">

               </div>
               <div class="hj-get-left">
                    <h1>
                      <p>热销好</p>
                       <span></span>
                    </h1>
                   
                    <img src="https://yanxuan-item.nosdn.127.net/6fd807743e8e25472aca8b6b0b8f3039.png?imageView&quality=65&thumbnail=200x200" alt="" srcset="">

               </div>
               <div class="hj-get-home">
                         <h2>美食酒水榜</h2>
                         <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200" alt="">
                                  </div>
                                    <div class="hj-get-home">
                         <h2>美食酒水榜</h2>
                         <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200" alt="">
                                  </div>
                                    <div class="hj-get-home">
                         <h2>美食酒水榜</h2>
                         <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200" alt="">
                                  </div> 
                                   <div class="hj-get-home">
                         <h2>美食酒水榜</h2>
                         <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200" alt="">
                                  </div>
                                   <div class="hj-get-home">
                         <h2>美食酒水榜</h2>
                         <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200" alt="">
                                  </div>
                                    <div class="hj-get-home">
                         <h2>美食酒水榜</h2>
                         <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200" alt="">
                                  </div>
                                    <div class="hj-get-home">
                         <h2>美食酒水榜</h2>
                         <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200" alt="">
                                  </div> 
                                   <div class="hj-get-home">
                         <h2>美食酒水榜</h2>
                         <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200" alt="">
                                  </div>
              </div>
              
          </div>
          <div class="box-hj">
               <div class="box-hj-top">
                            <h1>品牌制造商直供</h1> 
                              <h2><span>更多</span> <span class="iconfont iconjiantouyou"></span></h2>             
               </div>
               <div class="box-hj-left">
                    <img src="https://yanxuan-item.nosdn.127.net/89d86a4e463115e366daf841b9bcff46.png?imageView&quality=65&thumbnail=280x280" alt="">
                    <div class="box-hj-right">
                          <div class="box-1">
                              <p>抄底特惠</p>
                           <p>新色谁看见爱上</p>
                           <span>公司社好的哈撒</span>
                           <h3>$1949</h3>
                          </div>
                    </div>
               </div>
               <div class="nav-hj">
                         <div class="nav-hj-top">
                           <img src="https://yanxuan-item.nosdn.127.net/d2abd30e0296cdee86f1bdd9242c0937.png?imageView&quality=65&thumbnail=330x330" alt="">
                           <p>三生三世 少时诵诗书所所所所所<span>$179</span> </p>
                         <div class="nav-hj-left">
                          <h4>特价</h4>
                         <h5>加价购</h5>
                         </div>
                         </div>
                          <div class="nav-hj-top">
                           <img src="https://yanxuan-item.nosdn.127.net/d2abd30e0296cdee86f1bdd9242c0937.png?imageView&quality=65&thumbnail=330x330" alt="">
                           <p>三生三世 少时诵诗书所所所所<span>($179</span> </p>
                         <div class="nav-hj-left">
                          <h4>特价</h4>
                         <h5>加价购</h5>
                         </div>
                         </div>
                          <div class="nav-hj-top">
                           <img src="https://yanxuan-item.nosdn.127.net/d2abd30e0296cdee86f1bdd9242c0937.png?imageView&quality=65&thumbnail=330x330" alt="">
                           <p>三生三世 少时诵诗书所所所所<span>($179</span> </p>
                         <div class="nav-hj-left">
                          <h4>特价</h4>
                         <h5>加价购</h5>
                         </div>
                         </div>
               </div>
          </div>
          <div class="a-box">
            <!-- getaboutlist -->
                    <div class="a-box-top">
                        <div class="a-pao">
                            <span>限时购买</span>
                            <p>00</p>
                            <span>:</span>
                            <p>00</p>
                            <span>:</span>
                            <p>00</p>
                        </div>
                        <h1>更多<i class="iconfont iconjiantouyou"></i> </h1>
                    </div>
                    <div class="a-box-left">
                       <div class='a-box-right' v-for="item in getaboutlist" :key="item.id">
                               <img :src="item.picUrl" alt="">  
                               <span>${{item.activityPrice}}</span>
                               <s>${{item.originPrice}}</s>
                       </div>
                    </div>
          </div>
          <div class="h-box">
              <div class="h-box-top">
               <h1>新发首行</h1>
               <h2>更多<i class="iconfont iconjiantouyou"></i> </h2>
              </div>
              <!-- getaboutList -->
               <!-- v-for="item in getaboutList" :key="item.id" -->
               <!-- item.listPicUrl -->
              <div class="h-box-left">
               <div class="h-box-right">
                    <img src="https://yanxuan-item.nosdn.127.net/2fa8e674142d221f42dfbf277ac2279c.png?imageView&quality=65&thumbnail=330x330" alt="">

                   <span>女式经典皮面小白鞋<span></span>$200</span>
               </div>
                <div class="h-box-right">
                    <img src="https://yanxuan-item.nosdn.127.net/2fa8e674142d221f42dfbf277ac2279c.png?imageView&quality=65&thumbnail=330x330" alt="">

                   <span>女式经典皮面小白鞋<span></span>$200</span>
               </div>
                <div class="h-box-right">
                    <img src="https://yanxuan-item.nosdn.127.net/2fa8e674142d221f42dfbf277ac2279c.png?imageView&quality=65&thumbnail=330x330" alt="">

                   <span>女式经典皮面小白鞋<span></span>$200</span>
               </div>
                <div class="h-box-right">
                    <img src="https://yanxuan-item.nosdn.127.net/2fa8e674142d221f42dfbf277ac2279c.png?imageView&quality=65&thumbnail=330x330" alt="">

                   <span>女式经典皮面小白鞋<span></span>$200</span>
               </div>
                <div class="h-box-right">
                    <img src="https://yanxuan-item.nosdn.127.net/2fa8e674142d221f42dfbf277ac2279c.png?imageView&quality=65&thumbnail=330x330" alt="">

                   <span>女式经典皮面小白鞋<span></span>$200</span>
               </div>
                <div class="h-box-right">
                    <img src="https://yanxuan-item.nosdn.127.net/2fa8e674142d221f42dfbf277ac2279c.png?imageView&quality=65&thumbnail=330x330" alt="">

                   <span>女式经典皮面小白鞋<span></span>$200</span>
               </div>
              </div>
          </div>
          <div class="h-home">
             <!-- v-for="item in getaboutList" :key="item.styleItem" -->
            <!-- getnumlist -->
           <div class="h-home-top" v-for="item in getnumlist" :key="item.id">
               <h1>{{item.styleItem.title}}</h1>
               <h5>{{item.styleItem.desc}}</h5>
               <img :src="item.styleItem.picUrlList[0]" alt="">
               <img :src="item.styleItem.picUrlList[1]" alt="">
           </div>
          </div>
          <div class="z-box">
            <!-- getworldCat -->
            <!-- v-for="item in getaboutList" :key="item.styleItem" -->
                  <div class="z-box-top" v-for="item in getworldCat" :key="item.id">
                    <img :src="item.titlePicUrl" alt="">
                    <div class="z-box-left">
                       <div class="z-box-right"  v-for="it in item.itemList" :key="it.id">
                         <img :src="it.listPicUrl" alt="">
                         <h1>{{it.name}} </h1>
                         <h2>${{it.counterPrice}}</h2>
                       </div>
                       
                    </div>
                  </div>
          </div>
          <div class="g-nav">
                 <div class="g-nav-top">
      <p>下载App</p>
      <p>电脑版</p>
                 </div>
                
<p>网易公司版权所有@ 1997-2019</p>
<p>食品经营许可证：JY1330180111719</p>
              
          </div>
          <el-backtop target=".hjapp" style="right: 12px; bottom: 108px; color: #666;"></el-backtop>

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
      getlistCathome:{},
      getpao:{},
      gethead:{},
      getabout:{},
      getaboutlist:{},
      getaboutList:{},
      getnumlist:{},
      getworldCat:{}
    }
  },
  methods:{
    gethello(){
      request.get('http://129.204.72.71:8000/api/home/bannerlist').then(res =>{
         
//  console.log(res)
        if(res.status === 0){
          this.hello =res.data
          //  console.log(this.hello)
        }
      })
    },//首页轮播图数据接口
    getworld(){
     request.get('https://www.littleemmayang.com/api/home/catelist').then(res =>{
      //  console.log(res);
          if(res.status === 0){
          this.getbox =res.data.kingKongList
          //  console.log(this.getbox)
        }
     })      
    },//首页分类列表接口
    getlistCat(){
     request.get('https://www.littleemmayang.com/api/policylist').then(res =>{
       console.log(res);
          if(res.status === 0){
          this.getlistCathome =res.data
          //  console.log(this.getlistCathome)
        }
     })      
    },//网易严选协议接口
     getnav(){
     request.get('https://www.littleemmayang.com/api/home/tagList').then(res =>{
      //  console.log(res);
          if(res.status === 0){
          this.getpao =res.data
          //  console.log(this.getpao)
        }
     })      
    },//品牌制造商直供接口
    getall(){
     request.get('https://www.littleemmayang.com/api/home/catehotsell').then(res =>{
       console.log(res);
          if(res.status === 0){
          this.gethead =res.data.categoryList
           console.log(this.gethead)
        }
     })      
    },//类目热销榜接口
     getlist(){
     request.get('https://www.littleemmayang.com/api/home/popularlist').then(res =>{
      //  console.log(res);
          if(res.status === 0){
          this.getabout =res.data
          //  console.log(this.getabout)
        }
     })      
    },//人气推荐接口
     getheadlist(){
     request.get('https://www.littleemmayang.com/api/home/flashsale').then(res =>{
      //  console.log(res);
          if(res.status === 0){
          this.getaboutlist =res.data.itemList
          //  console.log(this.getaboutlist)
        }
     })      
    },//购物指南接口
    getheadList(){
     request.get('https://www.littleemmayang.com/api/home/newitemlist').then(res =>{
      //  console.log(res);
          if(res.status === 0){
          this.getaboutList =res.data
          //  console.log(this.getaboutList)
        }
     })      
    },//新品首发接口
     getnumcat(){
     request.get('https://www.littleemmayang.com/api/home/shoppingguide').then(res =>{
      //  console.log(res);
          if(res.status === 0){
          this.getnumlist =res.data
          //  console.log(this.getnumlist)
        }
     })      
    },//购物指南接口
     getCatworld(){
     request.get('https://www.littleemmayang.com/api/home/top/catelist').then(res =>{
      //  console.log(res);
          if(res.status === 0){
          this.getworldCat =res.data
          //  console.log(this.getworldCat)
        }
     })      
    },//推荐列表接口
  },
  created(){
    this.gethello();
    this.getlistCat();
    this.getworld();
    this.getnav();
    this.getall();
    this.getlist();
    this.getheadlist();
    this.getheadList();
    this.getnumcat();
    this.getCatworld()
  }
}

 </script>


<style lang="scss" scoped>
.hjapp{
  width :100%;
  height :100%;
  font-size: 12px;
      background: #ccc;
  
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
     width: 100%;
    height: 30px;
     display: flex;
    justify-content: space-between;
    
    .r-head{
       width: 600px;
        overflow: hidden;
        overflow: scroll;
         overflow: auto;
          //  background: #ccc;
          display: flex;
               p{
                 width: 100px;
                 margin-left:5px; 
                 display:block;
                //  background: #ffff00;
                text-align: center;
                line-height: 30px;
               }
    }
   h3{
     width: 50px;
     height: 30px;
     text-align: center;
     line-height: 30px;
    //  position: fixed;
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
      background:#ffffff;
  
   padding: 15px;
   box-sizing: border-box;

   margin: 10px 0 10px 0;
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
  .hj-all-bottom{
    height: 327px;
    background: #ffffff;
    padding:0 15px 15px 15px;
   box-sizing: border-box;
    

    .list{
      height: 50px;
      font-size: 16px;
      // background: aquamarine;
      display: flex;
      justify-content: space-between;
      line-height: 50px;
    }
    .list-top{
      height: 272px;
      // background: #ccc;
      display: flex;
      flex-wrap: wrap;
      .list-left{
       
        width: 50%;
        height: 50%;
        border-left: 1px solid #ffffff;
        border-bottom: 1px solid #ffffff;

         text-align: center;
        padding-top:11px; 
        box-sizing: border-box;
      //  background-image:url(https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1);
       background-size:100% 100%;
        // background-repeat:no-repeat;
        span{
          color: #7F7F7F;
          margin-top:5px; 
          display: block;
        }
      }
      
    }
  }
  .list-right{
    height: 355px;
    background: #ffffff;
    padding: 15px;
    box-sizing: border-box;
    margin: 10px 0 10px 0 ;
 .hj-get{
   height: 50px;
   line-height: 50px;
  //  background: #ccc;
 }
 .hj-get-list{
  
   height: 285px;
  //  background:#F9F3E4;
    display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      justify-content: space-between;

   .hj-get-left{
     width: 48.5%;
     height: 100px;
     background: #F9F3E4;
     display: flex;
     justify-content: space-between;
     margin: 0 5px 5px 0;
     h1{
       line-height: 100px;
       margin-left: 10%;
     }
     img{
       width: 100px;
       height: 100px;
     }
   }
   .hj-get-home{
     width: 23%;
     height: 88px;
     background: #F5F5F5;
     text-align: center;
     margin: 0 5px 5px 0;
     img{
       width: 60px;
       height: 60px;
     }
   }
 }
  }
 .box-hj{
   height: 392px;
   background: #ffffff;
    padding: 0 15px 15px 15px;
     box-sizing: border-box;
   .box-hj-top{
     height: 50px;
    //  background: #ccc;
     line-height: 50px;
     display: flex;
     justify-content: space-between;
    //  padding: 0 15px;
    //  box-sizing: border-box；
   }
   .box-hj-left{
     height: 140px;
     background:  #FEF0DF;
     display: flex;
     justify-content: space-between;
     img{
       width: 140px
     }
     .box-hj-right{
       flex: 1;
      
       .box-1{
           margin-top: 22px;
           line-height: 14px;
       }
     }
   }
   .nav-hj{
     height: 177px;
    //  background: #FEF0DF;
     margin-top:15px; 
     display: flex;
     justify-content: space-between;
     .nav-hj-top{
       width: 31%;
       height: 177px;
      //  background: sandybrown;
       img{
         height: 108px;
         background: #F5F5F5;
       }
       .nav-hj-left{
         display: flex;
         text-align: center;
         h4{
           width: 33px;
           height: 16px;
           border: 1px solid red;
           border-radius:11px; 
         }
         h5{
           width: 43px;
           height: 16px;
           border: 1px solid red;
           border-radius:11px;
           margin-left:6px; 
         }
       }
     }
   }
 }
 .a-box{
   height: 350px;
   background: #ffffff;
   margin: 13px 0 15px 0;
   .a-box-top{
     
           height: 50px;
          
           line-height: 50px;
           padding: 0 15px 0 15px;
           box-sizing: border-box;
           display: flex;
           .a-pao{
             flex: 1;
              display: flex;
              // p{
              //   width: 10px;
              //   height: 10px;
              //   background: black;
              // }
           }
   }
    .a-box-left{
      height: 300px;
      // background: aqua;
      padding: 0 1px 0 10px;
      display: flex;
       flex-wrap: wrap;
      // align-content: flex-start;
      justify-content: space-between;
      .a-box-right{
           width:29%;
           height: 143px;
        //  background:salmon;;
           margin: 0 15px 10px 0;
           span{
             color: red;
             margin:0 5px 0 5px; 
             display: inline-block;
           }
           img{
             width: 100%;
             height: 108px;
             margin-bottom:5px; 
           }
      }
    }
 }
.h-box{
  height: 417px;
  background: #ffffff;
  .h-box-top{
    height:50px;
    line-height: 50px;
    // background: aquamarine;
    padding: 0 15px 0 15px;
    
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
  .h-box-left{
    height: 367px;
    background: #ffffff;
    display: flex;
       flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 15px 0 15px;
    
    box-sizing: border-box;
    .h-box-right{
      width: 30%;
      height: 172px;
      // background: olive;
      img{
        height: 108px;
        background: #F5F5F5;
      }
    }
  }
}
.h-home{
  height: 283px;
  background: #fff;
  margin: 10px 0 0 0;
   padding:5px 7px 15px 15px;
    box-sizing: border-box;
    display: flex;
       flex-wrap: wrap;

  .h-home-top{
    width: 48%;
    height: 132px;
    background: #F5F5F5;
      padding:10px 0 0 10px;
      margin: 0 5px 6px 0;
    
    box-sizing: border-box;
    h1{
      font-size: 16px;
      margin: 0 0 5px 0;
    }
    h5{
      color: #7f7f7f;
    }
    img{
      width: 50%;
      height: 75px;
    }
  }
}
.z-box{
  min-height: 1000px;
  // background:#ffffff;
 .z-box-top{
    height: 391px;
    background: #ffffff;
    margin-top:10px;
     img{
        height: 185px;
        margin-bottom:10px; 
     }
   .z-box-left{
    width: 100%;
    height: 195px;
    // background: #ccc;

    display: flex;
    // justify-content: space-between;
    overflow: hidden;
    overflow: scroll;
    overflow: auto;
    // overflow-y:visible;
    padding: 0 15px 15px 15px;
    box-sizing: border-box;
    .z-box-right{
          width: 100px;
          height: 170px;
          margin: 0 10px 10px 0;
          background: #ffffff;
          img{
            height: 100px;
          }
          h2{
            color: red;
          }
    }
  }
  }
  
}
.g-nav{
  height: 122px;
  background: black;
  color: #ccc;
  text-align: center;
  padding: 27px 10px 13px;
  box-sizing: border-box;
  .g-nav-top{
    height: 31px;
    //  text-align: center;
    display: flex;
    // background: darkcyan;
    margin-bottom:10px; 
    p{
              width: 86px;
                  height: 31px;
                border: 1px solid #FBE2D3;
                //  text-align: center;
                line-height: 31px;
                margin:0 5px 0 55px; 
    }
    
  }
   p{
     margin-bottom:3px; 
   }
}
}
</style>