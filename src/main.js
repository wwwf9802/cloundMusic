import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import '@a/index'
import plugin from '@/plugin'
Vue.use(plugin);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	}
})