export const request = (params) =>{
    wx.showLoading({
      title: "加载中",
      mask:true
    })
    const base_url = 'https://api-hmugo-web.itheima.net/api/public/v1'
    return new Promise((resole, reject)=>{
        wx.request({
          ...params,
          url: base_url + params.url,
          success(res){
            resole(res)
          },
          fail(error){
            reject(error)
          },
          complete(){
            wx.hideLoading()
          }
        })
    })
}