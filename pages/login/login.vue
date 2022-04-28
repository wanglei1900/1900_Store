<template>
	<view class="loginContainer">
		<image class="logo" src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" mode=""></image>
		<p class='text'>网易自营，精品生活家居品牌</p>
		<div class="loginMethods">
			<button class="login wechatLogin" @click="wxLogin">
				微信登录
			</button>
			<button class="login emailLogin">
				邮箱登录
			</button>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			// 点击获取微信用户信息授权登录
			wxLogin(){
				uni.getUserProfile({
					lang:"zh_CN",
					desc:'允许获取个人信息用于登录',
					// 授权成功干什么
					success: (res) => {
						// console.log(res),

						// 本地存储用户信息
						uni.setStorage({
							key:'userInfo',
							data:res.userInfo,
						}),
						uni.showToast({
							title:'loading',
							icon:"loading"
						})
						// 跳转会个人页面，但是需要携带过去数据
						// 为什么用relauch，因为要关闭其他页面跳转过去触发mounted
						uni.reLaunch({
							url:'/pages/personal/personal'
						})
					},
					// 不允许授权干什么
					fail: (err) => {
						// 跳转会个人页面，但是需要携带过去数据
						uni.reLaunch({
							url:'/pages/personal/personal'
						})
						// uni.showToast({
						// 	title:'未授权，登录失败',
						// 	icon:"error"
						// })
					}
				})
			}
		}
	}
</script>

<style lang="stylus">
	.loginContainer
		width 100%
		height 100%
		background #F8F8F8
		display flex
		align-items center
		flex-direction column
		.logo
			width 300upx
			height 100upx
			margin-top 200upx
		.text
			font-size 26upx
			color #666
		.loginMethods
			width 80%
			margin 150upx auto
			display flex
			justify-content space-around
			.login
				width 240upx
				height 80upx
				background #41A863
				color #FFFFFF
				text-align center
				line-height 80upx
				font-size 26upx
			

</style>
