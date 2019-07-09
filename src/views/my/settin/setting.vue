<template>
	<div class="settinginfo">
		<div class="settinginfo-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>设置</span>
		</div>
		<ul class="settings">
			<li class="setting" @click="changePhone">
				<span>更换手机号</span>
				<i class="iconfont">&#xe6ab;</i>
			</li>
			<li class="setting" @click="changepassw">
				<span>修改密码</span>
				<i class="iconfont">&#xe6ab;</i>
			</li>
			<li class="setting" @click="changepnc">
				<span>修改昵称</span>
				<i class="iconfont">&#xe6ab;</i>
			</li>
			<li class="setting" @click="AboutUs">
				<span>关于我们</span>
				<i class="iconfont">&#xe6ab;</i>
			</li>
			<li @click="detailInfo">
				<span>清除缓存</span>
				<span>{{huan}}</span>
			</li>
		</ul>
		<div class="settinginfo-btn">
			<button @click="signOut">点此退出登录</button>

		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	export default {
		data() {
			return {
				huan:''
			};
		},
		methods: {
			...mapActions({
				userOut: "setSignOut"
			}),
			signOut() {
				this.userOut();
				this.$router.push('/my/login')
				
			},
			goback() {
				this.$router.go(-1)
			},
			detailInfo(){
				this.huan =''
			},
			changePhone(){
				this.$router.push('/my/chphone')
				
			},
			changepassw(){
				this.$router.push('/my/chpassw')
				
			},
			AboutUs(){
				this.$router.push('/my/setting/about')
				
			},
			changepnc(){
				this.$router.push('/my/chpnc')
				
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.settinginfo {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.settinginfo-btn {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 1.41rem;
			button {
				width: 70%;
				height: 1.41rem;
				line-height: 1.41rem;
				text-align: center;
				font-size: 0.56rem;
				background: #939EB8;
				border-radius: 0.156rem;
				border: 0;
				color: #fff;
			}
		}
		.settings {
			margin-bottom: 1.5rem;
			li {
				height: 1.56rem;
				display: flex;
				align-items: center;
				justify-content: space-between;
				background: #fff;
				margin-bottom: .05rem;
				padding: 0 .3rem;
				span {
					font-size: .44rem;
					color: #000;
				}
				i{
					font-size: 1rem;
					color:#DDDDDD ;
				}
			}
		}
		.settinginfo-top {
			height: 1.375rem!important;
			background: #fff!important;
			line-height: 1.375rem;
			color: #293653!important;
			font-size: .56rem;
			margin-bottom: .1rem;
			position: relative;
			text-align: center;
			span {
				font-weight: 600;
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