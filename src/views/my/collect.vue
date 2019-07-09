<template>
	<div class="collect" >
		<div class="collect-top">
			<i class="iconfont iconfanhui" @click="goback"></i> 
			<span>我的收藏</span>
			<span class="collect-clear">清空</span>
		</div>
		
		<ul class="collect-list">
			<li v-for='(item,index) in colectlist'  @click="tiaoxiangqing(item.guanlian_id)">
				<img :src="item.pic"/>
				<div class="collect-l">
					<p>{{item.title}}</p>
					<p>&yen;{{item.price}}</p>

				</div>
			</li>
			
		</ul>
	</div>
</template>

<script>
	import { myCollectData} from '@/api/mine'
	import { mapGetters, mapActions } from 'vuex'
	
	
	export default {
		data() {
			return {
				colectlist:''
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
			myCollectData(parem).then(res => {
				if(res.data.code == 200) {
					console.log(res.data)
					this.colectlist = res.data.return_data
				}

			})
		},
		methods: {
			...mapActions(
				[
					'buydtscInfo'

				]),
			goback() {
				this.$router.back(-1)
			},
			tiaoxiangqing(idt){
				this.buydtscInfo(idt)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.collect {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.collect-list{
			flex: 1;
			overflow: scroll;
			li{
				height: 2.2rem;
				background: #fff;
				display: flex;
				box-sizing: border-box;
				padding-left: .32rem;
				align-items: center;
				margin-bottom: .032rem;
				img{
					height: 1.875rem;
					width: 1.875rem;
					margin-right: .32rem;
				}
				.collect-l{
					height: 1.6rem;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
				}
				.collect-l p:nth-child(1){
					font-size: .44rem;
					color: #333;
				}
				.collect-l p:nth-child(2){
					font-size: .44rem;
					color: #EC6941;
				}
				.collect-l p:nth-child(3){
					font-size: .38rem;
					color: #999;
				}
			}
		}
		.collect-top {
			height: 1.375rem!important;
			background: #fff!important;
			line-height: 1.375rem;
			color: #293653!important;
			font-size: .56rem;
			margin-bottom: .1rem;
			position: relative;
			text-align: center;
			.collect-clear{
				position: absolute;
				width: 2rem;
				height: 1.375rem;
				top: 0.05rem;
				right: 0;
				font-size: .44rem;
				color: #4673EC;
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