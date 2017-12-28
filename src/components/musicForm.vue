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
				<tr v-for="(item,index) in zhuanji.list">
					<td>{{index+1}}</td>
					<td><span class="iconfont icon-xihuan1"></span><span class="iconfont icon-xiazai1"></span></td>
					<td>{{item.name}}</td>
					<td>{{item.singer}}</td>
					<td>{{item.zhuanji}}</td>
					<td>{{item.endTime}}</td>
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
	//import asideBar from '@view/aside/asideBar'
	export default {
		name: 'musicForm',
		components: {},
		data() {
			return {
				zhuanji:{}
			}
		},
		methods: {},
		created(){
			this.zhuanji=jay;
		}
	}
</script>
<style lang="scss" scoped>
	.musicTable {
		min-width: 820px;
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
			}
			th:hover {
				background: #ebeced;
			}
			th:nth-of-type(1) {
				width: 54px;
			}
			th:nth-of-type(2) {
				width: 54px;
			}
			th:nth-of-type(3) {
				min-width: 260px;
				max-width: 600px;
			}
			th:nth-of-type(4) {
				min-width: 185px;
				max-width: 420px;
			}
			th:nth-of-type(5) {
				min-width: 185px;
				max-width: 420px;
			}
			th:nth-of-type(6) {
				min-width: 82px;
				max-width: 300px;
			}
			td {
				font-size: 12px;
				box-sizing: border-box;
				padding: 0 6px;
				height: 30px;
				line-height: 30px;
				text-align: left;
				.icon-xiazai1 {
					position: relative;
					top: 1px;
					margin-left: 2px;
					font-size: 12px;
				}
				.icon-sq {
					position: relative;
					top: 1px;
					font-size: 20px;
					color: #fe672e;
					margin-left: 4px;
				}
				.icon-xihuan1 {
					font-size: 12px;
					color: #cd2929;
				}
			}
			td:nth-of-type(1) {
				width: 54px;
				text-align: right;
			}
			td:nth-of-type(2) {
				width: 54px;
			}
			td:nth-of-type(3) {
				min-width: 260px;
				max-width: 600px;
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
		}
		tbody {
			tr:nth-child(2n) {
				background: #f5f5f7
			}
			tr:hover {
				background: #ebeced
			}
		}
	}
</style>