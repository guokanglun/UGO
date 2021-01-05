import {request}  from '../../requests/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabBar:[
      {
        id:0,
        value: '综合',
        isActive: true
      },
      {
        id:1,
        value: '销量',
        isActive: false
      },
      {
        id:2,
        value: '价格',
        isActive: false
      }
    ],
    goodsList:[]
  },
  queryParams:{
    query:'',
    cid:'',
    pagenum:1,
    pagesize:10
  },
  total: 0, // 总条数
  pageNum: 0, // 总页数

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.queryParams.cid = options.cid || '';
    this.queryParams.query = options.query || '';
    this.getGoosList();
  },

  async getGoosList(){
    const res = await request({url:'/goods/search', data: this.queryParams})
    this.total = res.data.message.total;
    this.pageNum = Math.ceil(  this.total / this.queryParams.pagesize )
    this.setData({
      goodsList: [...this.data.goodsList, ...res.data.message.goods]
    })

  },

  // 接收tabar里的索引
  handleGetIndex(e){
    const index = e.detail.index;
    const {tabBar} = this.data;
    tabBar.forEach(v=>v.id===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabBar
    })
  },

  // 下滑触底事件
  onReachBottom(){
    this.queryParams.pagenum ++;
    if(this.queryParams.pagenum >= this.pageNum){
      wx.showToast({
        title: '我是有底线的~~',
      })
    }else{
      this.getGoosList()
    }
  },

  // 下拉刷新
  onPullDownRefresh(){
    this.setData({
      goodsList:[]
    }),
    this.queryParams.pagenum = 1;
    this.getGoosList()
    // 加载完成后停止下拉效果
    wx.stopPullDownRefresh()
  }
})