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
    },
    {
      path: '/address',
      name: 'Address',
      component: () => import('views/address')
    },
    {
      path: '/orderConfirm',
      name: 'OderConfirm',
      component: () => import('views/orderConfirm')
    },
    {
      path: '/orderSuccess',
      name: 'OrderSuccess',
      component: () => import('views/orderSuccess')
    }
  ]
})
