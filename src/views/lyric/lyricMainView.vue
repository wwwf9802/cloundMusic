<template>
	<div ref="lyric" class="lyric" :class="miniFlag?'mini':'normal'">
		<div class="lyricMini" @click="goNormal">
			<div class="imghover">
				<img src="../../assets/img/head.png" alt="" />
				<div class="shadow">
					<i style="font-size:40px;" class="icon iconfont icon-iconset0441 wh-center"></i>
				</div>
			</div>
			<div class="minSongMsg">
				<div class="row">
					<span>Sign</span>
					<i class="icon iconfont icon-xihuan2"></i>
				</div>
				<div class="row">
					<span class="ellipsis">DEAMNDEAMNDEAMNDEAMNDEAMN</span>
					<i style="font-size:16px;" class="icon iconfont icon-fenxiang"></i>
				</div>
				
			</div>
		</div>
		<div class="lyricNormal psr">
			<div class="filterBox psa"></div>
			<div class="content psa">
				<button @click="goMini">GO mini模式</button>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState,mapMutations,mapActions} from "vuex"
export default {
	name: 'lyric',
	data() {
		return {
			miniFlag:true
		}
	},
	methods: {
		goNormal(){
			this.miniFlag=false;
		},
		goMini(){
			this.miniFlag=true;
		}
	},
	created: function() {


	}
}
</script>
<style lang="scss" scoped>
.lyric{
	position:absolute;
	z-index:9999;
	transition: all linear .3s;
}

.lyric.mini{
	position:absolute;
	z-index:9999;
	left:0;
	bottom:50px;
	width:200px;
	height:60px;
	border-top:1px solid #ddd;
	transition: all linear .3s;
	.lyricMini{
		display:block;
		opacity: 1;
	}
}

.lyric.normal{
	left:0;
	bottom:50px;
	width:100%;
	height:calc(100% - 100px);
	.lyricNormal{
		display:block;
		opacity: 1;
	}
}


.lyricNormal{
	opacity:0;
	background-color:#fafafa;
	width:100%;
	height:100%;
	transition: all linear .3s;
	.content{
		z-index:100;
	}
    .filterBox{
    	width:100%;
    	height:100%;
    	background:url(../../assets/img/car.jpg) repeat;
    	filter: blur(40px);
    }
}


.lyricMini{
	display:none;
	position:absolute;
	z-index:9999;
	left:0;
	width:200px;
	height:60px;
	.imghover{
		position:absolute;
		width:60px;
		height:60px;
		left:0;
		top:0;
		img{
			width:60px;
			height:60px;
			position:absolute;
			left:0;
			top:0;
		}
		.shadow{
			width:60px;
			height:60px;
			position:absolute;
			top:0;
			left:0;
			background:#000;
			opacity:.4;
			display:none;
			i{
				color:#cfcfcf;
			}
		}
	}
	.minSongMsg{
		width:140px;
		height:60px;
		padding:10px;
		position:absolute;
		right:0;
		top:0;
		.row{
			margin-bottom:4px;
			span{
				display:inline-block;
				width:100px;
				color:#333;
				font-size:14px;
			}
			i{
				color:#666;
				font-size:14px;
				float:right;
			}
		}
	}
	&:hover{
		.imghover{
			.shadow{
				display:block;
			}
		}	
	}
}
</style>