import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: Home
      component: () => import('@/pages/home/home')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/city')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/detail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
