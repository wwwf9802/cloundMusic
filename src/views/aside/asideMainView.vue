<template>
	<div class="asideMainView">
		<div class="asideBox">
			<asideBar/>
		</div>
		<div class="rightBox">
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script>
import asideBar from '@view/aside/asideBar'
export default {
	name: 'asideMainView',
	components:{
		asideBar
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
.asideMainView{
	.asideBox{
		position:absolute;
		top:0;
		bottom:0;
		left:0;
		width:200px;
		height:100%;
		border:1px solid gold;
	}
	.rightBox{
		position:absolute;
		top:0;
		bottom:0;
		left:200px;
		right:0;
		overflow:auto;
		border:1px solid red;
	}
}
</style>