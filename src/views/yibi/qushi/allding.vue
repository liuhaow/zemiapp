<template>
	<div class="ybqushi">
		<div class="ybqushi-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>所有订单</span>
		</div>
		<div class="ybqushi-info">
			<div class="ybqushi-choose">
				<ul>
					<li>{{yibiqufu.fu}}</li>
					<li>{{yibiqufu.qu}}</li>

				</ul>
			</div>
			<!--<div class="peipsucc">
				<img src="../../../assets/about/xuchan.png" />
				<p>当前匹配<span>12222</span> 单，匹配成功<span>10000</span> 单</p>
			</div>-->
			<div class="nowpeip">
				<p class="nowpeip-p">
					<span>正在匹配订单</span>
				</p>
			</div>
			<ul class="nowpeip-ul">
				<li v-for='item in allList'>
					<div>
						<img src="../../../assets/login/sel.png" alt="" v-if="item.type=='卖'" />
						<img src="../../../assets/login/bubj.png" alt="" v-if="item.type=='买'" />
						<p>
							<span>{{item.game_gold_price}}元，</span>
							<span>{{item.game_gold_amount}}万游戏币</span>
							<span>1元 =<i>{{item.unit_price}}</i> 万金币</span>
						</p>

					</div>
				</li>
			</ul>

		</div>

	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { zidongppbuyList } from '@/api/api'
	export default {
		data() {
			return {
				allList: ''
			}
		},
		computed: {
			...mapGetters({
				name: 'gamename',
				yibiqufu: 'yibiqufu'
			})
		},
		mounted() {
			let data1 = {
				gameId: this.yibiqufu.gameId,
				gameAreaId: this.yibiqufu.Daqu_id,
				type: 0
			}
			zidongppbuyList(data1).then(res => {
				if(res.data.code == 200) {
					this.allList = res.data.return_data
				}
				console.log(this.allList)
			})
		},
		methods: {

			goback() {
				this.$router.go(-1)
			},
			getmessge() {
				this.nickname = this.$route.query.name
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.ybqushi {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		/**/
		bottom: 0;
		right: 0;
		.ybqushi-info {
			flex: 1;
			overflow: scroll;
			display: flex;
			flex-direction: column;
			.nowpeip {
				.nowpeip-p {
					height: 1.2rem;
					display: flex;
					justify-content: space-between;
					align-items: center;
					box-sizing: border-box;
					background: #fff;
					padding: 0 .32rem;
					margin: .05rem 0;
					span {
						font-size: .38rem;
					}
					span:nth-child(1) {
						color: #49597C;
					}
					span:nth-child(2) {
						color: #939EB8
					}
				}
			}
			.nowpeip-ul {
				flex: 1;
				overflow: scroll;
				li {
					height: 1.1rem;
					line-height: 1.1rem;
					background: #fff;
					padding-left: .45rem;
					margin-bottom: .05rem;
					display: flex;
					align-items: center;
					div {
						display: flex;
						align-items: center;
						img {
							height: .65rem;
							width: .65rem;
							margin-right: .32rem;
						}
						p {
							font-size: .38rem;
							span {
								margin-right: .2rem;
							}
						}
					}
				}
			}
			.peipsucc {
				height: 1.375rem;
				background: #fff;
				display: flex;
				align-items: center;
				img {
					height: .75rem;
					width: .75rem;
					margin: 0 .2rem;
				}
				p {
					font-size: .44rem;
					color: #344978;
					span {
						margin: .05rem 0;
					}
				}
			}
			.ybqushi-choose {
				height: 1.25rem;
				background: #fff;
				display: flex;
				align-items: center;
				ul {
					width: 100%;
					height: 100%;
					li {
						width: 50%;
						float: left;
						height: 1.25rem;
						line-height: 1.25rem;
						text-align: center;
						font-size: .44rem;
						color: #999999;
					}
				}
			}
		}
		.ybqushi-top {
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