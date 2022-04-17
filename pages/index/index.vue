<template>
	<view>
		<!-- 头部区域 -->
		<view class="header">
			<image class="logo" src="/static/images/logo.png" mode=""></image>
			<view class="search">
				<text class="iconfont icon-fangdajing"></text>
				<input type="text" value="" placeholder="搜索商品" placeholder-class="placeholder" />
			</view>
			<button type="default">搜索</button>
		</view>
		
		<!-- 导航区域 -->
		<scroll-view class="navScroll" scroll-x="true" enable-flex="true">
			<view class="navItem active" v-for="(item,id) in kingKongList" :key="item.id" >{{item.text}}</view>
		</scroll-view>
		
	</view>
</template>

<script>
	import requests from '../../utils/requests'
	export default {
		data() {
			return {
				indexData:{},	//初始化后台数据
			}
		},
		mounted() {
			this.getCategoryList()
		},
		methods: {
			// 获取请求数据
			async getCategoryList(){
				let result = await requests('/getIndexData')	//小程序写法
				// let result = await requests('/api/getIndexData')	//H5写法
				
				console.log(result)
				this.indexData = result
			}
		},
		computed: {
			// 获取顶部导航标签
			kingKongList() {
				return this.indexData.kingKongModule.kingKongList
			}
		},
	}
</script>

<style lang="stylus">
	/* 
		stylus语法：
		省略大括号
		省略键值对
	 */
	
	// 原生css写法
	/* .title{
		color:red;
	} */
	
	// stylus写法
	/* .title
		color red */
	
	// 头部区域
	.header
		display flex
		padding 10rpx 0
		.logo
			width 140rpx
			height 40rpx
			margin 10rpx 30rpx
		.search		
			display 1
			background-color #eee
			position relative
			.iconfont
				position absolute
				font-size 30rpx
				top 15rpx
				left 10rpx
			input
				width 370rpx
				margin-left 50rpx
				height 60rpx
				.placeholder
					font-size 26rpx
		button
			width 144rpx
			height 60rpx
			font-size 30rpx
			text-align center
			line-height 60rpx
			padding 0 4rpx
			margin 0 10rpx
			color #ffa801
		
	// 顶部导航条区域
	.navScroll
		white-space nowrap
		padding 10rpx
		.navItem
			display inline-block
			width 140rpx
			height 80rpx
			text-align center
			line-height 80rpx
			font-size 32rpx
			// 父级引用，&当前位置的父级
			&.active
				border-bottom 1px solid #ffa801
</style>
