<template>
	<div class="wrapper">
		<div class="login-h"></div>

		<div class="login">
			<div class="denglu">
				<div class="username">
					<p class="user-p uname-p"><input type="text" v-model="mobile" placeholder="请输入账号"></p>
				</div>
				<div class="password">
					<p class="user-p psw-p"><input v-model="password" type="text" placeholder="请输入密码"></p>
				</div>
			</div>
			<button class="login-btn" @click="loginInfo">登录</button>
			<p class="remove">
				<span @click="remeberW">忘记密码?</span>
				<span @click="zhuceinfo">快速注册</span>
			</p>
		</div>
		<h2 class="login-footer">登陆即代表您同意<a href="">《服务和隐私条款 》</a></h2>
	</div>
</template>

<script>
	import { Login, getUserList } from "../api/api";
	import { mapActions } from "vuex";
	import qs from 'qs'

	import { Toast } from 'mint-ui';
	export default {
		data() {
			return {
				mobile: '',
				password: '',
			};
		},
		mounted() {},
		methods: {
			zhuceinfo() {
				this.$router.push('/my/register')
			},
			remeberW() {
				this.$router.push('/my/revise')

			},
			...mapActions(
				[
					'setUserData', 'setUserInfo','setToken','settaber'
				]
			),
			loginInfo() { //登录操作
				var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
				if(!this.mobile || !this.password) {
					Toast({
						message: '请填写完整',
						iconClass: 'icon icon-error',
						position: 'center',
					});
					return;
				} else if(!reg.test(this.mobile)) {
					Toast({
						message: '请填正确号码',
						iconClass: 'icon icon-error',
						position: 'center',
					});
					return;

				} else {
					this.$store.dispatch("setLoadingState", true);
					const parm = {
						mobile: this.mobile,
						password: this.password,
					}
					Login(parm).then(res => {
						if(res.data.code !== 200) {
							Toast({
								message: '请检查账号信息是否错误',
								iconClass: 'icon icon-error'
							});
							this.$store.dispatch("setLoadingState", false);
						} else {
							this.$store.dispatch("setLoadingState", false);							
							this.setUserInfo();
							this.settaber(0)
							this.setToken(res.data.return_data.token)
							this.setUserData(res.data.return_data);
							this.$router.push('/home');
						}

					})
				}

			},
			timer() {
				if(this.time > 0) {
					this.time--;
					this.btnxt = this.time + "s";
					setTimeout(this.timer, 1000);
				} else {
					this.time = 0;
					this.btnxt = "验证";
					this.disabled = false;
				}
			}
		}
	};
</script>

<style lang="stylus" scoped>
	.wrapper {
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		overflow: scroll;
		.login-h {
			width: 100%;
			height: 7rem;
			background: url(../assets/login/header.png) no-repeat center top;
			background-size: 100% auto;
		}
		.login {
			width: 8rem;
			.remove {
				width: 100%;
				margin-bottom: 1rem;
				justify-content: space-between;
				display: flex;
				span {
					font-size: .32rem;
				}
				span:nth-child(1) {
					color: #939EB8;
				}
				span:nth-child(2) {
					color: #729CFC
				}
			}
			.username,
			.password {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 0.2rem 0;
				border-radius: .4rem;
				height: 1.25rem;
				line-height: 1.25rem;
				color: #9EA6BF;
				.user-p {
					width: 100%;
					height: 1rem;
					display: flex;
					align-items: center;
					padding-left: .32rem;
					border-radius: .625rem;
					border: .03rem solid #9EA6BF;
				}
				&>.user-p>input {
					border: 0;
					background-color: white;
					width: 80%;
					margin-left: .15rem;
					height: .7rem;
					line-height: .7rem;
					outline: none;
					font-size: 0.38rem;
				}
			}
			.login-btn {
				width: 8rem;
				height: 1rem;
				margin: 0.1rem 0 .2rem;
				border-radius: 0.625rem;
				background-color: #729CFC;
				border: 0;
				outline: none;
				font-size: 0.38rem;
				color: white;
			}
		}
		.login-footer {
			font-size: .4rem;
			color: #939EB8;
			a {
				color: #729CFC;
			}
		}
	}
</style>