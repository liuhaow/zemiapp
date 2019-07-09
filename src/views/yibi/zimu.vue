<template>
	<div class="zimu">
		<img class="zimuLogo" src="../../assets/yibi/Flame@3x.png" alt="" />
		<div class="fangzhi">
			<ul class="zimu-ul">
				<li v-for='item in 26' @click="changLetter(String.fromCharCode((65 + (item-1))))">{{String.fromCharCode((65 + (item-1)))}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			changLetter(t){
				console.log(t)
			}
		},
	}
</script>

<style lang="stylus" scoped>
	.zimu {
		position: fixed;
		height: 11rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: .8rem;
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
</style>