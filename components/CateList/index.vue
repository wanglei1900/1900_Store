<template>
	<view class="cateList">
		<swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item  v-for="(item,index) in bannerList.category.bannerUrlList" :key="index">
				<view class="swiper-item">
					<image :src="item"></image>
				</view>
			</swiper-item>
		</swiper>
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
			// 根据映射来的数据，计算出轮播图数据
			bannerList(){
				return this.indexCateList.find(item=>{
					return item.category.parentId === this.navId
				})
			}
		},
	}
</script>

<style lang="stylus" scoped>
	.cateList
		.banner
			width 100%
			height 350rpx
			image
				width 100%
				height 350rpx
</style>