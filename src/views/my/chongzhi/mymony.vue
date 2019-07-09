<template>
	<div class="mony-totle">
		<div class="mony-totle-t">
			<div class="mony-totle-t-t">
				<i class="iconfont iconfanhui" @click="goback"></i>
				<i @click='jiaoyirun'>交易单</i>
			</div>
			<h1 class="totle-mony">{{totle.user_all_amount}}</h1>
			<p class="totle-title">总资产</p>
		</div>
		<div class="mony-totle-tab">
			
			<ul>
				<li @click="tabA">
					<p :class="{alan:flag}">{{totle.user_daishou_amount}}</p>
					<p :class="{alan:flag}">代售资产 (RMB)</p>
				</li>
				<li @click="tabB">
					<p :class="{alan:!flag}">{{totle.user_xianjin_amount}}</p>
					<p :class="{alan:!flag}">现金资产 (RMB)</p>
				</li>
			</ul>
		</div>
		<div class="mony-tiqu" v-show="!flag">
			<button @click="rechargeZhi">充值</button>
			<button @click="tiquList">提现</button>
			<p></p>
		</div>
		<div class="mony-totle-pei" v-show="flag">
			<ul>
				<li v-for="(item ,index) in jicun_list">
					<div class="mony-totle-img">
						<img :src="item.game_icon" alt="" />
						<div class="mony-totle-img-p">
							<p>{{item.game_name}}</p>
							<p>{{item.price}} <span>手续费<i>{{item.shouxufei}}</i>元</span> </p>
						</div>
					</div>
					<button class="mony-totlebtn" @click="pipeiInfo">马上匹配</button>
				</li>

			</ul>
		</div>
		<div class="mony-totle-ft" v-show="flag">
				<button @click="tiquMony()">提取</button>
				<button @click="jicunTiao()">寄存</button>
				
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { mytotleMony } from '@/api/api'
	
	export default {
		data() {
			return {
				flag: true,
				totle:'',
				jicun_list:''
			}
		},
		computed: {
			...mapGetters({
				user: 'getUserData'
			})
		},
		mounted() {
			const parem ={
				token:this.user.token,
				userId:this.user.id
			}
			mytotleMony(parem).then(res => {
				if(res.data.code ==200){
					console.log(res.data)
					this.jicun_list =res.data.return_data.game_gold_jicun_list
					this.totle = res.data.return_data
				}
				
			})
		},
		methods: {
			tiquMony(){
				this.$router.replace('/my/mymony/tiqulist')				
			},
			goback() {
				this.$router.go(-1)
			},

			tabA() {
				this.flag = true
			},
			tabB() {

				this.flag = false
			},
			jiaoyirun(){
				this.$router.replace('/my/mymony/runwater')
			},
			tiquList() {
				this.$router.replace('/my/shouyi')

			},
			rechargeZhi() {
				this.$router.replace('/my/mymony/recharge')

			},
			pipeiInfo(){
				this.$router.push('/yibi/needsell')
			},
			jicunTiao(){
				this.$router.push('/yibi/jicunall')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.mony-totle {
		display: flex;
		flex-direction: column;
		background: #F4F4F4;
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		left: 0;
		.mony-tiqu {
			display: flex;
			flex-direction: column;
			align-items: center;
			button {
				width: 7rem;
				height: 1.375rem;
				line-height: 1.375rem;
				text-align: center;
				border: 0;
				border-radius: .625rem;
				font-size: .56rem;
				color: #fff;
			}
			button:nth-child(1) {
				background: #4673EC;
				margin: 1rem 0;
			}
			button:nth-child(2) {
				background: #939EB8;
			}
		}
		.mony-totle-pei {
			flex: 1;
			overflow: scroll;

			ul {
				height: 100%;
				width: 100%;
				overflow: scroll;
				li {
					display: flex;
					height: 2rem;
					align-items: center;
					justify-content: space-between;
					box-sizing: border-box;
					padding: 0 .3rem;
					background: #fff;
					margin-bottom: .1rem;
					.mony-totlebtn {
						width: 2.2rem;
						height: .94rem;
						border: 0;
						background: #6CA0FC;
						font-size: .44rem;
						color: #fff;
						border-radius: .16rem;
					}
					.mony-totle-img {
						display: flex;
						align-items: center;
						height: 1.41rem;
						img {
							height: 1.41rem;
							width: 1.41rem;
						}
						.mony-totle-img-p {
							height: 1.2rem;
							margin-left: .2rem;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							p {
								color: #49597C;
								font-size: .44rem;
							}
							p:nth-child(2) span {
								font-size: .38rem;
								color: #9EA6BF;
							}
						}
					}
				}
			}
		}
		.mony-totle-ft {
			height: 1.54rem;
			background: red;
			display: flex;
			button{
				width: 50%;
				height: 1.54rem;
				line-height: 1.54rem;
				text-align: center;
				border: 0;
				font-size: .56rem;
				color: #fff;
			}
			button:nth-child(1){
				background: #9EA6BF;
			}
			button:nth-child(2){
				background: #4673EC;
			}
		}
		.mony-totle-tab {
			height: 1.875rem;
			position: relative;
			ul {
				position: absolute;
				width: 80%;
				height: 2.3rem;
				background: #fff;
				display: flex;
				align-items: center;
				z-index: 33;
				top: -.7rem;
				left: 1rem;
				border-radius: .625rem;
				li {
					width: 50%;
					position: relative;
					height: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					.alan {
						color: #17A0F7!important;
					}
					p {
						font-size: .44rem;
						color: #B8BBC7;
					}
					p:nth-child(1) {
						margin-bottom: .2rem;
					}
				}
				li:nth-child(1):after {
					position: absolute;
					content: '';
					height: 2rem;
					width: .032rem;
					right: 0;
					background: rgba(243, 243, 245, 1);
				}
			}
		}
		.mony-totle-t {
			position: relative;
			height: 4.375rem;
			width: 100%;
			background: url(../../../assets/my/mybj.png) no-repeat center top;
			background-size: 100% 100%;
			.mony-totle-t-t {
				height: 1.25rem;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				i {
					font-size: .38rem;
					width: 1.5rem;
					height: 1.25rem;
					line-height: 1.25rem;
					text-align: center;
					color: #fff;
				}
			}
			.totle-mony {
				font-size: .9rem;
				text-align: center;
				margin: .5rem 0 .3rem;
				color: #fff;
			}
			.totle-title {
				font-size: .38rem;
				text-align: center;
				color: #fff;
			}
		}
	}
</style>