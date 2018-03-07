<template>
	<div class="findMusicBox">
		<header class="headBox">
			<ul class="nav">
				<li>
					个性推荐
				</li>
				<li>
					歌单
				</li>
				<li>
					主播电台
				</li>
				<li>
					排行榜
				</li>
				<li>
					歌手
				</li>
				<li>
					最新音乐
				</li>
			</ul>
		</header>
	</div>
</template>

<script>
import swiper from "swiper"

console.log(swiper);

//import asideBar from '@view/aside/asideBar'
export default {
	name: 'findMusicBox',
	components:{
		//asideBar
	},
	data() {
		return {
		}
	},
	methods: {
	},
	created: function() {


	}
}
</script>
<style lang="scss" scoped>
.findMusicBox{
	width:100%;
	padding:0 30px;
}

.headBox{
	width:100%;
	height:40px;
	border-bottom:1px solid #e1e1e2;
	.nav{
		display:flex;
		margin:0 auto;
		width:540px;
		height:40px;
		flex-direction: row;
		justify-content:space-around;
		li{
			color:#333;
			font-size:14px;
			border-bottom:2px solid transparent;
			cursor: pointer;
			@include flex-wh-center;
			&:hover{
				color:#c62f2f;
				border-bottom:2px solid #c62f2f;
			}
		}
		
	}
}
</style>