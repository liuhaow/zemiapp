<template>
	<div class="putbuy">
		<div class="putbuy-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>{{name}}</span>
		</div>
		<div class="putbuy-m-s">
			<div class="putbuy-m-s-info">
				<img src="http://img4.imgtn.bdimg.com/it/u=248715713,643095611&fm=26&gp=0.jpg" alt="" />
				<div>
					<p>这里是商品的标题标题标题 标题</p>
					<p>￥500</p>
					<p>QQ（苹果）/手Q3区</p>
				</div>
			</div>
		</div>
		<div class="putbuy-trade">
			<h1 class="commen-sty">交易保险：&yen;12.36</h1>
			<mt-switch class='xiadan-trade-switch' v-model="value"></mt-switch>
		</div>
		<div class="put-rolepelo">
			<h1 class="put-commen-sty"><i>*</i>我的手机号</h1>
			<input type="number" v-model='phonenub' placeholder="请输入手机号" />
		</div>
		<div class="put-rolepelo">
			<h1 class="put-commen-sty"><i>*</i>我的QQ号</h1>
			<input type="number" v-model='QQnub' placeholder="请输入QQ号" />
		</div>
		<div class="putbuy-foot">
			<p><span>价格</span><span>&yen;500</span></p>
			<button @click="putbuyInfo">立即购买</button>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	
	export default {
		data() {
			return {
				name: '下单',
				seach: '',
				lisin: true,
				value: false,
				phonenub:'',
				QQnub:''

			}
		},
		computed: {
			...mapGetters({
				name: 'gamename',
				yibiqufu: 'yibiqufu'
			})
		},
		methods: {

			goback() {
				this.$router.go(-1)
			},
			seachInfo() {},
			putbuyInfo(){
				this.$router.push('/yibi/payinfo')
			}
		}
	}
</script>

<style lang="stylus">
	.putbuy {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		overflow: scroll;
		flex-direction: column;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.put-rolepelo {
				display: flex;
				align-items: center;
				width: 100%;
				background: #fff;
				margin: .1rem 0;
				.put-commen-sty{
					width: 3rem;
					font-size: 0.44rem;
					color: #333;
					padding-left: .32rem;
					font-weight:500;
					display: flex;
					align-items: center;
					i {
						color: #ff8042;
						display: block;
						font-size: 0.44rem;
						position: relative;
						top: 1px;
						padding-right: .1rem;
					}
				}
				input {
					height: 1.88rem;
					line-height: 1.88rem;
					border: 0;
					color: #434343;
					font-size: .44rem;
					margin-left: .2rem;
				}
			}
		.putbuy-trade {
			height: 1.88rem;
			width: 100%;
			background: #fff;
			padding: 0 .3rem;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.commen-sty {
				width: 4rem;
				font-size: 0.44rem;
				color: #333;
				padding-left: .32rem;
				font-weight: 500;
				display: flex;
				align-items: center;
				i {
					color: #ff8042;
					display: block;
					font-size: 0.44rem;
					position: relative;
					top: 1px;
					padding-right: .1rem;
				}
			}
			.xiadan-trade-switch {
				width: 1.41rem;
				height: .6rem;
				margin-right: .3rem;
				border: 0.032rem solid #ccc;
				border-radius: .5rem;
				.mint-switch-core {
					height: 100%;
					border: none;
					width: 100%;
				}
				.mint-switch-core:before {
					height: 100%;
					width: 100%;
				}
				.mint-switch-core:after {
					height: .6rem;
					width: .8rem;
				}
			}
		}
		.putbuy-foot {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			margin-top: .2rem;
			height: 1.56rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: #fff;
			p {
				font-size: .5rem;
				span:nth-child(1) {
					color: #000;
					margin: 0 .3rem;
				}
				span:nth-child(2) {
					color: #EC6941
				}
			}
			button {
				height: 1.56rem;
				width: 3.5rem;
				font-size: .56rem;
				border: 0;
				background: #4673EC;
				color: #fff;
			}
		}
		.putbuy-m-s {
			margin-top: .1rem;
			.putbuy-m-s-info {
				display: flex;
				align-items: center;
				height: 2.2rem;
				background: #fff;
				margin-bottom: .1rem;
				img {
					height: 1.875rem;
					width: 1.875rem;
					margin: 0 .3rem;
				}
				div {
					height: 1.8rem;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					p:nth-child(1) {
						font-size: .44rem;
						color: #333;
					}
					p:nth-child(2) {
						font-size: .44rem;
						color: #EC6941;
					}
					p:nth-child(3) {
						font-size: .38rem;
						color: #999999;
					}
				}
			}
		}
		.putbuy-top {
			height: 1.375rem!important;
			background: #fff!important;
			line-height: 1.375rem;
			color: #293653!important;
			font-size: .56rem;
			position: relative;
			text-align: center;
			span {
				font-weight: 600;
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