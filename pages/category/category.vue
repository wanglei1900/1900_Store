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
					<view @click="changeCategory(item.id)" class="navItem" v-for="(item,index) in categoryList" :key="item.id">{{item.name}}</view>
				</scroll-view>				
			</view>
			
			<!-- 右侧内容区 -->
			<view class="right">
				<scroll-view class="productScroll" scroll-y="true" >
							<image class="bigImg" :src="bigImgUrl"></image>
						<view class="productList">
							<view class="productItem" v-for="(item,index) in subCateList" :key="item.id">
								<image :src="item.wapBannerUrl"></image>
								<text>{{item.name}}</text>
							</view>		
						</view>
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
				// categoryId:0,
				choosenItem:{},		// 左侧导航栏点击要展示到右边的数据
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
			...mapActions('categoryStore',['getCategoryList']),
			// 切换商品详情页
			changeCategory(id){
				// this.categoryId = id
				// 获取点击的分类的数据
				let result = this.categoryList.find(item =>{
					return item.id=== id
				})
				// 将数据更新到data
				this.choosenItem = result
			},
		},
		computed: {
			...mapState('categoryStore',['categoryList']),
			// 右侧展示大图
			bigImgUrl() {
				// 拿取点击分类的数据，计算出大图地址，若初始页面时（访问值为空）则将数组第一项赋值
				return this.choosenItem?.imgUrl ?? this.categoryList[0]?.imgUrl
			},
			// 右侧子目录
			subCateList(){
				// 拿取点击分类的数据，计算出子目录的数组，若初始页面时（访问值为空），则将数组第一项赋值
				return this.choosenItem?.subCateList ?? this.categoryList[0]?.subCateList
			}
			
		}
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
				line-height 60rpx
				font-size 26rpx
				margin 0 auto
				background #eee
		.contentContainer
			height calc(100vh - 80rpx)
			display flex
			box-sizing border-box
			border-top 1rpx solid #eee
			.left
				width 20%
				height 100%
				border-right 1rpx solid #eee
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
				// box-sizing border-box
				.productScroll
					height calc(100vh - 82rpx)
					.bigImg
						width 520rpx
						height 190rpx
						display block
						margin 10rpx auto
					.productList
						display flex
						flex-wrap wrap
						.productItem
							width 33.33%
							text-align center
							image
								height 144rpx
								width 90%
							text
								font-size 24rpx
</style>
