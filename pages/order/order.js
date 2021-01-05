import {request}  from '../../requests/index'
import {token} from '../../utils/payToken'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabBar:[
      {
        id:0,
        value: '全部',
        isActive: true
      },
      {
        id:1,
        value: '待付款',
        isActive: false
      },
      {
        id:2,
        value: '待发货',
        isActive: false
      },
      {
        id:3,
        value: '退款/退货',
        isActive: false
      }
    ],
    orders:[],
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const pages = getCurrentPages()
    const index = pages[1].options.type * 1 - 1
    console.log(index)
    const {tabBar} = this.data;
    tabBar.forEach(v=>v.id===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabBar
    })
    this.getOrderList(index + 1)
  },
  async getOrderList(type){
    const res = await request({url:'/my/orders/all?type=' + type, header:{Authorization:token}})
    const {orders} = res.data.message;
    orders.forEach(v=>{
      v.create_time = new Date(v.create_time * 1000).toLocaleString()
    })
    this.setData({
      orders
    })
  },
})