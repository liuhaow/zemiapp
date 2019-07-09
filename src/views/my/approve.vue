<template>
	<div class="approve">
		<div class="approve-top">
			<i class="iconfont iconfanhui" @click="goback"></i> 实名认证
		</div>
		<div class="approve-name">
			<p>真实姓名</p>
			<input type="" placeholder="请输入真实姓名" v-model="namen" name="" id="" value="" />
		</div>
		<div class="approve-name">
			<p>证件号</p>
			<input type="text" v-model="papers" placeholder="身份证/护照号" name="" id="" value="" />
		</div>

		<div class="approve-uplode">
			<p><span>手持证件照</span></p>
			<div class="photosLode">
				<img :src="imageUrl" class="img-avatar">
				<input type="file" name="avatar" id="uppic" accept="" @change="changeImage($event)" ref="avatarInput" class="uppic">
			</div>

			<h2>请上传本人手持证件照片，要求面部清晰无遮挡，同时证件照片及号码清晰可辨认。</h2>
		</div>

		<div class="present">
			<button @click="butn">提交</button>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import { uplode } from '@/api/mine'
	import { Toast } from 'mint-ui';
	import { mapGetters, mapActions } from 'vuex'

	export default {
		data() {
			return {
				namen: '',
				papers: '',
				imageUrl: 'http://img3.imgtn.bdimg.com/it/u=3647982069,2607476452&fm=26&gp=0.jpg'
			}
		},
		computed: {
			...mapGetters({
				user: 'getUserData'
			})
		},
		methods: {
			changeImage(e) {
				var that = this
				var file = e.target.files[0]
				var reader = new FileReader()
				reader.readAsDataURL(file)
				reader.onload = function(e) {
					console.log(e)
					that.imageUrl = this.result
					let tt = this.result
					console.log(tt)
					let data = {
						base64img: tt
					}
					uplode(data).then(res => {
						console.log(res)
					})
				}

			},
			goback() {
				this.$router.back(-1)
			},
			butn() {
				var img = this.imageUrl
				let data = {
					base64img: img
				}
				  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
				  if(!reg.test(this.papers)){
				  	Toast({
							message: "证件号输入不正确",
							iconClass: 'icon icon-error',
							position: 'center',
						});
						return
				  }
				uplode(data).then(res => {
					console.log(res)
				})
				let parm = {
					token: this.user.token,
					userId: this.user.id,
					realName: this.namen,
					idCardNo: this.papers,
					idCard_Z: '',
					idCard_F: ''
				}

			}
		}
	}
</script>

<style lang="stylus" scoped>
	.approve {
		background: #F4F4F4;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.present {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 1.41rem;
			margin-top: 1rem;
			button {
				background: rgba(70, 115, 236, 1);
				border-radius: 10px;
				height: 1.41rem;
				width: 85%;
				border: 0;
				font-size: 0.56rem;
				color: #fff;
			}
		}
		.approve-uplode {
			width: 90%;
			height: 5.6rem;
			margin: 0 auto;
			p {
				font-size: .38rem;
				color: #000;
				margin-bottom: .1rem;
			}
			.photosLode {
				height: 4.5rem;
				width: 100%;
				margin: 0.3rem auto;
				border: 0.01rem solid #ededed;
				position: relative;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				img {
					position: absolute;
					width: 100%;
					height: 100%
				}
				.uppic {
					height: 100%;
					width: 100%;
					margin: 0 auto;
					opacity: 0;
					z-index: 99999;
				}
			}
			.photosLode img {
				height: 100%;
				width: 100%;
			}
			h2 {
				font-size: .38rem;
				color: #666;
				line-height: .56rem;
				margin: .12rem 0;
			}
			.avatar-uploader {
				width: 100%;
				height: 80%;
				background: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				.el-upload {
					height: 1.68rem!important;
					width: 100%;
					i {
						font-size: .9rem;
					}
				}
			}
		}
		.approve-name {
			width: 90%;
			margin: .32rem auto;
			p {
				font-size: .38rem;
				color: #000;
				margin-bottom: .1rem;
			}
			input {
				height: 1.25rem;
				line-height: 1.25rem;
				font-size: .38rem;
				box-sizing: border-box;
				width: 100%;
				color: #000;
				padding-left: .32rem;
			}
		}
		.approve-top {
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