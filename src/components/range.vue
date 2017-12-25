<template>
	<div class="range">
		<div :ref="ref3" class="line h-center" @click="clickBar($event)"></div>
		<div :ref="ref2" class="playedLine h-center" @click="clickBar($event)"></div>
		<div :ref="ref1" class="dot h-center">
			<div class="wh-center"></div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'range',
	props:['percent','autoShowDot'], //进度
	data() {
		return {
			//用随机数为ref命名，避免冲突
			showDotFlag:false,
			ref1:Math.random().toString(36).substr(2),
			ref2:Math.random().toString(36).substr(2),
			ref3:Math.random().toString(36).substr(2),
		}
	},
	computed:{
		percentStr(){
			return this.percent*100+"%"
		}   //
	},
	methods: {
		//根据prop autoShowDot 设置是否展示
		//调整dot的left 和播放条的长度
		setStyle(){
			this.$refs[this.ref2].style.width=this.percentStr;
			this.$refs[this.ref1].style.left='calc('+this.percentStr+' - 7px)';
		},
		calcStyle(e){
			e.preventDefault();
			e.stopPropagation();
			this.$emit('dragstart');
			let that=this;
			//dot的left 为   当前鼠标的clientX减去滚动条左边距离屏幕左边的距离;
			let left=e.clientX-that.$refs[that.ref3].getBoundingClientRect().left;
			//console.log(left);
			let style = window.getComputedStyle(that.$refs[that.ref3], null);
			let width=parseInt(style.width);
			if(left<=0){
				left=0;
			}else if(left>=width){
				left=width;
			}
			//把left换算成百分比
			let percent=left/width;
			//console.log(percent);
			that.$emit('update:percent', percent);
			//console.log(that.percent);
			
		},
		clickBar(e){
			var that=this;
			this.calcStyle(e);
			this.$nextTick(function(){
				this.$emit('dragend');
			})
			
		}
	},
	watch:{
		percent(){
			this.setStyle();
		}
	},
	created() {
		this.showDotFlag=this.autoShowDot;

	},
	mounted(){
		!this.autoShowDot?this.$refs[this.ref1].classList.add('hide'):null;
		var that=this;
		this.$refs[this.ref1].onmousedown=function(e){
			document.body.addEventListener('mousemove',that.calcStyle,false);
		}
		this.$refs[this.ref1].onmouseup=function(){
			that.$emit('dragend');
			document.body.removeEventListener('mousemove',that.calcStyle ,false);
		}
		this.setStyle();
	}
}
</script>
<style lang="scss" scoped>
.range{
	position:relative;
	width:100%;
	height:14px;
	.line{
		width:100%;
		height:4px;
		background:#c2c2c4;
		border-radius:2px;
		
	}
	.playedLine{
		width:300px;
		height:4px;
		background:#e83c3c;
		border-radius:2px;
	}
	.dot{
		width:14px;
		height:14px;
		border:1px solid #ddd;
		border-radius:50%;
		background:#fff;
		left:-7px;
		div{
			width:4px;
			height:4px;
			border-radius: 50%;
			background:#e83c3c;
		}
		&:hover{
			box-shadow: 0 0 6px #888;
		}
		&.hide{
			display:none;
		}
	}
	
	&:hover{
		.dot,.dot.hide{
			display:block;
		}
	}
}
</style>