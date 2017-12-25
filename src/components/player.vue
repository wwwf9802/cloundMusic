<template>
	<div class="player">
		<div class="playerSection" v-cloak>
			<div class="contrlGroup">
				<div class="dot ldot">
					<i class="icon iconfont icon-shangyiqu"></i>
				</div>
				<div v-show="!playFlag" @click="play" class="dot mdot">
					<i style="position:relative;left:1px;" class="icon iconfont icon-bofang3"></i>
				</div>
				<div v-show="playFlag" @click="pause"  class="dot mdot">
					<i style="font-size:18px;position:relative;top:1px;" class="icon iconfont icon-zanting"></i>
				</div>
				<div class="dot rdot" @click="nextMusic">
					<i class="icon iconfont icon-xiayiqu"></i>
				</div>
			</div>
			
			<div class="lineBox">
				<span>{{currentMusicPlayed | formatTime}}</span>
				<range @dragstart="stopInt" @dragend="changeTime" :percent.sync="musicPercent" class="range"/>
				<span>{{currentMusicLength | formatTime}}</span>
			</div>
			
			<div class="rightBar">
				<button @click="add()">123</button>
			</div>
		</div>
		
		<audio id="musicPlayer" style="display:none"  :src="currentMusic.src"></audio>
	</div>
</template>

<script>
	const musicList=[
		{
			name:'whataya want from me',
			src:'http://192.168.2.199/1.mp3',
		},
		{
			name:'whataya want from me',
			src:'http://192.168.2.199/3.mp3',
		}
	];
	
	
import range from '@c/range'
export default {
	name: 'player',
	components:{
		range
	},
	data() {
		return {
			//自动播放
			autoPlay:true,
			//播放模式
			playMode:'shunxu',
			//播放记录
			playedIndexList:[],
			//当前播放进度
			musicPercent:0,
			//当前播放音乐对象
			currentMusic:{},
			//当前播放音乐总时间 秒
			currentMusicLength:0,
			//当前播放音乐 已播放时间
			currentMusicPlayed:0,
			//是否播放状态
			playFlag:false,
			//定时器变量
			intvalData:null,
		}
	},
	filters:{
		formatTime(value){
			let min=parseInt(value/60);
			min<10?min='0'+min:null;
			let second=value-60*min;
			second<10?second='0'+second:null;
			return min+":"+second;
		}
	},
	methods: {
		add(){
			this.musicPercent=0.5;
			window.clearInterval(this.intvalData);
		},
		//获取播放音乐总长度
		getMusicLength(){
	  		this.currentMusicLength=parseInt(musicPlayer.duration);
	  	},
	  	//获取当前已播放的长度
	  	getMusicPlayedLength(){
	  		if(this.playFlag){
	  			let seconds=musicPlayer.currentTime;
	  			let percent=(seconds/this.currentMusicLength).toFixed(7);
	  			this.musicPercent=percent;
	  		}
	  	},
	  	//播放音乐
	  	play(){
	  		this.intvalData=null;
	  		this.playFlag=true;
	  		musicPlayer.play();
	  		this.getMusicLength();
	  		this.intval();
	  	},
	  	//停止播放
	  	pause(){
	  		this.stopInt();
	  		this.playFlag=false;
	  		musicPlayer.pause();
	  	},
	  	//定时器
	  	intval(){
	  		this.stopInt();
	  		var that=this;
	  		this.intvalData=setInterval(()=>{
	  			this.getMusicPlayedLength();
	  			this.checkEnd();
	  		},1000);
	  		
	  		console.log(this.intvalData);
	  	},
	  	//停止定时器
	  	stopInt(){
	  		
	  		console.log("stopstopstopstop");
	  		clearInterval(this.intvalData);
	  		this.intvalData=null;
	  	},
	  	//拖拽修改音乐进度
	  	changeTime(data){
	  		this.stopInt();
	  		musicPlayer.currentTime=this.currentMusicPlayed;
	  		if(this.playFlag){
	  			this.play();
	  		}
	  	},
	  	//检查是否播放完毕
	  	checkEnd(){
	  		if(musicPlayer.ended){
	  			this.nextMusic();
	  		}
	  	},
	  	
	  	//初始化播放器 用于加载完毕，切换歌曲
	  	formatPlayer(){
	  		this.stopInt();
	  		var that=this;
		  	musicPlayer.addEventListener("loadeddata",function(){
	  			that.getMusicLength();
	  			that.musicPercent=0;
	  			that.$nextTick(function(){
	  				musicPlayer.currentTime=this.currentMusicPlayed;
	  				that.autoPlay?that.play():null;
	  			})
	  			
	  		});	
	  	},
	  	
	  	//下一曲
		nextMusic(){
			this.stopInt();
			this.currentMusic=musicList[1];
		},
	  	
	  	
	},
	watch:{
		musicPercent(){
			this.currentMusicPlayed=parseInt(this.musicPercent*this.currentMusicLength);
		},
		currentMusic(){
			this.stopInt();
			this.musicPercent=0;
		}
	},
	
	created: function() {

	},
	mounted(){
		this.currentMusic=musicList[0];
		var that=this;
		this.formatPlayer();
		
	}
}
</script>
<style lang="scss" scoped>
.playerSection{
	width:100%;
	min-width:1024px;
	height:50px;
	@include flex-h-center;
	.contrlGroup{
		width:200px;
		padding:0 20px;
		@include flex-wh-center;
		.dot{
			@include flex-wh-center;
			background:#e83c3c;
			border-radius: 50%;
			color:#fff;
			transition:all linear .3s; 
			&:hover{
				background:#d33030;
			}
		}
		
		.dot.ldot,.dot.rdot{
			width:30px;
			height:30px;
			.icon{
				font-size:12px;
			}
			
		}
		
		.dot.mdot{
			width:34px;
			height:34px;
			.icon{
				font-size:14px;
			}
		}
	}
	.lineBox{
		flex:1;
		@include flex-h-center;	
		span{
			width:60px;
			text-align: center;
		}
		.range{
			flex:1;
		}
	}
	
	.rightBar{
		width:286px;
		border:1px solid goldenrod;
	}
}
</style>