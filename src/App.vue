<template>
  <div id="app">
  	<headBar></headBar>
  	<div class="aside">
      asdide
  	</div>
  	<h1></h1>
  	<div class="rightBox">
  		<router-view  name="rightBox"></router-view>
  	</div>
  	
  	<div class="bottomPlayer">
      <player/>
  	</div>
  </div>
</template>

<script>
import headBar from '@c/header'
import player from '@c/player'

export default {
  name: 'app',
   components: {
     headBar,
     player
    // <my-component> 将只在父模板可用
  }
}
</script>

<style lang="scss" type="text/css">
.bottomPlayer{
	position:absolute;
	width:100%;
	min-width:1024px;
	height:50px;
	border:1px solid red;
	bottom:0;
	left:0;
	right:0;
	
}

#app{
	min-width: 1024px !important;
	min-height:672px !important;
	overflow:hidden !important;
}
</style>
