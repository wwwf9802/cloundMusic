import apifuns from '@api/apifuns'


export default {
	state: {
		id:0,
		idIndex:null,
		idList:[],
	},
	mutations: {
		changeId(state,num){
			state.id = num;
		},
		
		changeIdIndex(state,index) {
			state.idIndex = index;
		},
		changeIdList(state,idList) {
			state.idList = idList;
		},
	},
	getters: {
	},
	actions:{
		async getPlayList({dispatch,commit,rootState},{id,index}){
			return apifuns.getPlayList(id).then(data=>{
		 		/*console.log('ggggggggggggggggg');
		 		console.log(data);*/
				data&&commit("changeIdList",data.playlist.trackIds);
				commit("changeIdIndex",index);
				
			});
			//let data=await api.mock1();
			//let num=data.data.price+rootState.modelA.peisongfei;
			//commit("changePrice",num);
		},
		changePlayListandIndex({dispatch,commit,rootState},{arr,index}){
			commit("changeIdList",arr);
			commit("changeIdIndex",index);
		}
		
	}


}




