<template>
	<div class="allnetgame">
		<div class="allnetgame-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>所有游戏</span>
		</div>
		<div class="allnetgame-list">
			<ul class="game-list">
				<li v-for='(item,index) in gamlist' :data-id='item.id' @click="allgameQu(item.game_name,item.id,item.game_icon)">
					<img :src="item.game_icon" alt="" />
					<p>{{item.game_name}}</p>
				</li>

			</ul>
			<div class="zimu">
				<img class="zimuLogo" src="../../../assets/yibi/Flame@3x.png" alt="" />
				<div class="fangzhi">
					<ul class="zimu-ul">
						<li v-for='item in 26' @click="changLetter(String.fromCharCode((65 + (item-1))))">{{String.fromCharCode((65 + (item-1)))}}</li>
					</ul>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import {youxiBiall} from '@/api/api'
	import { mapActions } from "vuex";
	
	
	export default {
		data() {
			return {
				gamlist:''
			}
		},
		mounted() {
		
			youxiBiall().then(res=> {
				if(res.data.code == 200){
					this.gamlist = res.data.return_data				
				}
			})			
		},
		methods: {
			...mapActions(
				[
					'chooseyouxibinmae','maisellztInfo'
				]
			),
			goback() {
				this.$router.go(-1)
			},
			changLetter(t) {
				console.log(t)
			},
			allgameQu(v,t,img) {	
				this.maisellztInfo(0)
				let name = {
					name:v,
					id:t,
					img:img,
					jicun:1
				};
				this.chooseyouxibinmae(name)
				this.$router.push('/yibi/yibijcun')

			}
		}
	}
</script>

<style lang="stylus" scoped>
	.allnetgame {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		/**/
		bottom: 0;
		right: 0;
		.allnetgame-list {
			flex: 1;
			margin-top: .1rem;
			overflow: scroll;
			background: #fff;
			.game-list {
				width: 90%;
				height: 100%;
				overflow: scroll;
				padding: .3rem 0 0;
				box-sizing: border-box;
				li {
					height: 2.6rem;
					margin-bottom: .2rem;
					float: left;
					width: 25%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					margin-bottom: .2rem;
					img {
						height: 1.56rem;
						width: 1.56rem;
						border-radius: 0.156rem;
						margin-bottom: .2rem;
					}
					p {
						font-size: .38rem;
						width: 100%;
						text-align: center;
						color: #333;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}
			}
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
		}
		.allnetgame-top {
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
				width: 1.5rem;
				height: 1.375rem;
				font-size: .38rem;
				color: #4673EC;
				top: 0;
				right: 0;
			}
		}
	}
</style>