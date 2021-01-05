// pages/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabBar:[
      {
        id:0,
        value: '商品收藏',
        isActive: true
      },
      {
        id:1,
        value: '品牌收藏',
        isActive: false
      },
      {
        id:2,
        value: '店铺收藏',
        isActive: false
      },
      {
        id:3,
        value: '浏览足迹',
        isActive: false
      }
    ],
    collect:[]
  },

  onShow(){
    const collect = wx.getStorageSync('collect') || [];
    this.setData({
      collect
    })
  }

})