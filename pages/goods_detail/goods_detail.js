import {request}  from '../../requests/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDetail:{},
    isCollect: false
  },

  goodsObj:{},

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function () {
    const pages = getCurrentPages()
    const goods_id = pages[pages.length - 1].options.goods_id
    this.getGoodsDetail(goods_id)

    // 获取缓存商品收集
    const collect = wx.getStorageSync('collect') || [];
    const index = collect.some(v=>v.goods_id == goods_id)
    if(index){
      this.setData({
        isCollect:true
      })
    }else{
      this.setData({
        isCollect:false
      })
    }

  },
  async getGoodsDetail(goods_id){
    const res = await request({url:'/goods/detail', data:{goods_id}})
    // 优化一下（将需要的字段放在goodsDetail，用不到的字段就不用放进去了，避免性能浪费）
    this.goodsObj = res.data.message;
    const {pics, goods_price, goods_name, goods_introduce} = res.data.message;
    this.setData({
      goodsDetail: {
        pics, goods_price, goods_name, goods_introduce, goods_id
      }
    })
  },
  handlePreview(e){
    const {src} = e.currentTarget.dataset;
    const {pics} = this.data.goodsDetail;
    const pic_list = pics.map(v=>v.pics_mid)
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: pic_list, // 需要预览的图片http链接列表
    })

  },
  handleAddCart(){
    // 获取缓存数据
    const carts = wx.getStorageSync('cart') || [];
    // 获取商品id
    const index = carts.findIndex(v=>v.goods_id===this.goodsObj.goods_id)
    if(index == -1){
      // 如果不存在，添加一个 
      this.goodsObj.num  = 1;
      this.goodsObj.checked = true;
      carts.push(this.goodsObj)
    }else{
      // 存在，num ++
      carts[index].num ++;
    }
    wx.setStorageSync('cart', carts)
    wx.showToast({
      title: '加入成功',
      mask:true
    })
  },
  // 商品收藏
  handleCollect(){

    // 获取缓存中的商品收藏数据
    let collectList = wx.getStorageSync('collect') || [];
    console.log(collectList)
    // 判断缓存中是否有当前商品
    const index = collectList.findIndex(v=>v.goods_id === this.goodsObj.goods_id)
    console.log(index)
    if(index == -1){
      // 没有  添加该商品
      collectList.push(this.goodsObj)
      wx.setStorageSync('collect', collectList)
      this.setData({
        isCollect:true
      })
      return
    }
    this.setData({
      isCollect:true
    })
    collectList.splice(index,1)
    wx.setStorageSync('collect', collectList)
    this.setData({
      isCollect:false
    })

  }
})