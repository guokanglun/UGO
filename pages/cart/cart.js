// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'', // 用户名
    position:'', // 收货地址
    phone:'',  //  电话号
    carts: [],  // 购物车数据
    allChecked: false, //  是否全选
    totalPrice:0, // 总价格
    totalNum:0   // 总数量

  },
  // 监听页面加载
  onShow(){
    // 获取缓存地址
    const adress = wx.getStorageSync('positionInfo')
    const carts = wx.getStorageSync('cart')  || [];
    const allChecked = carts.every(v=>v.checked)
    this.setData({
      username: adress.userName,
      position: adress.provinceName + adress.cityName + adress.countyName + adress.detailInfo,
      phone: adress.telNumber,
      carts,allChecked
    })
    this.getTotalPriceNum()
  },
  // 收货地址
  handleAdress(){
    wx.chooseAddress({
      success: (result) => {
        wx.setStorageSync('positionInfo', result)
      },
    })
  },
  // 处理全选全不选
  handleAllCheck(){
    // 全选状态取反
    const allChecked = !this.data.allChecked;
    const {carts} = this.data;
    carts.forEach(v=>v.checked=allChecked)
    wx.setStorageSync('cart', carts)
    this.setData({
      allChecked,carts
    })
    this.getTotalPriceNum()
  },
  // 处理商品是否选中
  handlecheck(e){
    // 商品id
    const {id} = e.currentTarget.dataset;
    // 购物车数据
    const {carts} = this.data;
    // 商品索引
    const index = carts.findIndex(v=>v.goods_id  === id)
    carts[index].checked = !carts[index].checked;
    wx.setStorageSync('cart', carts)
    const allChecked = carts.every(v=>v.checked)
    this.setData({
      carts, allChecked
    })
    this.getTotalPriceNum()
  },
  // 获取总价格，总数量
  getTotalPriceNum(){
    const {carts} = this.data;
    let totalNum = 0;
    let totalPrice = 0;

    carts.forEach(v=>{
      if(v.checked){
        totalNum += v.num
        totalPrice += v.num * v.goods_price
      }
    })
    this.setData({
      totalNum, totalPrice
    })
  },
  // 修改商品数量触发
  handleEditNum(e){
    // 获取商品id以及加减
    const {id, operation} = e.currentTarget.dataset
    const {carts} = this.data;
    // 商品索引
    const index = carts.findIndex(v=>v.goods_id === id)
    // 修改数量
    carts[index].num += operation
    if(carts[index].num == 0 && operation == -1){
      wx.showModal({
        title: '提示',
        content: '确定删除该商品？',
        success :(res)=> {
          if (res.confirm) {
            carts.splice(index, 1)
            this.setCart(carts)
          } else if (res.cancel) {
            carts[index].num +=1
            this.setCart(carts)
          }
        }
      })
    }
    this.setCart(carts)
  },
  // 封装通用代码
  setCart(carts){
    this.setData({
      carts
    })
    wx.setStorageSync('cart', carts)
    this.getTotalPriceNum()
  },
  // 结算
  handlePrice(){
    const {position, carts}  = this.data;
    if(!position){
      wx.showToast({
        title: '请添加收货地址',
      })
      return
    }
    if(carts.length === 0){
      wx.showToast({
        title: '还没有商品信息',
      })
      return
    }
    wx.navigateTo({
      url: '/pages/pay/pay',
    })
  }
})