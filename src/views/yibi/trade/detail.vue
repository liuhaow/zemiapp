<template>
	<div class="detal">
		<div class="detal-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>{{name}}</span>
		</div>
		<div class="detal-img">
			<img src="http://img3.imgtn.bdimg.com/it/u=1889219560,1183985675&fm=26&gp=0.jpg" />
		</div>
		<div class="detai-share">
			<p>{{listIfon.title}}</p>
			<div class="detai-share-r">
				<dl @click="shoucangInfo">
					<dt>
						<i class="iconfont shou" >&#xe613;</i>
					</dt>
					<dd>收藏</dd>
				</dl>
				<dl>
					<dt>
						<i class="iconfont share">&#xe626;</i>
					</dt>
					<dd>分享</dd>
				</dl>
			</div>
		</div>

		<div class="detali-m-s">
			<ul class="detal-list">
				<li :class="{chos:lisin}">
					商品描述
				</li>
				<li :class="{chos:!lisin}">
					交易说明
				</li>
			</ul>
			<div class="detali-m-list">
				<div class="detali-m-list-l">

					<div class="c-love">
						<h2 class="c-love-title">猜你喜欢</h2>
						<ul class="c-love-list">
							<li>
								<img src="http://img4.imgtn.bdimg.com/it/u=248715713,643095611&fm=26&gp=0.jpg" alt="" />
								<div>
									<p>这里是商品的标题标题标题 标题</p>
									<p>￥500</p>
									<p>QQ（苹果）/手Q3区</p>
								</div>
							</li>
							<li>
								<img src="http://img4.imgtn.bdimg.com/it/u=248715713,643095611&fm=26&gp=0.jpg" alt="" />
								<div>
									<p>这里是商品的标题标题标题 标题</p>
									<p>￥500</p>
									<p>QQ（苹果）/手Q3区</p>
								</div>
							</li>
						</ul>
						<p class="checkout">查看更多</p>
					</div>
				</div>
				<div class="detali-m-list-l" v-show="!lisin">

				</div>

			</div>
		</div>
		<div class="detal-foot">
			<p><span>价格</span><span>&yen;{{listIfon.gold_price}}</span></p>
			<button @click="qukliBuy">立即购买</button>
		</div>
	</div>
</template>

<script>
	import { jishoudanbaoInfo, Addshoucang } from '@/api/api'
	import { mapGetters, mapActions } from 'vuex'
	import { Toast } from 'mint-ui';
	export default {
		data() {
			return {
				name: '商品详情',
				seach: '',
				listIfon: '',
				lisin: true

			}
		},
		computed: {
			...mapGetters({
				getUser: 'getUserData',
				gamename: 'gamename',
				buyscid: 'buyscid'

			})
		},
		mounted() {

			let data = {
				goldGoodsId: this.buyscid,
				token: this.getUser.token,
				userId: this.getUser.id

			};
			jishoudanbaoInfo(data).then(res => {
				if(res.data.code == 200) {
					this.listIfon = res.data.return_data
				} else {
					Toast({
						message: res.data.msg,
						iconClass: 'icon icon-error',
						position: 'center',
					});
				}

			});
		},
		methods: {
			...mapActions(
				[
					'yibimaixiadan', 'danbaojInfo'
				]),
			shoucangInfo() {
				console.log(1)
				let data = {
					token: this.getUser.token,
					userId: this.getUser.id,
					guanlianId: 714,
					type: 3,
					title: this.listIfon.title,
					images: this.gamename.img,
					amount: this.listIfon.gold_price
				}
				Addshoucang(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						Toast({
							message: '收藏成功',
							iconClass: 'icon icon-error',
							position: 'center',
						});
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
			seachInfo() {},
			qukliBuy() {
				let ttd = {
					all: this.listIfon,
					qf: 9
				}
				this.yibimaixiadan(ttd)
				this.danbaojInfo(ttd)
				this.$router.push('/yibi/place')

			},
			detailListinfo() {
				this.$router.push('/yibi/detail')

			}
		}
	}
</script>

<style lang="stylus" scoped>
	.detal {
		background: #F4F4F4;
		display: flex;
		overflow: scroll;
		flex-direction: column;
		.detal-foot {
			margin-top: .2rem;
			height: 1.56rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: #fff;
			p {
				font-size: .5rem;
				span:nth-child(1) {
					color: #000;
					margin: 0 .3rem;
				}
				span:nth-child(2) {
					color: #EC6941
				}
			}
			button {
				height: 1.56rem;
				width: 3.5rem;
				font-size: .56rem;
				border: 0;
				background: #4673EC;
				color: #fff;
			}
		}
		.detali-m-s {
			.detali-m-list {
				margin-top: .1rem;
				.detali-m-list-l {
					.c-love {
						.c-love-title {
							height: .94rem;
							line-height: .94rem;
							padding-left: .3rem;
							font-size: 0.38rem;
							color: #2F2F2F;
						}
						.c-love-list {
							li {
								display: flex;
								align-items: center;
								height: 2.2rem;
								background: #fff;
								margin-bottom: .1rem;
								img {
									height: 1.875rem;
									width: 1.875rem;
									margin: 0 .3rem;
								}
								div {
									height: 1.8rem;
									display: flex;
									flex-direction: column;
									justify-content: space-between;
									p:nth-child(1) {
										font-size: 0.38rem;
										color: #333;
									}
									p:nth-child(2) {
										font-size: 0.38rem;
										color: #EC6941;
									}
									p:nth-child(3) {
										font-size: .38rem;
										color: #999999;
									}
								}
							}
						}
						.checkout {
							height: 1.56rem;
							background: #fff;
							color: #7D7D7D;
							font-size: 0.38rem;
							line-height: 1.56rem;
							text-align: center;
						}
					}
					.message-list {
						li {
							height: 1.56rem;
							background: #fff;
							margin-bottom: .1rem;
							display: flex;
							align-items: center;
							box-sizing: border-box;
							padding: 0 .3rem;
							p {
								font-size: 0.38rem;
								width: 2.8rem;
								color: #7D7D7D;
							}
							h2 {
								color: #434343;
								font-size: 0.38rem;
							}
						}
					}
				}
			}
			.detal-list {
				height: 1.56rem;
				display: flex;
				background: #fff;
				li {
					width: 50%;
					text-align: center;
					line-height: 1.56rem;
					height: 1.56rem;
					font-size: 14px;
					color: #959595;
					background: #ccc;
				}
				.chos {
					color: #4673EC;
					background: #fff;
				}
			}
		}
		.detai-share {
			width: 100%;
			display: flex;
			padding: 0 .3rem;
			box-sizing: border-box;
			background: #fff;
			align-items: center;
			justify-content: space-between;
			margin-bottom: .15rem;
			height: 1.8rem;
			p {
				font-size: 14px;
				color: #333;
				line-height: 20px;
			}
			.detai-share-r {
				width: 2.5rem;
				height: 1.56rem;
				display: flex;
				justify-content: center;
				align-items: center;
				dl {
					width: 50%;
					text-align: center;
					dt {
						i {
							font-size: .625rem;
							color: #4673EC;
						}
					}
					dd {
						font-size: 0.38rem;
						color: #999;
					}
				}
				.shou {}
			}
		}
		.detal-img {
			height: 6.25rem;
			width: 100%;
			img {
				height: 100%;
				width: 100%;
			}
		}
		.detal-top {
			height: 1.375rem!important;
			background: #fff!important;
			line-height: 1.375rem;
			color: #293653!important;
			font-size: .44rem;
			position: relative;
			text-align: center;
			span {
				font-weight: 600;
			}
			.iconfanhui {
				position: absolute;
				width: 1rem;
				color: #9EA6BF;
				height: 1.375rem;
				top: 0;
				left: 0;
			}
		}
	}
</style>