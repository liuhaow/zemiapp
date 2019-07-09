<template>
	<div class="currency">
		<div class="currency-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>游戏币提取</span>
		</div>
		<div class="currency-qufu">
			<span>
				游戏区服
			</span>
			<span class="qu">{{jcuntq.game_name}}/{{jcuntq.qufu}}</span>
		</div>
		<ul class="currency-message">
			<li>
				<p><span>*</span><span>游戏币数量</span></p> <input v-model="numb" type="number" placeholder="数量不得低于2000万" name="" id="" value="" /> <span>万</span>
			</li>
			<li>

				<p><span>*</span><span>防骗暗号</span></p><input @input="oninput" type="number" v-model='kfuAnhao ' placeholder="请输入5位数字防骗暗号" />
			</li>
			<li>
				<p><span>*</span><span>联系电话</span></p> <input v-model="phone" type="number" placeholder="请输入您的联系电话" name="" id="" value="" />

			</li>
			<li>
				<p><span>*</span><span>QQ号</span></p> <input type="number" v-model="qq" placeholder="请输入您的QQ号" name="" id="" value="" />

			</li>
		</ul>
		<div class="currency-btn">
			<button @click="makeSure">确定</button>
		</div>

	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { Toast } from 'mint-ui';
	import { TiqujcGamebiData } from '@/api/mine'
	export default {
		data() {
			return {
				numb: '',
				qq: '',
				phone: '',
				kfuAnhao: ''
			}
		},
		computed: {
			...mapGetters({
				jcuntq: 'jcuntq',
				getUserData: 'getUserData'

			})
		},
		methods: {
			oninput(e) {
				if(this.kfuAnhao.length > 5) {
					Toast({
						message: '5位数字即可',
						iconClass: 'icon icon-error'
					});
					this.kfuAnhao = this.kfuAnhao.slice(0, 5);
				}
			},
			makeSure() {
				console.log(12)
				if(this.numb > this.jcuntq.amount) {
					Toast({
						message: '你寄存的数量没有这么多只有' + this.jcuntq.amount,
						iconClass: 'icon icon-error',
						position: 'center',
					});
					return;
				}
				var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
				if(!reg.test(this.phone)) {
					Toast({
						message: '请填正确号码',
						iconClass: 'icon icon-error',
						position: 'top',
					});
					return;
				}
				let data = {
					kfuAnhao: this.kfuAnhao,
					token: this.getUserData.token,
					userId: this.getUserData.id,
					gameId: this.jcuntq.gameId,
					gameAreaId: this.jcuntq.gameAreaId,
					qq: this.qq,
					phone: this.phone,
					jicunId: this.jcuntq.jicunId,
					amount: this.numb,
					price: this.jcuntq.price
				}
				TiqujcGamebiData(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						localStorage.removeItem('tiqu')
						Toast({
							message: res.data.msg,
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
				console.log(data)
			},
			goback() {
				localStorage.removeItem('tiqu')
				this.$router.back(-1)

			}
		}
	}
</script>

<style lang="stylus" scoped>
	.currency {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.currency-btn {
			display: flex;
			align-items: center;
			margin-top: 2rem;
			justify-content: center;
			height: 1.41rem;
			button {
				width: 70%;
				height: 1.41rem;
				line-height: 1.41rem;
				text-align: center;
				font-size: 0.56rem;
				background: #4673EC;
				border-radius: 0.156rem;
				border: 0;
				color: #fff;
			}
		}
		.currency-message {
			li {
				height: 1.56rem;
				box-sizing: border-box;
				padding: 0 .3rem;
				display: flex;
				align-items: center;
				margin-bottom: 0.1rem;
				background: #fff;
				p {
					width: 2.6rem;
					font-size: .44rem;
					font-weight: 600;
					color: #333333;
					span:nth-child(1) {
						color: #DD5A5A;
						margin-right: .1rem;
					}
				}
				input {
					width: 60%;
					margin-left: .2rem;
					font-size: .38rem;
					color: #999999;
					border: 0;
				}
			}
		}
		.currency-qufu {
			height: 1.56rem;
			line-height: 1.56rem;
			box-sizing: border-box;
			padding: 0 .3rem;
			width: 100%;
			background: #fff;
			font-size: .44rem;
			color: #333333;
			font-weight: 600;
			margin-bottom: .1rem;
			.qu {
				margin-left: .5rem;
			}
		}
		.currency-top {
			height: 1.375rem!important;
			background: #fff!important;
			line-height: 1.375rem;
			color: #293653!important;
			font-size: .56rem;
			margin-bottom: .1rem;
			position: relative;
			text-align: center;
			span {
				font-weight: 600;
			}
			.iconfanhui {
				position: absolute;
				width: 1rem;
				height: 1.375rem;
				top: 0;
				left: 0;
			}
		}
	}
</style>