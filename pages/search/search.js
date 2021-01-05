import {request}  from '../../requests/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchResultList:[],
    showBtn: false,
    inputValue: ''
  },
  timer: -1,
  handleInput(e){
    this.setData({
      showBtn:true
    })
    const {value} = e.detail;
    // 防抖动
    clearTimeout(this.timer)
    this.timer = setTimeout(()=>{
      this.getSearchResult(value)
    }, 2000)
  },

  async getSearchResult(value){
    const res = await request({url:'/goods/qsearch', data:{query:value}})
    this.setData({
      searchResultList:res.data.message
    })
  },
  handleTap(){
    this.setData({
      inputValue:'',
      showBtn: false
    })
    this.getSearchResult('')

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