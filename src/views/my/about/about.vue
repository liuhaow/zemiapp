<template>
	<div class="about">
		<div class="about-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>关于我们</span>
		</div>
		<div class="about-nav">
			<img class="zimilogo" src="../../../assets/about/60pt@3x.png" alt="" />
			<b>版本号2.0.1</b>
			<h2 class="zimijie">泽米app多方位服务，提供多种游戏币交易，方式多样，寄存、寄售、以及游戏币匹配，买、卖同时具备，
在泽米游戏交易平台中入驻无门槛，并且发布低限制，交易低风险
泽米app陪玩交友互动不停，攻略，聊天，吐槽样样都有，让你讯速找到志同道合的朋友！
更新，更热，更辣的玩家实时分享，一起游戏，一起high！</h2>
			<p class="about-update">
				<span>检查更新</span>
				<i class="iconfont">&#xe6ab;</i>
			</p>
			<h1 class="about-foot">
				<span>软件服务许可协议</span>
				<span >
					Copyright@ 2018－2022.zemi.com
				</span>
			</h1>
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
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.about {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.about-foot{
			height: 1.375rem;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			span:nth-child(1){
				font-size: .44rem;
				color: #4673EC;
			}
			span:nth-child(2){
				font-size: .38rem;
				color: #666;
			}
		}
		.about-nav {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			.zimilogo {
				height: 2.8rem;
				width: 2.8rem;
				margin: 1rem 0 .2rem;
			}
			.zimijie{
				width: 90%;
				font-size: .38rem;
				color: #9EA6BF;
				line-height: .5rem;
				margin: 1rem 0 .3rem;
			}
			.about-update{
				width: 100%;
				height: 1.56rem;
				display: flex;
				align-items: center;
				justify-content: space-between;
				background: #fff;
				margin-bottom: 2rem;
				span{
					font-size: .44rem;
					color: #000;
					margin-left: .3rem;
					font-weight: 400;
				}
				i{
					font-size: 1rem;
					color: #939EB8;
					margin-right: .3rem;
				}
			}
		}
		.about-top {
			height: 1.375rem!important;
			background: #fff!important;
			line-height: 1.375rem;
			color: #000!important;
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
		}
	}
</style>