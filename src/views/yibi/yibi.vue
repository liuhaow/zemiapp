<template>
	<div class="wrapper">
		<div class="waaper-mian">
			<div class="tab-t">
				<div class="tab-main">
					<span class="handgame" :class="{ active : isActive}" @click="handgame">手游</span>
					<span class="netgame" :class="{ active : !isActive}" @click="hanetgame">端游</span>
				</div>

			</div>
			<hangame v-show='isActive' v-bind:handlist='handlist'></hangame>
			<ntgame v-show='!isActive' v-bind:netlist='netlist'></ntgame>

		</div>

	</div>
</template>

<script>
	import hangame from '@/views/yibi/Hgame'
	import ntgame from '@/views/yibi/Netggame'
	import { mapGetters, mapActions } from 'vuex'
	import { mainList } from '@/api/api'
	

	export default {
		data() {
			return {
				isActive: true,
				netlist:'',
				handlist:''
				
			}
		},
		components: {
			hangame,
			ntgame
		},
		mounted() {

			mainList().then(res => {
				if(res.data.code == 200) {
					console.log(res)
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
		},
		methods: {
			...mapActions(
				[
					'maisellztInfo'

				]),
			handgame() {
				this.isActive = true;
				this.maisellztInfo(3);
				
			},
			hanetgame() {
				this.maisellztInfo(0);
				this.isActive = false
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.wrapper {
		position :fixed;
		height: 92%;
		width: 100% ;
		background: #F4F4F4;
		overflow scroll;
		 .waaper-mian {
			display: flex;
			background: #F4F4F4;
			height: 100%;
			flex-direction: column;
			.tab-t {
				height: 1.375rem;
				line-height: 1.375rem;
				background: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				.tab-main {
					width: 3.125rem;
					height: 0.8rem;
					margin: 0 auto;
					background: #F4F4F4;
					display: flex;
					align-items: center;
					border-radius: 0.47rem;
					border: 0.032rem solid #66B0FF;
					.handgame {
						width: 50%;
						display: block;
						height: .8rem;
						line-height: .8rem;
						text-align: center;
						font-size: 0.44rem;
						color: #66B0FF;
					}
					.netgame {
						width: 50%;
						display: block;
						text-align: center;
						height: .8rem;
						line-height: .8rem;
						font-size: 0.44rem;
						color: #66B0FF;
					}
					.active {
						color: #fff!important;
						background: #66B0FF;
						border-radius: 0.47rem;
					}
				}
			}
		}
	}
</style>