<template>
  <div class="wy-product">
    <wyHead />
    <van-swipe @change="onChange" class="vant-parent">
      <van-swipe-item v-for="(url,value) in imgUrl" :key="value">
        <img class="wy-product_img" :src="url" />
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div>
    </van-swipe>
    <div class="wy-characteristic" v-for="(item, index) in characteristicListUrl" :key="index">
      <div class="item">
        <div class="left">
          <img :src="item" />
        </div>
        <div class="right">
          <p class="text"></p>
          <p class="text"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import wyHead from "../../components/wyHead/index.vue";
import request from "../../utils/request";
import { type } from "os";

export default {
  data() {
    return {
      current: 0,
      imgUrl: {},
      characteristicListUrl: []
    };
  },

  methods: {
    onChange(index) {
      this.current = index;
    },
    getImgUrl() {
      request
        .get("http://129.204.72.71:8000/api/item/detail", {
          params: {
            id: 3452043
          }
        })
        .then(res => {
          if (res.status === 0) {
            delete res.data.itemDetail.detailHtml;
            delete res.data.itemDetail.videoInfo;

            this.imgUrl = res.data.itemDetail;

            let picUrl = res.data.characteristicList.map(item => item.picUrl);
            this.characteristicListUrl = picUrl;
            console.log(this.characteristicListUrl);
          }
        });
    }
  },

  created() {
    this.getImgUrl();
  },

  components: {
    wyHead
  }
};
</script>

<style lang="scss">
.wy-product_img {
  height: 375px;
}

.vant-parent {
  position: relative;

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
</style>
