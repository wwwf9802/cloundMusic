<template>
	<div class="player">
		<div class="playerSection" v-cloak>
			<div class="contrlGroup">
				<div class="dot ldot" @click="prevMusic">
					<i class="icon iconfont icon-shangyiqu"></i>
				</div>
				<div v-show="!playFlag" @click="play" class="dot mdot">
					<i style="position:relative;left:1px;" class="icon iconfont icon-bofang3"></i>
				</div>
				<div v-show="playFlag" @click="pause" class="dot mdot">
					<i style="font-size:18px;position:relative;top:1px;" class="icon iconfont icon-zanting"></i>
				</div>
				<div class="dot rdot" @click="nextMusic">
					<i class="icon iconfont icon-xiayiqu"></i>
				</div>
			</div>

			<div class="lineBox">
				<span>{{currentMusicPlayed | formatTime}}</span>
				<range @dragstart="stopInt" @dragend="changeTime" :percent.sync="musicPercent" :autoShowDot="true" class="range" />
				<span>{{currentMusicLength | formatTime}}</span>
			</div>

			<div class="rightBar">
				<i class="icon iconfont icon-yinliang yinliangIcon"></i>
				<div class="yinliangRange">
					<range @dragstart="changeVolume" @dragend="changeVolume" :percent.sync="volume" :autoShowDot="false" class="range" />
				</div>
				<div class="mode">
					<i v-show="playMode==='danqu'" class="icon iconfont icon-single-loop iconhover" @click="changePlayMode('suiji')"></i>
					<i v-show="playMode==='suiji'" class="icon iconfont icon-qiatong-suijibofang iconhover" @click="changePlayMode('shunxu')"></i>
					<i v-show="playMode==='shunxu'" class="icon iconfont icon-ttpodicon-copy iconhover" @click="changePlayMode('liebiao')"></i>
					<i v-show="playMode==='liebiao'" class="icon iconfont icon-muluxunhuan iconhover" @click="changePlayMode('danqu')"></i>
				</div>
				<i class="icon iconfont icon-yinliang icon-lrc iconhover"></i>
				<i class="icon iconfont icon-yinliang icon-bofangliebiao iconhover"></i>
				<span></span>
			</div>
		</div>

		<audio id="musicPlayer" style="display:none" :src="currentMusic.url"></audio>
	</div>
</template>

<script>
//	const this.musicList = [{
//			name: 'whataya want from me',
//			src: 'http://192.168.2.199/1.mp3',
//		},
//		{
//			name: 'whataya want from me',
//			src: 'http://192.168.2.199/2.mp3',
//		} ,
//		{
//			name: 'whataya want from me',
//			src: 'http://192.168.2.199/3.mp3',
//		} ,
//		{
//			name: 'whataya want from me',
//			src: 'http://192.168.2.199/4.mp3',
//		},
//		{
//			name: 'whataya want from me',
//			src: 'http://192.168.2.199/20.mp3',
//		}
//	];

	import range from '@c/range'
	import apifuns from '@api/apifuns'
	import {mapState,mapMutations,mapActions} from "vuex"
	export default {
		name: 'player',
		components: {
			range
		},
		data() {
			return {
				//自动播放
				autoPlay: true,
				//播放模式
				playMode: 'shunxu',
				//当前播放下标
				currentIndex:0,
				//播放记录
				playedIndexList: [],
				//当前播放进度
				musicPercent: 0,
				//当前歌单
				//musicList:[],
				//当前播放音乐SRC
				currentMusic:{},
				//当前播放音乐总时间 秒
				currentMusicLength: 0,
				//当前播放音乐 已播放时间
				currentMusicPlayed: 0,
				//是否播放状态
				playFlag: false,
				//定时器变量
				intvalData: null,
				//音量
				volume: 0.5,
				//记录播放列表最大长度
				maxRember:100,
				//是否点击下一曲  为了判断是否记忆播放列表
				nextFlag:true
			}
		},
		computed:{
			...mapState({
			    musicList:state => state.player.srcList,
			    storeIndex:state => state.player.srcIndex,
			}),
			//...mapState(['player/src']),
		},
		filters: {
			formatTime(value) {
				let min = parseInt(value / 60);
				min < 10 ? min = '0' + min : null;
				let second = value - 60 * min;
				second < 10 ? second = '0' + second : null;
				return min + ":" + second;
			}
		},
		methods: {
			
//			...mapMutations (['changeSrcList']),
			
			//获取播放音乐总长度
			getMusicLength() {
				this.currentMusicLength = parseInt(musicPlayer.duration);
			},
			//获取当前已播放的长度
			getMusicPlayedLength() {
				if(this.playFlag) {
					let seconds = musicPlayer.currentTime;
					let percent = (seconds / this.currentMusicLength).toFixed(7);
					this.musicPercent = percent;
				}
			},
			//播放音乐
			play() {
				this.stopInt();
				this.playFlag = true;
				this.autoPlay=true;
				musicPlayer.play();
				this.getMusicLength();
				this.intval();
			},
			//停止播放
			pause() {
				this.playFlag = false;
				musicPlayer.pause();
			},
			//定时器
			intval() {
				this.stopInt();
				var that = this;
				this.intvalData = setInterval(() => {
					this.getMusicPlayedLength();
					this.checkEnd();
				}, 1000);

				console.log(this.intvalData);
			},
			//停止定时器
			stopInt() {

				console.log("stopstopstopstop");
				clearInterval(this.intvalData);
				this.intvalData = null;
			},
			//拖拽修改音乐进度
			changeTime(data) {
				this.stopInt();
				musicPlayer.currentTime = this.currentMusicPlayed;
				if(this.playFlag) {
					this.play();
				}
			},
			//播放完毕后做的事
			checkEnd() {
				if(musicPlayer.ended) {
					if(this.playMode==="danqu"){
						this.stopInt();
						this.play();
					}else if(this.playMode==="shunxu"){
						this.currentIndex!==this.musicList.length-1?this.nextMusic():null
					}else{
						this.nextMusic();
					}
					
				}
			},
			
			//记录已播放的音乐
			remberPlayed(){
				if(this.playedIndexList.length===this.maxRember){
					this.playedIndexList.shift();
					this.playedIndexList.push(this.currentIndex);
				}else{
					this.playedIndexList.push(this.currentIndex);
				}
				
				console.log("playedIndexListplayedIndexList");
				console.log(JSON.stringify(this.playedIndexList));
			},

			//初始化播放器 用于加载完毕，切换歌曲
			formatPlayer() {
				this.stopInt();
				var that = this;
				musicPlayer.addEventListener("loadeddata", function() {
					that.getMusicLength();
					that.musicPercent = 0;
					that.$nextTick(function() {
						that.changeVolume();
						//如果是下一曲 就给播放记录里添加当前播放的音乐下标 写在loadeddata事件里是为了避免src无法播放却记录在了播放列表里
						that.nextFlag?that.remberPlayed():null;
						musicPlayer.currentTime = this.currentMusicPlayed;
						that.autoPlay ? that.play() : null;
					})

				});
			},
			//改变音量
			changeVolume() {
				musicPlayer.volume = this.volume;
			},
			//下一曲
			nextMusic() {
				this.stopInt();
				this.nextFlag=true;
				if(this.playMode==='suiji'){
					let random=null;
		  			for(let i=0;i<9999;i++){
		  				random=Math.floor(Math.random()*(this.musicList.length));
		  				if(this.currentIndex!==random){
		  					this.currentIndex=random;
		  					break;
		  				}
		  			}
		  			this.currentMusic=this.musicList[this.currentIndex];
				}else{
					this.currentIndex===this.musicList.length-1?this.currentIndex=0:this.currentIndex++;
					console.log(this.currentIndex);
					this.currentMusic=this.musicList[this.currentIndex];
					console.log(this.currentMusic);
				}
			},
			prevMusic(){
				this.stopInt();
				this.nextFlag=false;
				if(this.playedIndexList.length>1){
					this.currentIndex=this.playedIndexList[this.playedIndexList.length-2];
					this.currentMusic=this.musicList[this.currentIndex];
					this.playedIndexList.pop();
					console.log(this.playedIndexList);
				}else{
					if(this.currentIndex===0){
						this.currentIndex=this.musicList.length-1;
						this.currentMusic=this.musicList[this.currentIndex];
					}else{
						this.currentIndex--;
						this.currentMusic=this.musicList[this.currentIndex];
					}
				}
			},

			//改变播放模式
			changePlayMode(mode) {
				this.playMode = mode;
			},

		},
		watch: {
			musicPercent() {
				this.currentMusicPlayed = parseInt(this.musicPercent * this.currentMusicLength);
			},
			currentMusic() {
				this.stopInt();
				this.musicPercent = 0;
			},
			storeIndex(){
				this.currentIndex=this.storeIndex;
				this.currentMusic=this.musicList[this.storeIndex];
			}
		},

		async created() {
			/*apifuns.searchMusic("黑色毛衣").then(data=>{
				console.log(data);
			});*/
			let PlayList=await apifuns.highPlayList(5).then(data=>{
				return data.playlists
			});
			
			
//			apifuns.getPlayList(PlayList[0].id).then(data=>{
//				console.log(data);
//			})
			
//			apifuns.getMusicSrc(PlayList[0].id).then(data=>{
//				console.log(data);
//				this.changeSrcList(data.data);
//				this.currentMusic=this.musicList[0];
//				this.formatPlayer();
//			})
			let data={
				id:PlayList[0].id,
				index:3,
			}
//			
			console.log("iiiiiiiiiiiiiiiii");
			console.log(this.storeIndex);
			await this.$store.dispatch("getSrcList",data);
			//this.currentMusic=this.musicList[0];


			
			console.log(this.$store);
//			apifuns.getPlayList(PlayList[0].id).then(data=>{
//				console.log(data);
//			});
			

		},
		mounted() {
			this.formatPlayer();
		}
	}
</script>
<style lang="scss" scoped>
	.playerSection {
		width: 100%;
		min-width: 1024px;
		height: 50px;
		@include flex-h-center;
		.contrlGroup {
			width: 200px;
			padding: 0 20px;
			@include flex-wh-center;
			.dot {
				@include flex-wh-center;
				background: #e83c3c;
				border-radius: 50%;
				color: #fff;
				transition: all linear .3s;
				&:hover {
					background: #d33030;
				}
			}
			.dot.ldot,
			.dot.rdot {
				width: 30px;
				height: 30px;
				.icon {
					font-size: 12px;
				}
			}
			.dot.mdot {
				width: 34px;
				height: 34px;
				.icon {
					font-size: 14px;
				}
			}
		}
		.lineBox {
			flex: 1;
			@include flex-h-center;
			span {
				width: 60px;
				text-align: center;
			}
			.range {
				flex: 1;
			}
		}
		.rightBar {
			@include flex-h-center;
			width: 286px;
			.mode {
				width: 35px;
				text-align: center;
				.icon {
					font-size: 22px;
				}
			}
			.yinliangIcon {
				font-size: 20px;
				margin-left: 10px;
			}
			.yinliangRange {
				width: 100px;
				height: 14px;
				margin: 0 14px 0 5px;
			}
			.icon-lrc {
				font-size: 24px;
				margin-left: 10px;
			}
			.icon-bofangliebiao {
				font-size: 24px;
				margin-left: 20px;
			}
			.iconhover:hover {
				color: #111;
			}
		}
	}
</style>