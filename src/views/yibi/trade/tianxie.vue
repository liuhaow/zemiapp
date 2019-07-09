<template>
	<div class="consign">
		<div class="consign-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>填写商品信息</span>
		</div>
		<div class="game-area">
			<h1 class="commen-sty">游戏区服</h1>
			<p><span>{{qufu.qu}}</span><span>{{qufu.fu}}</span></p>
		</div>
		<div class="game-area">
			<h1 class="commen-sty">商品类型</h1>
			<p>账号</p>
		</div>
		<div class="rolepelo">
			<h1 class="commen-sty"><i>*</i>商品标题</h1>
			<input type="" v-model='title' placeholder="请勿留下联系方式" />
		</div>
		<div class="rolepelo">
			<h1 class="commen-sty"><i>*</i>出售价格</h1>
			<input type="number" v-model='alonenub' placeholder="出售数量不得低于2000万" />元
		</div>
		<div class="rolepelo">
			<h1 class="commen-sty">强势英雄</h1>
			<p>qingxuannz</p>
		</div>
		<div class="xiyou">
			<p>稀有皮肤(多选)</p>
			<ul>
				<li></li>
			</ul>
		</div>
		<div class="rolepelo">
			<h1 class="commen-sty"><i>*</i>账号绑定(多选)</h1>
			<ul>
				<li></li>
			</ul>

		</div>
		<div class="rolepelo">
			<h1 class="commen-sty"><i>*</i>英雄个数</h1>
			<input type="number" v-model='pices' placeholder="请输入英雄个数" />
		</div>
		<div class="rolepelo">
			<h1 class="commen-sty"><i>*</i>皮肤个数</h1>
			<input type="number" v-model='jians' placeholder="请输入皮肤个数" />件
		</div>
		<div class="rolepelo">
			<h1 class="commen-sty"><i>*</i>5级铭文个数</h1>
			<input type="number" v-model='zhangh' placeholder="请输入5级铭文个数" />
		</div>
		<div class="rolepelo">
			<h1 class="commen-sty"><i>*</i>守护平台</h1>
			<p></p>
		</div>
		<div class="rolepelo">
			<h1 class="commen-sty"><i>*</i>防沉迷设置</h1>
			<input type="password" v-model='role' placeholder="请再次输入密码" />
		</div>
		<div class="rolepelo">
			<h1 class="commen-sty"><i>*</i>至尊宝绑定</h1>
			<p>请选择</p>
		</div>
		<div class="rolepelo">
			<h1 class="commen-sty"><i>*</i>游戏账号</h1>
			<input type="number" v-model='second' placeholder="请输入游戏账号" />
		</div>
		<div class="rolepelo">
			<h1 class="commen-sty"><i>*</i>游戏密码</h1>
			<input type="number" v-model='ckmma' placeholder="请输入游戏密码" />
		</div>
		<div class="rolepelo">
			<h1 class="commen-sty"><i>*</i>游戏角色名</h1>
			<input type="" v-model='anhao' placeholder="请输入游戏角色名" />
		</div>
		<div class="rolepelo">
			<h1 class="commen-sty"><i>*</i>角色等级</h1>
			<input type="" v-model='anhao' placeholder="请输入角色等级" />
		</div>
		<div class="miaos">
			<h1 class="commen-sty"><i>*</i>角色等级</h1>
			<textarea name="" rows="" cols=""></textarea>
		</div>
		<div class="miaos">
			<h1 class="commen-sty"><i>*</i>图片上传</h1>
		</div>
		<div class="consign-btn">
			<p>我们承诺：您提交的帐号资料经过系统加密，绝不外泄， 请放心填写！</p>

			<button @click="nextbuInfo">下一步</button>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	
	export default {
		data() {
			return {
				role: '',
				title: '',
				alonenub: '',
				pices: '',
				jians: '',
				zhangh: '',
				second: '',
				gname: '',
				ckmma: '',
				Email: '邮件交易',
				mibao: 'QQ令牌',
				anhao: ''
			}
		},
		computed: {
			...mapGetters({
				qufu: 'sellfu'
			})
		},
		methods: {
			...mapActions({
				dquInfo: "detaquInfo"
			}),
			goback() {
				this.dquInfo();
				this.$router.go(-1)
			},
			nextbuInfo() {
				this.$router.push('/yibi/issue')				
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.consign {
		background: #F4F4F4;
		display: flex;
		flex: 1;
		flex-direction: column;
		height: 100%;
		div {
			.commen-sty {
				width: 3rem;
				font-size: 0.38rem;
				color: #333;
				padding-left: .32rem;
				font-weight: 500;
				display: flex;
				align-items: center;
				i {
					color: #ff8042;
					display: block;
					font-size: 0.44rem;
					position: relative;
					top: 1px;
					padding-right: .1rem;
				}
			}
		}
		.consign-btn {
			display: flex;
			flex-direction: column;
			align-items: center;
			p {
				font-size: .38rem;
				color: #9EA6BF;
				width: 90%;
				padding: .32rem 0;
				margin: 0 auto;
			}
			h2 {
				font-size: .38rem;
				color: #9EA6BF;
				width: 80%;
				margin: 0 auto 1rem;
			}
			button {
				width: 80%;
				height: 1.41rem;
				line-height: 1.41rem;
				text-align: center;
				font-size: 0.56rem;
				background: #4673EC;
				margin: 0 auto .5rem;
				border-radius: 0.64rem;
				border: 0;
				color: #fff;
			}
		}
		.miaos {
			height: 3rem;
			color: red;
			display: flex;
			flex-direction: column;
			margin-bottom: .1rem;
			background: #fff;
			font-size: .38rem;
			input {
				height: 1.4rem;
				width: 55%;
				line-height: 1.4rem;
				margin-right: .2rem;
				border: 0;
				color: #434343;
				font-size: .38rem;
				margin-left: .2rem;
			}
		}
		.rolepelo {
			height: 1.56rem;
			display: flex;
			align-items: center;
			margin-bottom: .1rem;
			background: #fff;
			font-size: .38rem;
			input {
				height: 1.4rem;
				width: 55%;
				line-height: 1.4rem;
				margin-right: .2rem;
				border: 0;
				color: #434343;
				font-size: .38rem;
				margin-left: .2rem;
			}
		}
		.game-area {
			display: flex;
			height: 1.56rem;
			align-items: center;
			margin-bottom: .1rem;
			background: #fff;
			p {
				width: 70%;
				font-size: 0.44rem;
				color: #333;
				text-align: right;
				margin-right: .4rem;
				font-weight: 400;
			}
		}
		.consign-top {
			height: 1.375rem;
			background: #fff;
			line-height: 1.375rem;
			color: #000;
			font-size: .56rem;
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
				font-size: .44rem;
				color: #4673EC;
				top: 0;
				right: 0;
			}
		}
	}
</style>