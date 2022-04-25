import Vue from 'vue'
import Vuex from 'vuex'
// 声明使用Vuex的扩展库
Vue.use(Vuex)

// 引入相关模块相关的store配置
import homeStore from './modules/homeStore'
import categoryStore from './modules/categoryStore'


// 创建store对象
const store = new Vuex.Store({
	modules:{
		homeStore,
		categoryStore
	}
})

export default store
