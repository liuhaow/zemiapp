<template>
	<div class="issus-main">
		<div class="issue-top">
			<i class="iconfont iconfanhui" @click="goback"></i> 商品发布
		</div>
		<h2 class="makesure">为确保能成功出售，请填写卖家本人的联系方式</h2>
		<p class='issue-messag'>
			<i>*</i>
			<b>手机号</b><input id="pho" type="text" v-model='phone' placeholder="请输入手机号" /></p>
		<p class='issue-messag'>
			<i>*</i>
			<b>QQ号</b><input type="text" id="qqn" v-model="qq" placeholder="请输入QQ号" /></p>
		<div class="issus-foot">
			<h3><span>*</span>发布期限</h3>
			<ul class="issus-list">
				<li class='issueli' v-for='(item,index) in list' @click="changestyle(index)" :class="{'actt':select===index}">{{item.name}}</li>
			</ul>
		</div>
		<div class="issue-next">
			<button class="issue-next-b" @click="nextback">发布</button>
		</div>
		<!--<div class="issue-next">
			<ul class="box">
				<li v-for="c,index in cities" :class="{checked:arr.includes(index)}" @click="checkedBox(index)">{{c}}</li>
			</ul>
		</div>-->
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	import { Toast } from 'mint-ui';
	import { jishouDataInfo } from "@/api/api"

	export default {
		data() {
			return {
				phone: '',
				qq: '',
				select: 0,
				showTime: 1,
				cities: ["上海", "北京", "广州", "重庆", "西安"],
				arr: [],
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
		methods: {
			//			...mapActions({
			//
			//			}),
			changestyle(index) {
				this.select = index,
					this.showTime = index + 1
			},
			nextback() {

				var data = JSON.parse(localStorage.getItem('jishou'));
				var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
				if(!reg.test(this.phone)) {
					Toast({
						message: '请填正确号码',
						iconClass: 'icon icon-error',
						position: 'top',
					});
					return
				}
				var parm = {
					qq: this.qq,
					phone: this.phone,
					showTime: this.showTime
				}
				let parms = Object.assign(data, parm)
				console.log(parms)
				jishouDataInfo(parms).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						localStorage.removeItem('jishou')

						Toast({
							message: '已成功',
							iconClass: 'icon icon-error',
							position: 'center',
						});
						this.$router.push('/yibi/fabulous')

					} else {
						Toast({
							message: res.data.msg,
							iconClass: 'icon icon-error',
							position: 'center',
						});
					}
				})

			},
			goback() {
				this.$router.back(-1)
			},
			checkedBox(i) {
				if(this.arr.includes(i)) {
					this.arr = this.arr.filter(function(ele) {
						return ele != i;
					});
				} else if(this.arr.length >= 3) {
					Toast({
						message: '只能选3个',
						iconClass: 'icon icon-error'
					});
				} else {
					this.arr.push(i);
				}
			}

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
				color: #000;
				width: 1rem;
				height: 1.375rem;
				left: .1rem;
				top: 0
			}
		}
		.makesure {
			height: 1.56rem;
			width: 100%;
			line-height: 1.56rem;
			text-align: center;
			color: #333333;
			font-size: .4rem;
			background: #fff;
		}
		.issue-messag {
			height: 1.56rem;
			padding-left: .3rem;
			display: flex;
			margin-top: .1rem;
			align-items: center;
			background: #fff;
			i {
				color: #ff8042;
				display: block;
				font-size: 0.44rem;
				position: relative;
				top: 1px;
				padding-right: 10px;
			}
			b {
				font-size: 0.44rem;
				font-weight: 600;
				width: 1.56rem;
				color: #333;
			}
			input {
				border: none;
				height: 100%;
				width: 70%;
				padding-left: .2rem;
				color: #999999;
				font-size: .375rem;
			}
		}
		.issus-foot {
			height: 3rem;
			background: #fff;
			margin-top: 5px;
			h3 {
				height: 1.44rem;
				line-height: 1.44rem;
				font-size: .44rem;
				color: #333;
				font-weight: 600;
				padding-left: .3rem;
				span {
					color: #ff8042;
					font-size: 14px;
					position: relative;
					top: 1px;
					padding-right: 5px;
				}
			}
			.issus-list {
				display: flex;
				width: 90%;
				margin: 0 auto;
				justify-content: space-around;
				height: 1rem;
				li {
					width: 2.5rem;
					height: .9rem;
					line-height: .9rem;
					font-size: 14px;
					text-align: center;
					color: #333;
					border: .03rem solid rgba(191, 191, 191, 1);
					border-radius: 2px;
				}
				.actt {
					background: rgba(70, 115, 236, 0.2);
					color: rgba(70, 115, 236, 1)!important;
				}
			}
		}
		.issue-next {
			width: 100%;
			height: 1.375rem;
			margin-top: 1rem;
			display: flex;
			justify-content: center;
			ul {
				li {
					width: 50px;
					height: 30px;
					display: inline-block;
					text-align: center;
					line-height: 30px;
					cursor: pointer;
					color: #000;
					margin-left: 5px;
				}
				li:before {
					display: inline-block;
					width: 10px;
					height: 10px;
					line-height: 10px;
					content: "";
					border: 1px #000 solid;
					margin-right: 2px;
					transition: all 0.3s linear;
				}
				li.checked:before {
					background-color: #0CF;
					border: 1px #fff solid;
				}
				li.checked {
					color: #0CF;
				}
			}
			.issue-next-b {
				width: 9rem;
				height: 1.375rem;
				text-align: center;
				line-height: 1.375rem;
				color: #fff;
				border: 0;
				font-size: .5rem;
				background: rgba(70, 115, 236, 1);
				border-radius: .6rem;
			}
		}
	}
</style>