<template>
	<view class="categoryContainer">
		
		<!-- 头部区域 -->
		<view class="header">
			<view class="search">搜索商品</view>
		</view>
		
		<!-- 内容区 -->
		
		<view class="contentContainer">
			<!-- 左侧导航区 -->
			<view class="left">
				<scroll-view class="navScroll" scroll-y="true" >
					<view class="navItem" v-for="(item,index) in categoryList" :key="item.id">{{item.name}}</view>
				</scroll-view>				
			</view>
			
			<!-- 右侧内容区 -->
			<view class="right">
				<scroll-view scroll-y="true" >
					<view></view>
				</scroll-view>				
			</view>
			
		</view>
	</view>
</template>

<script>
	import {mapActions,mapState} from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		created() {
			// 发请求获取分类列表数据
			// this.getCategoryList()
		},
		mounted() {
			this.getCategoryList()
		},
		methods:{
			...mapActions('categoryStore',['getCategoryList'])
		},
		computed: {
			...mapState('categoryStore',['categoryList']),
			// navItemName() {
			// 	return 
			// }
		},
	}
</script>

<style lang="stylus">
	.categoryContainer
		.header
			padding 10rpx 0
			.search
				width 92%
				height 60rpx
				text-align center
				line-height 70rpx
				font-size 26rpx
				margin 0 auto
				background #eee
		.contentContainer
			height calc(100vh - 80rpx)
			display flex
			box-sizing border-box
			border-top 1rpx solid #333
			.left
				width 20%
				height 100%
				border-right 1rpx solid #333
				box-sizing border-box
				.navScroll
					height calc(100vh - 82rpx)
					.navItem
						font-size 32rpx
						height 80rpx
						line-height 80rpx
						text-align center
			.right
				width 80%
				background yellow
				height 100%
</style>
