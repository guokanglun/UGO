import {request}  from '../../requests/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperData:[],  // 轮播图数据
    cateList:[], // 分类导航数据
    floorList:[] // 楼层数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.getSwiperList();
    this.getCateList();
    this.getFloorList()
  },
  async getSwiperList(){
    const res = await request({url:'/home/swiperdata'})
    this.setData({
      swiperData: res.data.message
    })
  },
  async getCateList(){
    const res = await request({url:'/home/catitems'})
    this.setData({
      cateList: res.data.message
    })
  },
  async getFloorList(){
    const res = await request({url:'/home/floordata'})
    this.setData({
      floorList: res.data.message
    })
  }
})