<template>
	<div class="Oderinfo">
		<div class="Oderinfo-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>订单详情</span>
		</div>
		<div class="Oderinfo-tt">
			<img src="http://img2.imgtn.bdimg.com/it/u=841679185,1871860105&fm=26&gp=0.jpg" alt="" />
			<p>交易取消</p> <span>订单已取消</span>
		</div>
		<div class="oder-i-t">
			<img src="http://img1.imgtn.bdimg.com/it/u=294891024,3760856881&fm=26&gp=0.jpg" />
			<div class="">
				<dl>
					<dt>标题标题标题标题标题标题标题标题标题标题
标题标题</dt>
					<dd>&yen;88.00</dd>
				</dl>
			</div>
		</div>

		<div class="oder-i-m">
			<p>
				<span>游戏区服</span>
				<span>王者荣耀／安卓／QQ（安卓）／手Q264区</span>
			</p>
			<p><span>商品类型</span><span>账号</span></p>
		</div>
		<div class="oder-i-m">
			<p>
				<span>订单编号</span>
				<span>SYZM20190505-1222222</span>
			</p>
			<p><span>下单时间</span><span>账号</span></p>
		</div>
		<div class="oder-i-mt">
			<p>
				<span>
				商品价格
			</span>
				<span>&yen;88.00</span>
			</p>
			<p><span>商品件数</span><span>X2</span></p>
		</div>
		<div class="oder-i-mf">
			<span>合计金额：</span><span>&yen;88.00</span>
		</div>
		<div class="Oderinfo-ft">
			<button class="kefuf">联系客服</button>
			<button class="makfuf">确定收货</button>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show:false
			}
		},
		methods: {

			goback() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.Oderinfo {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		/**/
		bottom: 0;
		right: 0;
		.Oderinfo-tt {
			height: 1.41rem;
			width: 100%;
			display: flex;
			align-items: center;
			background: #D6E1FD;
			img {
				height: 0.8rem;
				width: .8rem;
				margin: 0 .32rem;
			}
			p {
				font-size: .44rem;
				color: #49597C;
				margin-right: .1rem;
			}
			span {
				font-size: .38rem;
				color: #49597C;
			}
		}
		.Oderinfo-ft {
			position: absolute;
			width: 100%;
			bottom: 0;
			left: 0;
			height: 1.875rem;
			line-height: 1.875rem;
			text-align: right;
			background: #fff;
			button {
				width: 3.75rem;
				height: 1.25rem;
				line-height: 1.25rem;
				background: #fff;
				text-align: center;
				font-size: .38rem;
				margin-right: .32rem;
				color: #939EB8;
				border: 0.032rem solid rgba(147, 158, 184, 1);
				border-radius: .32rem;
			}
			.makfuf {
				background: #4673EC;
				color: #fff;
			}
		}
		.oder-i-mf {
			height: 1.56rem;
			background: #fff;
			line-height: 1.56rem;
			text-align: right;
			span {
				margin-right: .32rem;
				font-size: .38rem;
				color: #293653;
			}
			span:nth-child(2) {
				color: #4673EC;
			}
		}
		.oder-i-mt {
			height: 1.875rem;
			background: #FFF;
			margin: 0 0 .1rem;
			p {
				height: 50%;
				display: flex;
				align-items: center;
				font-size: .38rem;
				color: #293653;
				justify-content: space-between;
				span {
					margin: 0 0.32rem;
				}
			}
		}
		.oder-i-m {
			height: 1.875rem;
			background: #FFF;
			margin: 0 0 .1rem;
			p {
				height: 50%;
				display: flex;
				align-items: center;
				font-size: .38rem;
				color: #293653;
				span:nth-child(1) {
					margin: 0 0.32rem;
				}
			}
		}
		.oder-i-t {
			height: 2.5rem;
			display: flex;
			margin-bottom: .1rem;
			align-items: center;
			background: #FFF;
			img {
				height: 1.8rem;
				width: 1.8rem;
				margin: 0 .32rem;
			}
			div {
				height: 1.75rem;
				dl {
					dt {
						font-size: .38rem;
						color: #000;
						line-height: .5rem;
						margin-bottom: .3rem;
					}
					dd {
						font-size: .032rem;
						color: #4673EC;
					}
				}
			}
		}
		.Oderinfo-top {
			height: 1.375rem;
			background: #fff;
			line-height: 1.375rem;
			color: #000;
			font-size: .44rem;
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