<template>
	<div class="tab">
		<ul class="mit-bar" v-show="isShowTabbar" fixed>
			<li class='issueli' v-for='(item,index) in list' @click="changestyle(index,item.y)" :class="{'actt':select===index}">
				<i slot="icon" class="icon iconfont " v-if="item.y == 0">&#xe608;</i>
				<i slot="icon" class="icon iconfont " v-if="item.y == 1">&#xe650;</i>
				<i slot="icon" class="icon iconfont " v-if="item.y == 2">&#xe650;</i>
				<i slot="icon" class="icon iconfont " v-if="item.y == 3">&#xe61a;</i> 
				{{item.name}}
			</li>
		</ul>
	</div>

</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		data() {
			return {
				select: '',
				list: [{
						name: '首页',
						y: '0'
					},
					{
						name: '易币',
						y: '1'
					},
					{
						name: '消息',
						y: '2'
					},
					{
						name: '我的',
						y: '3'
					}

				]
			}
		},

		computed: {
			isShowTabbar() {
				let routeLength = this.$route.path.split('/').length;

				return routeLength > 2 ? false : true;
			},
			...mapGetters({
				taber: 'taber'
			})
		},
		mounted() {
			this.select = this.taber
		},
		methods: {
			...mapActions(
				[
					'maisellztInfo',
					'settaber'
				]
			),
			changestyle(index) {
				this.settaber(index)
				this.select = index;
				if(index == 0) {
					this.$router.push('/home')
				} else if(index == 1) {
					this.$router.push('/yibi')
				this.maisellztInfo(3);
					

				} else if(index == 2) {
					this.$router.push('/message')

				} else if(index == 3) {
					this.$router.push('/my')

				}
			},
		}
	}
</script>

<style lang="stylus" scoped>
	.tab {
		.mit-bar {
			position: fixed;
			right: 0;
			left: 0;
			bottom: 0;
			z-index: 1;
			height: 8%;
			background: #fafafa;
			display: flex;
			li {
				height: 100%;
				width: 25%;
				font-size: .44rem;
				display: flex;
				flex-direction: column;
				color: #cdcdcd;
				justify-content: center;
				align-items: center;
				.icon {
					font-size: 25px
				}
			}
			.actt {
				color: #4673EC;
			}
		}
	}
</style>