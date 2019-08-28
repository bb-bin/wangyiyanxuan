  <template>
  <div class="page-home-center">
     <div class="avatar" v-if="userInfo">
      <div class="avator-icon">
        <img :src="userInfo.avatar" />
        <!-- <input type="file" @change="handleUpdAvatar" /> -->
      </div>
      <div class="nick-name">{{ userInfo.username }}</div>
    </div>

    <div class="avatar" v-else>
      <div class="avator-icon">
        <img src="https://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" />
      </div>
      <router-link to="/login" tag="div" class="nick-name">立即登录</router-link>
    </div>
    <ul class="my-order-tab">
      <li>
        <i class="iconfont icon-youhui"></i>
        <div class="common-p">我的资产</div>
      </li>
      <li>
        <i class="iconfont icon-linggan"></i>
        <div class="common-p">礼品卡</div>
      </li>
    </ul>
    <div class="login-nav"></div>
      <div class="login-con">
        <ul class="login-ul">
          <li>
            <a href="#">
              <i class="iconfont icondingdan"></i>
              <span>我的订单</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="iconfont iconrili"></i>
              <span>周六一起拼</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="iconfont iconshouhou"></i>
              <span>售后服务</span>
            </a>
            </li>
            <li>
            <a href="#">
              <i class="iconfont iconyaoqing"></i>
              <span>邀请返利</span>
            </a>
              </li>
              <li>
                <a href="#">
                  <i class="iconfont iconyouxiangou"></i>
                  <span>优先购</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="iconfont iconjifen"></i>
                  <span>积分中心</span>
              </a>
              </li>
              <li>
                <a href="#">
                  <i class="iconfont iconzuanshi"></i>
                  <span>会员俱乐部</span>
              </a>
              </li>
              <li>
                <a href="#">
                  <i class="iconfont icondizhi"></i>
                  <span>地址管理</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="iconfont iconanquan"></i>
                  <span>账号安全</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="iconfont iconkefu"></i>
                  <span>帮助与客服</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="iconfont iconyijianfankui1"></i>
                  <span>意见反馈</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="login-nav"></div>
          <div class="margin-set system-set">
            <a href="#">
               <span class="label">退出登录</span>
            </a>
          </div>
          <div class="login-nav"></div>
        </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Tabbar from '../../components/Tabbar/index';
export default {
  name: "center",
  computed: {
    ...mapState('user', ['userInfo'])
  },
};
</script>
<style lang="scss">


        .page-home-center{
          overflow: hidden;
          overflow-y: auto;
        }
        .page-home-center .avatar {
          text-align: center;
          height: 135px;
          padding-left: 22px;
          background: url(https://yanxuan.nosdn.127.net/d069279e5834bbca17065a9855a014bf.png);
          background-size: cover;
          display: flex;
          align-items: center;
          color: #fff;
        }
        .page-home-center .avatar .avator-icon {
          position: relative;
          width: 63px;
          height: 63px;
          border-radius: 35px;
          margin-right: 20px;
          border: 2px solid #fff;
        }
        .page-home-center .avatar .avator-icon img {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        .page-home-center .avatar .avator-icon input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
        .page-home-center .avatar .nick-name {
          font-size: 16px;
        }
        .my-order-tab {
          width: 100%;
          margin: 0 auto;
          display: flex;
          text-align: center;
          font-size: 13px;
          padding: 0;
          height: 79px;
          background: #fff;
          align-items: center;
          border-bottom: 1px solid #ccc;
        }
        .my-order-tab li {
          position: relative;
          flex: 1;
          list-style: none;
        }
        .my-order-tab .iconfont {
          font-size: 26px;
        }
        .my-order-tab .common-p {
          margin-top: 10px;
          color: #797d82;
          }
        .margin-set {
          position: relative;
          background: #fff;
          padding: 0 15px;
          height: 49px;
          display: flex;
          align-items: center;
        }
        .margin-set a {
          font-size: 16px;
          margin-left: 15px;
          color: #f40;
          flex: 1;
          text-align: center;
        }
        .margin-set ::after {
          content: " ";
          position: absolute;
          left: 0;
          bottom: 0;
          right: 0;
          height: 1px;
          border-bottom: 1px solid #ededed;
          color: #ededed;
          transform-origin: 0 100%;
          transform: scaleY(0.5);
          left: 13px;
        }
        .login-nav{
            height: 5px;
            background: #ccc;
        }
        .login-con{
          width: 375px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          border-top: 1px solid #ccc;
        }
        .login-con .login-ul li{
          width: 33.3333%;
          float: left;
          height: 90px;
          text-align: center;
          border-right: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
          box-sizing: border-box;
          padding-top: 22px;
        }
        .login-con .login-ul li a .iconfont{
          color: #bbb;
          font-size: 26px;
        }
        .login-con .login-ul li a span{
            display: block;
            margin-top: 10px;
        }

        .wy-tabbar{
          display: fixed;
        }
      </style>