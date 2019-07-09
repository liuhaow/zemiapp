<template>
	<div class="runwtaer">
		<div class="runwtaer-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>交易流水</span>
		</div>
		<ul class="runwtaer-ul">
			<li v-for="(item ,index) in router">
				<div v-if="item.money_type == '减少'">
					<dl>
						<dt>
						<i class="iconfont tiqian">&#xe643;</i><span class="chong-i">{{item.money_type}}</span> <span class="chong-i">{{item.type}}</span>
					</dt>
						<dd>{{new Date(parseInt(item.add_time) * 1000).toLocaleString().substr(0,19)}}</dd>
					</dl>
					<p class="chongz-po">-{{ item.amount }}</p>

				</div>
				<div v-else-if="item.money_type == '增加'">
					<dl>
						<dt>
						<i class="iconfont tiqian">&#xe643;</i><span class="chong">{{item.money_type}}</span> <span class="chong">{{item.type}}</span>
					</dt>
						<dd>{{new Date(parseInt(item.add_time) * 1000).toLocaleString().substr(0,19)}}</dd>
					</dl>
					<p class="chongz">+{{ item.amount }}</p>
				</div>
				
			</li>
		</ul>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	import { mineRouter } from '@/api/mine'
	export default {
		data() {
			return {
				router: ''
			}
		},
		computed: {
			...mapGetters({
				user: 'getUserData'
			})
		},
		mounted() {
			const parem = {
				token: this.user.token,
				userId: this.user.id
			}
			mineRouter(parem).then(res => {
				if(res.data.code == 200) {
					this.router = res.data.return_data
				}

			})
		},
		methods: {

			goback() {
				this.$router.back(-1)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.runwtaer {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		/**/
		bottom: 0;
		right: 0;
		.runwtaer-ul {
			flex: 1;
			overflow: scroll;
			li {
				height: 1.875rem;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 .32rem;
				box-sizing: border-box;
				width: 100%;
				background: #fff;
				margin-bottom: .1rem;
				div {
					display: flex;
					align-items: center;
					justify-content: space-between;
					width: 100%;
					height: 100%;
				}
				dl {
					height: 60%;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					dt {
						font-size: .38rem;
						color: #4673EC;
						i {
							color: #16AAE3;
						}
						.tiqian {
							color: #AE5DA1;
						}
						.chong {
							color: #16AAE3;
							margin: 0 .1rem;
						}
						.chong-i {
							color: #AE5DA1;
							margin: 0 .1rem;
						}
					}
					dd {
						width: 4.4rem;
						text-align: right;
						color: #939EB8;
						font-size: .38rem;
					}
				}
				p {
					font-size: .56rem;
					color: #16AAE3;
				}
				.chongz-po {
					color: #AE5DA1;
				}
			}
		}
		.runwtaer-top {
			height: 1.375rem;
			background: #fff;
			line-height: 1.375rem;
			color: #000;
			font-size: .56rem;
			margin-bottom: .1rem;
			position: relative;
			text-align: center;
			span {
				font-weight: 500;
			}
			.iconfanhui {
				position: absolute;
				width: 1rem;
				height: 1.375rem;
				top: 0;
				left: 0;
			}
			.amend-preserve {
				position: absolute;
				width: 1.5rem;
				height: 1.375rem;
				font-size: .44rem;
				color: #4673EC;
				top: 0;
				right: 0;
			}
		}
	}
</style>