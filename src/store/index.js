import Vue from 'vue'
import Vuex from 'vuex'
import player from './player'
import search from './search'
let modules={
	player,
	search
}
console.log("modules");
console.log(modules);
Vue.use(Vuex);
export default new Vuex.Store({
	modules
})

