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
					<td><span v-if="item.id!==id">{{index+1}}</span><i v-else class="iconfont icon-yinliang1"></i></td>
					<td><i class="iconfont icon-xihuan1"></i><i class="iconfont icon-xiazai"></i></td>
					<td>{{item.name}}<i v-show="item.mv" class="iconfont icon-mv"></i></td>
					<td>{{item.ar[0].name}}</td>
					<td>{{item.al.name}}</td>
					<td>{{item.dt | formatMusicTime}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	const baseUrl="12345";
	const jay = {
	title: "Jay同名专辑",
	maker: "嘉纹丶四世",
	makeTime: "2017-07-07",
	sign: "周杰伦",
	jianjie: "周杰伦的第一张专辑！",
	picture: "",
	listener: "666万",
	list: [{
			name: "可爱女人",
			singer: "周杰伦",
			zhuanji: "Jay同名专辑",
			endTime: "03:59",
			src: baseUrl + "1.mp3",
		},
		{
			name: "完美主义",
			singer: "周杰伦",
			zhuanji: "Jay同名专辑",
			endTime: "04:04",
			src: baseUrl + "2.mp3",
		},
		{
			name: "星晴",
			singer: "周杰伦",
			zhuanji: "Jay同名专辑",
			endTime: "04:19",
			src: baseUrl + "3.mp3",
		},
		{
			name: "娘子",
			singer: "周杰伦",
			zhuanji: "Jay同名专辑",
			endTime: "04:31",
			src: baseUrl + "4.mp3",
		},
		{
			name: "斗牛",
			singer: "周杰伦",
			zhuanji: "Jay同名专辑",
			endTime: "04:38",
			src: baseUrl + "1.mp3",
		},
		{
			name: "黑色幽默",
			singer: "周杰伦",
			zhuanji: "Jay同名专辑",
			endTime: "04:43",
			src: baseUrl + "2.mp3",
		},
		{
			name: "伊斯坦堡",
			singer: "周杰伦",
			zhuanji: "Jay同名专辑",
			endTime: "03:29",
			src: baseUrl + "3.mp3",
		},
		{
			name: "印第安老斑鸠",
			singer: "周杰伦",
			zhuanji: "Jay同名专辑",
			endTime: "05:04",
			src: baseUrl + "4.mp3",
		},
		{
			name: "龙卷风",
			singer: "周杰伦",
			zhuanji: "Jay同名专辑",
			endTime: "04:10",
			src: baseUrl + "1.mp3",
		},
		{
			name: "反方向的钟",
			singer: "周杰伦",
			zhuanji: "Jay同名专辑",
			endTime: "04:18",
			src: baseUrl + "2.mp3",
		},
	],
}
	import {mapState,mapMutations,mapActions} from "vuex"
	export default {
		name: 'musicForm',
		components: {},
		props:['musicList','matchStr'],
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
					id:733122887,
					index,
				}
				this.$store.dispatch("getPlayList",data);
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
				width:25%
			}
			th:nth-of-type(6) {
				min-width:80px;
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
					left:3px;
					color: #cd2929;
				}
				.icon-mv{
					position:relative;
					color: #cd2929;
					margin-left:6px;
					top:1px;
				}
			}
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