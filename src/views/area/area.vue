<template>
	<div class="area">
		<div class="area-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>王者荣耀</span>
		</div>
		<div class="area-seach">
			<p>
				<i class="iconfont">&#xe615;</i>
				<input placeholder="搜索服务器" type="text" v-model="seach" />
				<i class="iconfont">&#xe61b;</i>

			</p>
			<button @click="seachInfo">搜索</button>
		</div>
		<div class="area-qufu">
			<ul class="area-qufu-info">
				<li @click="choosrquInfo">选择区</li>
				<li @click="choosrfuInfo">选择服</li>
			</ul>
			<div class="qufulist">
				<ul class="qufulist-qu" v-show="!fu">
					<li @click="chooseInfo">QQ</li>
					<li @click="chooseInfo">weixin</li>
					

				</ul>
				<ul class="qufulist-fu" v-show="fu">
					<li @click="tiaozhuanInfo">全服</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				seach: '',
				fu: false,
				beijin:false
				
			}
		},
		methods: {

			goback() {
				this.$router.back(-1)
			},
			seachInfo() {

			},
			choosrquInfo(){
				this.fu = false				
			},
			choosrfuInfo(){
				this.fu = true
				
			},
			chooseInfo(){
				this.beijin = !this.beijin
			},
			tiaozhuanInfo(){
				this.$router.push('/yibi/detailist')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.area {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.area-qufu {
			flex: 1;
			background: #fff;
			display: flex;
			box-sizing: border-box;
			padding-top: .2rem;
			.area-qufu-info {
				width: 40%;
				height: 100%;
				li {
					line-height: 1.56rem;
					text-align: center;
					height: 1.56rem;
					font-size: .44rem;
					border-bottom: .032rem solid #EEEEEE;
					color: #999;
				}
			}
			.qufulist {
				width: 60%;
				height: 100%;
				overflow: scroll;
				background: #F8F8F8;
				ul {
					height: 100%;
					width: 100%;
					overflow: scroll;
					li {
						height: 1.56rem;
						line-height: 1.56rem;
						padding-left: .94rem;
						font-size: .44rem;
						border-bottom: .032rem solid #EEEEEE;
						color: #3B3B3B;
						font-weight: 400;
					}
				}
			}
		}
		.area-seach {
			height: 1.375rem;
			display: flex;
			align-items: center;
			justify-content: space-around;
			box-sizing: border-box;
			padding: 0 .3rem;
			p {
				height: .875rem;
				width: 85%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				background: #fff;
				input {
					width: 60%;
					height: .85rem;
					border: 0;
					font-size: .5rem;
					color: #ABABAB;
				}
			}
			button {
				border: 0;
				height: .87rem;
				width: 1.2rem;
				line-height: .87rem;
				text-align: center;
				font-size: .5rem;
				color: #999;
				background: #F4F4F4;
			}
		}
		.area-top {
			height: 1.375rem!important;
			background: #fff!important;
			line-height: 1.375rem;
			color: #293653!important;
			font-size: .56rem;
			margin-bottom: .1rem;
			position: relative;
			text-align: center;
			span {
				font-weight: 300;
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