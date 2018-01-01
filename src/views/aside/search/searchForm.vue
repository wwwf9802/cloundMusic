<template>
	<div class="musicForm">
		<table class="musicTable">
			<thead>
				<tr>
					<th></th>
					<th>操作</th>
					<th>音乐标题</th>
					<th>歌手</th>
					<th>专辑</th>
					<th>时长</th>
					<th>热度</th>
				</tr>
			</thead>
			<tbody>
				<!--<tr v-for="(item,index) in zhuanji.list">
					<td>{{index+1}}</td>
					<td><span class="iconfont icon-xihuan1"></span><span class="iconfont icon-xiazai"></span></td>
					<td>{{item.name}}</td>
					<td>{{item.singer}}</td>
					<td>{{item.zhuanji}}</td>
					<td>{{item.endTime}}</td>
				</tr>-->
				<tr v-for="(item,index) in musicList" v-show="matchItem(item)" @click="addActive(index)" @dblclick="changeMusic(index)" :class="{'active':index===active}">
					<td><span v-if="item.id!==id">{{offset+index+1}}</span><i v-else class="iconfont icon-yinliang1"></i></td>
					<td><i class="iconfont icon-xihuan1"></i><i class="iconfont icon-xiazai"></i></td>
					<td>{{item.name}}<i v-show="item.mvid" class="iconfont icon-mv"></i></td>
					<td>{{item.artists[0].name}}</td>
					<td>{{item.album.name}}</td>
					<td>{{item.duration | formatMusicTime}}</td>
					<td>100</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import {mapState,mapMutations,mapActions} from "vuex"
	export default {
		name: 'musicForm',
		components: {},
		props:['musicList','matchStr','offset'],
		data() {
			return {
				zhuanji:{},
				active:'',
			}
		},
		computed:{
			...mapState({
			    id:state => state.player.id,
			}),
		},
		methods: {
			addActive(index){
				this.active=index;	
			},
			changeMusic(index){
				let data={
					arr:this.musicList,
					index,
				}
				this.$store.dispatch("changePlayListandIndex",data);
			},
			matchItem(item){
				var reg = new RegExp(this.matchStr, 'i');
				if(item.name.match(reg)||item.ar[0].name.match(reg)||item.al.name.match(reg)){
					return true
				}else{
					return false
				}
			}
		},
		created(){
		}
	}
</script>
<style lang="scss" scoped>
.musicTable {
		width: 100%;
		tr {
			width: 100%;
			th {
				font-size: 12px;
				box-sizing: border-box;
				padding: 0 6px;
				height: 30px;
				line-height: 30px;
				text-align: left;
				border: 1px solid #ddd;
				border-left:none;
			}
			th:hover {
				background: #ebeced;
			}
			th:nth-of-type(1) {
				width: 50px;
				text-align: right;
			}
			th:nth-of-type(2) {
				width: 58px;
			}
			th:nth-of-type(3) {
				width:30%;
			}
			th:nth-of-type(4) {
				width:25%
			}
			th:nth-of-type(5) {
				width:20%
			}
			th:nth-of-type(6) {
				min-width:100px;
			}
			th:nth-of-type(7) {
				min-width: 120px;
			}
			td {
				font-size: 12px;
				box-sizing: border-box;
				padding: 0 6px;
				height: 30px;
				line-height: 30px;
				text-align: left;
				text-overflow: ellipsis;
    			white-space: nowrap;
    			overflow:hidden;
				.icon-xiazai {
					color:#afafaf;
					position: relative;
					margin-left: 2px;
					font-size: 16px;
					top:1px;
				}
				.icon-sq {
					position: relative;
					top: 1px;
					font-size: 20px;
					color: #fe672e;
					margin-left: 4px;
				}
				.icon-xihuan1, {
					font-size: 12px;
					color: #cd2929;
				}
				.icon-yinliang1{
					font-size: 18px;
					position:relative;
					left:6px;
					color: #cd2929;
				}
				.icon-mv{
					position:relative;
					color: #cd2929;
					margin-left:6px;
					top:1px;
				}
			}
			/*td:nth-of-type(1) {
				width: 54px;
				text-align: right;
			}
			td:nth-of-type(2) {
				width: 54px;
			}
			td:nth-of-type(3) {
				min-width: 260px;
				max-width:600px;
			}
			td:nth-of-type(4) {
				min-width: 185px;
				max-width: 420px;
			}
			td:nth-of-type(5) {
				min-width: 185px;
				max-width: 420px;
			}
			td:nth-of-type(6) {
				min-width: 82px;
				max-width: 300px;
			}
			td:nth-of-type(7) {
				min-width: 120px;
				max-width: 120px;
			}*/
		}
		tbody {
			tr{
				cursor: pointer;
			}
			tr:nth-child(2n) {
				background: #f5f5f7
			}
			tr:hover {
				background: #ebeced
			}
			tr.active{
				background:#e3e3e5;
			}
		}
	}
</style>