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
      <li class="car_goods">
        <div class="car_goods_check">
          <input type="checkbox" />
          <span></span>
        </div>
        <div class="car_goods_img">
          <img
            src="https://yanxuan-item.nosdn.127.net/e548e0cbf276b3569ebfdfc1df75988b.png?imageView&thumbnail=160x0&quality=75"
          />
        </div>
        <div class="car_goods_box">
          <p>
            <span>抄底特惠</span>平滑密编清凉仿藤坐垫
          </p>
          <span class="goods_type">古藤色</span>
          <div class="goods_price">
            <span>￥26.9</span>
            <span>￥29.9</span>
          </div>
          <div class="goods_selNum">
            <span class="goods_less">-</span>
            <input type="text" value="1" />
            <span class="goods_more">+</span>
          </div>
        </div>
      </li>
    </ul>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <span slot="tip">
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </span>
    </van-submit-bar>
  </div>
</template>

<script>
import request from "../../utils/request";

export default {
  data() {
    return {
      checked: true
    };
  },

  methods: {
    onSubmit() {
      console.log("提交订单事件");
    },
    getBrand() {
      request
        .get("http://129.204.72.71:8000/api/item/detail?id=3452043")
        .then(res => {
          // if(res.code === '200'){
          console.log(res);
          // }
        });
    }
  },

  created() {
    this.getBrand();
  }
};
</script>

<style lang="scss">
.wy-car {
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
    }

    input:checked + span {
      background: url("../../assets/img/check-2.png");
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

  .car_goods_box {
    position: relative;
    width: 221px;
    height: 86px;

    p {
      font-size: 14px;
    }
  }

  .goods_type {
    line-height: 44px;
    font-size: 12px;
  }

  .goods_price {
    line-height: 36px;
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
