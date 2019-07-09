// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import echarts from 'echarts'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui';
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import '@/common/stylus/index.styl'
import '@/common/stylus/reset.css'
import '@/common/font/iconfont.css'
import 'lib-flexible'

Vue.use(MintUI)
Vue.use(ElementUI);

Vue.prototype.$ajax = axios
Vue.config.productionTip = false

Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
	// NProgress.start();
	if(to.path == '/my/login') {
		localStorage.removeItem('userData');
		localStorage.removeItem('tokenId');	
	}
	let tokenId = JSON.parse(localStorage.getItem('tokenId'));
	if(!tokenId && to.path != '/my/login') {
		next({
			path: '/my/login'
		})
	} else {
		next()
	} //默认可选择暂时不登录
	next()
})

new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>',
	store
})