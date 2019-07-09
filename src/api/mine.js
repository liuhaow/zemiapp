import Axios from './request'

let tet = {
	v:'v.1.1',
	test:'Test.Test'
}
//个人中心默认数据
export const mineMeInfo = data => Axios({
	url: '/UCenter/getUserData/'+tet.v+'/'+tet.test+'/'+data.token+'/'+data.userId+'/1',
	method: 'get',
	data
})
//我是买家订单
export const getBuyALlInfo = data => Axios({
	url:'/UCenter/getBuyOrderList/'+tet.v+'/'+tet.test+'/'+data.token+'/'+data.userId+'/10/0/'+data.getStatus+'/1',
	method:'get',
	data
})

//买家取消担保订单
export const buyQuxiaodbInfo = data => Axios({
	url:'/UCenter/cancelBuyGameDanbaoJishouGoldOrder',
	method: 'post',
	data
})

//买家取消支付自动匹配金币订单
export const buyzyAutoMatchInfo = data => Axios({
	url:'/UCenter/cancelBuyAutoMatchGoldOrder',
	method: 'post',
	data
})

//买家确定担保交易收货
export const makeSureOder = data => Axios({
	url:'/UCenter/confirmBuyGameDanbaoJishouGoldOrder',
	method:'post',
	data
})
//买家确定自动匹配交易收货
export const makeSureZDOder = data => Axios({
	url:'/UCenter/confirmBuyAutoMatchGoldOrder',
	method:'post',
	data
})


//买家待付款
export const buyNeedpayInfo = data => Axios({
	url:'/UCenter/cancelBuyPeiwanOrder',
	method: 'post',
	data
})

//卖家取消担保订单
export const sellQuxiaoInfo = data => Axios({
	url:'/UCenter/cancelSellGameDanbaoJishouGoldOrder',
	method: 'post',
	data
})
//卖家取消支付自动匹配金币订单
export const sellAutoMatchInfo = data => Axios({
	url:'/UCenter/cancelSellAutoMatchGoldOrder',
	method: 'post',
	data
})
//卖家取消上架的寄存担保金币
export const quxiaosjjicunData = data => Axios({
	url:'/UCenter/cancelSellJincunDanbaoGoldGoods',
	method:'post',
	data
})
//我是卖家订单
export const SellBuyALlInfo = data => Axios({
	url:'/UCenter/getSellOrderList/'+tet.v+'/'+tet.test+'/'+data.token+'/'+data.userId+'/10/0/'+data.getStatus+'/1',
	method:'get',
	data
})
//获取下单list
export const huoquxiadanList = data => Axios({
	url:'/UCenter/getGameDanbaoJishouGoldSellOrderList/'+tet.v+'/'+tet.test+'/'+data.token+'/'+data.userId+'/10/0/1',
	method:'get',
	data
})
//发布管理
export const FAbuListData = data => Axios({
	url:'/UCenter/getGoodsList/'+tet.v+'/'+tet.test+'/'+data.token+'/'+data.userId+'/10/0/'+data.getStatus+'/1',
	method:'get',
	data
})
//买卖担保交易信息详情
export const AFbulistDetail = data =>Axios({
	url:'/UCenter/getGoldGoodsInfo',
	method: 'post',
	data
})


//个人资金记录
export const mineRouter = data => Axios({
	url: '/UCenter/getUserMoneyList/'+tet.v+'/'+tet.test+'/'+data.token+'/'+data.userId+'/10/0/1',
	method: 'get',
	data
})
//我的收藏
export const myCollectData = data  => Axios({
	url: '/User/getMyCollect/'+tet.v+'/'+tet.test+'/'+data.token+'/'+data.userId+'/10/0/1',
	method: 'get',
	data
})
//提交反馈
export const FeedbackInfo = data => Axios({
	url:'/User/addFeedback',
	method:'post',
	data
})
//修改密码
export const xiugaipasswInfo = data =>Axios({
	url:'/User/doUpPwd',
	method:'post',
	data
})
//更换手机号
export const xiugaiphoneInfo = data =>Axios({
	url:'/User/doUpMobile',
	method:'post',
	data
})
// 资产个人游戏币可提取列表
export  const extractData = data => Axios({
	url: '/UCenter/getUserJicunList/'+tet.v+'/'+tet.test+'/'+data.token+'/'+data.userId+'/10/0/1',
	method: 'get',
	data
})
// 资产个人游戏币可提取列表
export  const extractIfo = data => Axios({
	url: '/UCenter/getUserDrawList/'+tet.v+'/'+tet.test+'/'+data.token+'/'+data.userId+'/10/0/1',
	method: 'get',
	data
})

//提取寄存游戏币
export const TiqujcGamebiData = data => Axios({
	url:'/UCenter/addDrawGold',
	method:'post',
	data
})


//ceshi
export const cesi = data =>Axios({
	url:'/GameGold/getGameDanbaoJishouGoldOrder',
	method:'post',
	data
})

//获取卖家寄售担保金币订单信息
export const cesiSell = data =>Axios({
	url:'/GameGold/getSellGameDanbaoJishouGoldOrder',
	method:'post',
	data
})
//修改昵称
export const nicxiugaiInfo = data => Axios({
	url:'/User/doUpUinfo',
	method:'post',
	data
})
//上传身份证图片
export const uplode = data => Axios({
	url:'https://wei.zemietx.com/cbddm/downlist.php',
	method:'post',
	data
})
//提现接口
export const tixianCash = data =>Axios({
	url:'/User/cashIncome',
	method:'post',
	data
})