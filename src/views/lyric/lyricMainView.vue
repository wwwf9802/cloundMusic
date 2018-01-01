<template>
	<div class="lyric">
		<img src="../../assets/img/head.png" alt="" />
	</div>
</template>

<script>
import {mapState,mapMutations,mapActions} from "vuex"
export default {
	name: 'lyric',
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
.lyric{
	position:absolute;
	z-index:9999;
	left:0;
	bottom:50px;
	width:200px;
	height:60px;
	border-top:1px solid #ddd;
	img{
		width:60px;
		height:60px;
	}
}
</style>