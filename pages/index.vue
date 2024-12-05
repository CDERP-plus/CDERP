<template>
	<view class="mine-container">
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
		<view class="content-section">
			<view class="mine-actions grid col-4 text-center">
				<view class="action-item" @click="handleBarClick(1)">
					<view class=" cuIcon-message text-pink icon"></view>
					<text class="text">消息通知</text>
				</view>
				<view class="action-item" @click="handleBarClick(2)">
					<view class=" cuIcon-edit text-blue icon"></view>
					<text class="text">任务审批</text>
				</view>
				<view class="action-item" @click="handleBarClick(3)">
					<view class=" cuIcon-warn text-mauve icon"></view>
					<text class="text">库存预警</text>
				</view>
				<view class="action-item" @click="handleBarClick(4)">
					<view class="cuIcon-question text-green icon"></view>
					<text class="text">问题反馈</text>
				</view>
			</view>
		</view>

		<!-- <uni-section class="uni-section" title="" type="line" padding> -->
		<view class="uni-section">
			<uni-grid :column="4" :highlight="true" @change="change">
				<uni-grid-item>
					<view class="grid-item-box" style="background-color: #fff;">
						<text class="text">￥{{formData.today.order.totalAmount}}</text>
						<text class="text">今日订单 {{formData.today.order.totalNum}}</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" style="background-color: #fff;">
						<text class="text">￥{{formData.today.returned.totalAmount}}</text>
						<text class="text">今日退单 {{formData.today.returned.totalNum}}</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" style="background-color: #fff;">
						<text class="text">￥{{formData.sameMonth.order.totalAmount}}</text>
						<text class="text">本月订单 {{formData.sameMonth.order.totalNum}}</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" style="background-color: #fff;">
						<text class="text">￥{{formData.sameMonth.returned.totalAmount}}</text>
						<text class="text">本月退单 {{formData.sameMonth.returned.totalNum}}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<!-- </uni-section> -->
		<!-- <view ref="echartContainer"></view>
	  -->
		<view ref="echartContainer" id="echartContainer" style="width: 100%; height: 300px;"></view>
	</view>

</template>

<script>
	import storage from '@/utils/storage'
	import {
		orderChart
	} from '@/api/dashboard/analysis'

	import * as echarts from 'echarts';

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
				],

				chartInstance: null,
				loading: false,
				formData: {
					today: {
						order: {
							totalAmount: '0',
							totalNum: '0',
							charts: [],
						},
						returned: {
							totalAmount: '0',
							totalNum: '0',
							charts: [],
						},
					},
					sameMonth: {
						order: {
							totalAmount: '0',
							totalNum: '0',
							charts: [],
						},
						returned: {
							totalAmount: '0',
							totalNum: '0',
							charts: [],
						},
					},
				},
			}
		},

		mounted() {
			this.loadData();

		},

		methods: {
			clickBannerItem(item) {
				console.info(item)
			},
			changeSwiper(e) {
				this.current = e.detail.current
			},

			handleToInfo() {
				// this.$tab.navigateTo('/pages/mine/info/index')
				this.$tab.redirectTo('/pages/mine/info/index')
			},

			loadData() {
				orderChart()
					.then((res) => {
						this.formData = res.data;
						this.initChart();
					});
			},



			async initChart() {
				// 等待 canvas 元素渲染完成（对于 H5 环境可能需要）
				await this.$nextTick();

				// 获取 canvas 元素
				const chartDom = document.getElementById('echartContainer');
				// const chartDom = this.$refs.echartContainer;  //这种写法无效，暂时找不到原因

				// 初始化 ECharts 实例
				this.chartInstance = echarts.init(chartDom);

				// 设置图表配置项
				const option = {
					title: {
						text: '',
					},
					tooltip: {},
					legend: {
						data: [],
					},
					xAxis: {
						data: [],
					},
					yAxis: {},
					series: [],
				};

				if (this.formData) {
					option.legend.data.push("今天订单");
					option.legend.data.push("今日退单");
					option.legend.data.push("本月订单");
					option.legend.data.push("本月退单");

					this.initSeriesData(this.formData.today.order.charts, "今天订单", option);
					this.initSeriesData(this.formData.today.returned.charts, "今日退单", option);
					this.initSeriesData(this.formData.sameMonth.order.charts, "本月订单", option);
					this.initSeriesData(this.formData.sameMonth.returned.charts, "本月退单", option);
				}

				this.chartInstance.setOption(option);

			},

			initSeriesData(charts, name, option) {

				let seriedata = [];
				let xAxisData = [];
				let seriesdataUnitData = {
					name: name,
					type: 'line'
				};
				for (let item of charts) {
					seriedata.push(item.totalAmount)
					xAxisData.push(item.createDate);
				}
				this.$set(option.xAxis, "data", xAxisData);
				this.$set(seriesdataUnitData, "data", seriedata);
				option.series.push(seriesdataUnitData);
			},

			beforeDestroy() {
				// 销毁图表实例以避免内存泄漏
				if (this.chartInstance) {
					this.chartInstance.dispose();
					this.chartInstance = null;
				}
			},

			handleBarClick(type) {
				//type: 1、消息通知   2、审批任务  3、库存预警  4、问题反馈
				if (type == 1) {
					//跳转到消息通知页
					this.$tab.navigateTo('/pages/notice/index')
				} else {
					uni.showToast({
						title: '持续开放中......',
						icon: 'none',
					})
				}

			},
		},
	}
</script>

<style lang="scss">
	.image {
		width: 25px;
		height: 25px;
	}

	.text {
		font-size: 14px;
		margin-top: 5px;
	}

	.grid-dynamic-box {
		margin-bottom: 15px;
	}

	.grid-item-box {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.grid-item-box-row {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.grid-dot {
		position: absolute;
		top: 5px;
		right: 15px;
	}

	.swiper {
		height: 420px;
	}

	/* #ifdef H5 */
	@media screen and (min-width: 768px) and (max-width: 1425px) {
		.swiper {
			height: 630px;
		}
	}

	@media screen and (min-width: 1425px) {
		.swiper {
			height: 830px;
		}
	}

	/* #endif */

	.title {
		font-size: 16rpx;
		color: #8f8f94;
	}

	/*以下为轮播图样式*/
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

	.mine-container {
		width: 100%;
		height: 100%;


		.header-section {
			padding: 15px 15px 45px 15px;
			background-color: #3c96f3;
			color: white;

			.login-tip {
				font-size: 18px;
				margin-left: 10px;
			}

			.cu-avatar {
				border: 2px solid #eaeaea;

				.icon {
					font-size: 40px;
				}
			}

			.user-info {
				margin-left: 15px;

				.u_title {
					font-size: 14px;
					line-height: 30px;
				}
			}
		}

		.content-section {
			position: relative;
			top: -30px;


			.mine-actions {
				margin: 15px 15px;
				padding: 20px 0px;
				border-radius: 8px;
				background-color: #ffffff;

				.action-item {
					.icon {
						font-size: 28px;
					}

					.text {
						display: block;
						font-size: 13px;
						margin: 8px 0px;
					}
				}
			}
		}

		.uni-section {
			position: relative;
			top: -30px;
		}
	}
</style>