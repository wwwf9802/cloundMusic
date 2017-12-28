import apifuns from '@api/apifuns'


export default {
	state: {
		id:{},
		idIndex:'0',
		idList:[],
	},
	mutations: {
		changeIdIndex(state,index) {
			state.idIndex = index;
		},
		changeIdList(state,idList) {
			state.idList = idList;
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
		async getPlayList({dispatch,commit,rootState},{id,index}){
			return apifuns.getPlayList(id).then(data=>{
		 		console.log('ggggggggggggggggg');
		 		console.log(data);
				data&&commit("changeIdList",data.playlist.trackIds);
				index&&commit("changeIdIndex",index);
				
			});
			//let data=await api.mock1();
			//let num=data.data.price+rootState.modelA.peisongfei;
			//commit("changePrice",num);
		}
	}


}




