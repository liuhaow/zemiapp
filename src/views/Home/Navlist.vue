<template>
	<div class="main-nav">
		<ul class="main-nav-ul">
			<li to='/login'>
				<div class="">
					<router-link to='/yibi/allgame'>
						<img src="../../assets/main/youxibihongbaofudai@3x.png" />
						<span>游戏币</span>
					</router-link>
				</div>

			</li>
			<li>
				<div class="">
					<router-link to='/yibi'>
						<img src="../../assets/main/accountnumber@3x.png" />
						<span>账号</span>
					</router-link>
				</div>
			</li>

			<li>
				<div class="">
					<router-link to='/yibi'>
						<img src="../../assets/main/zhuangbei@3x.png" />
						<span>装备</span>
					</router-link>
				</div>
			</li>

			<li>
				<div class="">
					<router-link to='/home/chongz'>
						<img src="../../assets/main/ca62a3a5a8c2dfd46bb087bb90afdf7.png" />
						<span>充值</span>
					</router-link>
				</div>
			</li>

		</ul>
	</div>
</template>

<script>
</script>
<style lang="stylus" scoped>
	.main-nav {
		height: 2.8rem;
		width: 100%;
		background: #fff;
		.main-nav-ul {
			width: 100%;
			height: 100%;
			display: flex;
			li {
				width: 25%;
				height: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				div {
					display: flex;
					flex-direction: column;
					width: 100%;
					height: 100%;
					a {
						display: block;
						display: flex;
						flex-direction: column;
						width: 100%;
						height: 100%;
						align-items: center;
						justify-content: center;
					}
					img {
						width: 1.5rem;
						height: 1.5rem;
						margin-bottom: .31rem;
					}
					span {
						font-size: .38rem;
						color: #666666;
					}
				}
			}
		}
	}
</style>