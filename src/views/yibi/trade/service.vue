<template>
	<div class="hand-buy">
		<div class="hand-t">
			<div class="hand-b" @click="back">
				<img class="hand-back" src="../../assets/yibi/ARROWLEFT@3x.png" />
			</div>
			{{gamename}}
		</div>
		<h2 class="selltype">请选择商品类型</h2>
		<ul class="selllist">
			<li>
				<div class="">
					<img src="../../assets/yibi/2@3x.png"/>
				</div>
				<p>游戏币</p>
			</li>
			<li>
				<div class="">
					<img src="../../assets/yibi/2@3x.png"/>
				</div>
				<p>游戏币</p>
			</li>
			<li>
				<div class="">
					<img src="../../assets/yibi/2@3x.png"/>
				</div>
				<p>游戏币</p>
			</li>
			
			<li>
				<div class="">
					<img src="../../assets/yibi/2@3x.png"/>
				</div>
				<p>游戏币</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				gamename: '王者用药'
			}
		},
		methods: {
			back() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="stylus">
	.hand-buy {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background: #F4F4F4;
		.hand-t {
			height: 1.375rem;
			background: #fff;
			position: relative;
			font-size: .56rem;
			color: #293653;
			text-align: center;
			line-height: 1.375rem;
			.hand-b {
				width: 1.375rem;
				position: absolute;
				left: 0;
				top: 0;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				.hand-back {
					widows: .25rem;
					height: 0.44rem;
				}
			}
		}
		.selltype {
			height: 1.56rem;
			width: 100%;
			padding-left: .25rem;
			line-height: 1.56rem;
			font-size: 0.44rem;
			color: #333;
			margin: 0.09rem 0 .1rem;
			background: #fff;
		}
		.selllist {
			display: flex;
			flex-wrap: wrap;
			li:nth-of-type(odd)::after{ 
				content: '';
				position: absolute;
				right: 0;
				width: .032rem;
				height: 0.78rem;
				background: #9CA2BF;
				display: block;
			}
			li {
				width: 50%;
				position: relative;
				height: 1.56rem;
				margin-bottom: 0.09rem;
				display: flex;
				align-items: center;
				background: #fff;
				div{
					margin: 0 .33rem 0 .5rem;
					img{
						width: .28rem;
						height: .32rem;
					}
				}
				p {
					font-size: 0.44rem;
					color: #333;
				}
			}
		}
	}
</style>