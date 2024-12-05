<template>
	<view class="work-container">
		<!-- 轮播图 -->
		<uni-swiper-dot class="uni-swiper-dot-box" :info="data" :current="current" field="content">
			<swiper class="swiper-box" :current="swiperDotIndex" @change="changeSwiper">
				<swiper-item v-for="(item, index) in data" :key="index">
					<view class="swiper-item" @click="clickBannerItem(item)">
						<image :src="item.image" mode="aspectFill" :draggable="false" />
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>

		<!-- 宫格组件 -->
		<uni-section title="项目管理" type="line">
			<HR style="border:1 dashed #eeeeff" width="100%" color='#eeeeff' SIZE='1' />
			<view class="grid-body">
				<uni-grid :column="4" :showBorder="false" @change="changeGrid">

					<uni-grid-item :index=1>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="" size="30"></uni-icons> -->
							<view class="cuIcon-card text-pink icon" ></view>
							<text class="text">收入项目</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=2>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="list" size="30"></uni-icons> -->
							<view class="cuIcon-pay text-pink icon" ></view>
							<text class="text">支出项目</text>
						</view>
					</uni-grid-item>

				</uni-grid>
			</view>
		</uni-section>
		<uni-section title="供应商结算" type="line">
			<HR style="border:1 dashed #eeeeff" width="100%" color='#eeeeff' SIZE='1' />
			<view class="grid-body">
				<uni-grid :column="4" :showBorder="false" @change="changeGrid">
					<uni-grid-item :index=5>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="person-filled" size="30"></uni-icons> -->
							<view class="cuIcon-coin text-yellow icon" ></view>
							<text class="text">费用管理</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=6>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="staff-filled" size="30"></uni-icons> -->
							<view class="cuIcon-album text-yellow icon" ></view>
							<text class="text">预付款</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=7>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="auth" size="30"></uni-icons> -->
								<view class="cuIcon-same text-yellow icon" ></view>
							<text class="text">对账管理</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=8>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="home" size="30"></uni-icons> -->
								<view class="cuIcon-moneybag text-yellow icon" ></view>
							<text class="text">结算管理</text>
						</view>
					</uni-grid-item>

				</uni-grid>
			</view>
		</uni-section>

		<uni-section title="客户结算" type="line">
			<HR style="border:1 dashed #eeeeff" width="100%" color='#eeeeff' SIZE='1' />
			<view class="grid-body">
				<uni-grid :column="4" :showBorder="false" @change="changeGrid">
					<uni-grid-item :index=9>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="person-filled" size="30"></uni-icons> -->
							<view class="cuIcon-coin text-blue icon" ></view>
							<text class="text">费用管理</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=10>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="staff-filled" size="30"></uni-icons> -->
							<view class="cuIcon-album text-blue icon" ></view>
							<text class="text">预付款</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=11>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="auth" size="30"></uni-icons> -->
							<view class="cuIcon-same text-blue icon" ></view>
							<text class="text">对账管理</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=12>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="home" size="30"></uni-icons> -->
							<view class="cuIcon-moneybag text-blue icon" ></view>
							<text class="text">结算管理</text>
						</view>
					</uni-grid-item>

				</uni-grid>
			</view>
		</uni-section>
	   <view>
		<uni-popup ref="alertDialog" type="dialog">
			<uni-popup-dialog type="info" cancelText="关闭" confirmText="确定" title="扫码下载源代码" content="扫码下载源代码">
				<view><image src="../../static/images/wx.jpg"  style="width: 250px;height: 250px;"></image></view>
			</uni-popup-dialog>
		</uni-popup>
	</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				swiperDotIndex: 0,
				data: [{
						image: '/static/images/banner/banner01.jpg'
					},
					{
						image: '/static/images/banner/banner02.jpg'
					},
					{
						image: '/static/images/banner/banner03.jpg'
					}
				]
			}
		},
		methods: {
			clickBannerItem(item) {
				console.info(item)
			},
			changeSwiper(e) {
				this.current = e.detail.current
			},
			changeGrid(e) {
					this.$refs.alertDialog.open('center');
			
			}
		}
	}
</script>

<style lang="scss">
	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff;
		min-height: 100%;
		height: auto;
	}

	view {
		font-size: 14px;
		line-height: inherit;
	}

	.uni-icons {
		color: #007AFF;
	}
	
	.icon{
		font-size: 28px;
	}

	/* #endif */

	.text {
		text-align: center;
		font-size: 26rpx;
		margin-top: 10rpx;
	}

	.grid-item-box {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
		;
	}

	.swiper {
		height: 300rpx;
	}

	.swiper-box {
		height: 150px;
	}

	.swiper-item {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #fff;
		height: 300rpx;
		line-height: 300rpx;
	}

	@media screen and (min-width: 500px) {
		.uni-swiper-dot-box {
			width: 400px;
			/* #ifndef APP-NVUE */
			margin: 0 auto;
			/* #endif */
			margin-top: 8px;
		}

		.image {
			width: 100%;
		}
	}
</style>