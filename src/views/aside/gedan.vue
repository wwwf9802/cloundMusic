<template>
	<div class="gedan">
		<input v-model="str" />
		<musicForm :musicList="musicList" :matchStr="str" :heatFlag='true'></musicForm>
	</div>
</template>

<script>
	import musicForm from '@c/musicForm'
	import apifuns from '@api/apifuns'
	export default {
		name: 'formBar',
		components: {
			musicForm
		},
		data() {
			return {
				musicList:[],
				str:'',
			}
		},
		methods: {
		},
		created: function() {
			apifuns.getPlayList(733122887).then(data => {
				console.log('ggggggggggggggggg');
				console.log(data);
				console.log(JSON.parse(JSON.stringify(data.playlist.tracks[9])));
				this.musicList=data.playlist.tracks;

			});

		}
	}
</script>
<style lang="scss" scoped>
	.gedan {}
</style>