import {token} from '../../utils/payToken'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    position: '',
    phone: '',
    cart:[],
    totalNum:0,
    totalPrice:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     const userInfo = wx.getStorageSync('positionInfo')
     const cart = wx.getStorageSync('cart')
     this.setData({cart})
     if(userInfo){
        const username = userInfo.userName;
        const position = userInfo.provinceName + userInfo.cityName + userInfo.countyName + userInfo.detailInfo;
        const phone = userInfo.telNumber
        this.setData({
          username, position, phone
        })
     }
     this.getTotalPriceNum()
  },

  getTotalPriceNum(){
    const {cart} = this.data;
    let totalNum = 0;
    let totalPrice = 0;

    cart.forEach(v=>{
      if(v.checked){
        totalNum += v.num
        totalPrice += v.num * v.goods_price
      }
    })
    this.setData({
      totalNum, totalPrice
    })
  },
  // 点击支付跳转到授权页面
  handlePay(){
    
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})