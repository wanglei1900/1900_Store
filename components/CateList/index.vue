<template>
	<view class="cateList">
		<!-- 三级联动轮播图 -->
		<swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item  v-for="(item,index) in cateList.category.bannerUrlList" :key="index">
				<view class="swiper-item">
					<image :src="item"></image>
				</view>
			</swiper-item>
		</swiper>
		
		<!-- 文字描述 -->
		<view class="desc">
			<view>{{cateList.category.name}}</view>
			<view>{{cateList.category.frontDesc}}</view>
		</view>
		
		<!-- 展示明细列表 -->
		<view class="showList">
			<view class="showItem" v-for="(item,index) in cateList.itemList" :key="item.id">
				<image :src="item.listPicUrl"></image>
				<view>{{item.name}}</view>
				<view class="price">¥{{item.retailPrice}}</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapActions} from 'vuex'
	export default {
		name:'CateList',
		props:['navId'],
		mounted() {
			this.getIndexCateList()
		},
		methods: {
			...mapActions('homeStore',['getIndexCateList']),
		},
		computed: {
			// 映射首页数据
			...mapState('homeStore', ['indexCateList']),
			// 根据映射来的数据，计算出轮播图数据的父级结构
			cateList(){
				return this.indexCateList.find(item=>item.category.parentId === this.navId)
			},

		},
	}
</script>

<style lang="stylus" scoped>
	// 整体容器
	.cateList
		// 轮播图
		.banner
			width 100%
			height 350rpx
			image
				width 100%
				height 350rpx
		// 文字描述
		// 文字描述
		.desc
			view
				text-align center
			view:first-child
				font-size 36rpx
				line-height 70rpx
			view:last-child
				font-size 26rpx
				line-height 40rpx
				color #999999
				
		// 展示列表
		.showList
			display flex
			flex-wrap wrap
			justify-content space-around
			// 父级引用，&当前位置的父级
			// 添加一个伪类，内容为空白并且宽度和其他遍历的对象一样宽。
			&:after
				content ''
				width 46%
			// 遍历的内容容器
			.showItem
				width 46%
				// 图片
				image
					width 100%
					height 290rpx
				// 产品描述
				view
					line-height 50rpx
					font-size 26rpx
				// 产品价格
				.price
					color red
					font-weight bolder
</style>