<template>
	<div class="assure">
		<div class="assure-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>游戏币担保</span>
		</div>
		<div class="main-M">
			<div class="game-area">
				<h1 class="commen-sty">游戏区服</h1>
				<p><span>地下城与勇士</span>/<span>上海区</span>/<span>上海1区</span></p>
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>商品标题</h1>
				<p @click="biaptIfo" ref='tit'>{{name}}</p>
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>单件数量</h1>
				<input type="number" v-model='num' placeholder="出售数量不得低于2000万" />万
			</div>

			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>发布件数</h1>
				<input type="number" v-model='amount' placeholder="请输入件数" />件
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>商品单价</h1>
				<input type="number" v-model='price' placeholder="请输入价格" />
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>商品介绍</h1>
				<input type="text" v-model='introduction  ' placeholder="输入商品介绍" />
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>交易类型</h1>
				<select v-model="couponSelected" @change="getCouponSelected" class="listsele">
					<option value="请选择">请选择</option>					
					<option v-for="item in typrList" :value="item.id" :data-tt="item.id">{{item.currency_type}}</option>
				</select>
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>发货方式</h1>
				<span @click="sheetVOpen">{{jiaoyi}}<i></i></span>
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>防骗暗号</h1>
				<input type="number" v-model='kfuAnhao' placeholder="请输入5位数字的防骗暗号" @input="oninput" />
			</div>

			<div class="assure-btn">
				<button @click="nextAssureInfo">下一步</button>
			</div>
		</div>
		<mt-actionsheet :actions="data" v-model="sheetVisible">
		</mt-actionsheet>
		<mt-actionsheet :actions="data2" v-model="sheetV">
		</mt-actionsheet>

	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import { danbaoDataIfo,jiaoyitype } from '@/api/api'
	import { mapGetters, mapActions } from 'vuex'

	export default {
		data() {
			return {
				title: '',
				amount: '',
				num: '',
				kfuAnhao: '',
				couponSelected: '请选择',
				typrList:[],
				introduction: '',
				sheetV: false,
				sheetVisible: false,
				price: '',
				shipmentWay: 1,
				name: '请选择标题',
				jiaoyi: '邮寄交易',
				data: [{    
						name: '邮寄交易',
						method: this.geEmail // 调用methods中的函数
						   
					}, {    
						name: '拍卖交易',
						     method: this.getLipai // 调用methods中的函数
						   
					},
					{    
						name: '当面交易',
						     method: this.getLiface // 调用methods中的函数
						   
					}
				],
				data2: [{    
						name: '在线发货，方便快捷',
						method: this.geEfahuo // 调用methods中的函数
						   
					}, {    
						name: '买的放心，用的安心',
						     method: this.getLibuy // 调用methods中的函数
						   
					},
					{    
						name: '绿色商品，安全迅速',
						     method: this.getLiLvse // 调用methods中的函数
						   
					},
					{    
						name: '支付完成，立马发货',
						     method: this.getLpay // 调用methods中的函数
						   
					},
					{    
						name: '手工打造，诚信保障',
						     method: this.getLihand // 调用methods中的函数
						   
					}
				],

			}
		},
		computed: {
			...mapGetters({
				ganname: 'gamename',
				yibiqufu: 'yibiqufu',
				userDt: 'getUserData'

			})
		},
		mounted() {
			let data = {
				idx: this.ganname.id
			}
			jiaoyitype(data).then(res => {
				if(res.data.code == 200) {
					this.typrList = res.data.return_data

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
					'JIshouGamebi'
				]
			),
			getCouponSelected() {
				//获取选中的优惠券
				console.log(this.couponSelected)
			},
			oninput(e) {
				if(this.kfuAnhao.length > 5) {
					Toast({
						message: '5位数字即可',
						iconClass: 'icon icon-error'
					});
					this.kfuAnhao = this.kfuAnhao.slice(0, 5);
				}
			},
			biaptIfo() {
				this.sheetV = !this.sheetV
			},
			geEfahuo() {
				this.name = '在线发货，方便快捷'
			},
			getLibuy() {
				this.name = '买的放心，用的安心'
			},
			getLiLvse() {
				this.name = '绿色商品，安全迅速'
			},
			getLpay() {
				this.name = '支付完成，立马发货'
			},
			getLihand() {
				this.name = '手工打造，诚信保障'
			},
			geEmail() {
				this.jiaoyi = '邮寄交易';
				this.shipmentWay = 1
			},
			getLipai() {
				this.jiaoyi = '拍卖交易'
				this.shipmentWay = 2

			},
			getLiface() {
				this.jiaoyi = '当面交易'
				this.shipmentWay = 3

			},
			goback() {
				this.$router.go(-1)
			},
			sheetVOpen() {

				this.sheetVisible = !this.sheetVisible
			},
			nextAssureInfo() {
				if(this.couponSelected =='请选择'){
					this.couponSelected = ''
				}
				if(this.name =="请选择标题"){
					Toast({
						message: '标题还是要选的',
						iconClass: 'icon icon-error',
						position: 'center',
					});
					return
				}
				let parm = {
					title: this.name,
					token: this.userDt.token,
					userId: this.userDt.id,
					gameId: this.yibiqufu.gameId,
					gameAreaId: this.yibiqufu.Daqu_id,
					shipmentWay: this.shipmentWay,
					amount: this.amount,
					kfuAnhao: this.kfuAnhao,
					num: this.num,
					price: this.price,
					introduction: this.introduction,
					sellType: this.couponSelected
				}
				console.log(parm)
				this.JIshouGamebi(parm)
				this.$router.push('/yibi/issdanbao')

			}
		}
	}
</script>

<style lang="stylus" scoped>
	.assure {
		background: #F4F4F4;
		display: flex;
		flex: 1;
		overflow: scroll;
		flex-direction: column;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;

		.main-M {
			flex: 1;
			overflow: scroll;
			padding-bottom: 1rem;
			.rolepelo,
			.game-area {
				height: 1.6rem;
				.commen-sty {
					width: 3rem;
					font-size: 0.38rem;
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
			.assure-btn {
				display: flex;
				align-items: center;
				margin-top: 1rem;
				justify-content: center;
				height: 1.41rem;
				button {
					width: 80%;
					height: 1.41rem;
					line-height: 1.41rem;
					text-align: center;
					font-size: 0.56rem;
					background: #4673EC;
					border-radius: 0.64rem;
					border: 0;
					color: #fff;
				}
			}
			.rolepelo {
				display: flex;
				align-items: center;
				margin-bottom: .1rem;
				background: #fff;
				font-size: .38rem;
				input {
					height: 1.2rem;
					width: 55%;
					line-height: 1.2rem;
					margin-right: .2rem;
					border: 0;
					color: #434343;
					font-size: .38rem;
					margin-left: .2rem;
				}
				.listsele {
					width: 40%;
					height: 50%;
				}
			}
			.game-area {
				display: flex;
				align-items: center;
				margin-bottom: .1rem;
				background: #fff;
				p {
					width: 70%;
					font-size: 0.38rem;
					color: #333;
					text-align: right;
					margin-right: .4rem;
					font-weight: 400;
				}
			}
		}
		.assure-top {
			height: 1.375rem;
			background: #fff;
			line-height: 1.375rem;
			color: #000;
			font-size: .5rem;
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