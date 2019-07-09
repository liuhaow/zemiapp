<template>
	<div class="wraper">
		<div class="yi-nav">
			<h2 class="yic" :class="{yiright:ischoose}" @click="myneed">我要买</h2>
			<span></span>
			<h2 class="yic" :class="{yiright:!ischoose}" @click="mypush">我要卖</h2>
		</div>
		<div class="yi-list">
			<ul class="yigame yigamemai" v-show="ischoose">
				<li v-for='(item,index) in handlist' :data-id='item.id' @click="allgameQu(item.game_name,item.id,item.game_icon)">
					<img :src="item.game_icon" alt="" />
					<p>{{item.game_name}}</p>
				</li>

			</ul>
			<ul class="yigame yigamem" v-show="!ischoose">
				<li v-for='(item,index) in handlist' :data-id='item.id' @click="allgameQu(item.game_name,item.id,item.game_icon)">
					<img :src="item.game_icon" alt="" />
					<p>{{item.game_name}}</p>
				</li>
			</ul>
			<!--<div class="zimu">
				<img class="zimuLogo" src="../../assets/yibi/Flame@3x.png" alt="" />
				<div class="fangzhi">
					<ul class="zimu-ul">
						<li v-for='item in 26' @click="changLetter(String.fromCharCode((65 + (item-1))))">{{String.fromCharCode((65 + (item-1)))}}</li>
					</ul>
				</div>

			</div>-->
		</div>

	</div>
</template>

<script>
	import zimu from '@/views/yibi/zimu'
	import { mapGetters, mapActions } from 'vuex'
//	import { youxiBiall } from '@/api/api'
	import { Toast } from 'mint-ui';
	

	export default {
		props: ['handlist'],
		
		data() {
			return {
				ischoose: true,
				gamlist: ''
			}
		},
		mounted() {

//			youxiBiall().then(res => {
//				if(res.data.code == 200) {
//					this.gamlist = res.data.return_data
//				}else {
//					Toast({
//						message: res.data.msg,
//						iconClass: 'icon icon-error',
//						position: 'center',
//					});
//				}
//			})
		},
		computed: {
			...mapGetters({
				maisellzt: 'maisellzt'
			})
		},
		methods: {
			...mapActions(
				[
					'maisellztInfo','chooseyouxibinmae'

				]),
			changLetter(idt){
				
			},
			allgameQu(v, t, img) {
				let name = {
					name: v,
					id: t,
					img: img
				};
				this.chooseyouxibinmae(name)
				this.$router.push('/yibi/handbuy')

			},
			myneed() {

				this.maisellztInfo(3);
				this.ischoose = true;
			},
			mypush() {
				this.ischoose = false;
				this.maisellztInfo(4);
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.wraper {
		flex: 1;
		margin: .1rem 0 0;
		display: flex;
		flex-direction: column;
		width: 100%;
		background: #F4F4F4;
		.yi-nav {
			height: 1.375rem;
			width: 100%;
			background: #fff;
			display: flex;
			margin-bottom: 0.16rem;
			.yic {
				width: 48%;
				text-align: center;
				font-size: 0.44rem;
				color: #939EB8;
				line-height: 1.375rem;
			}
			.yiright {
				color: #4673EC!important;
			}
		}
		.yi-list {
			width: 100%;
			flex: 1;
			overflow: auto;
			background: #fff;
			.zimu {
				position: fixed;
				height: 11rem;
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 1rem;
				right: 0rem;
				top: 3rem;
				overflow: auto;
				z-index: 99;
				.zimuLogo {
					width: .44rem;
					height: .53rem;
					margin-bottom: .18rem;
				}
				.fangzhi {
					width: 100%;
					flex: 1;
					overflow: auto;
					padding-bottom: 1rem;
					.zimu-ul {
						width: 100%;
						height: 100%;
						li {
							font-size: .4rem;
							height: .72rem;
							line-height: .72rem;
							color: #999;
							text-align: center;
						}
					}
				}
			}
			.yigame {
				width: 95%;
				height: 100%;
				overflow: scroll;
				li {
					height: 2.5rem;
					float: left;
					width: 24%;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					margin: .3rem 0 0;
					img {
						height: 1.56rem;
						width: 1.56rem;
						border-radius: 0.156rem;
					}
					p {
						font-size: .38rem;
						width: 92%;
						text-align: center;
						color: #333;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}
			}
		}
	}
</style>