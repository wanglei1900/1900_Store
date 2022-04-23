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
			<view class="navItem" @click="handlerNavItem(-1)" :class="{'active':tagIndex === -1}">推荐</view>
			<view @click="handlerNavItem(index)" class="navItem" :class="{'active':tagIndex===index}"   v-for="(item,index) in kingKongList" :key="item.L1Id" >{{item.text}}</view>
		</scroll-view>
		
		<!-- 内容区 -->
		<scroll-view scroll-y="true" >
			<Recommend />
		</scroll-view>
	</view>
</template>

<script>
	import {mapActions,mapState} from 'vuex'
	import Recommend from '@/components/Recommend'
	export default {
		data() {
			return {
				tagIndex:-1,		// 导航标签点击下标
			}
		},
		components: {
			Recommend,
		},
		mounted() {
			// 简易，只能用于小项目
			// this.$store.dispatch('homeStore/getIndexData')
			
			// 直接调用...mapActions调用过来的方法,分发actions
			this.getIndexData()
		},
		methods: {
			// 对象写法
			/* ...mapActions({
				// key:value,key:在当前组件定义的方法名,value是从store映射的函数名,
				// 注意这个value不能随便写,必须是store中已有的actions
				getIndexData:'homeStore/getIndexData'
			}), */
			// 数组写法
			...mapActions('homeStore',['getIndexData']),
			// 首页导航标签，点击排他active
			handlerNavItem(index){
				this.tagIndex = index
			},
		},
		computed: {
			...mapState('homeStore', ['indexData']),
			kingKongList() {
				return this.indexData.kingKongModule?.kingKongList
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
