<template>
	<div class="chpassw">
		<div class="chpassw-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>修改密码</span>
		</div>
		<div class="chpassw-mian">
			<h2>请输入您的信息</h2>
			<p>
				<img src="../../../assets/login/suo.png" alt="" />
				<input type="text" v-model="oldpwd" placeholder="请输入旧密码" />
			</p>
			<p>
				<img src="../../../assets/login/suo.png" alt="" />
				<input type="password" v-model="password" placeholder="请设置密码" />
			</p>
			<p>
				<img src="../../../assets/login/suo.png" alt="" />
				<input type="password" v-model="passwords" placeholder="请再次输入密码" />
			</p>
			<div class="main-footer">
				<button :class="{act:nst}" @click="xiugaiData">保存</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import { mapGetters, mapActions } from 'vuex'
	import { xiugaipasswInfo } from '@/api/mine'
	export default {
		data() {
			return {
				oldpwd: '',
				password: '',
				nst: false,
				passwords: ''
			}
		},
		computed: {
			...mapGetters({
				user: 'getUserData'
			})
		},
		watch: {
			password(valu) {
				if(valu.length > 0) {
					this.nst = true
				} else {
					this.nst = false

				}
			}
		},
		methods: {
			...mapActions({
				userOut: "setSignOut"
			}),
			xiugaiData() {
				if(!this.oldpwd || !this.password) {
					Toast({
						message: '请输入完整信息',
						iconClass: 'icon icon-error',
						position: 'center',
					});
					return
				}
				if(this.password != this.passwords) {
					Toast({
						message: '两次密码不一致',
						iconClass: 'icon icon-error',
						position: 'center',
					});
					return
				}
				const parem = {
					token: this.user.token,
					userId: this.user.id,
					oldpwd: this.oldpwd,
					password: this.password
				}
				console.log(parem)
				xiugaipasswInfo(parem).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						Toast({
							message: '修改成功',
							iconClass: 'icon icon-error',
							position: 'center',
						});
						let that = this
						setTimeout(function() {
							that.userOut();
							that.$router.push('/my/login');
						}, 3000);

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
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.chpassw {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.chpassw-mian {
			flex: 1;
			h2 {
				margin: 1.54rem 0;
				text-align: center;
				font-size: .56rem;
				color: #868686;
			}
			p {
				height: 1rem;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-bottom: .7rem;
				img {
					height: .56rem;
					width: .68rem;
					margin: 0 .32rem;
				}
				input {
					border: 0;
					background: #F4F4F4;
					width: 70%;
					font-size: .44rem;
					color: #AAAAAA;
					padding-bottom: .2rem;
					text-indent: .2rem;
					border-bottom: .032rem solid #B0B0B6;
				}
			}
			.main-footer {
				border: 0;
				height: 1.2rem;
				justify-content: center;
				display: flex;
				align-items: center;
				button {
					width: 75%;
					height: 1.2rem;
					border: 0;
					font-size: .5rem;
					margin-top: 1rem;
					border-radius: .156rem;
					color: #fff;
					background: #D3D3D3;
					border-radius: .656rem;
				}
				.act {
					background: #4673EC;
				}
			}
		}
		.chpassw-top {
			height: 1.375rem;
			background: #fff;
			line-height: 1.375rem;
			color: #344978;
			font-size: .5rem;
			font-weight: 600;
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
	}
</style>