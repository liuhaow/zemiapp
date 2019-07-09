<template>
	<div class="messlist">
		<div class="messlist-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>消息</span>
		</div>
		<ul class="message-l">
			<li v-for='(item ,index) in shlist' data-id ='item.id'>
				<h1>{{item.title}}</h1>
				<p>{{item.centent}}</p>
				
				<h1>{{item.addtime}}</h1>
			</li>
			

		</ul>

	</div>
</template>

<script>
	import { getMessageInfo } from '@/api/api'
	import { mapGetters, mapActions } from 'vuex'

	export default {
		data() {
			return {
				shlist:''
			}
		},
		computed: {
			...mapGetters({
				user: 'getUserData'


			})
		},
		mounted() {
			let data = {
				userId : this.user.id,
				token: this.user.token,			             
			}
			getMessageInfo(data).then(res => {
				if(res.data.code == 200) {
					this.shlist = res.data.return_data;
					console.log(this.shlist)

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

			goback() {
				this.$router.replace('/message')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.messlist {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.messlist-top {
			height: 1.375rem!important;
			background: #fff!important;
			line-height: 1.375rem;
			color: #293653!important;
			font-size: .5rem;
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
		.message-l {
			flex: 1;
			overflow: scroll;
			li {

				background: #fff;
				box-sizing: border-box;
				padding: .32rem .32rem;
				margin-bottom: .1rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				p {
					font-size: 0.38rem;
					font-weight: 400;
					color: rgba(41, 54, 83, 1);
					margin: .32rem 0;
				}
				h1 {
					font-size: .38rem;
					font-weight: 400;
					color: rgba(41, 54, 83, 1);
				}
			}
		}
	}
</style>