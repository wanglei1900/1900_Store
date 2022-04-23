// 当前模块统一管理api接口

import requests from '../utils/requests'

// 暴露首页数据
export const reqIndexData = ()=> requests('/getIndexData')	// 小程序写法
// export const reqIndexData = ()=> requests('/api/getIndexData')	// H5写法
