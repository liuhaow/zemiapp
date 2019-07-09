import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'Home',
			component: resolve => require(['@/views/Home/Home'], resolve),
		},
		{
			path: '/home/jiazai',
			name: 'jiazai',
			component: resolve => require(['@/views/Home/jiazai'], resolve),
		},
		{
			path: '/my/login',
			name: 'login',			
			component: resolve => require(['@/views/Login'], resolve),
		},
		{
			path: '/my/register',
			name: 'register',			
			component: resolve => require(['@/views/register'], resolve),
		},
		{
			path: '/my/revise',
			name: 'revise',		
			component: resolve => require(['@/views/revise'], resolve),
		},
		{
			path: '/home/zhneed',
			name: 'zhneed',
			component: resolve => require(['@/views/Home/zhneed'], resolve),
		},
		{
			path: '/home/chongz',
			name: 'chongz',
			component: resolve => require(['@/views/Home/chongz'], resolve),
		},
		{
			path: '/yibi/issue',
			component: resolve => require(['@/views/issue/issue'], resolve),
		},
		{
			path: '/yibi/issdanbao',
			name: 'issdanbao',
			component: resolve => require(['@/views/issue/issdanbao'], resolve),
		},
		{
			path: '/yibi/handfs',
			name: 'handfs',
			component: resolve => require(['@/views/issue/handfs'], resolve),
		},
		{
			path: '/yibi/ybqs',
			name: 'ybqs',
			component: resolve => require(['@/views/yibi/qushi/yibibuyqushi'], resolve),
		},
		{
			path: '/yibi/ybsellqs',
			name: 'ybsellqs',
			component: resolve => require(['@/views/yibi/qushi/yibisellqushi'], resolve),
		},
		{
			path: '/yibi/assure',
			name: 'assure',
			component: resolve => require(['@/views/yibi/qushi/assure'], resolve),
		},
		{
			path: '/yibi/deposit',
			name: 'deposit',
			component: resolve => require(['@/views/yibi/qushi/deposit'], resolve),
		},
		{
			path: '/yibi/consign',
			name: 'consign',
			component: resolve => require(['@/views/yibi/qushi/consign'], resolve),
		},
		{
			path: '/yibi/alloder',
			name: 'alloder',
			component: resolve => require(['@/views/yibi/qushi/allding'], resolve),
		},
		
		{
			path: '/yibi/zbeigame',
			name:'zbeigame',
			component: resolve => require(['@/views/yibi/yibisell/zbeigame'], resolve),
		},
	
		{
			path: '/yibi/allgame',
			name:'allgame',
			component: resolve => require(['@/views/yibi/yibisell/allgame'], resolve),
		},
		{
			path: '/yibi/jicunall',
			name: 'jicunall',
			component: resolve => require(['@/views/yibi/yibisell/jicunall'], resolve),
		},

		{
			path: '/yibi/place',
			component: resolve => require(['@/views/place/place'], resolve),
		},
		{
			path: '/yibi/putbuy',
			component: resolve => require(['@/views/place/putbuy'], resolve),
		},
		{
			path: '/yibi/payinfo',
			component: resolve => require(['@/views/pay/payinfo'], resolve),
		},
		{
			path:'/my/mypay',
			name:'mypay',
			component: resolve => require(['@/views/pay/mypay'], resolve),
			
		},
		{
			path: '/yibi/payinfo/paysucc',
			name: 'paysucc',
			component: resolve => require(['@/views/pay/paysucc'], resolve),
		},
		{
			path: '/yibi',
			name: 'yibi',
			component: resolve => require(['@/views/yibi/yibi'], resolve),
		},
		{
			path: '/yibi/fabulous',
			name: 'fabulous',
			component: resolve => require(['@/views/issue/fabulous'], resolve),
		},
		{
			path: '/yibi/area',
			name: 'area',
			component: resolve => require(['@/views/area/area'], resolve),
		},
		{
			path: '/yibi/handbuyarea',
			name: 'handbuyarea',
			component: resolve => require(['@/views/area/handbuyarea'], resolve),
		},
		{
			path: '/yibi/yibiarea',
			name: 'yibiarea',
			component: resolve => require(['@/views/area/yibiarea'], resolve),
		},
		{
			path: '/yibi/yibijcun',
			name: 'yibijcun',
			component: resolve => require(['@/views/area/yibijcun'], resolve),
		},
		{
			path: '/yibi/netarea',
			name: 'netarea',
			component: resolve => require(['@/views/area/netarea'], resolve),
		},
		{
			path: '/yibi/handbuy',
			name: 'handbuy',
			component: resolve => require(['@/views/yibi/trade/handbuy'], resolve),
		},
		{
			path: '/yibi/tianxie',
			name: 'tianxie',
			component: resolve => require(['@/views/yibi/trade/tianxie'], resolve),
		},
		{
			path: '/yibi/nettianxie',
			name: 'nettianxie',
			component: resolve => require(['@/views/yibi/trade/netmessage'], resolve),
		},
		{
			path: '/yibi/secondt',
			name: 'secondt',
			component: resolve => require(['@/views/yibi/trade/second'], resolve),
		},
		{
			path: '/yibi/netbuy',
			name: 'netbuy',
			component: resolve => require(['@/views/yibi/trade/netbuy'], resolve),
		},
		{
			path: '/yibi/needyb',
			name: 'needyb',
			component: resolve => require(['@/views/yibi/need/needyb'], resolve),
		},
		{
			path: '/yibi/needsell',
			name: 'needsell',
			component: resolve => require(['@/views/yibi/need/needsell'], resolve),
		},
		{
			path: '/yibi/detailist',
			name: 'detailist',
			component: resolve => require(['@/views/yibi/trade/detailist'], resolve),
		},
		{
			path: '/yibi/detail',
			name: 'detail',
			component: resolve => require(['@/views/yibi/trade/detail'], resolve),
		},
		{
			path: '/yibi/seach',
			name: 'seach',
			component: resolve => require(['@/components/search'], resolve),
		},
		{
			path: '/message',
			name: 'Message',
			component: resolve => require(['@/views/message/message'], resolve),
		},
		{
			path: '/message/messagelist',
			name: 'messagelist',
			component: resolve => require(['@/views/message/meagelist'], resolve),
		},
		{
			path: '/my',
			name: 'My',
			component: resolve => require(['@/views/my/mine'], resolve),
		},
		{
			path: '/my/mine',
			name: 'mine',
			component: resolve => require(['@/views/my/amend'], resolve),
		},
		{
			path: '/my/mymony/tiqulist',
			name: 'tiqulist',
			component: resolve => require(['@/views/my/tiqucurrency/tiqu'], resolve),
		},
		{
			path: '/my/shouyi',
			name: 'shouyi',
			component: resolve => require(['@/views/my/tiqucurrency/shouyi'], resolve),
		},
		{
			path: '/my/mymony/tiqulist/tiqu',
			name: 'tiqu',
			component: resolve => require(['@/views/my/tiqucurrency/currency'], resolve),
		},
		{
			path: '/my/buysuc',
			name: 'buysuc',
			component: resolve => require(['@/views/my/buysuc/buysucc'], resolve),
		},
		{
			path: '/my/buydetail',
			name: 'buydetail',
			component: resolve => require(['@/views/my/buysuc/detail/buydetail'], resolve),
		},
		{
			path: '/my/selldetail',
			name: 'selldetail',
			component: resolve => require(['@/views/my/buysuc/detail/selldetail'], resolve),
		},
		{
			path: '/my/pubdetail',
			name: 'pubdetail',
			component: resolve => require(['@/views/my/buysuc/detail/pubdetail'], resolve),
		},
		{
			path: '/my/sellsuc',
			name: 'sellsuc',
			component: resolve => require(['@/views/my/buysuc/sellsucc'], resolve),
		},
		{
			path: '/my/publish',
			name: 'publish',
			component: resolve => require(['@/views/my/fabu/publish'], resolve),
		},
		{
			path: '/my/setting',
			component: resolve => require(['@/views/my/settin/setting'], resolve),
		},
		{
			path: '/my/chphone',
			name: 'chphone',
			component: resolve => require(['@/views/my/msgag/chphone'], resolve),
		},
		{
			path: '/my/chpnc',
			name: 'chpnc',
			component: resolve => require(['@/views/my/msgag/chpnc'], resolve),
		},
		{
			path: '/my/chpassw',
			name: 'chpassw',
			component: resolve => require(['@/views/my/msgag/chpassw'], resolve),
		},
		{
			path: '/my/setting/about',
			component: resolve => require(['@/views/my/about/about'], resolve),
		},
		{
			path: '/my/mymony',
			component: resolve => require(['@/views/my/chongzhi/mymony'], resolve),
		},
		{
			path: '/my/mymony/runwater',
			name: 'runwater',
			component: resolve => require(['@/views/my/chongzhi/runwater'], resolve),
		},
		{
			path: '/my/mymony/recharge',
			component: resolve => require(['@/views/my/chongzhi/recharge'], resolve),
		},
		{
			path: '/my/collect',
			component: resolve => require(['@/views/my/collect'], resolve),
		},
		{
			path: '/my/approve',
			component: resolve => require(['@/views/my/approve'], resolve),
		},
		{
			path: '/my/feedback',
			component: resolve => require(['@/views/my/feedback'], resolve),
		},
		{
			path: '/my/detailoder',
			name: 'detailoder',
			component: resolve => require(['@/views/my/buysuc/detailOder'], resolve),
		},

		{
			path: '*',
			name: 'notfound',
			component: resolve => require(['@/components/NotFound'], resolve),
		},

	]
})