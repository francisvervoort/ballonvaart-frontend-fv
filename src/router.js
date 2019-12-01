import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue"; /*//import Contact from "./views/Contact.vue"; ... beide verschoven, zodat ze pas gebeuren
 als aangesproken. Zie lager//import Aanmelden from "./views/Aanmelden.vue"
*/ 

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./views/Contact.vue")
    },
    {
      path: "/aanmelden",
      name: "aanmelden",
      component: () => import("./views/Aanmelden.vue")
    }
  ]
});
