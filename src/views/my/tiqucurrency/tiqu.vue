<template>
	<div class="tiquinfo">
		<div class="tiquinfo-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>提取</span>
		</div>
		<ul class="tiquinfo-list">
			<li v-for='(item,index) in tiqulist'>
				<div class="tiquinfo-img">
					<img :src="item.game_icon" alt="" />
					<div class="tiquinfo-img-p">
						<p>{{item.game_name}}</p>
						<p>{{item.price}}<span>手续费<i>{{item.shouxufei}}</i>元</span> </p>
					</div>
				</div>
				<button class="tiquinfobtn" @click="tiquyouxibi(item.game_id, item.amount, item.game_area_id, item.game_name, item.price, item.id ,item.game_area_name)">提取</button>
			</li>

		</ul>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { extractData } from '@/api/mine'

	export default {
		data() {
			return {
				tiqulist: ''
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
			extractData(parem).then(res => {
				if(res.data.code == 200) {
					console.log(res.data)
					this.tiqulist = res.data.return_data
				}

			})

		},
		methods: {
			...mapActions(
				[
					'JcunTiQu'
				]),
			goback() {
				this.$router.back(-1)
			},
			tiquyouxibi(a, b, c, d, e, f, g) {
				console.log(a, b, c, d, e, f, g)
				let data = {
					gameId: a,
					amount: b,
					gameAreaId: c,
					game_name: d,
					price: e,
					jicunId: f,
					qufu: g
				}
				this.JcunTiQu(data)

				this.$router.replace('/my/mymony/tiqulist/tiqu')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.tiquinfo {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.tiquinfo-list {
			flex: 1;
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
				.tiquinfobtn {
					width: 2.2rem;
					height: .94rem;
					border: 0;
					background: #6CA0FC;
					font-size: .44rem;
					color: #fff;
					border-radius: .16rem;
				}
				.tiquinfo-img {
					display: flex;
					align-items: center;
					height: 1.41rem;
					img {
						height: 1.41rem;
						width: 1.41rem;
					}
					.tiquinfo-img-p {
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
		.tiquinfo-top {
			height: 1.375rem!important;
			background: #fff!important;
			line-height: 1.375rem;
			color: #293653!important;
			font-size: .56rem;
			margin-bottom: .1rem;
			position: relative;
			text-align: center;
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