<template>

	<view class="recommendContainer">
		<!-- 轮播图区域 -->
		<swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/2d8715a9020d0cb5acaf32dd97da2ef4.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/42cc34eb0e56651c1f399bddba7b46b5.jpg"></image>
				</view>
			</swiper-item>			
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/static-union/1648880455e1cc4d.jpg"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/dc52f93c49a2e90b56aaa2bd61124d72.jpg"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/2dd7e6903a6eec66477fb1b62acd5aca.jpg"></image>
				</view>
			</swiper-item>	
		</swiper>
		
		<!-- policyList 三个图标区域 -->
		<view class="policyList">
			<view class="policyItem" v-for="(item,index) in policyDescList" :key="item.id">
				<image class="icon" :src="item.icon" ></image>
				<text class="desc">{{item.desc}}</text>
			</view>
		</view>
		
		<!-- kingKongList 10个图标区域 -->
		<view class="kingKongList">
			<view class="kingKongItem" v-for="(item,index) in kingKongList" :key="item.L1Id">
				<image :src="item.picUrl"></image>
				<text>{{item.text}}</text>
			</view>
			
		</view>
	
		<!-- categoryModule分类区 -->
		<view class="categoryModule">
			<view class="categoryItem" v-for="(c1,index) in categoryModule" :key="c1.titlePicUrl">
				<image class="titlePic" :src="c1.titlePicUrl"></image>
				<scroll-view class="shopListScroll" scroll-x="true"  enable-flex="true">
					<view class="shopItem" v-for="(c2,index) in c1.itemList" :key="c2.id">
						<image :src="c2.showPicUrl"></image>
						<view>{{c2.name}}</view>
					</view>
					<view class="shopItem more">查看更多</view>
				</scroll-view>
			</view>
		</view>
	</view>

</template>

<script>
import {mapState} from 'vuex'
	export default {
		name:'Recommend',
		data() {
			return {

			}
		},
		computed: {
			...mapState('homeStore', ['indexData']),
			
			policyDescList(){
				let index =0
				return this.indexData.policyDescList?.map(item=>{
					item.id = index
					index +=1 
					return item
				})
			},
			
			kingKongList(){
				return this.indexData.kingKongModule?.kingKongList
			},
			
			categoryModule(){
				let index =0
				return this.indexData.categoryModule
			}
		}
		
	}
</script>

<style scoped lang="stylus">
	.recommendContainer
		.banner
			width 100%
			height 350rpx
			image
				width 100%
				height 350rpx
		.policyList
			display flex
			.policyItem
				flex 1
				text-align center
				.icon
					width 32rpx
					height 32rpx
					vertical-align middle
				.desc
					font-size 24rpx
					vertical-align middle

			


		.kingKongList
			display flex
			flex-wrap wrap
			.kingKongItem
				width 20%
				display flex
				flex-direction column
				align-items center
				image
					width 110rpx
					height 110rpx
					margin 20rpx 0
				text
					font-size 26rpx
					
		
		.categoryModule
			.categoryItem
				margin-bottom 20rpx
				.titlePic
					width 100%
					height 370rpx
				.shopListScroll
					white-space: nowrap
					padding 10rpx
					.shopItem
						display inline-block
						margin-right 20rpx
						width 200rpx
						vertical-align top
						&.more 
							width 200rpx
							height 200rpx
							background #eeeeee
							font-size 28rpx
							text-align center
							line-height 200rpx
						image
							width 100%
							height 200rpx
							background: #eee
						view
							white-space pre-wrap
							font-size 26rpx

							
							display: -webkit-box;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
							
							overflow hidden
							text-overflow ellipsis
			
.test
	font-size: 0
</style>
