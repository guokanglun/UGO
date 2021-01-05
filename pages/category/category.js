import {request}  from '../../requests/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryList:[],  // 所有数据
    leftData:[],  // 左侧导航
    rightData:[],  //  右侧数据
    currentIndex: 0,
    scrollTop:"0"
  },
  // 本地存储
  getStorage(){
    const cates = wx.getStorageSync('cates')
    if(!cates){ // 如果没有，发起请求获取
      this.getCategory()
    }else{  // 超过给定时间，重新获取数据
      if(Date.now() - cates.time > 1000 * 10){
        this.getCategory()
      }else{ // 数据可以使用
        const leftData = cates.data.map(v=>v.cat_name)
        const rightData = cates.data[this.data.currentIndex].children
        this.setData({
          leftData,rightData
        })
      }
    }
  },
  handleIndex(e){
    this.setData({
      currentIndex: e.currentTarget.dataset.index,
      scrollTop: 0
    })
    this.getStorage()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getStorage()
  },
  async getCategory(){
    const res = await request({url:'/categories'});
    // 把接口的数据存放到本地存储
    wx.setStorageSync('cates', {time:Date.now(), data:res.data.message})
    const leftData = res.data.message.map(v=>v.cat_name)
    const rightData = res.data.message[this.data.currentIndex].children
    this.setData({
      leftData,rightData
    })
  }
})