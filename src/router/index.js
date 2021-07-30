import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TeamsIndex from "../views/TeamsIndex.vue";
import TeamsShow from "../views/TeamsShow.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import GroupsIndex from "../views/GroupsIndex.vue";
import GroupsShow from "../views/GroupsShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/teams",
    name: "teams-index",
    component: TeamsIndex,
  },
  {
    path: "/teams/:id",
    name: "teams-show",
    component: TeamsShow,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/groups",
    name: "groups-index",
    component: GroupsIndex,
  },
  {
    path: "/groups/:id",
    name: "groups-show",
    component: GroupsShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
