import Vue from "vue";
import axios from "axios";

export const HTTP = axios.create({
  baseURL: "http://localhost:7000"
});

Vue.prototype.$axios = HTTP;
