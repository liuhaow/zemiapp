import * as types from '../types'

const state = {	
	xiadanbuy:JSON.parse(localStorage.getItem('xiadanbuy')) || {},
	maisellzt:JSON.parse(localStorage.getItem('maisellzt')) || 0,
	detaliId:JSON.parse(localStorage.getItem('detaliId')) || {},
	jcuntq:JSON.parse(localStorage.getItem('tiqu')) || {},
	tiaozou:JSON.parse(localStorage.getItem('tiaoz')) || '0',
	paydanbuy:JSON.parse(localStorage.getItem('paydanbuy')) || {},
	buyselltype:JSON.parse(localStorage.getItem('maimtype')) || {},
	buyscid:JSON.parse(localStorage.getItem('buyscid')) || {},

}

const actions = {
	buydtscInfo({commit},res){
		localStorage.setItem('buyscid', JSON.stringify(res))			
		
		commit(types.BUYDTSC_INFO, res)
	},
	/*买卖商品类型 账号信息*/
	buySellType({commit},res){
		localStorage.setItem('maimtype', JSON.stringify(res))			
		
		commit(types.BUYSELL_TYPE, res)
	},
	/*寄存金币提取传参*/
	JcunTiQu({commit},res){
		localStorage.setItem('tiqu', JSON.stringify(res))			
		commit(types.TIQUJB_ZT,res)
	},
	
	/*游戏币区服选择买卖*/
	yibimaixiadan({commit}, res) {
		localStorage.setItem('xiadanbuy', JSON.stringify(res))	
		commit(types.XIADANBUY,res)
	},
	danbaojInfo({commit}, res){
		localStorage.setItem('paydanbuy',JSON.stringify(res))
		commit(types.JSDANBIM,res)
		
	},
	baocunIdMM({commit}, res){
		localStorage.setItem('detaliId', JSON.stringify(res))	
		
		commit(types.DETAILID_TYPE,res)
	},
	/*买卖游戏币状态*/
	maisellztInfo({commit}, res){
		localStorage.setItem('maisellzt', JSON.stringify(res))	
		commit(types.MSELL_ZT,res)
		
	},
	//寄售游戏币数据存放
	JIshouGamebi({commit},res){
		localStorage.setItem('jishou', JSON.stringify(res))			
		commit(types.JISHOU_GAMEBI,res)	
	},
	TiaoId({commit}, res){
		localStorage.setItem('tiaoz', JSON.stringify(res))					
		commit(types.TIAO_ID,res)
	}
}

const getters = {
	xiadanbuy: state => state.xiadanbuy,
	maisellzt: state => state.maisellzt,
	detaliId:state => state.detaliId,
	jcuntq:state => state.jcuntq,
	tiaozou:state => state.tiaozou,
	paydanbuy:state => state.paydanbuy,
	buyselltype:state => state.buyselltype,
	buyscid:state => state.buyscid
	
}

const mutations = {
	[types.BUYDTSC_INFO](stata,res){
		stata.buyscid = res
	},
	[types.BUYSELL_TYPE](stata,res){
		stata.buyselltype = res
	},
	[types.XIADANBUY](stata,res){
		stata.xiadanbuy = res
	},
	[types.TIQUJB_ZT](stata,res){
		stata.jcuntq =res
	},
	[types.MSELL_ZT](stata,res){
		stata.maisellzt =res
	},
	[types.JISHOU_GAMEBI](stata,res){
		stata
	},
	[types.DETAILID_TYPE](stata,res){
		stata.detaliId = res
	},
	[types.TIAO_ID](stata,res){
		stata.tiaozou  = res
	},
	[types.JSDANBIM](stata,res){
		stata.paydanbuy  = res
	}

}
export default {
	state,
	actions,
	getters,
	mutations
}