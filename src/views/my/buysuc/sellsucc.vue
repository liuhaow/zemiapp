<template>
	<div class="buysucc">
		<div class="buysucc-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>我卖出</span>
		</div>
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">交易中</mt-tab-item>
			<mt-tab-item id="2">交易完成</mt-tab-item>
			<mt-tab-item id="3">交易取消 </mt-tab-item>
			<mt-tab-item id="4">全部</mt-tab-item>

		</mt-navbar>
		<mt-tab-container class='buysucc-container' v-model="selected">
			<mt-tab-container-item id="1" class='dsdsd'>
				<ul class="dsds-ul">
					<li v-for='(item ,index) in allList'>
						<p class="condition">待付款</p>
						<div class="jiaoyim" @click="hangdaiInfo(item.id,item.title,item.type)">
							<div class="jiaoyim-r">
								<p class="jiaoyim-r-title">{{item.title}}</p>
								<p>订单号： {{item.order_no}}</p>
								<p>价格：&yen;{{item.amount}}</p>
							</div>
						</div>
					</li>

				</ul>
			</mt-tab-container-item>
			<mt-tab-container-item id="2" class='dsdsd'>
				<ul class="dsds-ul">
					<li v-for='(item ,index) in allList'>
						<p class="condition" v-if="item.type == 2">自动匹配订单</p>
						<p class="condition" v-if="item.type == 3">担保寄售交易订单</p>
						
						<div class="jiaoyim" @click="hangbaiInfo(item.id,item.title,item.type)">
							<div class="jiaoyim">
								<div class="jiaoyim-r">
									<p class="jiaoyim-r-title">{{item.title}}</p>
									<p>订单号： {{item.order_no}}</p>
									<p>价格：&yen;{{item.amount}}</p>
								</div>
							</div>
						</div>
					</li>

				</ul>
			</mt-tab-container-item>
			<mt-tab-container-item id="3" class='dsdsd'>
				<ul class="dsds-ul">
					<li v-for='(item ,index) in allList' @click="hangsucInfo(item.id,item.title,item.type)">
						<p class="condition">取消</p>
						<div class="jiaoyim">
							<div class="jiaoyim-r">
								<p class="jiaoyim-r-title">{{item.title}}</p>
								<p>订单号： {{item.order_no}}</p>
								<p>价格：&yen;{{item.amount*item.num}}</p>
							</div>
						</div>
					</li>

				</ul>
			</mt-tab-container-item>
			<mt-tab-container-item id="4" class='dsdsd'>
				<ul class="dsds-ul">
					<li v-for='item in allList' @click="qudiandetail(item.id,item.title,item.type)">
						<p class="condition"></p>
						<div class="jiaoyim">
							<div class="jiaoyim-r">
								<p class="jiaoyim-r-title">{{item.title}}</p>
								<p>订单号： {{item.order_no}}</p>
								<p>价格：&yen;{{item.amount*item.num}}</p>
							</div>
						</div>
					</li>

				</ul>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
	import { SellBuyALlInfo, sellQuxiaoInfo, sellAutoMatchInfo,huoquxiadanList } from '@/api/mine'
	import { mapGetters, mapActions } from 'vuex'
	export default {
		data() {
			return {
				selected:'',
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
			let tt = ''
			if(this.selected == '4') {
				tt = 0
			} else if(this.selected == 1) {
				tt = 1
			} else if(this.selected == 2) {
				tt = 2
			} else if(this.selected == 3) {
				tt = 4
			}
			const parem = {
				token: this.user.token,
				userId: this.user.id,
				getStatus: tt
			}
			const data = {
				token: this.user.token,
				userId: this.user.id,
			}
			SellBuyALlInfo(parem).then(res => {
				console.log(res)

				if(res.data.code == 200) {
					this.allList = res.data.return_data
				}
			})
		},
		watch: {
			selected: function(val, oldVal) {
				this.TiaoId(val)
				if(val == 4) {
					val = 0
				}else if(val == 3){
					val=4
				}
				const parem = {
					token: this.user.token,
					userId: this.user.id,
					getStatus: val
				}
				SellBuyALlInfo(parem).then(res => {
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
			goback() {
				this.$router.back(-1)
			},
			hangbaiInfo() {
				this.$router.push('/my/detailoder')
			},
			hangdaiInfo(idx, title, itype) {
				let data = {
					id: idx,
					ind: 1,
					title: title,
					itype: itype
				}
				this.baocunIdMM(data)
				this.$router.push('/my/selldetail')

			},
			hangbaiInfo(idx, title, itype) {
				let data = {
					id: idx,
					ind: 2,
					title: title,
					itype: itype
				}
				this.baocunIdMM(data)
				this.$router.push('/my/selldetail')
			},
			hangsucInfo(idx, title, itype) {
				let data = {
					id: idx,
					ind: 3,
					title: title,
					itype: itype
				}
				this.baocunIdMM(data)
				this.$router.push('/my/selldetail')
			},
			qudiandetail(idx, title, itype) {
				let data = {
					id: idx,
					ind: 4,
					title: title,
					itype: itype
				}
				this.baocunIdMM(data)
				this.$router.push('/my/selldetail')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.buysucc {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.buysucc-container {
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
									font-size: .38rem;
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
		.buysucc-top {
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