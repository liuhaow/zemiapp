<template>
	<div class="wraap">
		<div class="wraap-top">
			<i class="iconfont iconfanhui" @click="goback"></i> 意见反馈
		</div>
		<div class="wraap-neir">
			<textarea class="wraap-conted" placeholder="请输入反馈内容，我们会为您更好的服务" v-model="details" maxlength="200" @input="descInput"></textarea>
			<p><span>{{remnant}}/200</span></p>
		</div>
		<div class="feedback">
			<button @click="fankuimess" :class="{'acti':disabled}">提交反馈</button>
		</div>
	</div>
</template>

<script>
	import { FeedbackInfo } from '@/api/mine'
	import { mapGetters } from 'vuex'
	import { Toast } from 'mint-ui';

	export default {
		data() {
			return {
				details: '',
				remnant: '200',
				disabled: false

			}
		},
		computed: {
			...mapGetters({
				user: 'getUserData'
			})
		},
		methods: {
			fankuimess() {

				const parem = {
					token: this.user.token,
					userId: this.user.id,
					content: this.details
				}
				FeedbackInfo(parem).then(res => {
					if(res.data.code == 200) {
						Toast({
							message: '谢谢您的反馈',
							iconClass: 'icon icon-error',
							position: 'center',
						});
						this.details= '',
						this.remnant = 200
					}else{
						Toast({
							message: res.data.msg,
							iconClass: 'icon icon-error',
							position: 'center',
						});
					}
				})
			},
			goback() {
				this.$router.back(-1)
			},
			descInput() {
				let txtVal = this.details.length;
				this.remnant = 200 - txtVal;
			}

		},
		watch: {
			details(curVal, oldVal) {
				if(curVal.length > 0) {
					this.disabled = true
				} else {
					this.disabled = false
				}
				if(curVal.length >= 200) {
					this.remnant = 0
					this.details = curVal.substring(0, 200)

				}

			}

		}
	}
</script>

<style lang="stylus" scoped>
	.wraap {
		background: #F4F4F4;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.feedback {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 1.25rem;
			margin-top: .5rem;
			button {
				border: 0;
				width: 9rem;
				height: 1.25rem;
				line-height: 1.25rem;
				text-align: center;
				background: #ccc;
				color: #fff;
				border-radius: .625rem;
				font-size: .5rem;
			}
			.acti {
				background: #4673EC;
			}
		}
		.uplod {
			width: 3rem;
			height: 3rem;
			background: #fff;
			margin-left: .32rem;
			.avatar-uploader {
				width: 3rem;
				height: 3rem;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		.wraap-top {
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
		.wraap-neir {
			width: 90%;
			margin: 0 auto;
			height: 5.96rem;
			background: #FFF;
			position: relative;
			border-radius: .32rem;
			padding: .32rem 0 0 .32rem;
			margin: .5rem auto;
			.wraap-conted {
				width: 90%;
				height: 90%;
				border: 0;
				font-size: .44rem;
				color: #999;
			}
			p {
				position: absolute;
				right: .8rem;
				z-index: 22;
				bottom: .5rem;
				font-size: .44rem;
				color: #4C4C4C;
			}
		}
	}
</style>