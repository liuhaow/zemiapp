<template>
	<div class="mian-footer">
		<div class="sclor m-f-t">
			<h2>
				<span></span><b>热门手游</b></h2>
			<ul>
				<li v-for="item in handlist" @click="shouhandbuy">
					<div>
						<img :src='item.game_icon' />
						<span>{{item.game_name}}</span>
					</div>
				</li>

			</ul>
		</div>
		<div class="sclor m-f-b">
			<h2>
				<span></span><b>热门端游</b></h2>
			<ul>
				<li v-for="item in netlist" @click="duanyoubuy(item.game_name,item.id,item.game_icon)">
					<div>
						<img :src='item.game_icon' />
						<span>{{item.game_name}}</span>
					</div>

				</li>

			</ul>

		</div>

	</div>
</template>
<script>
	import { mapActions } from "vuex";

	export default {
		props: ['handlist', 'netlist'],
		data() {
			return {

			}
		},
		methods: {
			...mapActions(
				[
					'chooseyouxibinmae'
				]
			),
			duanyoubuy(na, iud, idm) {
				let name = {
					name: na,
					id: iud,
					img: idm
				};
				this.chooseyouxibinmae(name)
				this.$router.push('/yibi/netarea')
			},
			shouhandbuy() {
				this.$router.push('/yibi/handbuy')

			}
		}
	}
</script>
<style lang="stylus" scoped>
	.mian-footer {
		margin-bottom: 1.5rem;
		.sclor {
			width: 100%;
			height: 4.2rem;
			background: #fff;
			margin: .2rem 0;
			h2 {
				width: 95%;
				height: 1rem;
				margin: 0 auto;
				font-size: .38rem;
				align-items: center;
				display: flex;
				align-items: center;
				color: #666666;
				span {
					width: .05rem;
					height: 0.4rem;
					margin-right: .32rem;
					display: block;
					background: #466EEB;
				}
			}
			ul {
				height: 3rem;
				overflow-x: auto;
				white-space: nowrap;
				width: auto;
				margin: 0 auto;
				overflow-x: auto;
				li {
					display: inline-block;
					width: 2.8rem;
					height: 2.8rem;
					margin: 0 .1rem;
					border: .032rem solid #F2F2F2;
					div {
						width: 2.8rem;
						height: 2.8rem;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						img {
							width: 1.88rem;
							height: 1.88rem;
							margin-bottom: .125rem;
							border-radius: .1rem;
						}
						span {
							font-size: .35rem;
							color: #666;
							margin-top: .064rem;
						}
					}
				}
			}
		}
	}
</style>