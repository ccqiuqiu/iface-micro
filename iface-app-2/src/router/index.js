import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/' + process.env.VUE_APP_APP_NAME,
  routes
})

export default router
