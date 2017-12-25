import Vue from 'vue'
import Router from 'vue-router'
import header from '@c/header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: header
    }
  ]
})
