<template>
	<div class="issus-main">
		<div class="issue-top">
			<i class="iconfont iconfanhui" @click="goback"></i> 商品发布
		</div>
		<h2 class="makesure">所属游戏 <span>王者农药</span></h2>
		<div class="issue-messag-info">
			<p class='issue-messag'>
				<i>*</i>
				<b>商品类型</b>
			</p>
			<ul class="issue-messag-ul">
				<li :class="{actv:xct}">账号</li>
			</ul>
		</div>
		<div class="issue-messag-info">
			<p class='issue-messag'>
				<i>*</i>
				<b>商品类型</b>
			</p>
			<ul class="issue-messag-ul">
				<li :class="{'actv':selectd===index}" v-for="(item, index) in 2" @click="changestyle(index)">{{index==0?'苹果':'安卓'}}</li>

			</ul>
		</div>
		<div class="handqufu" @click="choosequfuInfo()">
			<p>所属区服</p>
			<h2 v-if="!qufu.qu">请选择<i class="iconfont iconxiayiye">&#xe6ab;</i></h2>
			<h2 v-if="qufu.qu"><span>{{qufu.fu}}/</span><span>{{qufu.qu}}</span></h2>
		</div>
		<div class="recharge-btn">
			<button @click="rechargeInfo">下一步</button>
		</div>

	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		data() {
			return {
				phonenum: '',
				xct: true,
				qqmunb: '',
				selectd: 0,
				cities: ["上海", "北京", "广州", "重庆", "西安"],
				arr: [],
				xuanze: true,
				list: [{
						name: '7天'
					},
					{
						name: '12天'
					},
					{
						name: '33天'
					},

				]
			}
		},
		computed: {
			...mapGetters({
				qufu: 'sellfu'
			})
		},
		methods: {
			...mapActions({
				dquInfo: "detaquInfo"
			}),
			rechargeInfo() {
				this.$router.push('/yibi/tianxie')

			},
			choosequfuInfo() {
				this.$router.push('/yibi/handfbarea')
			},
			changestyle(index) {
				this.selectd = index
			},
			goback() {
				this.dquInfo()
				this.$router.back(-1)
			},
			//			checkedBox(i) {
			//				if(this.arr.includes(i)) {
			//					this.arr = this.arr.filter(function(ele) {
			//						return ele != i;
			//					});
			//				} else {
			//					this.arr.push(i);
			//				}
			//			}

		}
	}
</script>

<style lang="stylus" scoped>
	.issus-main {
		background: #F4F4F4;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		.recharge-btn {
			display: flex;
			align-items: center;
			margin-top: 1rem;
			justify-content: center;
			height: 1.2rem;
			button {
				width: 90%;
				height: 1.2rem;
				line-height: 1.2rem;
				text-align: center;
				font-size: 0.56rem;
				background: #4673EC;
				border-radius: 0.64rem;
				border: 0;
				color: #fff;
			}
		}
		.issue-top {
			height: 1.375rem!important;
			background: #fff!important;
			line-height: 1.375rem;
			color: #293653!important;
			font-size: .56rem;
			margin-bottom: .1rem;
			text-align: center;
			.iconfanhui {
				position: absolute;
				width: 1rem;
				height: 1.375rem;
				left: .1rem;
				top: 0
			}
		}
		.handqufu {
			height: 1.56rem;
			background: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			p{
				font-size: .44rem;
				color: #000;
				padding-left: .32rem;
			}
			h2 {
				color: #999999;
				font-size: .44rem;
				height: 100%;
				display: flex;
				align-items: center;
				padding-right: .3rem;
				i {
					font-size: .8rem;
					padding-top: .1rem;
				}
			}
		}
		.makesure {
			height: 1.56rem;
			width: 100%;
			line-height: 1.56rem;
			padding-left: .3rem;
			color: #333333;
			font-size: .4rem;
			font-weight: 600;
			background: #fff;
			span {
				margin-left: 2rem;
			}
		}
		.issue-messag-info {
			margin-bottom: .1rem;
			ul {
				display: flex;
				background: #fff;
				min-height: 1.56rem;
				flex-wrap: wrap;
				align-items: center;
				li {
					height: .94rem;
					width: 2.34rem;
					line-height: .94rem;
					margin: .32rem .35rem;
					text-align: center;
					font-size: .44rem;
					border: .032rem solid #BFBFBF;
					color: #000;
					background: #fff;
					border-radius: .032rem;
				}
				.actv {
					color: #4673EC;
					border: .032rem solid #4673EC;
				}
			}
			.issue-messag {
				padding-left: .3rem;
				display: flex;
				align-items: center;
				margin-top: .1rem;
				margin-bottom: .1rem;
				background: #fff;
				display: flex;
				height: 1.56rem;
				i {
					color: #ff8042;
					display: block;
					font-size: 0.44rem;
					position: relative;
					top: 1px;
					padding-right: .2rem;
				}
				b {
					font-size: 0.44rem;
					font-weight: 600;
					width: 2.5rem;
					color: #333;
				}
			}
		}
	}
</style>