<template>
	<div class="needyb">
		<div class="needyb-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>游戏币需求</span>
		</div>
		<div class="needyb-main">
			<p class='needyb-messag'>
				<i>*</i>
				<b>游戏币数量</b><input type="number" id="qqn" v-model="amount" placeholder="请输入数量" />万个
			</p>
			<p class='needyb-messag'>
				<i>*</i>
				<b>商品价格</b><input type="number" id="qqn" v-model="pice" placeholder="请输入价格" /> 元
			</p>
			<p class='needyb-messag'>
				<i>*</i>
				<b>联系电话</b><input  type="number" id="qqn" v-model="phonemunb" placeholder="请输入电话号码" />
			</p>
			<p class='needyb-messag'>
				<i>*</i>
				<b>QQ号</b><input type="text" id="qqn" v-model="qqmunb" placeholder="请输入QQ号" />
			</p>
			<div class="needyb-m">
				<h3><span>*</span>匹配期限</h3>
				<ul class="needyb-list">
					<li class='needybli' v-for='(item,index) in list' @click="changestyle(index,item.day)" :class="{'actt':selectss===index}">{{item.name}}</li>
				</ul>
			</div>
			<p class='needyb-messag'>
				<i>*</i>
				<b>防骗暗号</b><input type="number" @input="oninput" v-model="kfuAnhao " placeholder="请输入5位数数字的防骗暗号" />
			</p>
			<h2 class="yjmony"><span>押金</span><span><i ref='yamony'>{{this.pice/10}}</i>元</span></h2>
			<h2 class="yjmony-t"><span>共计</span><span>&yen;{{this.pice}}</span></h2>
			<div class="needyb-fot">
				<div class="needyb-fot-tiyle">
					<p>提示</p>
					<h2>订单交易成功后，将退回押金到您的账户，如匹配成功后取消交易，押金概不退还，交押金的订单优先匹配</h2>
				</div>
				<button @click="payneedInfo()">去支付，<span>&yen;<i>{{parseInt(this.pice )+ parseInt(this.pice/10)}}</i></span></button>

			</div>

		</div>

	</div>
</template>

<script>
	import { buyPPeiInfo ,ZidongPPeiInfo } from '@/api/api'
	import { mapGetters, mapActions } from 'vuex'
	import { Toast } from 'mint-ui';
	

	export default {
		data() {
			return {
				nickname: '',
				isDeposit: '1',
				selectss: 0,
				showTime: '4',
				amount: '',
				qqmunb: '',
				phonemunb: '',
				kfuAnhao: '',
				pice: '',
				ya: '', //押金是否
				day: '7', //默认选择7天
				list: [{
						name: '7天',
						day: '4'
					},
					{
						name: '3天',
						day: '3'

					},
					{
						name: '6小时',
						day: '2'
					},
					{
						name: '30分钟',
						day: '1'
					},

				]
			}
		},
		computed: {
			...mapGetters({
				name: 'gamename',
				yibiqufu: 'yibiqufu',
				getUserData:'getUserData'
			})
		},
		methods: {
			...mapActions(
				[
					'yibimaixiadan'
				]
			),
			oninput(e) {
				if(this.kfuAnhao.length > 5) {
					Toast({
						message: '5位数字即可',
						iconClass: 'icon icon-error'
					});
					this.kfuAnhao = this.kfuAnhao.slice(0, 5);
				}
			},
			goback() {
				this.$router.go(-1)
			},
			changestyle(index, day) {
				this.selectss = index;
				this.showTime   = day;


			},
			payneedInfo() {
				let tt =this.$refs.yamony.innerText;
				var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
				if(!reg.test(this.phonemunb)){
					Toast({
						message: '请填正确号码',
						iconClass: 'icon icon-error',
						position: 'center',
					});
					return;
				}
				if(!this.phonemunb||!this.pice||!this.qqmunb ||!this.kfuAnhao||!this.amount){
					Toast({
						message: '请填写完整信息',
						iconClass: 'icon icon-error',
						position: 'center',
					});
					return;
				}
				let data = {
					token: this.getUserData.token,
					userId:this.getUserData.id,
					isDeposit:'1',
					gameId:this.yibiqufu.gameId,
					price:this.pice,
					gameAreaId:this.yibiqufu.Daqu_id,
					showTime :this.showTime,
					deposit:tt,
					kfuAnhao:this.kfuAnhao,
					amount:this.amount,
					phone:this.phonemunb,
					qq:this.qqmunb,					
				}
				console.log(data)
				buyPPeiInfo(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						console.log(res.data)
						let parm = {
							goldOrderId: res.data.return_data.id,
							type: 1,
							quf:8
						}
						this.yibimaixiadan(parm)
						this.$router.push('/yibi/payinfo')
					}else{
						Toast({
						message: res.data.msg,
						iconClass: 'icon icon-error',
						position: 'center',
					});
					}
				})
				
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.needyb {
		background: #F4F4F4;
		display: flex;
		overflow: scroll;
		flex-direction: column;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.needyb-main {
			flex: 1;
			overflow: scroll;
			.needyb-fot {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin: .5rem 0 0rem;
				.needyb-fot-tiyle {
					width: 95%;
					font-size: .38rem;
					color: #9EA6BF;
					line-height: .5rem;
					p {
						width: 100%;
					}
					h2 {
						width: 90%;
						margin: 0.1rem auto 0;
					}
				}
				button {
					width: 90%;
					height: 1.41rem;
					line-height: 1.41rem;
					text-align: center;
					font-size: 0.56rem;
					background: #4673EC;
					margin: .3rem 0 .8rem;
					border-radius: 0.32rem;
					border: 0;
					color: #fff;
				}
			}
			.yjmony {
				height: 1.56rem;
				display: flex;
				background: #fff;
				align-items: center;
				justify-content: space-between;
				padding: 0 .4rem;
				box-sizing: border-box;
				margin-bottom: .1rem;
			}
			.yjmony-t {
				height: 1.56rem;
				display: flex;
				background: #fff;
				align-items: center;
				justify-content: space-between;
				padding: 0 .4rem;
				box-sizing: border-box;
				margin-bottom: .1rem;
			}
			.chose {
				width: 100%;
				background: #E5E5E5;
				ul {
					li {
						height: 1.56rem;
						line-height: 1.56rem;
						text-align: center;
						font-size: 0.38rem;
						margin-bottom: .1rem;
						color: #333;
						width: 100%;
						background: #F2F2F2;
					}
				}
			}
			.needyb-m {
				height: 3.6rem;
				background: #fff;
				margin-top: 0.156rem;
				margin-bottom: .1rem;
				h3 {
					height: 1.2rem;
					line-height: 1.2rem;
					font-size: 0.38rem;
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
				.needyb-list {
					display: flex;
					flex-wrap: wrap;
					width: 90%;
					margin: 0 auto;
					justify-content: space-between;
					li {
						width: 2.5rem;
						height: .9rem;
						line-height: .9rem;
						font-size: 14px;
						text-align: center;
						margin-bottom: .156rem;
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
			.needyb-messag {
				height: 1.56rem;
				padding-left: .3rem;
				position: relative;
				display: flex;
				margin-bottom: .1rem;
				align-items: center;
				background: #fff;
				i {
					color: #ff8042;
					display: block;
					font-size: 0.38rem;
					position: relative;
					top: 1px;
					padding-right: 10px;
				}
				b {
					font-size: 0.38rem;
					font-weight: 600;
					width: 2.5rem;
					color: #333;
				}
				input {
					border: none;
					height: 100%;
					width: 55%;
					padding-left: .2rem;
					color: #999999;
					font-size: .375rem;
				}
				span {
					width: 2.5rem;
					height: 1.56rem;
					line-height: 1.56rem;
					display: block;
					position: absolute;
					font-size: 0.38rem;
					color: #9EA6BF;
					right: .32rem;
					top: 0;
					text-align: right;
				}
			}
		}
		.needyb-top {
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
		}
	}
</style>