<template>
	<div class="aside">
		<p class="title">
			推荐	
		</p>
		<ul>
			<li @click="goTo('findMusic')" :class="{'active':act==='fxyy'}">
				<b></b>
				<i class="h-center iconfont icon-yinle"></i>
				<p>发现音乐</p>
			</li>
			<li @click="goTo('personFM')" :class="{'active':act==='personFM'}">
				<b></b>
				<i style="font-size:16px;" class="h-center icon iconfont icon-xinhaomoxing"></i>
				<p>私人FM</p>
			</li>
			<li @click="goTo('MV')" :class="{'active':act==='MV'}">
				<b></b>
				<i style="font-size:18px;" class="h-center icon iconfont icon-mv"></i>
				<p>MV</p>
			</li>	
			<li @click="goTo('friend')" :class="{'active':act==='friend'}">
				<b></b>
				<i style="font-size:24px;top:13px;left:14px;" class="h-center icon iconfont icon-pengyoufriend"></i>
				<p>朋友</p>
			</li>	
		</ul>
		
		<p class="title">
			我的音乐
		</p>
		<ul>
			<li @click="goTo('bendi')" :class="{'active':act==='bendi'}">
				<b></b>
				<i style="font-size:18px;" class="h-center iconfont icon-yinle2"></i>
				<p>本地音乐</p>
			</li>
			<li @click="goTo('xiazai')" :class="{'active':act==='xiazai'}">
				<b></b>
				<i style="font-size:18px;" class="h-center icon iconfont icon-xiazai"></i>
				<p>下载管理</p>
			</li>
			<li @click="goTo('yunpan')" :class="{'active':act==='yunpan'}">
				<b></b>
				<i style="font-size:18px;" class="h-center icon iconfont icon-yunpan"></i>
				<p>我的音乐云盘</p>
			</li>	
			<li @click="goTo('singer')" :class="{'active':act==='singer'}">
				<b></b>
				<i style="font-size:22px;left:16px;" class="h-center icon iconfont icon-geshou"></i>
				<p>我的歌手</p>
			</li>	
		</ul>
		
		<p class="title">
			创建的歌单
			<i style="font-size:16px;" class="iconfont icon-wuuiconxiangjifangda"></i>
			<i style="font-size:14px;" @click="slideToggle" class="iconfont icon-right" :class="{'rotate90':slideFlag}"></i>
		</p>
		<ul v-show="slideFlag">
			<li @click="goTo('ilike')" :class="{'active':act==='ilike'}">
				<b></b>
				<i style="font-size:14px;" class="h-center  icon-xihuan2"></i>
				<p>我喜欢的音乐</p>
			</li>
			<li @click="goTo('gedan')" :class="{'active':act==='gedan'}">
				<b></b>
				<i style="font-size:20px;left:16px;" class="h-center icon iconfont icon-bofangliebiao"></i>
				<p>歌单</p>
			</li>
		</ul>
		
		<p class="title">
			收藏的歌单
			<i style="font-size:14px;" @click="slideToggle1" class="iconfont icon-right" :class="{'rotate90':slideFlag1}"></i>
		</p>
		<ul v-show="slideFlag1">
			<li @click="goTo('gedan1')" :class="{'active':act==='gedan1'}">
				<b></b>
				<i style="font-size:20px;left:16px;" class="h-center icon iconfont icon-bofangliebiao"></i>
				<p>歌单1</p>
			</li>
			<li @click="goTo('gedan2')" :class="{'active':act==='gedan2'}">
				<b></b>
				<i style="font-size:20px;left:16px;" class="h-center icon iconfont icon-bofangliebiao"></i>
				<p>歌单2</p>
			</li>
			<li @click="goTo('gedan3')" :class="{'active':act==='gedan3'}">
				<b></b>
				<i style="font-size:20px;left:16px;" class="h-center icon iconfont icon-bofangliebiao"></i>
				<p>歌单3</p>
			</li>
		</ul>
	</div>
</template>

<script>

export default {
	name: 'asideBar',
	data() {
		return {
			act:"fxyy",
			slideFlag:true,
			slideFlag1:true
		}
	},
	methods: {
		goTo(path){
			this.act=path;
		},
		slideToggle(){
			this.slideFlag=!this.slideFlag;
		},
		slideToggle1(){
			this.slideFlag1=!this.slideFlag1;
		}
	},
	created: function() {


	}
}
</script>
<style lang="scss" scoped>
.rotate90{
	transform-origin: center center;
	transform: rotate(90deg);
}


.aside{
	background:#f5f5f7;
	position:absolute;
	width:200px;
	top:0;
	bottom:0;
	left:0;
	overflow-y:auto;
	.title{
		position:relative;
		color:#7d7d7d;
		height:30px;
		line-height:30px;
		padding-left:8px;
		i{
			color:#cfcfd1;
			position:absolute;
			&:first-child{
				right:30px;
			}
			&:last-child{
				right:10px;
				top:1px;
			}
			&:hover{
				color:#ababac;
			}
			
		}
	}
	ul{
		li{
			cursor: pointer;
			height:30px;
			@include flex-h-center;
			position:relative;
			padding-left:18px;
			color:#5c5c5c;
			b{
				position:absolute;
				display:block;
				width:3px;
				height:100%;
				left:0;
			}
			p{
				margin-left:24px;
			}
			&:hover,&.active{
				color:#000;
			}
			&.active{
				background:#e6e7ea;
				b{
					background:#c62f2f;
				}
			}
		}
		
	}
}
</style>