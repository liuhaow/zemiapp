<template>
	<div class="Oderinfo">
		<div class="Oderinfo-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>订单详情</span>
		</div>
		<div class="detail-mian" >
			<div class="main-list">
				<h2>商品名称</h2>
				<p>{{list.title}}</p>
			</div>
			<div class="main-list">
				<h2>时间</h2>
				<p>{{new Date(parseInt(list.add_time) * 1000).toLocaleString()}}</p>
			</div>
			<div class="main-list">
				<h2>订单类型</h2>
				<p>{{list.title}}</p>
			</div>
			<div class="main-list">
				<h2>游戏区服</h2>
				<p>{{list.gameName}}/{{list.gameAreaName}}</p>
			</div>
			<div class="main-list">
				<h2>交易方式</h2>
				<p>{{list.shipmentWay}}</p>
			</div>
			<div class="main-list">
				<h2>单价</h2>
				<p>{{list.price}}</p>
			</div>
			<div class="main-list">
				<h2>数量</h2>
				<p>{{list.num}}万</p>
			</div>
			<div class="main-list">
				<h2>份数</h2>
				<p>{{list.amount}}</p>
			</div>
			<div class="main-list">
				<h2>合计</h2>
				<p>{{list.price*list.amount}}</p>
			</div>

		</div>
		<div class="Oderinfo-ft" v-if="detaliId.ind == 2">
			<button class="kefuf">联系客服</button>
			<button class="makfuf" @click="MakequxiaosjInfo(list.id)">下架</button>

		</div>
		<div class="Oderinfo-ft" v-if="detaliId.ind == 1">
			<button class="kefuf">取消订单</button>
			<button class="makfuf">去付款</button>

		</div>
		<div class="Oderinfo-ft" v-if="detaliId.ind == 4">
			<button class="kefuf" >已经下架</button>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { ZidongPPeiInfo } from '@/api/api'
	import { makeSureOder, makeSureZDOder,AFbulistDetail, quxiaosjjicunData } from '@/api/mine'
	import { Toast } from 'mint-ui';

	export default {
		data() {
			return {
				list: ''
			}
		},
		computed: {
			...mapGetters({
				detaliId: 'detaliId',
				user: 'getUserData'

			})
		},
		mounted() {
			const paremr = {
				token: this.user.token,
				userId: this.user.id,
				goldGoodsId: this.detaliId.id,
				
			}
			AFbulistDetail(paremr).then(res => {
				if(res.data.code == 200) {
					this.list = res.data.return_data
				} else {
					Toast({
						message: res.data.msg,
						iconClass: 'icon icon-error',
						position: 'center',
					});
				}
			})

		},
		methods: {
			goback() {
				this.$router.go(-1)
			},
			MakequxiaosjInfo(ide) {
				const parem = {
					token: this.user.token,
					userId: this.user.id,
					goldGoodsId : ide,
					
				}
				quxiaosjjicunData(parem).then(res => {
					if(res.data.code == 200) {
						Toast({
							message: '下架成功',
							iconClass: 'icon icon-error',
							position: 'center',
						});
						this.$router.back(-1)

					} else {
						Toast({
							message: res.data.msg,
							iconClass: 'icon icon-error',
							position: 'center',
						});
					}
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.Oderinfo {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		/**/
		bottom: 0;
		right: 0;
		.Oderinfo-ft {
			height: 1.56rem;
			background: #fff;
			justify-content: flex-end;
			align-items: center;
			display: flex;
			button {
				border: 0;
				margin: 0 .32rem;
				color: #fff;
				font-size: .38rem;
				width: 2.2rem;
				height: .9rem;
				border-radius: .1rem;
			}
			.kefuf {
				background: #939EB8;
			}
			.makfuf {
				background: #6CA0FC;
			}
		}
		.detail-mian {
			flex: 1;
			overflow: scroll;
			div {
				height: 1.56rem;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 .32rem;
				box-sizing: border-box;
				margin-bottom: .032rem;
				background: #fff;
				font-size: .38rem;
				h2 {
					color: #CACACA;
				}
				p {
					color: #000;
				}
			}
		}
		.Oderinfo-top {
			height: 1.375rem;
			background: #fff;
			line-height: 1.375rem;
			color: #000;
			font-size: .44rem;
			position: relative;
			margin-bottom: .032rem;
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