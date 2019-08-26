<template>
  <div class="wy-product">
    <wyHead />

    <van-swipe @change="onChange" class="vant-parent" :autoplay="6000">
      <van-swipe-item v-for="(url,value) in imgUrl" :key="value">
        <img class="wy-product_img" :src="url" />
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div>
    </van-swipe>

    <div class="wy-characteristic">
      <div class="item" v-for="(item, index) in characteristicListUrl" :key="index">
        <div class="left">
          <img :src="item" />
        </div>
        <div class="right">
          <p class="text">{{ simpleDescList[index][0] }}</p>
          <p class="text">{{ simpleDescList[index][1] }}</p>
        </div>
      </div>
    </div>

    <div class="wy-product_centent">
      <div class="wy-product_price">
        <p class="price">
          ￥{{data.retailPrice}}
          <s class="old_price">￥{{data.counterPrice}}</s>
        </p>
        <p class="price_text">
          {{ data.promotionDesc }}
          <i class="iconfont iconjiantouyou"></i>
        </p>
        <div class="describe">
          <div>
            <p class="price_name">{{ data.name }}</p>
            <p class="prive_simpleDesc">{{ data.simpleDesc }}</p>
          </div>
          <div class="goodCmt">
            <div>
              <p class="goodCmtRate">{{ data.goodCmtRate }}</p>
              <p class="cmtRate">好评率</p>
            </div>
            <i class="iconfont iconjiantouyou"></i>
          </div>
        </div>
      </div>

      <div class="shoppingReward" v-if="data.shoppingReward">
        {{ data.shoppingReward.name }}：{{ data.shoppingReward.rewardDesc }}
        <span>{{ data.shoppingReward.rewardValue }}</span>

        <i class="iconfont iconjiantouyou"></i>
      </div>

      <div class="inner" @click="toSelect">
        请选择规格数量
        <i class="iconfont iconjiantouyou"></i>
      </div>
    </div>

    <div class="points">
      限制：特价商品不可与优惠券叠加使用
      <i class="iconfont iconjiantouyou"></i>
    </div>
    <div class="deliveryInfo" @click="getAddress">
      配送：
      <input type="text" placeholder="请选择配送地址" ref="address" />
      <i class="iconfont iconjiantouyou"></i>
    </div>
    <div class="serviceEntry">
      <p>服务：</p>
      <div class="serviceEntry_item">
        <p>支持30天无忧退换货</p>
        <p>48小时快速退款</p>
        <p>满88元免邮费</p>
        <p>网易自营品牌</p>
      </div>
      <i class="iconfont iconjiantouyou"></i>
    </div>

    <div class="attrCon">
      <p class="tt">商品参数</p>
      <div v-for="(item,index) in data.attrList" :key="index" class="item">
        <div class="left">{{ item.attrName }}</div>
        <div class="right">{{ item.attrValue }}</div>
      </div>
    </div>

    <div v-html="detailHtml" class="detailHtml"></div>

    <div class="commonIssues">
      <p class="tt">常见问题</p>
      <div class="item" v-for="(item,index) in data.issueList" :key="index">
        <p class="qu">{{ item.question }}</p>
        <p class="an">{{ item.answer }}</p>
      </div>
    </div>

    <div class="detailFt">
      <div class="CustomerService">
        <i class="iconfont iconkefu"></i>
      </div>
      <div class="buy">立即购买</div>
      <div class="add" @click="toSelect">加入购物车</div>
    </div>

    <van-area
      :area-list="areaList"
      title="配送至"
      class="address"
      @cancel="closeAddress"
      @confirm="getAddressMsg"
      v-if="address"
    />

    <div class="Mask" v-if="address" @click="closeAddress"></div>
  </div>
</template>

<script>
import wyHead from "../../components/wyHead/index.vue";
import request from "../../utils/request";
import { mapActions, mapMutations, mapState } from "vuex";
import areaList from "../../assets/area/index";

export default {
  name: "products",

  data() {
    return {
      current: 0,
      areaList,
      address: false,
      addressMsg: []
    };
  },

  computed: {
    ...mapState("product", [
      "imgUrl",
      "characteristicListUrl",
      "simpleDescList",
      "data",
      "detailHtml"
    ])
  },

  methods: {
    ...mapMutations("product", ["setImagUrl"]),
    ...mapActions("product", ["getImgUrl"]),
    onChange(index) {
      this.current = index;
    },

    getAddress() {
      this.address = true;

      document.documentElement.scrollTop = 0;

      this.stop();
    },

    closeAddress() {
      this.address = false;
      this.move();
    },

    getAddressMsg(data) {
      console.log(data);
      // this.addressMsg = data;
      let addr = [];
      data.forEach(item => {
        addr.push(item.name);
      });
      console.log(addr);
      this.$refs["address"].value = addr.join(" ");

      this.closeAddress();
    },

    toSelect() {
      document.documentElement.scrollTop = 0;

      this.$router.push("/productSelect");
    },

    /***滑动限制***/
    stop() {
      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", mo, false); //禁止页面滑动
    },

    /***取消滑动限制***/
    move() {
      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = ""; //出现滚动条
      document.removeEventListener("touchmove", mo, false);
    }
  },

  created() {
        console.log(this.$route.query.id);

    this.getImgUrl(this.$route.query.id);
  },

  components: {
    wyHead
  }
};
</script>

<style lang="scss">
.wy-product {
  background-color: #e7e7e7;

  .wy-product_img {
    height: 375px;
  }

  .vant-parent {
    position: relative;
    margin-top: 44px;

    .custom-indicator {
      position: absolute;
      right: 10px;
      bottom: 10px;
      width: 27px;
      height: 14px;
      background: #fff;
      border: 1px solid rgba(0, 0, 0, 0.15);
      font-size: 10px;
      text-align: center;
      color: #333;
    }
  }

  .wy-characteristic {
    height: 64px;
    padding: 12px 15px;
    display: flex;
    box-sizing: border-box;
    background-color: #f9f9f9;

    .left {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      overflow: hidden;
    }

    img {
      width: 36px;
    }

    .item {
      display: flex;
      width: 115px;
      height: 40px;
    }

    .right {
      display: flex;
      flex-direction: column;
      height: 40px;
      justify-content: space-between;
    }
  }

  .wy-product_centent {
    height: 261px;
    background-color: #e7e7e7;

    .wy-product_price {
      padding: 13px 0 18px 15px;
      background-color: #fff;
    }

    .price {
      font-size: 26px;
      color: #b4282d;
      font-weight: bold;
    }

    .old_price {
      font-size: 14px;
      color: #999;
    }

    .price_text {
      display: block;
      width: 64px;
      line-height: 18px;
      height: 18px;
      padding: 0 8px;
      font-size: 12px;
      border: 1px solid #b4282d;
      border-radius: 4px;
      text-align: center;
      color: #b4282d;
      margin-top: 6px;
    }

    .iconjiantouyou {
      font-size: 12px;
    }
  }

  .describe {
    display: flex;
    justify-content: space-between;

    .price_name {
      color: #333;
      line-height: 30px;
      margin-top: 6px;
    }

    .prive_simpleDesc {
      font-size: 12px;
      color: #7f7f7f;
    }
  }

  .goodCmt {
    width: 88px;
    height: 42px;
    text-align: center;
    line-height: 20px;
    display: flex;
    position: relative;

    .goodCmtRate {
      color: #b4282d;
      margin-top: 10px;
    }

    .cmtRate {
      font-size: 12px;
      color: #7f7f7f;
    }

    .iconjiantouyou {
      font-size: 18px;
      color: #333;
      position: absolute;
      top: 22px;
      right: 14px;
    }
  }

  .shoppingReward {
    margin-top: 10px;
    padding: 16px 0 16px 15px;
    background-color: #fff;
    font-size: 14px;
    position: relative;

    span {
      color: #dd1a21;
    }

    .iconjiantouyou {
      font-size: 18px;
      color: #333;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 14px;
    }
  }

  .inner {
    margin-top: 10px;
    padding: 16px 0 16px 15px;
    background-color: #fff;
    font-size: 14px;
    position: relative;
    border-bottom: solid 1px #e7e7e7;

    .iconjiantouyou {
      font-size: 18px;
      color: #333;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 14px;
    }
  }

  .points {
    padding: 16px 0 16px 15px;
    background-color: #fff;
    font-size: 14px;
    position: relative;
    border-bottom: solid 1px #e7e7e7;

    .iconjiantouyou {
      font-size: 18px;
      color: #333;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 14px;
    }
  }

  .deliveryInfo {
    padding: 16px 0 16px 15px;
    background-color: #fff;
    font-size: 14px;
    position: relative;
    border-bottom: solid 1px #e7e7e7;

    .iconjiantouyou {
      font-size: 18px;
      color: #333;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 14px;
    }

    input {
      border: none;
    }
  }

  .serviceEntry {
    padding: 16px 0 16px 15px;
    background-color: #fff;
    font-size: 14px;
    position: relative;
    border-bottom: solid 1px #e7e7e7;
    display: flex;

    .iconjiantouyou {
      font-size: 18px;
      color: #333;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 14px;
    }

    .serviceEntry_item {
      width: 284px;
      display: flex;
      flex-wrap: wrap;
      color: #7f7f7f;

      p {
        margin: 0 20px 8px 0;
      }
    }
  }

  .attrCon {
    padding: 15px;
    background-color: #fff;
    margin-top: 10px;

    .tt {
      padding: 20px 0 12px;
      font-size: 14px;
    }

    .item {
      display: flex;
      padding: 5px 15px 5px 0;
      border-top: 1px dashed #999;

      .left {
        width: 74px;
        font-size: 12px;
        color: #666;
      }

      .right {
        width: 246px;
        font-size: 12px;
        line-height: 18px;
      }
    }
  }

  .detailHtml {
    img {
      width: 100%;
      vertical-align: top;
    }
  }

  .commonIssues {
    background: #fff;
    padding: 0 15px 15px;
    margin-bottom: 52px;

    .tt {
      text-align: center;
      padding: 27px 0;
    }

    .item {
      padding-bottom: 14px;
    }

    .qu {
      padding: 0 0 8px 9px;
      color: #303030;
      font-size: 14px;
      position: relative;

      &::before {
        content: "";
        width: 4px;
        height: 4px;
        background-color: #b4282d;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 4px;
      }
    }

    .an {
      font-size: 14px;
      color: #787878;
      padding-left: 8px;
      line-height: 20px;
    }
  }

  .detailFt {
    position: fixed;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    display: flex;
    text-align: center;
    line-height: 52px;
    color: #333;
    height: 52px;

    .CustomerService {
      width: 78px;
    }

    .iconkefu {
      font-size: 30px;
    }

    .buy {
      flex: 1;
    }

    .add {
      flex: 1;
      color: #fff;
      background-color: #b4282d;
    }
  }

  .address {
    position: fixed;
    bottom: 0;
    z-index: 9999;
    width: 100%;
  }

  .Mask {
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.3;
    position: fixed;
    left: 0;
    top: 0;
  }
}
</style>

