import axios from "axios";

// export default axios;
const request = axios.create();

request.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error.response.data.error || "后端错误");
  }
);

export default request;
