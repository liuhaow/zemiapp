<template>
	<div id="app">	
		<router-view />
		<loading v-show="loading" />
		<tabbar/>
	</div>
</template>

<script>
	import tabbar from "@/components/abbar"
	import loading from "@/components/loading"
	import { mapGetters } from 'vuex'
	export default {
		components: {
			tabbar,
			loading
		},
		computed: {
			...mapGetters([
				'loading',
			]),
		}
	}
</script>

<style lang="stylus" scoped>
	#app {
		background: #fff;
		display: flex;
		position: relative;
		flex: 1;
		flex-direction: column;
		height: 100%;
	}
</style>