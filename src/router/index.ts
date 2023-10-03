import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const Home = () => import('../views/Home/index.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
