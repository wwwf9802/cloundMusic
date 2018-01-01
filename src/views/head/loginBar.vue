<template>
	<div class="loginBar">
		<div class="userHead">
			<img src="../../assets/img/head.png" alt="" />
		</div>
		<span>Javan IV</span>
		<i class="icon iconfont icon-xiangxiasanjiao"></i>
		<hoverBox :top="'50px'" :width="'275px'" :height="'402px'">
			<div class="top">
				<img src="../../assets/img/head.png" alt="" />
				<span>Javan IV</span>
				<div class="btn">
					<i class="icon iconfont icon-my-jifen"></i>
					签到
				</div>
			</div>
			<div class="group">
				<div>
					<p>0</p>
					<h4>动态</h4>
				</div>
				<b></b>
				<div>
					<p>1</p>
					<h4>关注</h4>
				</div>
				<b></b>
				<div>
					<p>2</p>
					<h4>粉丝</h4>
				</div>
			</div>
			
			<ul class="y-ul">
				<li>
					<i class="icon iconfont icon-dz licon"></i>
					<span class="txt">会员中心</span>
					<div class="rightBox">
						<span>未订购</span>
						<i class="icon iconfont icon-right licon"></i>
					</div>
				</li>
				<li>
					<i class="icon iconfont icon-dengji licon"></i>
					<span class="txt">等级</span>
					<div class="rightBox">
						<span>LV.7</span>
						<i class="icon iconfont icon-right licon"></i>
					</div>
				</li>
				<li>
					<i style="font-size:18px" class="icon iconfont icon-gouwuche licon"></i>
					<span class="txt">积分商城</span>
					<div class="rightBox">
						<span>65积分</span>
						<i class="icon iconfont icon-right licon"></i>
					</div>
				</li>
			</ul>
			
			<ul class="y-ul">
				<li>
					<i class="icon iconfont icon-shezhi licon"></i>
					<span class="txt">个人信息设置</span>
					<div class="rightBox">
						<span></span>
						<i class="icon iconfont icon-right licon"></i>
					</div>
				</li>
				<li>
					<i class="icon iconfont icon-shouji licon"></i>
					<span class="txt">绑定社交账号</span>
					<div class="rightBox">
						<span></span>
						<i class="icon iconfont icon-right licon"></i>
					</div>
				</li>
				<li>
					<i style="font-size:18px" class="icon iconfont icon-icon18 licon"></i>
					<span class="txt">导入歌单</span>
					<div class="rightBox">
						<span></span>
						<i class="icon iconfont icon-right licon"></i>
					</div>
				</li>
			</ul>
			
			<ul class="y-ul last">
				<li>
					<i class="icon iconfont icon-tuichu licon"></i>
					<span class="txt">退出登录</span>
					<div class="rightBox">
						<span></span>
						<i class="icon iconfont icon-right licon"></i>
					</div>
				</li>
			</ul>
			
		</hoverBox>
	</div>
</template>

<script>
import hoverBox from '@c/hoverBox'
export default {
	name: 'loginBar',
	components:{
		hoverBox,
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
.loginBar{
	cursor: pointer;
	display: flex;
	position:relative;
	align-items: center;
	justify-content:space-around;
	width:116px;
	height:50px;
	color:$lightRed;
	.userHead{
		width:24px;
		height:24px;
		border-radius: 50%;
		overflow:hidden;
		img{
			width:100%;
			height:100%;
		}
	}
	.icon{font-size:12px;}
	
	&:hover{
		color:#fff;
	}
}

.loginBarHoverBox{
	position:absolute;
	width:275px;
	height:402px;
	top:48px;
	border:1px solid #ddd;
	
}

.top{
	width:100%;
	height:78px;
	display:flex;
	align-items: center;
	img{
		width:40px;
		height:40px;
		border-radius:50%;
		margin-left:20px;
	}
	span{
		margin-left:6px;
		font-size:14px;
	}
	.btn{
		margin-left:80px;
		@include btn-hui;
		color:#666666;
		i{font-size:14px;}
		&:hover{
			color:#111 !important;
		}
	}
}
.group{
	width:100%;
	margin-bottom:20px;
	height:38px;
	@include flex-wh-center;
	div{
		p,h4{
			text-align: center;
		}
		p{
			font-weight:bold;
			font-size:14px;
			color:#111;
		}
		h4{
			color:#666666;
		}
	}
	b{
		display:block;
		height:38px;
		border-right:1px solid #ddd;
	}
}

.y-ul{
	width:100%;
	height:111px;
	border-top:1px solid #ddd;
	overflow:hidden;
	li{
		@include flex-h-center;
		height:37px;
		padding-left:20px;
		.licon{
			font-size:20px;
		}
		.txt{
			margin-left:12px;
		}
		.rightBox{
			flex:1;
			@include flex-h-center;
			justify-content: flex-end;
			height:35px;
			color:#888888;
			i{
				margin-right:6px;
				margin-left:6px;
				font-size:12px;
				color:#e1e1e1;
			}
		}
		&:hover{
			background:#ebeced;
		}
	}
	&.last{
		height:42px;
		li{
			height:42px;
		}
	}
}

</style>