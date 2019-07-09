<template>
	<div class="payinfo">
		<div class="payinfo-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>支付订单</span>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {

			goback() {
				this.$router.replace('/my')
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
		top: 0;/**/
		bottom: 0;
		right: 0;
		.payinfo-top {
			height: 1.375rem;
			background: #fff;
			line-height: 1.375rem;
			color: #000;
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
</style>