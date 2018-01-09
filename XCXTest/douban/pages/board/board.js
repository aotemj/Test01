//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    imgUrls: [
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2506694509.jpg',
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2508926717.jpg',
      'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
  },
  onLoad(params){
    // console.log(params);
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
