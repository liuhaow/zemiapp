<template>
	<div class="wrapper">
		<div class="user">
			<div v-if="user.user_nickname" class="mine-info">
				<p class="jifen">
					当前积分: <span>{{user.integral}}</span>
				</p>
				<img src="../../assets/login/be71164bd667972c5197c07598f2547.png" alt="" class="avatar" />
				<div class="description">
					<p class="myname">{{user.user_nickname}}</p>
					<p class="myid">ID:{{user.id}}</p>
				</div>
				<!--<div class="xiugai" @click="xiugaiInfo">
					<i class="iconfont">&#xe635;</i>
				</div>-->
				<div class="Allmony" @click="zicanInfo">
					<ul>
						<li>
							<p>{{myinfo.user_all_amount}}</p>
							<p>全部资产</p>
						</li>
						<li>
							<p>{{myinfo.user_daishou_amount}}</p>
							<p>待售资产</p>
						</li>
						<li>
							<p>{{myinfo.user_xianjin_amount}}</p>
							<p>现金资产</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="login" v-if="!user.user_nickname">
				<div class="wrap">
					<div class="button" @click="changeToLogin">登录</div>
				</div>
			</div>

		</div>
		<ul class="mineList">
			<li>
				<p>我是买家</p>
				<ul>
					<li @click="mybuysucc('1')">
						<div class="img">
							<i v-if='myinfo.user_buy_order_daizhifu_count >0 '>{{myinfo.user_buy_order_daizhifu_count}}</i>
							<img src="../../assets/my/dfk.png" alt="" />
						</div>
						<span>待付款</span>
					</li>
					<li @click="mybuysucc('2')">
						<div class="img">
							<i v-if='myinfo.user_buy_order_jzf_count >0 '>{{myinfo.user_buy_order_jzf_count}}</i>
							<img src="../../assets/my/yifukuan.png" alt="" />
						</div>
						<span>已付款</span>
					</li>
					<li @click="mybuysucc('3')">
						<div class="img">
							<i v-if="myinfo.user_buy_order_end_count > 0">{{myinfo.user_buy_order_end_count}}</i>

							<img src="../../assets/my/jiaoyichenggong.png" alt="" />
						</div>
						<span>交易成功</span>
					</li>
					<li @click="mybuysucc('4')">
						<div class="img">
							<i v-if="myinfo.user_buy_order_cancel_count > 0">{{myinfo.user_buy_order_cancel_count}}</i>

							<img src="../../assets/my/jiaoyiquxiao.png" alt="" />
						</div>
						<span>交易取消</span>
					</li>
				</ul>

			</li>
			<li>
				<p>我发布的</p>
				<ul>
					<li @click='publishInfo("1")'>
						<div class="img">
							<i v-if="myinfo.shop_shenhe_count > 0">{{myinfo.shop_shenhe_count}}</i>
							<img src="../../assets/my/shenhezhong.png" alt="" />
						</div>
						<span>审核中</span>
					</li>
					<li @click='publishInfo("2")'>
						<div class="img">
							<i v-if="myinfo.shop_selling_count >0">{{myinfo.shop_selling_count}}</i>
							<img src="../../assets/my/zhengchushou.png" alt="" />
						</div>
						<span>正出售</span>
					</li>
					<li @click='publishInfo("3")'>
						<div class="img">
							<i v-if="myinfo.shop_shouguang_count >0">{{myinfo.shop_shouguang_count}}</i>

							<img src="../../assets/my/yichushou.png" alt="" />
						</div>
						<span>已出售</span>
					</li>
					<li @click='publishInfo("4")'>
						<div class="img">
							<i v-if='myinfo.shop_xiajia_count > 0'>{{myinfo.shop_xiajia_count}}</i>

							<img src="../../assets/my/yixiajia.png" alt="" />
						</div>
						<span>已下架</span>
					</li>
				</ul>
			</li>
			<li>
				<p>我卖出的</p>
				<ul>
					<li @click="selllishInfo('1')">
						<div class="img">
							<i v-if="myinfo.user_sell_order_daizhifu_count > 0">{{myinfo.user_sell_order_daizhifu_count}}</i>

							<img src="../../assets/my/jiaoyizhong.png" alt="" />
						</div>
						<span>交易中</span>
					</li>
					<li @click="selllishInfo('2')">
						<div class="img">
							<i v-if="myinfo.user_sell_order_jzf_count > 0" title="">{{myinfo.user_sell_order_jzf_count}}</i>

							<img src="../../assets/my/jiaoyiwancheng.png" alt="" />
						</div>
						<span>交易完成</span>
					</li>
					<li @click="selllishInfo('3')">
						<div class="img">
							<i v-if="myinfo.user_sell_order_cancel_count >0">{{myinfo.user_sell_order_cancel_count}}</i>

							<img src="../../assets/my/jiaoyiquxiao.png" alt="" />
						</div>
						<span>交易取消</span>
					</li>
					<li @click="selllishInfo('4')">
						<div class="img">
							<i v-if="myinfo.user_sell_order_daizhifu_count+myinfo.user_sell_order_jzf_count+myinfo.user_sell_order_cancel_count > 0">{{myinfo.user_sell_order_daizhifu_count+myinfo.user_sell_order_jzf_count+myinfo.user_sell_order_cancel_count}}</i>

							<img src="../../assets/my/quanbu.png" alt="" />
						</div>
						<span>全部</span>
					</li>
				</ul>
			</li>
		</ul>
		<ul class="nav">
			<li class="nav-item" @click="changeTocollect">
				<p> <img src="../../assets/my/shoucang.png" alt="" /> <span>我的收藏</span></p>
				<h1>
					<i class="iconfont"> &#xe624;</i>
				</h1>
			</li>
			<li class="nav-item" @click="changeToapprove">
				<p> <img src="../../assets/my/shimingrenzheng.png" alt="" /> <span>实名认证</span></p>
				<h1>
					<i class="iconfont"> &#xe624;</i>
				</h1>
			</li>
			<li class="nav-item" @click="changeToSetting">
				<p> <img src="../../assets/my/sett.png" alt="" /> <span>设置</span></p>
				<h1>
					<i class="iconfont"> &#xe624;</i>
				</h1>
			</li>
			<li class="nav-item" @click="changeTofeed">
				<p> <img src="../../assets/my/yaoqing.png" alt="" /> <span>意见反馈</span></p>
				<h1>
					<i class="iconfont"> &#xe624;</i>
				</h1>
			</li>
		</ul>

	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { mineMeInfo } from '@/api/mine'
	import { Toast } from 'mint-ui';

	export default {
		data() {
			return {
				myinfo: ''
			}
		},
		computed: {
			...mapGetters({
				user: 'getUserData'
			})
		},
		mounted() {
			const parem = {
				token: this.user.token,
				userId: this.user.id
			}
			mineMeInfo(parem).then(res => {
				if(res.data.code == 200) {
					if(res.data.return_data.user_xianjin_amount == null) {
						console.log(12)
						Toast({
							message: '您的账号在其他地方登陆',
							iconClass: 'icon icon-error',
							position: 'center',
						});
						this.userOut();
						return

					}
					this.myinfo = res.data.return_data;

				}

			})
		},
		methods: {
			...mapActions({
				userOut: "setSignOut",
				TiaoId: "TiaoId"
			}),
			zicanInfo() {
				if(this.user.user_nickname) {
					this.$router.push('/my/mymony');
				} else {
					this.$router.push('/my/login');
				}
			},
			changeTocollect() {
				if(this.user.user_nickname) {
					this.$router.push('/my/collect');
				} else {
					this.$router.push('/my/login');
				}
			},
			changeToapprove() {
				if(this.user.user_nickname) {
					this.$router.push('/my/approve');
				} else {
					this.$router.push('/my/login');
				}
			},
			mybuysucc(ind) {
				this.TiaoId(ind)
				this.$router.push({name: 'buysuc'})
			},
			changeToSetting() {
				if(this.user.user_nickname) {
					this.$router.push('/my/setting');
				} else {
					this.$router.push('/my/login');
				}
			},
			changeTofeed() {
				if(this.user.user_nickname) {
					this.$router.push('/my/feedback');
				} else {
					this.$router.push('/my/login');
				}
			},

			changeToLogin() { //跳转到登录界面
				this.$router.push('/my/login');
			},
			xiugaiInfo() {
				this.$router.push('/my/mine')
			},
			publishInfo(ind) {
				this.TiaoId(ind)
				
				this.$router.push({
					name: 'publish'
				})
			},
			selllishInfo(ind) {
				this.TiaoId(ind)
				
				this.$router.push({
					name: 'sellsuc'
				})
			}

		},
		computed: {
			...mapGetters({
				user: 'getUserData'
			})
		}
	}
</script>

<style lang="stylus" scoped>
	.wrapper {
		background-color: #f2f4f7;
		width: 100%;
		height: 92%;
		position: fixed;
		overflow: scroll;
		.mineList {
			width: 100%;
			margin-bottom: .1rem;
			li {
				height: 2.5rem;
				width: 100%;
				background: #fff;
				margin-bottom: .1rem;
				p {
					font-size: .38rem;
					color: #4B5773;
					padding: .1rem 0 0 .32rem;
				}
				ul {
					height: 2rem;
					width: 100%;
					display: flex;
					li {
						width: 25%;
						height: 2rem;
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						align-items: center;
					}
				}
				div {
					position: relative;
					i {
						position: absolute;
						right: -.35rem;
						top: -.1rem;
						width: .4rem;
						display: flex;
						align-items: center;
						justify-content: center;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						height: .4rem;
						line-height: .4rem;
						text-align: center;
						font-size: .32rem;
						color: #4673EC;
						border: .032rem solid #4673EC;
						border-radius: 50%;
					}
					img {
						width: 0.8rem;
						height: 0.8rem;
					}
				}
				span {
					font-size: .38rem;
					margin-top: .08rem;
					color: #6D6D6D;
				}
			}
		}
		.user {
			height: 6rem;
			width: 100%;
			position: relative;
			margin-bottom: 1rem;
			background: url(../../assets/my/bj.png) no-repeat center top;
			background-size: 100% 100%;
			.login {
				height: 100%;
				width: 100%;
				display: flex;
				align-items: center;
				.wrap {
					div {
						font-size: .5rem;
						color: #fff;
						margin-left: .5rem;
					}
				}
			}
			.xiugai {
				width: 1.56rem;
				position: absolute;
				right: .2rem;
				top: .2rem;
				height: 1.56rem;
				line-height: 1.56rem;
				text-align: center;
				cursor: pointer;
				i {
					color: #fff;
					font-size: .56rem;
				}
			}
			.mine-info {
				height: 100%;
				width: 100%;
				position: relative;
				display: flex;
				padding-top: 1.8rem;
				box-sizing: border-box;
				.jifen {
					position: absolute;
					right: 0;
					top: 15%;
					width: 3.8rem;
					color: #4673EC;
					height: .7rem;
					line-height: .7rem;
					background: #fff;
					font-size: .44rem;
					text-align: center;
					border-radius: 0.46rem 0 0 0.46rem;
				}
				.Allmony {
					position: absolute;
					width: 90%;
					height: 2.4rem;
					left: 5%;
					bottom: -.5rem;
					background: #fff;
					z-index: 999;
					border-radius: .32rem;
					ul {
						height: 100%;
						width: 100%;
						display: flex;
						li {
							width: 33%;
							height: 100%;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							p {
								font-size: .38rem;
								color: #293653;
								margin: .15rem 0;
							}
						}
					}
				}
				.avatar {
					height: 1.72rem;
					width: 1.73rem;
					border-radius: 50%;
					margin: 0 .53rem;
				}
				.description {
					padding-top: .5rem;
					.myname {
						font-size: .5rem;
						color: #fff;
						padding-bottom: .1rem;
					}
					.myid {
						font-size: .44rem;
						color: #fff;
					}
				}
			}
		}
		.nav {
			li {
				height: 1.5rem;
				padding: 0 .3rem;
				display: flex;
				background: #fff;
				margin-bottom: .05rem;
				justify-content: space-between;
				align-items: center;
				p {
					color: #171717;
					font-size: .44rem;
					font-weight: 500;
					img {
						width: 0.68rem;
						height: 0.68rem;
						margin: 0 .3rem 0 .4rem;
					}
				}
				h1 {
					i {
						color: #303030;
					}
				}
			}
		}
	}
</style>