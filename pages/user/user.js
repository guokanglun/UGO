// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: '',
    collectGoodsCount:0  //  收藏商品数量
  },
  handleUserInfo(e){
    wx.setStorageSync('userinfo', e.detail.userInfo)
    this.onShow()
  },

  onShow(){
    const userinfo = wx.getStorageSync('userinfo')
    const collect = wx.getStorageSync('collect')
    if(userinfo){
      this.setData({
        userinfo,
        collectGoodsCount: collect.length
      })
    }
  }
})