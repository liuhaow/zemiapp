<template>
	<div class="paysucc">
		<div class="paysucc-top">
			<span>支付订单</span>
		</div>
		<p class="caution"><img src="../../assets/about/comt.png" />所有要求您扫码交钱的都是骗子</p>
		<div class="paysucc-info">
			<div class="paysucc-main">
					<img src="http://img3.imgtn.bdimg.com/it/u=2303925173,1898761174&fm=26&gp=0.jpg" alt="" />
					<p>支付成功</p>

					<ul>
						<li @click="backHome()">返回首页</li><span>|</span><li @click="backDing()">查看订单</li>
					</ul>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			backHome(){this.$router.push('/home')},
			backDing(){this.$router.push('/my')}
		}
	}
</script>

<style lang="stylus" scoped>
	.paysucc {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		/**/
		bottom: 0;
		right: 0;
		.paysucc-info {
			width: 100%;
			height: 6.25rem;
			display: flex;
			justify-content: center;
			margin-top: 1rem;
			align-items: center;
			.paysucc-main {
				width: 90%;
				height: 6.25rem;
				background: #fff;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				border-radius: 0.47rem;
				img{
					height: 2.34rem;
					width: 2.34rem;
				}
				p{
					font-size: .44rem;
					color: #4673EC;
					margin: .4rem;
				}
				h2{
					font-size: .38rem;
					color: #999999;
					margin-bottom: .3rem;
				}
				ul{
					display: flex;
					font-size: .44rem;
					color: #333;
					li{
						font-size: .44rem;
						color: #333;
						margin: 0 .3rem;
					}
				}
			}
		}
		.caution {
			height: 1.2rem;
			background: #fff;
			line-height: 1.2rem;
			font-size: .38rem;
			color: #ED8F46;
			img {
				height: .75rem;
				width: .75rem;
				margin: 0 .4rem;
			}
		}
		.paysucc-top {
			height: 1.375rem;
			background: #fff;
			line-height: 1.375rem;
			color: #000;
			font-size: .56rem;
			margin-bottom: .1rem;
			position: relative;
			text-align: center;
		}
	}
</style>