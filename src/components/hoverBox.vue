<template>
	<div v-show="flag" class="hoverBox w-center">
		<div class="dot w-center"></div>
		<slot></slot>
	</div>
</template>

<script>

export default {
	name: 'hoverBox',
	data() {
		return {
			flag:false,
		}
	},
	props:['top','width','height'],
	methods: {
	},
	created() {
	},
	mounted(){
		var that=this;
		this.$nextTick(()=>{
			this.$el.style.top=this.top;
			this.$el.style.width=this.width;
			this.$el.style.height=this.height;
		});
		this.$parent.$el.addEventListener("click",function(){
			that.flag=true;
		})
		document.addEventListener('click',function(e){
			if(!that.$parent.$el.contains(e.target)){
				that.flag=false;
			}
		})
		
	}
}
</script>
<style lang="scss" scoped>
	.hoverBox{
		z-index:9999;
		color:#333;
		border:1px solid #c9c9c9;
		border-top:none;
		background:#fafafa;
		box-shadow: 0px 1px 4px #e2e2e2;
		border-radius: 8px;
		.dot{
			width:0;
			height:0;
			border:11px solid transparent;
			border-bottom: 11px solid #fafafa;
			top:-22px;
		}
	}
</style>