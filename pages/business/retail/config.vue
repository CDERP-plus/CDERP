<template>

	<uni-section title="配置项" type="line">
		<view class="form-view">
			<!-- 基础用法，不包含校验规则 -->
			<view>零售出库单上的会员是否必填</view>
			<uni-forms-item label="" required>
				<uni-data-checkbox v-model="configFormData.retailOutSheetRequireMember" :localdata="isRequired" />
			</uni-forms-item>
			<view>零售出库单是否需要发货</view>
			<uni-forms-item label="" required>

				<uni-data-checkbox v-model="configFormData.retailOutSheetRequireLogistics" :localdata="isRequired" />
			</uni-forms-item>
			<view>零售退货单上的会员是否必填</view>
			<uni-forms-item label="" required>

				<uni-data-checkbox v-model="configFormData.retailReturnRequireMember" :localdata="isRequired" />
			</uni-forms-item>
			<view>零售退货单是否关联零售出库单</view>
			<uni-forms-item label="" required>

				<uni-data-checkbox v-model="configFormData.retailReturnRequireOutStock" :localdata="isRequired" />
			</uni-forms-item>
			<view>零售退货单是否多次关联零售出库单</view>
			<uni-forms-item label="" required>
			
				<uni-data-checkbox v-model="configFormData.retailReturnMultipleRelateOutStock" :localdata="isRequired" />
			</uni-forms-item>

			</uni-forms>
			<view class="button-view">
			<button class="btn-view-button" @click="submit" type="primary" size="mini">保存</button>
				<button class="btn-view-button" @click="cancel" type="primary" size="mini">取消</button>
			</view>
		</view>
	</uni-section>

</template>

<script>
	
</script>

<style>
	.top-view{
		padding: 20px;
	}
	.form-view {
		margin-top: 20px;
		padding-left: 5px;
		padding-right: 5px;
		/* 	display: flex;
		align-items: center; */
      padding-bottom: 20px;
	}

	.button-view {
		 	display: flex;
			align-items: center; 
			margin-bottom: 20px;
	}
	
</style>