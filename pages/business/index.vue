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
		<uni-section title="采购管理" type="line">
			<HR style="border:1 dashed #eeeeff" width="100%" color='#eeeeff' SIZE='1' />

			<view class="grid-body">
				<uni-grid :column="4" :showBorder="false" @change="changeGrid">

					<uni-grid-item :index=1>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="gift" size="30"></uni-icons> -->
							<view class="cuIcon-settings text-pink icon"></view>
							<text class="text">参数配置</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=2>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="list" size="30"></uni-icons> -->
							<view class="cuIcon-sort text-pink icon"></view>
							<text class="text">采购订单</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=3>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="color" size="30"></uni-icons> -->
							<view class="cuIcon-newshot text-pink icon"></view>
							<text class="text">采购入库</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=4>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="flag" size="30"></uni-icons> -->
							<view class="cuIcon-exit text-pink icon"></view>
							<text class="text">采购退货</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
		</uni-section>
		<uni-section title="销售管理" type="line">
			<HR style="border:1 dashed #eeeeff" width="100%" color='#eeeeff' SIZE='1' />
			<view class="grid-body">
				<uni-grid :column="4" :showBorder="false" @change="changeGrid">
					<uni-grid-item :index=5>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="person-filled" size="30"></uni-icons> -->

							<view class="cuIcon-settings text-yellow icon"></view>
							<text class="text">参数配置</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=6>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="staff-filled" size="30"></uni-icons> -->
							<view class="cuIcon-sort text-yellow icon"></view>
							<text class="text">销售订单</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=7>
						<view class="grid-item-box">
							<!-- 	<uni-icons color="#007AFF" type="auth" size="30"></uni-icons> -->
							<view class="cuIcon-text text-yellow icon"></view>
							<text class="text">销售出库</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=8>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="home" size="30"></uni-icons> -->
							<view class="cuIcon-exit text-yellow icon"></view>
							<text class="text">销售退货</text>
						</view>
					</uni-grid-item>

				</uni-grid>
			</view>
		</uni-section>
		<uni-section title="零售管理" type="line">
			<HR style="border:1 dashed #eeeeff" width="100%" color='#eeeeff' SIZE='1' />
			<view class="grid-body">
				<uni-grid :column="4" :showBorder="false" @change="changeGrid">
					<uni-grid-item :index=9>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="shop" size="30"></uni-icons> -->
							<view class="cuIcon-settings text-green icon"></view>
							<text class="text">参数配置</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=10>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="wallet" size="30"></uni-icons> -->
							<view class="cuIcon-text text-green icon"></view>
							<text class="text">零售出库</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=11>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="map-pin-ellipse" size="30"></uni-icons> -->
							<view class="cuIcon-exit text-green icon"></view>
							<text class="text">零售退货</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
		</uni-section>
		<uni-section title="库存管理" type="line">
			<HR style="border:1 dashed #eeeeff" width="100%" color='#eeeeff' SIZE='1' />
			<view class="grid-body">
				<uni-grid :column="4" :showBorder="false" @change="changeGrid">
					<uni-grid-item :index=12>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="link" size="30"></uni-icons> -->
							<view class="cuIcon-punch text-brown icon"></view>
							<text class="text">商品库存</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=13>
						<view class="grid-item-box">
							<!-- <uni-icons type="wallet-filled" size="30"></uni-icons> -->
							<view class="cuIcon-form text-brown icon"></view>
							<text class="text">变动记录</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=14>
						<view class="grid-item-box">
							<!-- <uni-icons type="wallet-filled" size="30"></uni-icons> -->
							<view class="cuIcon-edit text-brown icon"></view>
							<text class="text">数量调整</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=15>
						<view class="grid-item-box">
							<view class="cuIcon-recharge text-brown icon"></view>
							<text class="text">成本调整</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=16>
						<view class="grid-item-box">
							<view class="cuIcon-info text-brown icon"></view>
							<text class="text">调整原因</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=17>
						<view class="grid-item-box">
							<view class="cuIcon-camerarotate text-brown icon"></view>
							<text class="text">仓库调拨</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
		</uni-section>
		<uni-section title="盘点管理" type="line">
			<HR style="border:1 dashed #eeeeff" width="100%" color='#eeeeff' SIZE='1' />
			<view class="grid-body">
				<uni-grid :column="4" :showBorder="false" @change="changeGrid">
					<uni-grid-item :index=18>
						<view class="grid-item-box">
							<!-- <uni-icons color="#007AFF" type="link" size="30"></uni-icons> -->
							<view class="cuIcon-settings text-blue icon"></view>
							<text class="text">参数配置</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=19>
						<view class="grid-item-box">
							<!-- <uni-icons type="wallet-filled" size="30"></uni-icons> -->
							<view class="cuIcon-roundcheck text-blue icon"></view>
							<text class="text">预盘点单</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=20>
						<view class="grid-item-box">
							<!-- <uni-icons type="wallet-filled" size="30"></uni-icons> -->
							<view class="cuIcon-post text-blue icon"></view>
							<text class="text">盘点任务</text>
						</view>
					</uni-grid-item>
					<uni-grid-item :index=21>
						<view class="grid-item-box">
							<!-- <uni-icons type="wallet-filled" size="30"></uni-icons> -->
							<view class="cuIcon-same text-blue icon"></view>
							<text class="text">盘点单管理</text>
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

	.icon {
		font-size: 28px;
	}

	.text {
		display: block;
		font-size: 13px;
		margin: 8px 0px;
	}
</style>