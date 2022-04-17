module.exports = {
	devServer: {
		// host: 'localhost', //target host
		// port: 3001,
		proxy: {
			'/api': {
				target: 'http://localhost:3001',
				ws: false,
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
					//pathRewrite: {'^/api': '/'} 重写之后url为 http://localhost:3001/xxxx
					//pathRewrite: {'^/api': '/api'} 重写之后url为 http://localhost:3001/api/xxxx
				}
			}
		}
	}
}
