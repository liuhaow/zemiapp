<template>
	<div class="publish">
		<div class="publish-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>发布管理</span>
		</div>
		<div class="shouyoufabu">
			<mt-navbar v-model="selected">
				<mt-tab-item id="1">审核中</mt-tab-item>
				<mt-tab-item id="2">正出售</mt-tab-item>
				<mt-tab-item id="3">已出售 </mt-tab-item>
				<mt-tab-item id="4">已下架</mt-tab-item>

			</mt-navbar>
			<mt-tab-container class='publish-container' v-model="selected">
				<mt-tab-container-item id="1" class='dsdsd'>
					<ul class="dsds-ul">
						<li v-for='item in allList'>
							<p class="condition">易币{{item.typeText}}</p>
							<div class="jiaoyim">
								<div class="jiaoyim-r">
									<p class="jiaoyim-r-title">{{item.title}}</p>
									<p>订单号： {{item.order_no}}</p>
									<p>价格：&yen;{{item.gold_price}}</p>
								</div>
							</div>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="2" class='dsdsd'>
					<ul class="dsds-ul">
						<li v-for='item in allList' @click="zaishouData(item.id)">
							<p class="condition">易币{{item.typeText}}</p>
							<div class="jiaoyim">
								<div class="jiaoyim-r">
									<p class="jiaoyim-r-title">{{item.title}}</p>
									<p>订单号： {{item.order_no}}</p>
									<p>价格：&yen;{{item.gold_price}}</p>
								</div>
							</div>
						</li>
					</ul>

				</mt-tab-container-item>
				<mt-tab-container-item id="3" class='dsdsd'>
					<ul class="dsds-ul">
						<li v-for='item in allList' @click="yishouData(item.id)">
							<div v-if="item.typeText == '担保'">
								<p class="condition">担保</p>
								<div class="jiaoyim">
									<div class="jiaoyim-r">
										<p class="jiaoyim-r-title">{{item.title}}</p>
										<p>订单号： {{item.order_no}}</p>
										<p>价格：&yen;{{item.gold_price}}</p>
									</div>
								</div>
							</div>
							<div v-else-if="item.typeText == '寄售'">
								<p class="condition">寄售</p>
								<div class="jiaoyim">
									<div class="jiaoyim-r">
										<p class="jiaoyim-r-title">{{item.title}}</p>
										<p>订单号： {{item.order_no}}</p>
										<p>价格：&yen;{{item.gold_price}}</p>
									</div>
								</div>
							</div>

						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="4" class='dsdsd'>
					<ul class="dsds-ul">
						<li v-for='item in allList' @click="xiajiaData(item.id)">
							<div v-if="item.typeText == '担保'">
								<p class="condition">担保</p>
								<div class="jiaoyim">
									<div class="jiaoyim-r">
										<p class="jiaoyim-r-title">{{item.title}}</p>
										<p>订单号： {{item.order_no}}</p>
										<p>价格：&yen;{{item.gold_price}}</p>
									</div>
								</div>
							</div>
							<div v-else-if="item.typeText == '寄售'">
								<p class="condition">寄售</p>
								<div class="jiaoyim">
									<div class="jiaoyim-r">
										<p class="jiaoyim-r-title">{{item.title}}</p>
										<p>订单号： {{item.order_no}}</p>
										<p>价格：&yen;{{item.gold_price}}</p>
									</div>
								</div>
							</div>
						</li>
					</ul>

				</mt-tab-container-item>

			</mt-tab-container>
		</div>

	</div>
</template>

<script>
	import { FAbuListData, AFbulistDetail } from '@/api/mine'
	import { mapGetters, mapActions } from 'vuex'

	export default {
		data() {
			return {
				selected: '',
				allList: ''
			}
		},
		computed: {
			...mapGetters({
				user: 'getUserData',
				tiaozou:'tiaozou'
				
			})
		},
		created(){
			this.selected = this.tiaozou
		},
		mounted() {
			const parem = {
				token: this.user.token,
				userId: this.user.id,
				getStatus: this.selected

			}
			FAbuListData(parem).then(res => {
				if(res.data.code == 200) {
					this.allList = res.data.return_data
				}
			})

		},
		watch: {
			selected: function(val, oldVal) {
				this.TiaoId(val)
				if(val == 1) {
					this.allList = ''
					return
				}
				const parem = {
					token: this.user.token,
					userId: this.user.id,
					getStatus: val
				}
				FAbuListData(parem).then(res => {
					if(res.data.code == 200) {
						this.allList = res.data.return_data
					}

				})
			}
		},
		methods: {
			...mapActions(
				[
					'baocunIdMM','TiaoId'
				]
			),
			zaishouData(idx) {
				let data = {
					id: idx,
					ind: 2,

				}
				this.baocunIdMM(data)
				this.$router.push('/my/pubdetail')
			},
			yishouData(idx) {
				let data = {
					id: idx,
					ind: 3

				}
				this.baocunIdMM(data)
				this.$router.push('/my/pubdetail')
			},
			xiajiaData(idx) {
				let data = {
					id: idx,
					ind: 4
				}
				this.baocunIdMM(data)
				this.$router.push('/my/pubdetail')
			},
			goback() {
				this.$router.back(-1)
			},
			shounetInfo() {
				this.handnet = true
			},
			duannetInfo() {
				this.handnet = false

			}

		}
	}
</script>

<style lang="stylus" scoped>
	.publish {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.shouyoufabu {
			flex: 1;
			display: flex;
			flex-direction: column;
			margin-top: .3rem;
			.publish-container {
				flex: 1;
				margin-top: .1rem;
				.mint-tab-container-wrap {
					overflow: scroll;
					.dsdsd {
						position: absolute;
						left: 0;
						top: 0;
						right: 0;
						bottom: 0;
						overflow: scroll;
						.dsds-ul {
							height: 100%;
							width: 100%;
							overflow: scroll;
							li {
								background: #fff;
								margin-bottom: .1rem;
								.condition {
									font-size: .44rem;
									color: #293653;
									border-bottom: .032rem solid #ccc;
									margin: 0rem 0.3rem 0.3rem .3rem;
									padding: .3rem 0;
								}
								.jiaoyim-footer {
									text-align: right;
									padding-top: .1rem;
									padding-bottom: .3rem;
									button {
										height: .94rem;
										line-height: .94rem;
										font-size: .44rem;
										width: 2.5rem;
										border: .032rem solid rgba(108, 160, 252, 1);
										border-radius: .18rem;
										cursor: pointer;
									}
									button:nth-child(1) {
										color: #6CA0FC;
										background: #fff;
									}
									button:nth-child(2) {
										color: #fff;
										background: #6CA0FC;
										margin: 0 .4rem;
									}
								}
								.jiaoyim {
									display: flex;
									padding-bottom: .2rem;
									.jiaoyim-l {
										img {
											height: 1.875rem;
											width: 1.875rem;
											margin: 0 .3rem 0 .5rem;
										}
									}
									.jiaoyim-r {
										flex: 1;
										padding-bottom: .1rem;
										padding-right: .3rem;
										p {
											font-size: .38rem;
											line-height: .5rem;
											text-indent: .32rem;
											color: #293653;
										}
										.jiaoyim-r-title {
											font-size: .44rem;
											line-height: .6rem;
										}
									}
								}
							}
						}
					}
				}
			}
		}
		.publish-top {
			height: 1.375rem!important;
			background: #fff!important;
			line-height: 1.375rem;
			color: #000!important;
			font-size: .56rem;
			margin-bottom: .1rem;
			position: relative;
			text-align: center;
			.publish-ul {
				display: flex;
				margin: 0 auto;
				width: 5rem;
				line-height: 1.375rem;
				height: 1.375rem!important;
				li {
					width: 50%;
					font-size: .44rem;
					color: #293653;
				}
				.chouy {
					font-size: .56rem;
					color: #4673EC;
				}
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