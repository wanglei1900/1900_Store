// home模块的仓库数据
// 引入请求函数
import {reqIndexData} from '@/api/index.js'

const state ={
	indexData:{},	// 主页的数据
}
const actions ={
	async getIndexData({commit}){
		// 异步请求数据
		let result = await reqIndexData()
		// 触发mutations，将异步数据交给mutations
		commit('GETINDEXDATA', result)
	}
}
const mutations ={
	GETINDEXDATA(state,indexData){
		// 同比修改数据	
		state.indexData = indexData
	}
}
const getters={
	
}


export default {
	namespaced:true,
	state,
	actions,
	mutations,
	getters
}