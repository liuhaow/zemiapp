<template>
	<div class="deposit">
		<div class="deposit-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>游戏币寄存</span>
		</div>
		<div class="main-M">

			<div class="game-area">
				<h1 class="commen-sty">游戏区服</h1>
				<p><span>{{ganname.name}}</span>/<span>{{yibiqufu.qu}}</span>/<span>{{yibiqufu.fu}}</span></p>
			</div>

			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>游戏币数量</h1>
				<input type="number" v-model='amount' placeholder="出售数量不得低于2000万" />万
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>商品价格</h1>
				<input type="number" v-model='price' placeholder="请输入价格" />
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>联系电话</h1>
				<input type="number" v-model='phone' placeholder="请输入您的联系电话" />
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>QQ号</h1>
				<input type="number" v-model='qq' placeholder="请输入您的QQ号" />
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>防骗暗号</h1>
				<input type="number" v-model='kfuAnhao ' @input="oninput" placeholder="请输入5位数字防骗暗号" />
			</div>

			<div class="deposit-btn">
				<p>提示</p>
				<h2>1000万游戏币每天返还1万游戏币</h2>
				<button @click="nextdepositInfo" :disabled="disabled">确定</button>
			</div>
		</div>

	</div>
</template>

<script>
	import { jicunDataInfo } from '@/api/api'
	import { mapGetters, mapActions } from 'vuex'
	import { Toast } from 'mint-ui';

	export default {
		data() {
			return {
				qq: '',
				phone: '',
				amount: '',
				kfuAnhao: '',
				price: '',
				disabled:false
			}
		},
		computed: {
			...mapGetters({
				ganname: 'gamename',
				yibiqufu: 'yibiqufu',
				userDt: 'getUserData'
			})
		},
		methods: {
			goback() {
				this.$router.go(-1)
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
			nextdepositInfo() {
				var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
				if(!reg.test(this.phone)) {
					Toast({
						message: '请填正确号码',
						iconClass: 'icon icon-error',
						position: 'center',
					});
					return
				}
				const parm = {
					token: this.userDt.token,
					userId: this.userDt.id,
					gameId: this.yibiqufu.gameId,
					gameAreaId: this.yibiqufu.Daqu_id,
					qq: this.qq,
					phone: this.phone,
					amount: this.amount,
					kfuAnhao: this.kfuAnhao,
					price: this.price,
				}
				jicunDataInfo(parm).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						this.disabled = true
						Toast({
							message: '寄存成功',
							iconClass: 'icon icon-error',
							position: 'center',
						});
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
	.deposit {
		background: #F4F4F4;
		display: flex;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		flex-direction: column;
		height: 100%;
		.main-M {
			flex: 1;
			overflow: scroll;
			div {
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
						font-size: 0.38rem;
						position: relative;
						top: 1px;
						padding-right: .1rem;
					}
				}
			}
			.deposit-btn {
				display: flex;
				flex-direction: column;
				align-items: center;
				p {
					font-size: .38rem;
					color: #9EA6BF;
					width: 90%;
					padding: .32rem 0;
					margin: 0 auto;
				}
				h2 {
					font-size: .38rem;
					color: #9EA6BF;
					width: 80%;
					margin: 0 auto 1rem;
				}
				button {
					width: 80%;
					height: 1.41rem;
					line-height: 1.41rem;
					text-align: center;
					font-size: 0.5rem;
					background: #4673EC;
					margin: 0 auto;
					border-radius: 0.64rem;
					border: 0;
					color: #fff;
				}
			}
			.rolepelo {
				height: 1.5rem;
				display: flex;
				align-items: center;
				margin-bottom: .1rem;
				background: #fff;
				font-size: 0.38rem;
				input {
					height: 1.4rem;
					width: 55%;
					line-height: 1.4rem;
					margin-right: .2rem;
					border: 0;
					color: #434343;
					font-size: 0.38rem;
					margin-left: .2rem;
				}
			}
			.game-area {
				display: flex;
				height: 1.2rem;
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
		.deposit-top {
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
				font-size: 0.38rem;
				color: #4673EC;
				top: 0;
				right: 0;
			}
		}
	}
</style>