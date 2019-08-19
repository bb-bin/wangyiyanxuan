import axios from "axios";
import { Toast } from "vant";
import { Promise } from "q";

const request = axios.create({
  baseURL: "http://129.204.72.71:8000"
});

request.interceptors.response.use(
  response => {
    console.log(response);

    return response.data;
  },
  error => {
    Toast("网络异常，请稍后重试");
    return Promise.reject(error);
  }
);

export default request;
