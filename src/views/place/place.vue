<template>
	<div class="xiadan-main">
		<div class="xiadan-top">
			<i class="iconfont iconfanhui" @click="goback"></i> 下单
		</div>
		<div class="maininfo">
			<div class="product-name">
				<h1 class="commen-sty">商品名称</h1>
				<p>{{paydanbuy.all.title}}</p>
			</div>
			<div class="game-area">
				<h1 class="commen-sty">游戏区服</h1>
				<p><span>{{paydanbuy.all.gameName}}</span>/<span>{{paydanbuy.all.game_area_name}}</span>/<span></span></p>
			</div>
			<div class="unit-price">
				<h1 class="commen-sty">价格</h1>
				<span>&yen;{{paydanbuy.all.gold_price}}</span>
			</div>
			<div class="xiadan-numb">
				<h1 class="commen-sty">数量</h1>
				<ul>
					<li>
						<span class="btn-left" @click="subtract()">-</span>
					</li>
					<li><span class="zk-input">{{count}}</span></li>
					<li>
						<span class="btn-right" @click="add()">+</span>
					</li>
				</ul>

			</div>
			<!--<div class="xiadan-trade">
				<h1 class="commen-sty">交易保险：&yen;<i ref='jybx'>{{xiadanbuy.all.unit_price}}</i></h1>
				<mt-switch class='xiadan-trade-switch' v-model="value"></mt-switch>
			</div>-->
			<!--<div class="xiadan-discounts">
				<h1 class="commen-sty">优惠红包</h1>
				<i class="iconfont ">&#xe624;</i>
			</div>-->
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>收货角色</h1>
				<input type="text" v-model='gameRole' placeholder="请输入角色名" />
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>角色等级</h1>
				<input type="number" v-model='gameRoleLevel' placeholder="请输入角色等级" />
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>我的手机号码</h1>
				<input type="number" v-model='phone' placeholder="请输入手机号" />
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>我的QQ号</h1>
				<input type="number" v-model='qq' placeholder="请输入QQ号" />
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>客服暗号</h1>
				<input type="number" v-model='kfuAnhao' @input="oninput" placeholder="请输入5位数字防骗暗号" />
			</div>
		</div>
		<div class="mian-footer">
			<h1>合计 <span ref="pice" v-show="!value">{{paydanbuy.all.gold_price*count}}</span> <span ref="pices" v-show="value">{{paydanbuy.all.gold_price*count+paydanbuy.all.unit_price}}</span></h1>
			<button @click="payInfo">提交订单</button>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { buyjsdbData, jishoudanbaoInfo } from '@/api/api'
	import { Toast } from 'mint-ui'

	export default {
		data() {
			return {
				phone: '',
				qq: '',
				value: false,
				count: 1,
				insurance: 0,
				gameRole: '',
				gameRoleLevel: '',
				kfuAnhao: ''
			}
		},
		computed: {
			...mapGetters({
				xiadanbuy: 'xiadanbuy',
				yibiqufu: 'yibiqufu',
				getUserData: 'getUserData',
				paydanbuy: 'paydanbuy'

			})
		},
		mounted() {
			let data = {
				token: this.getUserData.token,
				userId: this.getUserData.id,
				goldGoodsId: this.paydanbuy.all.id
			}
			jishoudanbaoInfo(data).then(res=>{
				console.log(res)
			})
		},
		methods: {
			...mapActions(
				[
					'yibimaixiadan'
				]
			),
			oninput(e) {
				if(this.kfuAnhao.length > 5) {
					Toast({
						message: '5位数字即可',
						iconClass: 'icon icon-error'
					});
					this.kfuAnhao = this.kfuAnhao.slice(0, 5);
				}
			},
			payInfo() {
				var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
				if(!reg.test(this.phone)) {
					Toast({
						message: '请填正确号码',
						iconClass: 'icon icon-error',
						position: 'center',
					});
					return;
				}
				let data = {
					gameTitle: this.paydanbuy.all.title,
					gameAreaId: this.yibiqufu.Daqu_id,
					token: this.getUserData.token,
					userId: this.getUserData.id,
					gameId: this.yibiqufu.gameId,
					gameGoldId: this.paydanbuy.all.id,
					num: this.count,
					gameRole: this.gameRole,
					insurance: this.insurance,
					gameRoleLevel: this.gameRoleLevel,
					kfuAnhao: this.kfuAnhao,
					phone: this.phone,
					qq: this.qq,
					couponId: 1
				}
				console.log(data)
				buyjsdbData(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						let parm = {
							goldOrderId: res.data.return_data.id,
							type: 1,
							qu: this.xiadanbuy.game_area_name,
							quf: this.xiadanbuy.qf

						}
						this.yibimaixiadan(parm)

						this.$router.push('/yibi/payinfo')
					} else {
						Toast({
							message: res.data.msg,
							iconClass: 'icon icon-error',
							position: 'center',
						});
					}
				})

			},
			goback() {
				localStorage.removeItem('xiadanbuy')
				localStorage.removeItem('paydanbuy')
				this.$router.back(-1)
			},
			add: function(count) {
				if(this.count >= this.xiadanbuy.all.gold_num) {
					this.style2 = true;
					this.showcone = true;
					this.count = this.xiadanbuy.all.gold_num;
					Toast({
						message: '库存就这么多了',
						iconClass: 'icon icon-error',
						position: 'center',
					});

				} else {
					this.count++;
					this.style1 = false
				}
			},
			subtract: function(count) {
				if(this.count <= 1) {
					this.style1 = true;
					this.showcone = true;
					this.count = 1;
				} else {
					this.count = this.count - 1;
					this.style2 = false
				}
			}
		}
	}
</script>

<style lang="stylus">
	.xiadan-main {
		background: #F4F4F4;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		.mian-footer {
			height: 1.375rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: #fff;
			button {
				width: 4rem;
				border: 0;
				background: #4673EC;
				font-size: 18px;
				height: 1.375rem;
				color: #fff;
				line-height: 1.375rem;
			}
			h1 {
				width: 4rem;
				height: 1.375rem;
				line-height: 1.375rem;
				font-size: 0.44rem;
				color: #333;
				padding-left: .32rem;
				font-weight: 400;
				display: flex;
				align-items: center;
				span {
					color: #EC6941;
					font-size: 16px;
					margin-left: .6rem;
				}
			}
		}
		.xiadan-top {
			height: 1.375rem!important;
			background: #fff!important;
			line-height: 1.375rem;
			color: #293653!important;
			font-size: .56rem;
			margin-bottom: .1rem;
			position: relative;
			text-align: center;
			.iconfanhui {
				position: absolute;
				width: 1rem;
				height: 1.375rem;
				top: 0;
				left: 0;
			}
		}
		.maininfo {
			flex: 1;
			overflow: auto;
			div {
				height: 1.88rem;
				background: #fff;
				.commen-sty {
					width: 3rem;
					font-size: 0.44rem;
					color: #333;
					padding-left: .32rem;
					font-weight: 500;
					display: flex;
					align-items: center;
					i {
						color: #ff8042;
						display: block;
						font-size: 0.44rem;
						position: relative;
						top: 1px;
						padding-right: .1rem;
					}
				}
			}
			.product-name {
				box-sizing: border-box;
				display: flex;
				padding-top: .2rem;
				margin-bottom: .1rem;
				p {
					width: 63%;
					font-size: 0.44rem;
					color: #333;
					font-weight: 400;
					display: flex;
					align-items: center;
				}
			}
			.game-area {
				display: flex;
				align-items: center;
				margin-bottom: .1rem;
				p {
					width: 70%;
					font-size: 0.44rem;
					color: #333;
					text-align: right;
					margin-right: .4rem;
					font-weight: 400;
				}
			}
			.unit-price {
				display: flex;
				align-items: center;
				margin-bottom: .1rem;
				justify-content: space-between;
				span {
					margin-right: .5rem;
					font-size: 0.44rem;
					color: #333;
				}
			}
			.xiadan-numb {
				display: flex;
				align-items: center;
				margin-bottom: .1rem;
				justify-content: space-between;
				ul {
					width: 2.5rem;
					height: .78rem;
					display: flex;
					margin-right: .5rem;
					li {
						width: 33%;
						height: .78rem;
						line-height: .78rem;
						text-align: center;
						span {
							display: block;
							font-size: .5rem;
							font-weight: 300;
							border: .032rem solid #ccc;
							width: 100%;
							height: .78rem;
							line-height: .78rem;
						}
					}
					li:nth-child(2) span {
						border-right: 0;
						border-left: 0;
					}
				}
			}
			.xiadan-trade {
				display: flex;
				align-items: center;
				margin-bottom: .1rem;
				justify-content: space-between;
				h1 {
					width: 5rem;
				}
				.xiadan-trade-switch {
					width: 1.41rem;
					height: .6rem;
					margin-right: .3rem;
					border: 0.032rem solid #ccc;
					border-radius: .5rem;
					.mint-switch-core {
						height: 100%;
						border: none;
						width: 100%;
					}
					.mint-switch-core:before {
						height: 100%;
						width: 100%;
					}
					.mint-switch-core:after {
						height: .6rem;
						width: .8rem;
					}
				}
			}
			.xiadan-discounts {
				display: flex;
				align-items: center;
				margin-bottom: .1rem;
				justify-content: space-between;
				i {
					width: 2rem;
					height: 1.88rem;
					line-height: 1.88rem;
					text-align: center;
					font-size: .5rem;
					color: #BFBFBF;
				}
			}
			.rolepelo {
				display: flex;
				align-items: center;
				margin-bottom: .1rem;
				input {
					height: 1.88rem;
					line-height: 1.88rem;
					border: 0;
					color: #434343;
					font-size: .44rem;
					margin-left: .2rem;
				}
			}
		}
	}
</style>