import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => ('../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
