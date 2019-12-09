import Vue from "vue";
import axios from "axios";

const HTTP = axios.create({
  baseURL: "http://localhost:7000"
});

Vue.prototype.$axios = HTTP;

export default HTTP;
