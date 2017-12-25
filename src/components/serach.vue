<template>
	<div class="serach">
		<input  placeholder="搜索音乐,歌手，歌词，用户" type="text" @focus="foc($event)" @blur="blu($event)">
		<i ref="serchIcon" class="icon iconfont icon-sousuo" :class="{'active':active}"></i>
	</div>
</template>

<script>

export default {
	name: 'serach',
	data() {
		return {
			url1: "",
			active:false,
		}
	},
	methods: {
		foc(e){
			this.active=true;
			e.currentTarget.removeAttribute("placeholder");
		},
		blu(e){
			this.active=false;
			e.currentTarget.setAttribute("placeholder","搜索音乐,歌手，歌词，用户");
		}
	},
	created: function() {


	}
}
</script>
<style lang="scss" scoped>
	:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    	color: #c36a6a; opacity:1; 
	}
	
	::-moz-placeholder { /* Mozilla Firefox 19+ */
	    color: #c36a6a;opacity:1;
	}
	
	input:-ms-input-placeholder{
	    color: #c36a6a;opacity:1;
	}
	
	input::-webkit-input-placeholder{
	    color: #c36a6a;opacity:1;
	}



	.serach{
		width:216px;
		height:24px;
		border-radius: 12px;
		background:$darkRed;
		display: flex;
		align-items:center;
		input{
			width:180px;
			height:16px;
			background:transparent;
			border:none;
			margin-left:10px;
			color:#fff;
			font-size:12px;
			line-height:30px;
			border:1px solid transparent;
		}
		i{
			color:#c36a6a;
			font-size:13px;
			margin-left:2px;
		}
		i.active{
			color:#fff;
		}
	}
</style>