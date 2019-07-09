<template>
	<div class="wrapper">
		<div class="waaper-mian">
			<div class="tab-t">
				<i class="iconfont iconfanhui" @click="goback"></i>

				<div class="tab-main">
					<span class="handgame" :class="{ active : isActive}" @click="handgame">手游</span>
					<span class="netgame" :class="{ active : !isActive}" @click="hanetgame">端游</span>
				</div>

			</div>
			<div class="yi-list">
				<ul class="yigame yigamemai" v-show="isActive">
					<li class="" v-for='item in 30'>
						<img src="../../assets/yibi/yx@3x.png" alt="" />
						<p>地下城与勇士</p>
					</li>

				</ul>
				<ul class="yigame yigamem" v-show="!isActive">
					<li v-for='item in 30'>
						<img src="http://img1.imgtn.bdimg.com/it/u=3497910612,3162172613&fm=26&gp=0.jpg" alt="" />
						<p>地下城与勇士</p>
					</li>
				</ul>
			</div>
			<zimu></zimu>
		</div>
	</div>

	</div>
</template>

<script>
	import zimu from '@/views/yibi/zimu'
	export default {
		data() {
			return {
				isActive: true
			}
		},
		components: {

			zimu
		},
		methods: {
			goback(){
				this.$router.back(-1)				
			},
			handgame() {
				this.isActive = true
			},
			hanetgame() {
				this.isActive = false
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.wrapper {
		position: fixed;
		height: 100%;
		width: 100%;
		background: #F4F4F4;
		overflow: scroll;
		.waaper-mian {
			display: flex;
			background: #F4F4F4;
			height: 100%;
			flex-direction: column;

			.yi-list {
				width: 100%;
				flex: 1;
				overflow: auto;
				background: #fff;
				.yigame {
					width: 95%;
					height: 100%;
					overflow: scroll;
					li {
						height: 2.5rem;
						float: left;
						width: 24%;
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						align-items: center;
						margin: .3rem 0 0;
						img {
							height: 1.56rem;
							width: 1.56rem;
							border-radius: 0.156rem;
						}
						p {
							font-size: .38rem;
							width: 98%;
							text-align: center;
							color: #333;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
				}
			}
			.tab-t {
				height: 1.375rem;
				line-height: 1.375rem;
				background: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
				margin-bottom: .1rem;
				.iconfanhui {
					position: absolute;
					width: 1rem;
					height: 1.375rem;
					top: 0;
					left: 0.32rem;
				}
				.backe {
					font-size: .5rem;
					color: #999999;
					width: 2rem;
					position: absolute;
					top: 0rem;
					left: .32rem;
				}
				.tab-main {
					width: 3.125rem;
					height: 0.8rem;
					margin: 0 auto;
					background: #F4F4F4;
					display: flex;
					align-items: center;
					border-radius: 0.47rem;
					border: 0.032rem solid #66B0FF;
					.handgame {
						width: 50%;
						display: block;
						height: .8rem;
						line-height: .8rem;
						text-align: center;
						font-size: 0.44rem;
						color: #66B0FF;
					}
					.netgame {
						width: 50%;
						display: block;
						text-align: center;
						height: .8rem;
						line-height: .8rem;
						font-size: 0.44rem;
						color: #66B0FF;
					}
					.active {
						color: #fff!important;
						background: #66B0FF;
						border-radius: 0.47rem;
					}
				}
			}
		}
	}
</style>