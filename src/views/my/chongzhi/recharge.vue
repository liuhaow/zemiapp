<template>
	<div class="recharge">
		<div class="recharge-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>充值</span>
		</div>
		<div class="recharge-pice">
			<p>选择金额</p>
			<ul>
				<li v-for="(item,index) in  list" @click='choosePice(index,item.mi)' :class='{actpice:actt==index}'>
					<span>{{item.mi}}米</span> / <span>{{item.pice}}</span>
				</li>
			</ul>
		</div>
		<div class="recharge-f-s">

		</div>
		<div class="recharge-btn">
			<button @click="rechargeInfo">充值</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				actt: 0,
				pices: 10,
				list: [{
						mi: '10',
						pice: '10.00'
					},
					{
						mi: '30',
						pice: '30.00'
					},
					{
						mi: '50',
						pice: '50.00'
					},
					{
						mi: '100',
						pice: '100.00'
					},
					{
						mi: '500',
						pice: '500.00'
					},
					{
						mi: '1000',
						pice: '1000.00'
					},
					{
						mi: '1500',
						pice: '1500.00'
					},
					{
						mi: '2000',
						pice: '2000.00'
					},
					{
						mi: '3000',
						pice: '3000.00'
					},
					{
						mi: '5000',
						pice: '5000.00'
					},

				]
			}
		},
		methods: {

			goback() {
				this.$router.back(-1)
			},
			choosePice(inde, pices) {
				this.actt = inde;
				this.pices = pices;
			},
			rechargeInfo() {
				let piceinfo = this.pices
				console.log(piceinfo)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.recharge {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.recharge-f-s {
			height: 1.56rem;
			width: 100%;
			background: #fff;
			margin-top: .2rem;
		}
		.recharge-btn {
			display: flex;
			align-items: center;
			margin-top: 1rem;
			justify-content: center;
			height: 1.41rem;
			button {
				width: 80%;
				height: 1.41rem;
				line-height: 1.41rem;
				text-align: center;
				font-size: 0.56rem;
				background: #4673EC;
				border-radius: 0.64rem;
				border: 0;
				color: #fff;
			}
		}
		.recharge-pice {
			height: 8.96rem;
			background: #fff;
			p {
				font-size: .38rem;
				padding-left: .3rem;
				color: #293653;
				margin: .28rem 0 .3rem;
			}
			ul {
				width: 90%;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				li {
					width: 45%;
					height: 1.25rem;
					margin-bottom: .2rem;
					display: flex;
					align-items: center;
					justify-content: center;
					border: 0.032rem solid rgba(72, 114, 234, 1);
					border-radius: 1.25rem;
					font-size: .44rem;
					color: #4872EA;
					span {
						margin: 0 .1rem;
					}
				}
				.actpice {
					background: rgba(72, 114, 234, 1);
					color: #fff;
				}
			}
		}
		.recharge-top {
			height: 1.375rem!important;
			background: #fff!important;
			line-height: 1.375rem;
			color: #293653!important;
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
				color: #9EA6BF;
				height: 1.375rem;
				top: 0;
				left: 0;
			}
		}
	}
</style>