<template>
	<div class="revise">
		<div class="revise-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>更换手机号</span>
		</div>
		<div class="revise-main" v-show="nest">
			<div>
				<p class="main-top">
					<img src="../../../assets/login/rpho.png" /><span>+86 <img src="../../../assets/login/PLAY.png" alt="" /></span>
				</p>
				<input type="number" v-model="oldMobile" placeholder="请输入原手机号" name="" id="" value="" />
			</div>
			<div class="checkbt">
				<p>
					<img src="../../../assets/login/ydul.png" alt="" />
					<input type="number" v-model="oldCode" placeholder="请输入短信验证码" />
				</p>
				<button :disabled="disabled" @click="checkout">{{btnxt}}</button>
			</div>

			<div class="main-footer">
				<button @click="btnMakeNext">下一步</button>
			</div>
		</div>
		<div class="revise-main" v-show="!nest">
			<div>
				<p class="main-top">
					<img src="../../../assets/login/rpho.png" /><span>+86 <img src="../../../assets/login/PLAY.png" alt="" /></span>
				</p>
				<input type="number" v-model="newMobile" placeholder="请输入新手机号" name="" id="" value="" />
			</div>
			<div class="checkbt">
				<p>
					<img src="../../../assets/login/ydul.png" alt="" />
					<input type="number" v-model="newCode" placeholder="请输入短信验证码" />
				</p>
				<button :disabled="disabled" @click="checkoutto">{{btnxtt}}</button>
			</div>

			<div class="main-footer">
				<button @click="btnMake">确定</button>
			</div>
		</div>

	</div>
</template>

<script>
	import { getSmsCode } from '@/api/api'
	import { xiugaiphoneInfo } from '@/api/mine'
	
	import { Toast } from 'mint-ui';

	export default {
		data() {
			return {
				btnxt: '获取验证码',
				btnxtt:'获取验证码',
				disabled: false,
				oldMobile: '',
				newMobile: '',
				oldCode: '',
				newCode: '',
				nest: true,
				time: 0,
				time1:0,
				code: '',
				invite_code: 0,
				password: ''
			}
		},
		methods: {
			btnMakeNext() {
				if(!this.oldMobile || !this.oldCode) {
					Toast({
						message: '信息不完善',
						iconClass: 'icon icon-error',
						position: 'center',
					});
					return
				}else{
					this.nest = !this.nest
				}
				
			},
			btnMake() {
				let data = {
					oldMobile: this.oldMobile,
					newMobile: this.newMobile,
					oldCode: this.oldCode,
					newCode: this.newCode
				}
				if(!this.oldMobile || !this.newMobile || !this.oldCode || !this.newCode) {
					Toast({
						message: '信息不完善',
						iconClass: 'icon icon-error',
						position: 'center',
					});
					return
				}
				xiugaiphoneInfo(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						Toast({
							message: '更换成功',
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
			timers() {
				if(this.time1 > 0) {
					this.time1--;
					this.btnxtt = this.time1 + "s";
					setTimeout(this.timers, 1000);
				} else {
					this.time1 = 0;
					this.btnxtt = "获取验证码";
					this.disabled = false;
				}
			},
			checkout() {
				var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
				if(!reg.test(this.oldMobile)) {
					Toast({
						message: '请填正确号码',
						iconClass: 'icon icon-error',
						position: 'center',
					});
				} else {
					this.time = 60;
					this.disabled = true;
					this.timer();
					getSmsCode(this.oldMobile).then(res => {
						console.log(res)
					})
				}

			},
			checkoutto() {
				var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
				if(!reg.test(this.newMobile)) {
					Toast({
						message: '请填正确号码',
						iconClass: 'icon icon-error',
						position: 'center',
					});
				} else {
					this.time1 = 60;
					this.disabled = true;
					this.timers();
					getSmsCode(this.newMobile).then(res => {
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