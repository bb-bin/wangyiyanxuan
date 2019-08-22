let cars = window.localStorage.getItem("cars");

export default {
  namespaced: true,

  state: {
    cars: cars ? JSON.parse(cars) : []
  }
};
