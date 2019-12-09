import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "./store";

Vue.use(Router);

const router = new Router({
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
    },
    {
      path: "/boeken",
      name: "boeken",
      meta: {
        auth: true
      },
      component: () => import("./views/Boeken.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(path => path.meta.auth)) {
    if (!store.state.auth.huidigeGebruiker) {
      next({
        name: "aanmelden",
        query: {
          type: to.query.type,
          redirect: to.name
        }
      });
    }
  }

  next();
});

export default router;
