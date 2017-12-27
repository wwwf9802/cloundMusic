import apifuns from '@api/apifuns'


export default {
	state: {
		src:{},
		srcIndex:'33',
		srcList:[],
	},
	mutations: {
		changeSrcIndex(state,index) {
			state.srcIndex = index;
		},
		changeSrcList(state,srcList) {
			state.srcList = srcList;
		},
	},
	getters: {
		midPrice: (state, getters) => {
			return state.price/2
		},
		aPrice: (state, getters) => {
			return state.price/3
		},
	},
	actions:{
		async getSrcList({dispatch,commit,rootState},{id,index}){
		 apifuns.getMusicSrc(id).then(data=>{
				data&&commit("changeSrcList",data.data);
				index&&commit("changeSrcIndex",index);
				
			});
			//let data=await api.mock1();
			//let num=data.data.price+rootState.modelA.peisongfei;
			//commit("changePrice",num);
		}
	}


}




