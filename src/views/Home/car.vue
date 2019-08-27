<template>
  <div class="wy-car">
    <div class="wy-car_top">
      <span class="top_left">购物车</span>
      <div class="top_right">
        <div>领券</div>
        <div>编辑</div>
      </div>
    </div>
    <div>
      <ul class="wy-service">
        <li>
          <span>&nbsp;&nbsp;30天无忧退货</span>
        </li>
        <li>
          <span>&nbsp;&nbsp;48小时快速退款</span>
        </li>
        <li>
          <span>&nbsp;&nbsp;满88元免邮费</span>
        </li>
      </ul>
    </div>
    <ul class="car_goods_list">
      <li class="car_goods" v-for="(item,index) in cars" :key="item.data.id">
        <div class="car_goods_check">
          <input type="checkbox" :value="item.data.id" v-model="checkedIds" />
          <span></span>
        </div>
        <div class="car_goods_img">
          <img :src="item.data.primaryPicUrl" />
        </div>
        <div class="car_goods_box">
          <p class="goods_tet">
            <span class="goods_txt">{{ item.data.promotionDesc }}</span>
            {{ item.data.name }}
          </p>
          <span class="goods_type" @click="toSelect(item.data.id)">{{ item.checkSizeNum1 }}</span>
          <div class="goods_price">
            <span>￥{{ item.data.retailPrice }}</span>
            <s>￥{{ item.data.counterPrice }}</s>
          </div>
          <div class="goods_selNum">
            <span class="goods_less" @click="less(cars[index])">-</span>
            <input type="text" v-model="item.checkNum" />
            <span class="goods_more" @click="more(cars[index])">+</span>
          </div>
        </div>
      </li>
    </ul>
    <van-submit-bar :price="total*100" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="isAllCheck">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import request from "../../utils/request";
import { mapState, mapGetters, mapMutations } from "vuex";
import { Toast } from "vant";

export default {
  data() {
    return {
      checked: false
    };
  },

  computed: {
    ...mapState("car", ["cars"]),
    ...mapGetters("car", ["total"]),

    isAllCheck: {
      get() {
        return this.$store.getters["car/isAllCheck"];
      },

      set(value) {
        this.$store.commit("car/toggleCheck", value);
      }
    },

    checkedIds: {
      get() {
        return this.$store.state.car.checkedIds;
      },
      set(value) {
        this.$store.commit("car/setCheckedIds", value);
      }
    }
  },

  methods: {
    ...mapMutations("car", ["more", "less"]),
    onSubmit() {
      Toast("没钱别乱点！！");
    },

    toSelect(id) {
      document.documentElement.scrollTop = 0;

      this.$router.push(`/productSelect?id=${id}`);
    }

    // getBrand() {
    //   request
    //     .get("http://129.204.72.71:8000/api/item/detail?id=3452043")
    //     .then(res => {
    //       // if(res.code === '200'){
    //       console.log(res);
    //       // }
    //     });
    // }
  },

  created() {
    // this.getBrand();
    console.log(this.$store.state.car);
  }
};
</script>

<style lang="scss">
.wy-car {
  height: 100%;
  display: flex;
  flex-direction: column;

  .wy-car_top {
    width: 100%;
    display: flex;
    height: 44px;
    font-size: 18px;
    justify-content: space-between;
    padding: 0 30px;
    box-sizing: border-box;
    line-height: 44px;
  }
  .top_right {
    display: flex;
    font-size: 16px;

    div {
      margin-left: 14px;
    }
  }

  .wy-service {
    display: flex;
    background: #eee;
    font-size: 12px;
    width: 100%;
    height: 35px;
    justify-content: space-between;
    padding: 0 30px;
    box-sizing: border-box;
    line-height: 35px;
    position: relative;

    li {
      position: relative;
    }

    span::before {
      content: "";
      width: 2px;
      height: 2px;
      border-radius: 50%;
      border: 1px solid #333;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .car_goods_list {
    flex: 1;
    overflow-y: auto;
    padding-bottom: 50px;
    box-sizing: border-box;
  }

  .car_goods {
    display: flex;
    width: 100%;
    height: 110px;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
    box-sizing: border-box;
  }

  .car_goods_check {
    width: 42px;
    height: 42px;
    position: relative;

    input {
      height: 100%;
      width: 100%;
      opacity: 0;
      margin: 0;
    }

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 19px;
      height: 19px;
      background-repeat: no-repeat;
      background-size: 100%;
      background-image: url("../../assets/img/check-1.png");
      z-index: -1;
    }

    input:checked + span {
      background: url("../../assets/img/check-2.png");
      background-repeat: no-repeat;
      background-size: 100%;
    }
  }

  .car_goods_img {
    width: 86px;
    height: 86px;
    background: #eee;

    img {
      width: 86px;
      height: 86px;
    }
  }

  .goods_tet {
    line-height: 16px;
  }

  .goods_txt {
    color: #f48f18;
  }

  .car_goods_box {
    position: relative;
    width: 221px;
    height: 86px;

    p {
      font-size: 14px;
    }
  }

  .goods_type {
    line-height: 30px;
    font-size: 12px;
    color: #7f7f7f;
    width: 210px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }

  .goods_price {
    line-height: 36px;

    s {
      font-size: 12px;
      color: #999;
    }
  }

  .goods_selNum {
    position: absolute;
    right: 0px;
    bottom: 0px;
    text-align: center;
    line-height: 26px;

    input {
      width: 30px;
      height: 28px;
      text-align: center;
      border: 1px solid #999;
      box-sizing: border-box;
      border-right: none;
    }
  }

  .goods_less {
    display: inline-block;
    width: 30px;
    height: 28px;
    border: 1px solid #999;
    box-sizing: border-box;
    border-right: none;
  }

  .goods_more {
    display: inline-block;
    width: 30px;
    height: 28px;
    border: 1px solid #999;
    box-sizing: border-box;
  }

  .van-submit-bar {
    bottom: 50px;
  }
}
</style>
