//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    res:{} //请求到的数据列表
  },
  onLoad(params){
    var id = params.id;
    var url = 'https://api.douban.com/v2/movie/subject/'+id;
    console.log(url);
    // ajax请求获取电影详细信息：
    wx.request({
      url:'https://api.douban.com/v2/movie/subject/'+id,
      header: {
           // 'content-type': 'application/json' // 默认值
           "Content-Type": "application/text"
       },
      success:(res)=>{
        this.setData({res:res.data});
      }
    });
  }
})
