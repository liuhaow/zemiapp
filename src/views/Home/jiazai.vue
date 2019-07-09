<template>
	<section class="outer_container">
	    <section class="siteIndex inner_container">
			<section>
				<div v-for="(item,index) in 50" :key="index" :id="index" class="item flex">
					<div class="info">
						<router-link :to="{path:'/article/'+item.id}">
							<h2 class="title" v-html="item.title"></h2>
						</router-link>
						<div class="flex">
							<div>
								<span class="hot" v-if="item.isHot">置顶</span>
								<span class="type">{{item.category}}</span>
							</div>
							<span class="collectNum">浏览量{{item.hits}}</span>
						</div>
					</div>
					<div class="img-responsive">
						<img v-if="item.image" onclick="return false;" :src="item.image" />
						<img v-else onclick="return false;" src="" />
					</div>
				</div>
			</section>
		</section>
	</section>
</template>
<script>

	export default {
		data() {
			return {
				dataList:[],
				limit:10,
				offset:1,
				loading:false
			}
		},
		mounted:function(){
			this.loadArticle()
			window.addEventListener('scroll',()=>{
				this.toBottom()
			})
		},
		methods: {
			toBottom(){
				let scrollH = document.body.scrollTop||document.documentElement.scrollTop;
				var docH,windowH;//滚动条滚动高度
				docH = document.body.scrollHeight||document.documentElement.scrollHeight;//文档高度
				windowH = window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight;//浏览器窗口高度
				if(scrollH + windowH >= docH&&!this.loading){//滚动到底部和页面没有正在执行请求网络数据的过程中的条件要同时成立才可以执行请求请求数据操作
					this.loadArticle()
				}
			},
			loadArticle(){

				console.log(1)
//				this.$axios.get('/api/article/recommend', {
//					params: {
//						offset: this.offset,
//						limit: this.limit
//					}
//				})
//				.then((response) => {
//			        let list = response.data.list;
//					this.dataList = this.dataList.concat(list)
//					this.offset = this.offset +this.limit;
//					if(list.length == this.limit){//判断返回数据条数是不是等于需要请求的数据，不等则不再继续加载数据，显示数据已经没有更多了
//						this.loading = false;
//					}
//					// 数据渲染成功后,隐藏下拉刷新的状态
//					this.$nextTick(() => {
//					})
//				})
//				.catch((e) => {
//				})
			}
		},
	}
</script>

<style scope >
	@af: 7.5vw;
	.outer_container{width: 1000px;margin: 0 auto; position: relative;}
	.siteIndex {width: 1000px;margin: 0 auto;}
	.slideWrapper{background: #fafafa;}
	.slideWrapper .banner{padding: 30/@af;}
	.swiper-pagination-bullet {width: 12px;height: 4px;border-radius: 0;background: #666;}
	.swiper-pagination-bullet-active {background: #C43026;}
	
	.swiper-slide { width: auto; }
	.nodata{background: #eee;color: #333;
		img{max-width: 160/@af;}
		h3{font-size: 32/@af;line-height: 2;}
		h5{font-size: 24/@af;padding-bottom: 20/@af;font-weight: normal;}
	}
</style>
