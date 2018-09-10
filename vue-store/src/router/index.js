import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: () => import('views/GoodsList')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('views/cart')
    }
  ]
})
