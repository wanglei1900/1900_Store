// 当前模块统一管理api接口

import requests from '../utils/requests'

// 暴露首页数据
export const reqIndexData = ()=> requests('/getIndexData')	// 小程序写法
// export const reqIndexData = ()=> requests('/api/getIndexData')	// H5写法

// 暴露分类页数据写法
export const reqCategoryList = ()=> requests('/getCategoryList')	// 小程序写法
// export const reqCategoryList = ()=> requests('/api/getCategoryList')	// H5写法

// 暴露首页分类列表写法
export const reqIndexCateList = ()=> requests('/getIndexCateList')	// 小程序写法
// export const reqIndexCateList = ()=> requests('/api/getIndexCateList')	// H5写法