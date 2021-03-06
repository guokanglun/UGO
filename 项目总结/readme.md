[TOC]

### 1. [接口文档](https://www.showdoc.com.cn/128719739414963?page_id=2516997897914014)  [官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)

### 2. 项目目录结构及页面结构

##### 2.1 目录结构

| 目录名     | 作用           |
| ---------- | -------------- |
| components | 存放组件       |
| icons      | tabBar 图标    |
| pages      | 所有页面信息   |
| requests   | 小程序请求接口 |
| styles     | 公共样式       |
| utiles     | 工具库         |

##### 2.2 页面结构

| 页面名        | 作用     |
| ------------- | -------- |
| auth          | 权限认证 |
| cart          | 购物车   |
| category      | 分类     |
| collect       | 收藏     |
| feedback      | 反馈     |
| goods_details | 商品详情 |
| goods_list    | 商品列表 |
| index         | 首页     |
| login         | 登录页   |
| order         | 订单     |
| pay           | 付款     |
| search        | 搜索     |
| user          | 我的     |



### 3. 首页

##### 3.1 效果

[![sA6uHe.png](https://s3.ax1x.com/2021/01/06/sA6uHe.png)](https://imgchr.com/i/sA6uHe)

##### 3.2 业务逻辑

1. 自定义组件实现头部搜索框
2. 加载轮播图数据
3. 加载分类数据
4. 加载 楼层数据
5. tabbar 实现底部导航

##### 3.3 关键技术

1. 小程序内置requests API
2. async await 处理promise
3. 小程序swiper 组件
4. 自定义组件实现搜索框

### 4. 分类页面

##### 4.1 效果

[![sA6QNd.png](https://s3.ax1x.com/2021/01/06/sA6QNd.png)](https://imgchr.com/i/sA6QNd)

##### 4.2 业务逻辑

1. 加载分类页面数据
2. 点击左侧菜单，右侧数据动态渲染

##### 4.3 关键技术

1. scroll-view 组件
2. async await

### 5. 商品列表

##### 5.1 效果

[![sA639I.png](https://s3.ax1x.com/2021/01/06/sA639I.png)](https://imgchr.com/i/sA639I)

##### 5.2 业务逻辑

1. 自定义组件实现搜索
2. 加载商品列表数据
3. 启用下拉页面功能
4. 启用上拉页面功能
5. 加载下一页功能 

##### 5.3 关键技术

1. 小程序配置文件中启用上拉和下拉
2.  tab切换（父子组件传参）

### 6. 商品详情

##### 6.1 效果

[![sA6GgP.png](https://s3.ax1x.com/2021/01/06/sA6GgP.png)](https://imgchr.com/i/sA6GgP)



##### 6.2 业务逻辑

1. 渲染商品详情数据
2. 点击轮播图，可以图片预览
3. 点击收藏 
4. 联系客服，分享，购物车

##### 6.3 关键技术

1. swiper 组件
2. 本地存储实现收藏功能
3. 富文本渲染
4. 图片预览

### 7. 收藏页

##### 7.1 效果

[![sP6fBj.png](https://s3.ax1x.com/2021/01/04/sP6fBj.png)](https://imgchr.com/i/sP6fBj)

##### 7.2 业务逻辑

1. 获取本地存储数据渲染
2. 点击商品跳转到商品详情

##### 7.3 关键技术

1. 自定义组件
2. 本地存储加载收藏商品

### 8. 购物车

##### 8.1 效果

[![sPcYan.png](https://s3.ax1x.com/2021/01/04/sPcYan.png)](https://imgchr.com/i/sPcYan)



##### 8.2 业务逻辑

1. 渲染购物车数据
2. 添加收货地址
3. 商品是否选中， 商品数量加减
4. 全选功能，结算



##### 8.3 关键技术

1. 小程序选择收货地址API
2. 复选框组件

### 9. 支付页面

##### 9.1 效果

[![sPgFJ0.png](https://s3.ax1x.com/2021/01/04/sPgFJ0.png)](https://imgchr.com/i/sPgFJ0)



##### 9.2 业务逻辑

1. 获取微信收货地址
2. 渲染购物车中要结算的商品
3. 支付功能（未完成）

##### 9.3 关键技术



### 10. 订单列表

##### 10.1 效果

[![sP2m1f.png](https://s3.ax1x.com/2021/01/04/sP2m1f.png)](https://imgchr.com/i/sP2m1f)

##### 10.2 业务逻辑

1. 根据不同状态加载不同订单数据

##### 10.3 关键技术

1. 小程序自定义组件 传参 
2. 时间戳格式化处理

###  11. 搜索页面

##### 11.1 效果

[![sPRArF.png](https://s3.ax1x.com/2021/01/04/sPRArF.png)](https://imgchr.com/i/sPRArF)

##### 11.2 业务逻辑

1. 获取搜索框的值进行搜索
2. 点击取消，清除状态，修改页面
3. 点击搜索结果跳转到商品详情

##### 11.3 关键技术

1. 输入值改变时，为了提高性能，使用防抖技术

### 12. 个人中心

##### 12.1 效果

[![sPR8qe.png](https://s3.ax1x.com/2021/01/04/sPR8qe.png)](https://imgchr.com/i/sPR8qe)

##### 12.2 业务逻辑

1. 获取登录信息
2. 记载收藏信息
3. 查询订单状态

##### 12.3 关键技术

1. css filter 使用

### 13. 意见反馈

##### 13.1 效果

[![sPWUw4.png](https://s3.ax1x.com/2021/01/04/sPWUw4.png)](https://imgchr.com/i/sPWUw4)

##### 13.2 业务逻辑

1. 点击 + 显示本地图片并显示在页面上
2. 点击图片，移除自己

##### 13.3 关键技术

1. 自定义图片组件
2. 小程序上传文件API



### 14. 遇到的问题及解决方案

##### 14.1. scroll-top 没有效果

    解决办法： 点击左侧分类后重新给scroll-top赋值即可

##### 14.2. 地址授权问题
    第一次点击取消后，开发者工具无法再次获取，真机可以直接获取，没有授权页面


##### 14.4. 支付功能
    需要企业账号 获取token值

#####  
### 15. 知识点总结

##### 15.1 onShow onLoad

```
onshow 每次刷新都更新数据
onload 第一次加载获取数据
```



##### 15.2  标签问题

```
单标签必须以 / 结尾  否则会报错
​```html
    <button type='primary' />
​```
```

