import Vue from 'vue'
import Router from 'vue-router'
import aside from './aside.js'
Vue.use(Router)

export default new Router({
  routes: [
  	{...aside}
//  {
//    path: '/',
//    name: 'header',
//    component: header
//  }
  ]
})
