<template>
	<div class="revise">
		<div class="revise-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>忘记密码</span>
		</div>
		<div class="revise-main">
			<div>
				<p class="main-top">
					<img src="../assets/login/rpho.png" /><span>+86 <img src="../assets/login/PLAY.png" alt="" /></span>
				</p>
				<input type="number" v-model="mobile" placeholder="请输入手机号" name="" id="" value="" />
			</div>
			<div class="checkbt">
				<p>
					<img src="../assets/login/ydul.png" alt="" />
					<input type="number" v-model="code" placeholder="请输入短信验证码" />
				</p>
				<button :disabled="disabled" @click="checkout">{{btnxt}}</button>
			</div>
			<div>
				<p>
					<img src="../assets/login/suo.png" alt="" />
					<input type="password" v-model="password" placeholder="请设置新密码" />
				</p>
			</div>
			<div>
				<p>
					<img src="../assets/login/suo.png" alt="" />
					<input type="password" v-model="passwords" placeholder="请确认密码" />
				</p>
			</div>

			<div class="main-footer">
				<button @click="btnMake">确定</button>
			</div>
		</div>

	</div>
</template>

<script>
	import { getSmsCode, reviseIInfo } from '@/api/api'
	import { Toast } from 'mint-ui';

	export default {
		data() {
			return {
				btnxt: '获取验证码',
				disabled: false,
				mobile: '',
				time: 0,
				code: '',
				invite_code: 0,
				password: '',
				passwords:''
			}
		},
		methods: {
			btnMake() {
				if(this.password != this.passwords){
					Toast({
							message: '两次密码不一致',
							iconClass: 'icon icon-error',
							position: 'center',
						});
						return
				}
				var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
				if(!reg.test(this.mobile)) {
					Toast({
						message: '请填正确号码',
						iconClass: 'icon icon-error',
						position: 'top',
					});
					return
				}
				let data = {
					mobile: this.mobile,
					code: this.code,
					password: this.password,
				}
				reviseIInfo(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						Toast({
							message: '密码设置完成',
							iconClass: 'icon icon-error',
							position: 'center',
						});
						this.$router.back(-1)
					}else{
						Toast({
							message: res.data.msg,
							iconClass: 'icon icon-error',
							position: 'center',
						});
					}
				})
			},
			timer() {
				if(this.time > 0) {
					this.time--;
					this.btnxt = this.time + "s";
					setTimeout(this.timer, 1000);
				} else {
					this.time = 0;
					this.btnxt = "获取验证码";
					this.disabled = false;
				}
			},
			checkout() {
				var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
				if(!reg.test(this.mobile)) {
					Toast({
						message: '请填正确号码',
						iconClass: 'icon icon-error',
						position: 'center',
					});
				} else {
					this.time = 60;
					this.disabled = true;
					this.timer();
					getSmsCode(this.mobile).then(res => {
						console.log(res)
					})
				}

			},
			goback() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.revise {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		/**/
		bottom: 0;
		right: 0;
		.revise-main {
			flex: 1;
			background: #fff;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: .1rem;
			div {
				width: 90%;
				height: 1.5rem;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: .032rem solid #C3CCE2;
				margin: 0 auto;
				input {
					width: 65%;
					color: #9EA6BF;
				}
				p {
					height: .5rem;
					display: flex;
					align-items: center;
				}
				.main-top {
					border-right: .032rem solid #ccc;
				}
				img {
					height: .44rem;
					width: .34rem;
					margin: 0 .32rem;
				}
				input {
					border: 0
				}
			}
			.checkbt {
				button {
					border: 0;
					width: 2.8rem;
					font-size: .38rem;
					color: #344978;
					background: #fff;
					border-left: .032rem solid #ccc;
				}
			}
			.main-footer {
				border: 0;
				justify-content: center;
				button {
					width: 90%;
					height: 1.56rem;
					border: 0;
					font-size: .5rem;
					margin-top: 2rem;
					border-radius: .156rem;
					color: #fff;
					background: #4673EC;
				}
			}
		}
		.revise-top {
			height: 1.375rem;
			background: #fff;
			line-height: 1.375rem;
			color: #344978;
			font-size: .44rem;
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