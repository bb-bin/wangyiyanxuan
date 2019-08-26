import request from "../../utils/request";

export default {
  namespaced: true,

  state: {
    imgUrl: {},
    characteristicListUrl: [],
    simpleDescList: [],
    data: {},
    detailHtml: []
  },

  getters: {},

  mutations: {
    setImgUrl(state, payload) {
      state.detailHtml = payload.data.itemDetail.detailHtml;

      delete payload.data.itemDetail.detailHtml;
      delete payload.data.itemDetail.videoInfo;

      state.imgUrl = payload.data.itemDetail;

      state.characteristicListUrl = payload.data.characteristicList.map(
        item => item.picUrl
      );

      state.simpleDescList = payload.data.characteristicList.map(
        item => item.simpleDescList
      );
      state.data = payload.data;
    },
    setData(state, payload) {
      state.data = payload.data;
    }
  },

  actions: {
    getImgUrl({ commit }, payload) {
      request
        .get("/api/item/detail", {
          params: {
            id: payload
          }
        })
        .then(res => {
          console.log(res);

          if (res.status === 0) {
            commit("setImgUrl", res);
          }
        });
    },
    getData({ commit }, payload) {
      request
        .get("/api/item/detail", {
          params: {
            id: payload
          }
        })
        .then(res => {
          console.log(res);

          if (res.status === 0) {
            commit("setData", res);
          }
        });
    }
  }
};
