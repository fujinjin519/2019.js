import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    //不管该组件是否访问，都会生成组件实例
  },
  {
    path: '/about',
    name: 'About',//命名路由
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   //当组件的属性值是一个函数时，会进行路由的懒加载，当访问该路由时，才会进行解析生成组件实例，有利于性能优化
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
