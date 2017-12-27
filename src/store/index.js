import Vue from 'vue'
import Vuex from 'vuex'
import player from './player'
let modules={
	player,
}
console.log("modules");
console.log(modules);
Vue.use(Vuex);
export default new Vuex.Store({
	modules
})

