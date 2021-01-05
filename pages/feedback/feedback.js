// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabBar:[
      {
        id:0,
        value: '体验问题',
        isActive: true
      },
      {
        id:1,
        value: '商品、商家投诉',
        isActive: false
      }
      
    ],
    uploadImg:[],
    inputValue:''
  },
  handleGetIndex(e){
    const {index} = e.detail
    const {tabBar} = this.data;
    tabBar.forEach(v=>v.id===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabBar
    })
    this.getOrderList(index+1)
  },
  handleUploadImg(){
    wx.chooseImage({
      count: 5,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success :(res)=> {
        this.setData({
          uploadImg: [...this.data.uploadImg, ...res.tempFilePaths]
        })
      }
    })
  },
  deleteImg(e){
    const {index} = e.currentTarget.dataset
    const {uploadImg} = this.data;
    uploadImg.splice(index, 1)
    this.setData({
      uploadImg
    })

  },
  handleInputdata(e){
    this.setData({
      inputValue:e.detail.value
    })
  },
  submitData(){
    const {inputValue} = this.data;
    if(!inputValue){
      wx.showToast({
        title: '输入不合法',
      })
      return
    }

    setTimeout(()=>{
      wx.showToast({
        title: '上传成功',
      })
    }, 1000)

    wx.navigateBack({
      delta: 0,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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