<template>
  <div id="app">
  	<headBar/>
  	<div class="mainBody">
  		<router-view></router-view>
  	</div>
  	<lyric/>
  	<!--<div class="aside">
  	</div>
  	<div class="rightBox">
  		<router-view  name="rightBox"></router-view>
  	</div>-->
  	
  	<div class="bottomPlayer">
      <player/>
  	</div>
  </div>
</template>

<script>
import headBar from '@view/head/header'
import player from '@view/player/player'
import lyric from '@view/lyric/lyricMainView'

export default {
  name: 'app',
   components: {
     headBar,
     player,
     lyric
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
	bottom:0;
	left:0;
	right:0;
	border-top:1px solid #ddd;
	
}

.mainBody{
	width:100%;
	position:absolute;
	top:50px;
	bottom:50px;
	left:0;
	right:0;
	min-width:1024px;
}


#app{
	min-width: 1024px !important;
	min-height:672px !important;
	overflow:hidden !important;
}
</style>
