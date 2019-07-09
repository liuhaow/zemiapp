<template>
	<div class="meagg">
		<div class="kefu" v-show="xians">
			<div class="kefuinfo">
				<p>客服QQ</p>
				<p>13325464645454</p>
				<div class="ke-footer">
					<button @click="quxiao">取消</button>
					<button>去QQ</button>
					
				</div>
			</div>
		</div>
		<div class="meagg-top ">
			消息
		</div>
		<div class="meagg-list" @click="SystemMessage">
			<h2><img src="../../assets/meage/sezhi.png" alt="" />系统消息</h2>
			<i class="iconfont">&#xe624;</i>
		</div>
		<div class="meagg-list" @click="zhaokefu">
			<h2><img src="../../assets/meage/kef.png" alt="" />联系客服</h2>
			<i class="iconfont">&#xe624;</i>
		</div>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default {
		data() {
			return {
				xians:false
			}
		},
		methods: {
			zhaokefu() {
				this.xians =!this.xians
			},
			quxiao(){
				this.xians =!this.xians
				
			},
			SystemMessage(){
				this.$router.replace('/message/messagelist')
			}
		}
	}
</script>

<style lang="stylus">
	.meagg {
		background-color: #f2f4f7;
		width: 100%;
		height: 92%;
		position: fixed;
		overflow: scroll;
		.kefu {
			position: absolute;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, .5);
			z-index: 999;
			display: flex;
			align-items: center;
			justify-content: center;
			.kefuinfo{
				width: 7rem;
				height: 4.6rem;
				background: #fff;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				border-radius: .32rem;
				opacity: 1;
				p{
					font-size: .5rem;
					color:#344978 ;
				}
				p:nth-child(2){
					margin: .4rem 0;
				}
				.ke-footer{
					width: 85%;
					display: flex;
					justify-content: space-between;
					button{
						width: 2.8rem;
						height: 1.25rem;
						border-radius: .45rem;
						border: 0;
						font-size: .5rem;
						color: #818CA7;
						background: #fff;
						border:2px solid rgba(158,166,191,1);
					}
					
				}
			}

		}
		.meagg-top {
			background: #fff;
			font-size: .5rem;
			height: 1.35rem;
			line-height: 1.35rem;
			text-align: center;
			color: #293653;
			margin-bottom: .2rem;
		}
		.meagg-list {
			height: 2.2rem;
			display: flex;
			box-sizing: border-box;
			justify-content: space-between;
			padding: 0 .3rem;
			align-items: center;
			background: #fff;
			margin-bottom: .1rem;
			h2 {
				font-size: .38rem;
				color: #49597C;
				img {
					height: .8rem;
					width: .8rem;
					margin-right: .2rem;
				}
			}
			i {
				width: 1rem;
				height: 2.2rem;
				line-height: 2.2rem;
				font-size: .6rem;
				color: #DDDDDD;
			}
		}
	}
</style>