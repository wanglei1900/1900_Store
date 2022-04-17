// 封装ajax请求
import config from './config.js'
export default (url, data = {}, method = 'GET') => {
	return new Promise((resolve, reject) => {
		// 1.初始化promise状态为pending
		// 2.执行异步任务
		uni.request({
			url: config.host + url,		// 小程序写法
			// url,	// H5写法
			data,
			method,
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}
