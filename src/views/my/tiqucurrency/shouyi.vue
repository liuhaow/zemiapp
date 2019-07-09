<template>
	<div class="payinfo">
		<div class="shouyi-z-z" v-show="show">
			<div class="shouyi-z-s-he" v-show="makesure">
				<h2>审核中</h2>
				<p>您的的提现申请提交成功请等待审核</p>
				<div class="shouyi-z-s-he-ft" @click="makeSureInfo()">
					知道了
				</div>
			</div>
			<div class="shouyi-z-t-q" v-show="showifo">
				<h2>请填写提现信息</h2>
				<ul>

					<li class="">
						<p>支付宝账号</p>
						<h1><input type="text" v-model="alipaybankid" placeholder="输入账号" /></h1>
					</li>
					<li class="">
						<p>收款人</p>
						<h1><input type="text" v-model="name" placeholder="输入收款人姓名" /></h1>
					</li>
					<li class="">
						<p>提现金额(元)</p>
						<h1><input type="text" v-model="mony" placeholder="输入金额" /></h1>
					</li>
				</ul>
				<div class="shouyi-z-t-q-f">
					<button @click="tixianinfo">取消</button>
					<button @click="makeSure">确定</button>

				</div>
			</div>
		</div>
		<div class="payinfo-tt">
			<div class="payinfo-top">
				<i class="iconfont iconfanhui" @click="goback"></i>
				<span>收益</span>
			</div>
			<div class="payinfo-tt-in">
				<div class="payinfo-tt-in-r">
					<p>1500.00</p>
					<h2>总收益 (元)</h2>
				</div>
				<div class="payinfo-tt-in-l">
					<p>1500.00</p>
					<h2>可提现金额 (元)</h2>
				</div>

			</div>
		</div>
		<h2 class="t-x-jilu">提现记录</h2>
		<div class="shouyi-list">
			<!--<ul>
				<li v-for='item in 5'>
					<p>提现金额：<span>120</span></p>
					<h1 class="zhong">审核中</h1>
					<span class="timer">2018年12月20日</span>
				</li>
				<li v-for='item in 5'>
					<p>提现金额：<span>120</span></p>
					<h1 class="zhsucc">提现成功</h1>
					<span class="timer">2018年12月20日</span>
				</li>
				<li v-for='item in 5'>
					<p>提现金额：<span>120</span></p>
					<h1 class="zhfail">提现失败</h1>
					<span class="timer">2018年12月20日</span>
				</li>
			</ul>-->
		</div>
		<div class="shouyi-f" @click="tixianinfo">
			提现
		</div>
	</div>
</template>

<script>
	import { tixianCash } from '@/api/mine'
	import { mapGetters, mapActions } from 'vuex'
	import { Toast } from 'mint-ui';

	export default {
		data() {
			return {
				show: false,
				makesure: false,
				alipaybankid: '',
				showifo: true,
				name: '',
				mony: ''
			}
		},
		computed: {
			...mapGetters({
				user: 'getUserData'
			})
		},
		mounted() {

		},
		methods: {
			makeSure() {
				if(!this.mony||!this.name||!this.alipaybankid){
					Toast({
							message: '信息要完整',
							iconClass: 'icon icon-error',
							position: 'center',
						});
						return
				}
				const parem = {
					token: this.user.token,
					userId: this.user.id,
					number: this.mony,
					name: this.name,
					alipaybankid: this.alipaybankid
				}
				console.log(parem)
//				tixianCash(parem).then(res => {
//					if(res.data.code == 200) {
//
//						console.log(res)
//					}
//
//				})
			},
			makeSureInfo() {
				this.makesure = false;
				this.showifo = true;
				this.show = false;
			},
			goback() {
				this.$router.go(-1)
			},
			tixianinfo() {
				this.show = !this.show
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.payinfo {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.shouyi-z-z {
			position: absolute;
			z-index: 99;
			left: 0;
			top: 0;
			bottom: 0;
			right: 0;
			background: rgba(0, 0, 0, .5);
			.shouyi-z-s-he {
				width: 8rem;
				height: 4.6rem;
				background: #FFF;
				position: absolute;
				display: flex;
				flex-direction: column;
				align-items: center;
				left: 50%;
				top: 50%;
				margin-left: -4rem;
				margin-top: -2.6rem;
				border-radius: .32rem;
				h2 {
					font-size: .44rem;
					color: #000;
					margin: .7rem 0;
				}
				p {
					font-size: .32rem;
					color: #9EA6BF;
					text-align: center;
					line-height: .5rem;
					width: 50%;
					margin-bottom: .5rem;
				}
				div {
					border-top: .032rem solid #EEEFF0;
					font-size: 0.56rem;
					height: 1rem;
					color: #000;
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100%;
				}
			}
			.shouyi-z-t-q {
				position: fixed;
				display: flex;
				flex-direction: column;
				align-items: center;
				left: 50%;
				top: 50%;
				margin-left: -3.5rem;
				margin-top: -4rem;
				height: 8rem;
				width: 7rem;
				background: #fff;
				border-radius: .32rem;
				h2 {
					font-size: .5rem;
					color: #000;
					margin: .5rem 0 .3rem;
				}
				ul {
					width: 90%;
					li {
						border-bottom: 0.032rem solid #DDDDDD;
						margin-bottom: .32rem;
						height: 1.3rem;
						p {
							font-size: .44rem;
							color: #000;
							font-weight: 500;
						}
						input {
							border: 0;
							height: .8rem;
							line-height: .8rem;
						}
					}
				}
				.shouyi-z-t-q-f {
					width: 95%;
					display: flex;
					justify-content: space-around;
					button {
						width: 3rem;
						height: 1.25rem;
						line-height: 1.25rem;
						font-size: .44rem;
						color: #333;
						text-align: center;
						border-radius: .6rem;
						border: 0.032rem solid #D3D3D3;
						background: #fff;
					}
				}
			}
		}
		.shouyi-list {
			flex: 1;
			overflow: scroll;
			ul {
				height: 100%;
				overflow: scroll;
				li {
					height: 1.56rem;
					padding: 0 .32rem;
					box-sizing: border-box;
					margin-bottom: .032rem;
					justify-content: space-between;
					background: #fff;
					width: 100%;
					display: flex;
					align-items: center;
					p {
						font-size: .38rem;
						color: #333;
						span {
							margin-left: .1rem;
						}
					}
					.zhong {
						color: #FF0000;
					}
					.zhsucc {
						color: #5B9BDC;
					}
					.zhfail {
						color: #939EB8;
					}
					.timer {
						color: #9EA6BF;
					}
				}
			}
		}
		.shouyi-f {
			height: 1.56rem;
			line-height: 1.56rem;
			text-align: center;
			background: #4673EC;
			color: #FFFFFF;
			font-size: .56rem;
		}
		.t-x-jilu {
			height: 1.25rem;
			line-height: 1.25rem;
			font-size: .38rem;
			padding-left: .32rem;
			color: #344978;
			background: #fff;
			margin-bottom: .032rem;
		}
		.payinfo-tt {
			height: 5.3rem;
			width: 100%;
			background: url(../../../assets/my/bj.png) no-repeat center top;
			background-size: 100% 100%;
			.payinfo-tt-in {
				height: 80%;
				display: flex;
				align-items: center;
				div {
					width: 50%;
					display: flex;
					flex-direction: column;
					color: #fff;
					align-items: center;
					p {
						font-size: .75rem;
						color: #fff;
						margin-bottom: .4rem;
					}
					h2 {
						font-size: .38rem;
					}
				}
			}
			.payinfo-top {
				height: 1.375rem;
				line-height: 1.375rem;
				color: #fff;
				font-size: .56rem;
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
	}
</style>