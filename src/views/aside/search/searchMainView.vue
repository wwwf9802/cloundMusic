<template>
	<div class="gedan">
		<searchForm :musicList="musicList" :matchStr="str" :offset="offset"/>
		<pagination style="margin:20px 0" :pages='pages' @update="changeOffset"/>
	</div>
</template>
<script>
	import {mapState,mapMutations,mapActions} from "vuex"
	import searchForm from '@view/aside/search/searchForm'
	import apifuns from '@api/apifuns'
	import pagination from '@c/pagination'
	export default {
		name: 'formBar',
		components: {
			searchForm,
			pagination
		},
		data() {
			return {
				musicList:[],
				str:"",
				type:1, //1: 单曲 10: 专辑 100: 歌手 1000: 歌单 1002: 用户 1004: MV 1006: 歌词 1009: 电台
				limit:100, //每页多少条
				offset:0, // 后端返回为 limit*offset
				pages:1
			}
		},
		computed:{
			...mapState({
			    keyWords:state => state.search.keyWords,
			}),
		},
		watch:{
			keyWords(newvalue){
				console.log(newvalue);
				this.resetData();
				this.searchMusic(newvalue);
			}
		},
		methods: {
			resetData(){
				this.type=1;
				this.offset=0;
			},
			changeOffset(num){
				this.offset=this.limit*num;
				this.searchMusic(this.keyWords);
			},
			searchMusic(newvalue){
				//apifuns.searchMusic(newvalue,this.limit,this.type,this.offset).then(data => {
				apifuns.searchMusic(newvalue,this.limit,this.type,this.offset).then(data => {	
					console.log('zzzzzzzzzzzz');
					console.log(JSON.parse(JSON.stringify(data)));
					if(data.code&&data.code===200&&data.result.songs){
						if(this.offset===0){
							let num=parseInt(data.result.songCount/this.limit);
							this.pages=num;
						}
						this.musicList=data.result.songs;
					}
				});
			}
		},
		created: function() {
			/*apifuns.searchMusic('黑色毛衣').then(data => {
				console.log('zzzzzzzzzzzz');
				console.log(JSON.parse(JSON.stringify(data.result.songs)));
				this.musicList=data.result.songs;

			});*/

		}
	}
</script>
<style lang="scss" scoped>
</style>