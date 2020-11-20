import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";
import CMS from "../views/cms/CMS.vue";
import PreviewHome from "../views/home/PreviewHome.vue";
import CMSLogin from "../views/cms/CMSLogin.vue";
import CMSHome from "@/views/cms/views/home/CMSHome";
import Learn from "../views/learn/Learn";
import axios from "axios";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cms",
    name: "CMS",
    component: CMS,
    children: [
      {
        path: "/",
        name: "CMSHome",
        component: CMSHome,
        meta: {
          requiresAuth: true
        }
      }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/preview_home",
    name: "PreviewHome",
    component: PreviewHome,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "CMSLogin",
    component: CMSLogin,
    meta: {
      redirectIfAuthenticated: true
    }
  },
  {
    path: "/learn",
    name: "Learn",
    component: Learn
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    axios.get("/is_logged_in").then(res => {
      if (res.data.logged_in) next();
      else next({ path: "/login" });
    });
  } else if (to.meta.redirectIfAuthenticated) {
    axios.get("/is_logged_in").then(res => {
      if (res.data.logged_in) next({ path: "/cms" });
      else next();
    });
  } else next();
});

export default router;
