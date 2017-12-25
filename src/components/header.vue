<template>
	<div class="header">
			<img src="../assets/img/wyyyy.png" alt="">
			<div class="lrBox">
				<div class="btn lf dbd">
					<i class="icon iconfont icon-left"></i>
				</div>
				<div class="btn rt">
					<i class="icon iconfont icon-right"></i>
				</div>
			</div>
			<search class="search"/>
			<div class="rightBox">
				<loginBar/>
				<i style="font-size:20px" class="icon iconfont icon-yifu iconR"></i>
				<i style="font-size:18px;top:2px;" class="psr icon iconfont icon-icon iconR"></i>
				<i style="font-size:18px;" class="icon iconfont icon-shezhi iconR"></i>
				<b></b>
				<i style="font-size:10px;margin-left:20px;" class="icon iconfont icon-mini iconR1"></i>
				<i style="font-size:12px;" class="icon iconfont icon-zuixiaohua iconR1"></i>
				<i style="font-size:12px;" class="icon iconfont icon-zuidahua iconR1"></i>
				<i style="font-size:14px;" class="icon iconfont icon-guanbi iconR1"></i>
			</div>
			
			
		<!-- <div class="serchBox">
						<input id="in1" type="text" placeholder="搜索音乐，歌手，歌词，用户" />
					</div> -->

		<!--	<div>
						<img :src="url1" alt="" />
						<input id="in2" type="file" style="display:none" />
						<button @click="upload()" id="upload">上传图片</button>
					</div>-->

	</div>
</template>
<script>
import search from '@c/serach'
import loginBar from '@c/loginBar'
export default {
	name: 'header',
	data() {
		return {
			url1: "",
		}
	},
	components:{
		search,
		loginBar,
	},
	methods: {
	},
	created: function() {


	}
}
</script>
<style lang="scss" scoped>
.header {
	display:flex;
	align-items:center;
	width: 100%;
	min-width: 1020px;
	height: 50px;
	background: $baseRed;
	padding:0 14px;
}

.lrBox{
	display:flex;
	width:54px;
	height:22px;
	margin-left:60px;
	.btn{
		display: flex;
		align-items:center;
		justify-content:center;
		width:26px;
		height:22px;
		border:1px solid $darkRed;
		i{font-size:14px;color:#fff;}
	}
	.btn:active{
		background:#b12323;
		i{color:#8d1c1c;}
	}
	.btn.dbd{
		i{color:#cf5151;}
		background:transparent;
		
	}
	.btn.lf{
		border-top-left-radius:4px; 
		border-bottom-left-radius:4px;
		border-right:none;
		width:25px;
	}
	.rt{
		border-top-right-radius:4px; 
		border-bottom-right-radius:4px; 
	}
}

.search{
	margin-left:12px
}

.rightBox{
	height:50px;
	flex:1;
	@include flex-h-center;
	justify-content: flex-end;
	b{
		display:block;
		width:0;
		height:22px;
		border-right:1px solid $darkRed;
		margin-left:16px;
		margin-right:0;
	}
	.iconR{
		color:$lightRed;
		margin-left:22px;
	}
	.iconR1{
		color:$lightRed;
		margin-left:12px;
	}
	.iconR:hover,.iconR1:hover{
		color:#fff;
	}
}

</style>