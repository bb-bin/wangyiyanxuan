import { Toast } from "vant";

let cars = window.localStorage.getItem("cars");

export default {
  namespaced: true,

  state: {
    cars: cars ? JSON.parse(cars) : [],
    checkedIds: []
  },

  getters: {
    isAllCheck(state) {
      return state.cars.length === state.checkedIds.length;
    },

    total(state) {
      // console.log(state.checkedIds);

      let checkedGoods = state.cars.filter(item => {
        return state.checkedIds.indexOf(item.data.id) > -1;
      });

      let num = 0;
      checkedGoods.forEach(item => {
        num += item.data.retailPrice * item.checkNum;
      });

      return num;
    }
  },

  mutations: {
    toggleCheck(state, payload) {
      if (payload) {
        let ids = state.cars.map(item => item.data.id);
        state.checkedIds = ids;
      } else {
        state.checkedIds = [];
      }
    },

    add(state, payload) {
      let index = state.cars.findIndex(item => {
        return item.data.id === payload.data.id;
      });
      if (index > -1) {
        let obj = state.cars[index];
        obj.checkNum = obj.checkNum + payload.checkNum;
      } else {
        let obj = { ...payload };
        obj.checkNum = payload.checkNum;
        state.cars.push(obj);
      }
      Toast("加入购物车成功");
      window.localStorage.setItem("cars", JSON.stringify(state.cars));
      console.log(state.cars);
    },

    more(state, payload) {
      // console.log(payload);

      let index = state.cars.findIndex(item => {
        return item.data.id === payload.data.id;
      });
      if (index > -1) {
        let obj = state.cars[index];
        obj.checkNum++;
      }
      window.localStorage.setItem("cars", JSON.stringify(state.cars));
    },

    less(state, payload) {
      // console.log(state);
      // console.log(payload);

      // if (payload.checkNum > 1) {
      console.log(state.cars);

      let index = state.cars.findIndex(item => {
        return item.data.id === payload.data.id;
      });
      if (index > -1) {
        let obj = state.cars[index];
        obj.checkNum--;
        if (obj.checkNum == 0) {
          state.cars.splice(index, 1);
        }
        // }
        window.localStorage.setItem("cars", JSON.stringify(state.cars));
      }
    },

    setCheckedIds(state, payload) {
      state.checkedIds = payload;
    }
  }
};
