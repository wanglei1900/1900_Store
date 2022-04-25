// 引入分类页请求函数
import {reqCategoryList} from '@/api/index.js'

const state = {
	categoryList:[]
}
const actions = {
	async getCategoryList({commit}){
		let result = await reqCategoryList()
		console.log(result);
		commit('GETCATEGORYLIST',result)
	}
}
const mutations =  {
	GETCATEGORYLIST(state,categoryList){
		state.categoryList = categoryList
	}
	
}
const getters = {

}



export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}
