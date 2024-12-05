# 
<h1 align="center">配套 星云erp-手机版</h1> 
<p align="center">
    <a href="http://wecando21cn.com">
     <img src="https://img.shields.io/badge/License-apache2.0-green.svg?style=flat" />
    </a>
    <a href="#">
        <img src="https://img.shields.io/badge/Edition-1.1-blue.svg" />
    </a>
     <a href="#">
        <img src="https://img.shields.io/badge/download-80m-red.svg" />
    </a>
</p>
<p align="center">    
    <b>如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！</b>
</p>
<div align="center">

[官网](http://wecando21cn.com) |
[在线演示](http://fetoo.wecando21cn.com/)  |
[技术文档](https://docs.qq.com/doc/p/6ef0737d449941b8adf4f4b5853a2f03d3d02ad7) 

</div>

### 介绍

<h4>基于uniapp开发的移动版erp，适配h5、小程序和app。</h4>

最近看到很多开源的erp系统做得挺不错，如星云erp、华夏erp等。但美中不足的是没有配套或者不开放移动版。实际erp应用过程中，实时实地库存盘点、采购入库核算、出库核算等都需要pad实地操作，那么移动版erp就变得尤其重要。

我们决定做了一套比较火的erp移动版配套，选了 星云erp v3版。功能和星云erp pc版1比1。基础框架完全没有商用限制。为了更好完善更多功能也欢迎加入我们团队成为共同开发者。后续更新预告增加出口贸易相关功能。
（该移动端也兼容若依框架）

接口后端和pc端可以直接 使用完全开源星云erp v3版 [星云ERP](https://gitee.com/lframework/xingyun/tree/v3/)（使用自行遵守原作者相关开源协议）。



### 在线演示

在线演示：[http://fetoo.wecando21cn.com/](http://fetoo.wecando21cn.com/)

技术文档：[https://docs.qq.com/doc/p/6ef0737d449941b8adf4f4b5853a2f03d3d02ad7](https://docs.qq.com/doc/p/6ef0737d449941b8adf4f4b5853a2f03d3d02ad7) 


| 更多演示  | 技术交流群①463950209  |  免费获取接口端和pc端的优化版 |
| ------------ | ------------ | ------------ |
|![输入图片说明](static/images/wx.jpg)|![输入图片说明](ui/qq.png)|![输入图片说明](ui/kefuqq.jpg)|

### 开源说明 (欢迎合作交流，QQ：3783722918   微信：yuwosuoyuan106)
| 项目名称  | 项目说明  |  项目费用 |
| ------------ | --------------------- | ------------ |
| 星云erp手机版 | erp基础数据管理 | 开源免费 |
| 星云erp手机版 | erp 资料、业务、财务相关43个功能（见演示） | 需要购买授权 |

### 推荐项目，可开放源代码 (欢迎合作交流，QQ：3783722918   微信：yuwosuoyuan106)

| 项目名称  | 在线体验  |  项目介绍 |
| ------------ | ------------ | ------------ |
|珠宝生产管理系统 MES | [在线演示](http://mes.wecando21cn.com/) | 适用珠宝首饰行业订单管理、生产管理、物料管理等 |
|进出口贸易ERP | [在线演示](http://cd.wecando21cn.com/) | 适用进出口贸易企业 资源管理、单证管理、合同管理、财务管理 ,集成低代码开发、工作流审批流 |
|CDERP通用ERP | [在线演示](http://erpplus.wecando21cn.com/) | 适用有二次开发需求的企业和自由开发者，集成低代码开发、工作流审批流  |


### 功能说明

| 系统功能 | 功能描述                        |
|------|-----------------------------|
| 基础信息 | 仓库、供应商、客户、会员基础信息            |
| 商品中心 | 商品主数据、商品分类、品牌、属性（自定义属性）     |
| 采购管理 | 采购订单、收货单、退货单                |
| 销售管理 | 销售订单、出库单、退货单                |
| 零售管理 | 零售出库单、退货单                   |
| 库存管理 | 商品库存                        |
| 库存盘点 | 盘点参数设置、预先盘点单管理、盘点任务管理、盘点单管理 |
| 库存调整 | 库存调整原因管理、库存调整               |
| 结算管理 | 供应商费用单、预付款单、对账单、结算单、收入/支出项目 |



### 安装教程

#### 后端：
参考[星云ERP](https://gitee.com/lframework/xingyun/tree/v3/)的相关配置，这里不赘述。


#### 前端：

* 应用框架基于[uniapp](https://uniapp.dcloud.net.cn/)，支持小程序、H5、Android和IOS。
* 前端组件采用[uni-ui](https://github.com/dcloudio/uni-ui)，全端兼容的高性能UI框架。

* 使用Hbuilder 打开项目
* 在config.js中，配置baseUrl，这个为后端接口地址
   baseUrl: 'http://localhost:8085',
* 运行项目，到浏览器或者小程序即可运行


### 界面展示
<table>
    <tr>
        <td><img src="https://gitee.com/i-love-ai/xy-mobile-master/raw/master/ui/1.png"/></td>
        <td><img src="https://gitee.com/i-love-ai/xy-mobile-master/raw/master/ui/2.png"/></td>
		<td><img src="https://gitee.com/i-love-ai/xy-mobile-master/raw/master/ui/3.png"/></td>
    </tr>
	<tr>
        <td><img src="https://gitee.com/i-love-ai/xy-mobile-master/raw/master/ui/4.png"/></td>
        <td><img src="https://gitee.com/i-love-ai/xy-mobile-master/raw/master/ui/5png.png"/></td>
		<td><img src="https://gitee.com/i-love-ai/xy-mobile-master/raw/master/ui/6.png"/></td>
    </tr>
	<tr>
        <td><img src="https://gitee.com/i-love-ai/xy-mobile-master/raw/master/ui/7.png"/></td>
        <td><img src="https://gitee.com/i-love-ai/xy-mobile-master/raw/master/ui/8.png"/></td>
		<td><img src="https://gitee.com/i-love-ai/xy-mobile-master/raw/master/ui/9.png"/></td>
    </tr>
   </tr>
	<tr>
        <td><img src="https://gitee.com/i-love-ai/xy-mobile-master/raw/master/ui/10.png"/></td>
        <td><img src="https://gitee.com/i-love-ai/xy-mobile-master/raw/master/ui/11png.png"/></td>
		<td><img src="https://gitee.com/i-love-ai/xy-mobile-master/raw/master/ui/12.png"/></td>
    </tr>
</table>

### 特别鸣谢

排名不分先后，感谢这些软件的开发者：星云erp、vue、echarts、tree-table-vue、swiper、form-create等，如有遗漏请联系我！

