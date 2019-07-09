<template>
	<div class="detalist">
		<div class="detalist-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>{{gamename.name}}</span>
		</div>
		<!--<div class="detalist-seach">
			<p>
				<i class="iconfont ice">&#xe615;</i>
				<input placeholder="输入关键词搜索" type="text" v-model="seach" />
				<i class="iconfont ice">&#xe61b;</i>

			</p>
			<button @click="seachInfo">搜索</button>
		</div>-->
		<div class="shaixuan">

		</div>
		<div class="shanglist">
			<ul>
				<li @click="detailListinfo(item.id)" v-for="item in listIfon">
					<img :src="gamename.img" alt="" />
					<div>
						<p class="d-p1">{{item.title}}</p>
						<p class="d-p2">&yen;{{item.gold_price}}</p>
						<p class="d-p3">{{item.game_area_name}}</p>
					</div>
				</li>

			</ul>
		</div>

	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { positInfo } from '@/api/api'

	export default {
		data() {
			return {
				listIfon:''

			}
		},
		computed: {
			...mapGetters({
				gamename: 'gamename',
				yibiqufu: 'yibiqufu',
				buyselltype:'buyselltype'

			})
		},
		mounted() {

			let data = {
				gameId: this.yibiqufu.gameId,
				gameAreaId: this.yibiqufu.Daqu_id,
				sellType: this.buyselltype.idt
			};
			positInfo(data).then(res => {
				if(res.data.code == 200) {
					this.listIfon = res.data.return_data
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
					'buydtscInfo'

				]),

			goback() {
				this.$router.back(-1)
			},
			seachInfo() {},
			detailListinfo(idx) {
				this.buydtscInfo(idx)
				this.$router.push('/yibi/detail')

			}
		}
	}
</script>

<style lang="stylus" scoped>
	.detalist {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.shanglist {
			flex: 1;
			overflow: scroll;
			ul {
				height: 100%;
				overflow: scroll;
				li {
					height: 2.2rem;
					margin: 0.1rem 0;
					background: #fff;
					display: flex;
					align-items: center;
					img {
						height: 1.875rem;
						width: 1.875rem;
						margin: 0 .3rem;
					}
					div {
						height: 1.875rem;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.d-p1 {
							font-size: .44rem;
							color: #333;
						}
						.d-p2 {
							font-size: .44rem;
							color: #EC6941;
						}
						.d-p3 {
							font-size: .38rem;
							color: #999999;
						}
					}
				}
			}
		}
		.detalist-seach {
			height: 1.375rem;
			display: flex;
			align-items: center;
			justify-content: space-around;
			box-sizing: border-box;
			background: #E4E0E0;
			padding: 0 .3rem;
			p {
				height: .875rem;
				width: 85%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				background: #fff;
				border-radius: .16rem;
				.ice {
					color: #CCCCCC;
					width: 1rem;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				input {
					width: 70%;
					height: .85rem;
					border: 0;
					padding-left: .2rem;
					font-size: .44rem;
					color: #ABABAB;
				}
			}
			button {
				border: 0;
				height: .87rem;
				width: 1.2rem;
				line-height: .87rem;
				text-align: center;
				font-size: .5rem;
				color: #999;
				background: #E4E0E0;
			}
		}
		.detalist-top {
			height: 1.375rem!important;
			background: #fff!important;
			line-height: 1.375rem;
			color: #293653!important;
			font-size: .56rem;
			position: relative;
			text-align: center;
			span {
				font-weight: 500;
			}
			.iconfanhui {
				position: absolute;
				width: 1rem;
				color: #9EA6BF;
				height: 1.375rem;
				top: 0;
				left: 0;
			}
		}
	}
</style>