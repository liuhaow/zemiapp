<template>
	<div class="wrapper">
		<headerNav></headerNav>
		<navlist></navlist>
		<homefoter v-bind:netlist='netlist' v-bind:handlist='handlist'></homefoter>
	</div>
</template>
<script>
	import headerNav from '@/views/Home/Headernav'
	import navlist from '@/views/Home/Navlist'
	import homefoter from '@/views/Home/Homefoter.vue'
	import { mainList } from '@/api/api'
	import { Toast } from 'mint-ui';

	export default {
		data() {
			return {
				netlist: '',
				handlist: ''
			}
		},
		components: {
			headerNav,
			navlist,
			homefoter
		},
		mounted() {

			mainList().then(res => {
				if(res.data.code == 200) {

					this.netlist = res.data.return_data.game_duan_list;
					this.handlist = res.data.return_data.game_shou_list
				} else {
					Toast({
						message: res.data.msg,
						iconClass: 'icon icon-error',
						position: 'center',
					});
				}

			});
		}
	}
</script>

<style lang="stylus" scoped>
	.wrapper {
		width: 100%;
		height: 92%;
		padding-bottom: 1rem;
		background: #F5F5F5;
	}
</style>