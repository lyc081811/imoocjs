import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Parent from '@/components/parent'
import Parent2 from '@/components/parent2'
import Vuex from '@/components/vuex'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent
    },
    {
      path: '/parent2',
      name: 'Parent2',
      component: Parent2
    },
    {
      path: '/vuex',
      name: 'Vuex',
      component: Vuex
    }

  ]
})
