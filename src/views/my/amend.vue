<template>
	<div class="amend">
		<div class="amend-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>编辑资料</span>
			<i class="amend-preserve">保存</i>
		</div>
		<div class="amend-info">
			<ul>
				<li>
					<span>头像</span>
					<div class="amend-info-img">
						<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess">
							<img v-if="imageUrl" :src="imageUrl" class="avatar">
							<i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
					</div>
				</li>
				<li>
					<span>昵称</span>
					<input type="text" class="nicheng" v-model="nickname" placeholder="请输入昵称" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				imageUrl: '',
				nickname:''
			}
		},
		methods: {

			goback() {
				this.$router.replace('/my')
			},
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
		}
	}
</script>

<style lang="stylus" scoped>
	.amend {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.amend-info {
			ul {
				li {
					height: 2.03rem;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 .3rem;
					background: #fff;
					margin-bottom: .1rem;
					span {
						font-size: .44rem;
						color: #000;
						font-weight: 600;
					}
					.nicheng{
						border: 0;
						color: #000;
						font-size: .44rem;
						text-align: center;
						height: 100%;
					}
					.amend-info-img {
						height: 1.56rem;
						width: 1.56rem;
						border-radius: 50%;
						border: .032rem solid #ccc;
						.avatar-uploader {
							height: 1.56rem;
							width: 1.56rem;
							border-radius: 50%;
							display: flex;
							align-items: center;
							justify-content: center;
							.el-upload {
								height: 1.56rem;
								width: 1.56rem;
								border-radius: 50%;
								display: flex;
								align-items: center;
								justify-content: center;
								.avatar {
									height: 1.56rem;
									width: 1.56rem;
									border-radius: 50%;
								}
							}
						}
					}
				}
			}
		}
		.amend-top {
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