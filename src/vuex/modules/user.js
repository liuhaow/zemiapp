import * as types from '../types'

const state = {
	// 用户登录状态
	loginStatus: JSON.parse(localStorage.getItem('loginStatus')) || false,
	// 用户数据信息
	userData: JSON.parse(localStorage.getItem('userData')) || {},
	sellHfu:{},
	buyHfu:{},
	gamename:JSON.parse(localStorage.getItem('game')) || {},
	yibiqufu:JSON.parse(localStorage.getItem('yibiqufu')) || {}

}

const actions = {
	/*游戏币区服选择买卖*/
	yibimaim({commit}, res) {
		localStorage.setItem('yibiqufu', JSON.stringify(res))		
		
		commit(types.YIBIQUFU,res)
	},
	/*游戏币游戏name*/
	chooseyouxibinmae ({commit}, res) {
		localStorage.setItem('game', JSON.stringify(res))			
		commit(types.GAME_NAME,res)
	},
	/*卖手游区服选择*/
	setSellquInfo({commit}, res) {
		localStorage.setItem('sellhdatas', JSON.stringify(res))		
		commit(types.SET_QUFU, res)
	},
	/*清除卖手游区服*/
	detaquInfo({
		commit
	}, res) {
		localStorage.removeItem('sellhdatas', JSON.stringify(res))		
		commit(types.DET_QUFU , {})
	},
	/*买手游区服选择*/
	setBuyquInfo({commit},res){
		localStorage.setItem('buyhdatas', JSON.stringify(res))		
		commit(types.BUYSET_QUFU, res)
	},
	/*清除mai手游区服*/
	detaBuyHquInfo({
		commit
	}, res) {
		localStorage.removeItem('buyhdatas', JSON.stringify(res))		
		commit(types.BUYDET_QUFU , {})
	},
	/**
	 * 用户登录
	 */
	setUserInfo({
		commit
	}, res) {
		localStorage.setItem('loginStatus', true)
		commit(types.SET_LOGIN_STATUS, false)
	},

	/**
	 * 退出登录
	 */
	setSignOut({
		commit
	}) {
		localStorage.removeItem('loginStatus')
		localStorage.removeItem('userData')
		localStorage.removeItem('yibiqufu')
		localStorage.removeItem('game')	
		localStorage.removeItem('detaliId')	
		localStorage.removeItem('maisellzt')		
		localStorage.removeItem('taber')			
		commit(types.SET_LOGIN_STATUS, false)		
		commit(types.YIBIQUFU,{})
		commit(types.SET_USER_DATA, {})
		commit(types.GAME_NAME,{})
	},

	/**
	 * 设置用户信息
	 */
	setUserData({
		commit
	}, res) {
		localStorage.setItem('userData', JSON.stringify(res))
		commit(types.COM_LOADING_STATUS, false)
		commit(types.SET_USER_DATA, res)
	},

	/**
	 * 添加用户课程
	 */

}

const getters = {
	getUserData: state => state.userData,
	loginStatus: state => state.loginStatus,

	sellfu: state => state.sellHfu,
	gamename: state => state.gamename,
	yibiqufu:state => state.yibiqufu
}

const mutations = {
	[types.YIBIQUFU](stata,res){
		stata.yibiqufu = res
	},
	[types.BUYSET_QUFU](stata, res ){
		stata.buyHfu = res
	},
	[types.GAME_NAME](stata,res){
		stata.gamename = res
	},
	[types.BUYDET_QUFU](stata, res){
		stata.buyHfu = res
	},
	[types.SET_QUFU](stata, res) {
		stata.sellHfu = res
	},
	[types.DET_QUFU](stata,res) {
		stata.sellHfu = res
	},


	[types.SET_LOGIN_STATUS](state, status) {
		state.loginStatus = status
	},

	[types.SET_USER_DATA](state, res) {
		state.userData = res
	}



}

export default {
	state,
	actions,
	getters,
	mutations
}