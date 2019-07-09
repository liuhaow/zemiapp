<template>
	<div class="payinfo">
		<div class="payinfo-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>充值</span>
		</div>
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">点卡</mt-tab-item>
			<mt-tab-item id="2">Q币</mt-tab-item>
		</mt-navbar>
		<mt-tab-container class='buysucc-container' v-model="selected">
			<mt-tab-container-item id="1" class='dsdsd'>
				<ul class="dsds-ul">
					<li>
						<span>充值游戏</span> <i class="iconfont">&#xe624;</i>
					</li>
					<li>
						<span>充值面额</span> <i class="iconfont">&#xe624;</i>
						
					</li>
					<li>
						<span>充值方式</span> <i class="iconfont">&#xe624;</i>
						
					</li>
					

				</ul>
			</mt-tab-container-item>
			<mt-tab-container-item id="2" class='dsdsd'>
				<ul class="dsds-ul">
					<li>
						<span>QQ号</span> <input type="number" placeholder="请输入您的QQ号 |" />
					</li>
					<li>
						<span>服务类型</span> <i class="iconfont">&#xe624;</i>
						
					</li>
					<li>
						<span>充值面额</span> <i class="iconfont">&#xe624;</i>
						
					</li>
				</ul>
			</mt-tab-container-item>
		</mt-tab-container>
		<p class="chongzx"><i>售价：&yen;</i><span>200</span></p>
		<div class="foot">
			<button>充值</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				selected:'1'
			}
		},
		methods: {

			goback() {
				this.$router.back(-1)
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
		.chongzx{
			text-align: right;
			margin: 1rem 0 1.5rem;
			padding-right: .32rem;
			i{
				font-size: .32rem;
				color: #939EB8;
			}
			span{
				font-size: .44rem;
				color: #4673EC;
			}
		}
		.foot{
			display: flex;
			justify-content: center;
			button{
				font-size: .5rem;
				color: #fff;
				border-radius: .15rem;
				width: 80%;
				height: 1.4rem;
				background: #4673EC;
				border: 0;
				
			}
		}
		.buysucc-container{
			margin-top: .15rem;
			.dsdsd{
				.dsds-ul{
					li{
						height: 1.56rem;
						background: #fff;
						width: 100%;
						box-sizing: border-box;
						padding: 0 .5rem;
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-bottom: .05rem;
						font-size: .32rem;
						span{
							color: #000;
							font-weight: 600;
						}
						i{
							color: #CED5EA;
							font-size: .7rem;
						}
						input{
							text-align: center;
							height: 1.56rem;
							width:3.4rem;
							color: #DEE0E7;
							border: 0;
						}
					}
					
				}
			}
		}
		.payinfo-top {
			height: 1.375rem;
			background: #fff;
			line-height: 1.375rem;
			color: #000;
			font-size: .5rem;
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