import * as types from '../types'

/**
 * App通用配置
 */
const state = {
    loading: false,         //暂时只开发这一个 
    showToast: false,
    leftNavStatus: false,
    showSuccess: true,
	showFail: false,
	TokenId:JSON.parse(localStorage.getItem('tokenId')) ||'',
	taber:JSON.parse(localStorage.getItem('taber')) || 0,
	
	
}
const actions = {
    setLoadingState({ commit }, status) {
        commit(types.COM_LOADING_STATUS, status)
    },
    settaber({commit},res){
		localStorage.setItem('taber', JSON.stringify(res))	
    	commit(types.TABE_R,status)
    },
    setToken({commit}, res){
		localStorage.setItem('tokenId', JSON.stringify(res))		 	
    	commit(types.ADD_TOKEN,res )
    }
}
const getters = {
    loading: state => state.loading,
    showToast: state => state.showToast,
    showAlert: state => state.showAlert,
    TokenId: state => state.TokenId,
    taber:state => state.taber
}
const mutations = {
    [types.COM_LOADING_STATUS](state, status) {
        state.loading = status
    },
    [types.ADD_TOKEN](state,res){
    	state.TokenId  = res
    },
    [types.TABE_R](state,res){
    	state.taber = res
    }
}


export default {
    state,
    actions,
    getters,
    mutations
}