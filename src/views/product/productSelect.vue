<template>
  <div class="wy-product_select">
    <wyHead />

    <div class="paramselect">
      <div class="info-con">
        <div class="left">
          <img :src="data.primaryPicUrl" />
        </div>
        <div class="right">
          <span class="tag">{{ data.promotionDesc }}</span>
          <p class="price">
            价格：
            <span class="price_left">{{ data.retailPrice }}</span>&nbsp;
            <s class="price_right">{{ data.counterPrice }}</s>
          </p>
          <p class="sku">
            已选择：
            <span class="it">{{ checkSizeNum1 }}</span>
          </p>
        </div>
      </div>

      <div class="format" v-if="data.skuSpecList">
        <p class="tt">{{ data.skuSpecList[0].name }}</p>
        <div class="con">
          <div
            v-for="item in data.skuSpecList[0].skuSpecValueList"
            :key="item.id"
            class="tab-txt"
            :class="{ 'active' : isActive === item.id } "
            :ref="item.id"
            @click="getFocus(item.id)"
          >{{ item.value }}</div>
        </div>
      </div>

      <div class="format" v-if="data.skuSpecList">
        <p class="tt">{{ data.skuSpecList[1].name }}</p>
        <div class="con">
          <div
            v-for="it in data.skuSpecList[1].skuSpecValueList"
            :key="it.id"
            class="tab-txt"
            :class="{ 'active' : isActiveSize === it.id } "
            :ref="it.id"
            @click="getFocusSize(it.id)"
          >{{ it.value }}</div>
        </div>
      </div>

      <div class="format">
        <p class="tt">数量</p>
        <div class="num_add">
          <button class="less" @click="less" :disabled="this.isDisable">-</button>
          <input type="text" class="num" v-model="checkNum" />
          <div class="more" @click="more">+</div>
        </div>
      </div>
    </div>

    <div class="detailFt">
      <div class="CustomerService" @click="back">返回</div>
      <div class="buy">立即购买</div>
      <div class="add" @click="add({data,checkSizeNum1,checkNum})">加入购物车</div>
    </div>
  </div>
</template>

<script>
import wyHead from "../../components/wyHead/index";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "productSelect",

  data() {
    return {
      isActive: "",
      isActiveSize: "",
      checkSizeNum: "请选择规格数量",
      checkNum: 1
    };
  },

  components: {
    wyHead
  },

  computed: {
    ...mapState("product", ["data"]),
    checkSizeNum1() {
      let arr = [];

      if (this.isActive) {
        arr.push(this.$refs[this.isActive][0].innerHTML);
      }
      if (this.isActiveSize) {
        arr.push(this.$refs[this.isActiveSize][0].innerHTML);
      }
      if (arr.length == 0) {
        arr.push(this.checkSizeNum);
      }
      arr = arr.join(" ");
      return arr;
    },
    isDisable() {
      return this.checkNum === 1 ? true : false;
    }
  },

  methods: {
    ...mapActions("product", ["getData"]),
    ...mapMutations("car", ["add"]),

    back() {
      this.$router.back();
    },
    getFocus(id) {
      this.isActive = id;
    },
    getFocusSize(id) {
      this.isActiveSize = id;
    },
    more() {
      this.checkNum++;
    },
    less() {
      this.checkNum--;
    }
  },

  created() {
    console.log(this.$route.query.id);
    
    this.getData(this.$route.query.id);
  },

  mounted() {}
};
</script>

<style lang="scss">
.wy-product_select {
  overflow: hidden;

  .paramselect {
    margin-top: 44px;
    padding: 16px 15px;
  }

  .info-con {
    margin-bottom: 22px;
    overflow: hidden;

    .left {
      float: left;
      width: 100px;
      background-color: #f4f4f4;
    }

    img {
      width: 100%;
    }

    .right {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 100px;
      padding-left: 9px;
    }

    .tag {
      line-height: 20px;
      border-radius: 4px;
      display: inline-block;
      padding: 0 5px;
      vertical-align: middle;
      font-size: 12px;
      border: 1px solid #f48f18;
      color: #fff;
      background-color: #f48f18;
      margin-bottom: 4px;
      width: 60px;
      text-align: center;
      box-sizing: border-box;
    }
  }

  .price {
    font-size: 14px;
    color: #b4282d;
    line-height: 22px;

    .price_right {
      font-size: 12px;
      color: #999;
    }
  }

  .sku {
    font-size: 14px;
    margin-top: 4px;

    .it {
      margin-right: 5px;
    }
  }

  .format {
    .tt {
      font-size: 14px;
      padding-bottom: 12px;
    }

    .con {
      padding-bottom: 10px;
      display: flex;
      flex-wrap: wrap;
    }

    .tab-txt {
      font-size: 14px;
      margin: 0 15px 10px 0;
      padding: 0 12px;
      border: 1px solid #7f7f7f;
      border-radius: 4px;
      height: 36px;
      box-sizing: border-box;
      text-align: center;
      line-height: 36px;
      color: #333;
    }

    .active {
      border: 2px solid #b4282d;
      color: #b4282d;
    }
  }

  .num_add {
    display: flex;
    text-align: center;
    height: 34px;
    line-height: 34px;
  }

  .less {
    width: 45px;
    border: 1px solid #999;
    box-sizing: border-box;
    background-color: #fff;
  }

  .more {
    width: 45px;
    border: 1px solid #999;
    box-sizing: border-box;
  }

  .num {
    width: 65px;
    color: #333;
    border: 1px solid #999;
    box-sizing: border-box;
    text-align: center;
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
    height: 48px;
    font-size: 14px;

    .CustomerService {
      width: 78px;
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
}
</style>
