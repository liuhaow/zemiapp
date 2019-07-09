<template>
	<div class="ybqushi">
		<div class="ybqushi-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>{{name.name}}</span>
			<span class="amend-preserve" @click="pipeisellInfo">马上匹配</span>
		</div>
		<div class="ybqushi-info">
			<div class="ybqushi-choose">
				<ul>
					<li>{{yibiqufu.fu}}</li>
					<li>{{yibiqufu.qu}}</li>

				</ul>
			</div>
			<div class="ybqushi-tu">
				<p>{{name.name}}游戏币交易走势图</p>
				<h2>
					<ul class="issus-list">
						<li class='issueli' v-for='(item,index) in list' @click="changestyle(index,item.tin)" :class="{'actt':select===index}">{{item.name}}</li>
					</ul>
				</h2>
				<div class="ybqushi-tu-line" id="myChart"></div>
			</div>
			<div class="peipsucc">
				<img src="../../../assets/about/xuchan.png" />
				<p>当前匹配<span>{{page_info.total}}</span>单，匹配成功<span>{{page_info.count}}</span>单</p>

			</div>
			<div class="nowpeip">
				<p class="nowpeip-p">
					<span>正在匹配订单</span>
					<span @click="checkall()">查看所有订单</span>
				</p>
				<ul>
					<li v-for='item in allList'>
						<div>
							<img src="../../../assets/login/sel.png" alt="" v-if="item.type=='卖'" />
							<img src="../../../assets/login/bubj.png" alt="" v-if="item.type=='买'" />
							<p>
								<span>{{item.game_gold_price}}元，</span>
								<span>{{item.game_gold_amount}}万游戏币</span>
								<span>1元 =<i>{{item.unit_price}}</i> 万金币</span>
							</p>

						</div>
					</li>
				</ul>
			</div>

		</div>

		<div class="danbao">
			<ul>
				<li @click="depositInfo()">寄存</li>
				<li @click="consignInfo()">寄售</li>
				<li @click="assureInfo()">担保</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import echarts from 'echarts'
	import { mainzoushi, positInfo, zidongppbuyList } from '@/api/api'
	import { mapGetters, mapActions } from 'vuex'

	export default {
		data() {
			return {
				nickname: '地下城勇士',
				dataArr: [],
				select: 2,
				dataArr2: [],
				listIfon: '',
				page_info: '',
				types: 30,
				allList: '',
				list: [{
						name: '日',
						tin: 1
					},
					{
						name: '周',
						tin: 7
					},
					{
						name: '月',
						tin: 30
					},

				]

			}
		},
		computed: {
			...mapGetters({
				name: 'gamename',
				yibiqufu: 'yibiqufu'
			})
		},
		mounted() {

			let data = {
				gameId: this.yibiqufu.gameId,
				gameAreaId: this.yibiqufu.Daqu_id,
			};
			const parm = {
				gameId: this.yibiqufu.gameId,
				gameAreaId: this.yibiqufu.Daqu_id,
				type: this.types
			}
			mainzoushi(parm).then(res => {
				if(res.data.code == 200) {
					this.page_info = res.data.page_info
					for(let i = 0; i < res.data.return_data.length; i++) {
						this.dataArr.push(Number(res.data.return_data[i].unit_price));
						let tt = new Date(Number(res.data.return_data[i].add_time) * 1000).toLocaleString().split(' ')[0];
						this.dataArr2.push(tt);
					}
					zidongppbuyList(data).then(res => {
						console.log(res)
						if(res.data.code == 200) {
							this.allList = res.data.return_data;
							this.allList = this.allList.slice(0, 3)
						} else {
							Toast({
								message: res.data.msg,
								iconClass: 'icon icon-error',
								position: 'center',
							});
						}
					})

				} else {
					Toast({
						message: res.data.msg,
						iconClass: 'icon icon-error',
						position: 'center',
					});
				}
			});

			this.$nextTick(function() {
				this.drawPie('myChart')
			});

		},

		watch: {
			dataArr(val) {
				this.drawPie('myChart')
			}
		},
		methods: {
			...mapActions(
				[
					'yibimaixiadan'
				]),
			changestyle(index, tin) {
				this.select = index,
					this.dataArr = [];
				console.log(tin)
				this.dataArr2 = [];
				let data = {
					gameId: this.yibiqufu.gameId,
					gameAreaId: this.yibiqufu.Daqu_id,
					type: tin
				}
				mainzoushi(data).then(res => {
					if(res.data.code == 200 || res.data.return_data != '') {
						this.page_info = res.data.page_info

						for(let i = 0; i < res.data.return_data.length; i++) {
							this.dataArr.push(Number(res.data.return_data[i].unit_price));
							let tt = new Date(Number(res.data.return_data[i].add_time) * 1000).toLocaleString().split(' ')[0]
							this.dataArr2.push(tt);
						}
					} else {
						Toast({
							message: res.data.msg,
							iconClass: 'icon icon-error',
							position: 'center',
						});
					}

				})

			},
			depositInfo() {
				this.$router.push('/yibi/deposit')
			},
			consignInfo() {
				this.$router.push('/yibi/consign')

			},
			assureInfo() {
				this.$router.push('/yibi/assure')

			},
			pipeisellInfo() {
				this.$router.push('/yibi/needsell')
			},
			danbaojyinfo(tt) {
				this.yibimaixiadan(tt)
				this.$router.push('/yibi/place')
			},
			checkall() {
				this.$router.push('/yibi/alloder')
			},
			drawPie(id) {
				var odataArr = this.dataArr
				var odataArr2 = this.dataArr2
				this.charts = echarts.init(document.getElementById(id))
				this.charts.setOption({
					title: {},
					tooltip: {
						trigger: 'axis'
					},
					grid: {
						left: '2%',
						right: '4%',
						bottom: '5%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: odataArr2
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						type: 'line',
						stack: '总量',
						data: odataArr
					}]

				})
			},
			goback() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.ybqushi {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		/**/
		bottom: 0;
		right: 0;
		.danbao {
			height: 1.47rem;
			background: #fff;
			ul {
				height: 100%;
				width: 100%;
				li {
					width: 33%;
					height: 1.47rem;
					line-height: 1.47rem;
					float: left;
					text-align: center;
					font-size: 0.38rem;
					color: #4673EC;
				}
				li:nth-child(1) {
					color: #fff;
					background: #4673EC;
				}
			}
		}
		.ybqushi-info {
			flex: 1;
			overflow: scroll;
			.nowpeip {
				.nowpeip-p {
					height: 1.2rem;
					display: flex;
					justify-content: space-between;
					align-items: center;
					box-sizing: border-box;
					background: #fff;
					padding: 0 .32rem;
					margin: .05rem 0;
					span {
						font-size: .38rem;
					}
					span:nth-child(1) {
						color: #49597C;
					}
					span:nth-child(2) {
						color: #939EB8
					}
				}
				ul {
					li {
						height: 1.1rem;
						line-height: 1.1rem;
						background: #fff;
						padding-left: .45rem;
						margin-bottom: .05rem;
						display: flex;
						align-items: center;
						div {
							display: flex;
							align-items: center;
							img {
								height: .65rem;
								width: .65rem;
								margin-right: .32rem;
							}
							p {
								font-size: .38rem;
								span {
									margin-right: .2rem;
								}
							}
						}
					}
				}
			}
			.peipsucc {
				height: 1.375rem;
				background: #fff;
				display: flex;
				align-items: center;
				img {
					height: .75rem;
					width: .75rem;
					margin: 0 .2rem;
				}
				p {
					font-size: 0.38rem;
					color: #344978;
					span {
						margin: .05rem 0;
					}
				}
			}
			.ybqushi-tu {
				height: 7rem;
				margin-top: .2rem;
				margin-bottom: .2rem;
				width: 100%;
				background: #fff;
				display: flex;
				flex-direction: column;
				justify-content: center;
				position: relative;
				h2 {
					position: absolute;
					top: .7rem;
					right: 2%;
					z-index: 99;
					.issus-list {
						display: flex;
						width: 90%;
						margin: 0 auto;
						justify-content: space-around;
						li {
							font-size: 0.38rem;
							text-align: center;
							padding-bottom: .064rem;
							width: .7rem;
							margin: 0 .2rem;
							color: #333;
						}
						.actt {
							color: rgba(70, 115, 236, 1)!important;
							border-bottom: .064rem solid rgba(70, 115, 236, 1);
						}
					}
					span {
						font-size: .5rem;
						margin: 0 .1rem 0 0;
					}
				}
				p {
					font-size: .4rem;
					position: absolute;
					left: .32rem;
					top: .32rem;
					height: .6rem;
					line-height: .6rem;
					color: #333
				}
				.ybqushi-tu-line {
					width: 100%;
					height: 6.6rem;
					display: flex;
					justify-content: center;
					align-items: center;
					div {
						height: 100%!important;
						width: 100%!important;
					}
				}
			}
			.ybqushi-choose {
				height: 1.25rem;
				background: #fff;
				display: flex;
				align-items: center;
				ul {
					width: 100%;
					height: 100%;
					li {
						width: 50%;
						float: left;
						height: 1.25rem;
						line-height: 1.25rem;
						text-align: center;
						font-size: 0.38rem;
						color: #999999;
					}
				}
			}
		}
		.ybqushi-top {
			height: 1.375rem;
			background: #fff;
			line-height: 1.375rem;
			color: #000;
			font-size: .5rem;
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
			.amend-preserve {
				position: absolute;
				width: 2.5rem;
				height: 1.375rem;
				font-size: 0.38rem;
				color: #4673EC;
				top: 0;
				right: 0;
			}
		}
	}
</style>