// index.js
// 获取应用实例
Page({
  data: {
  
  },
  // 事件处理函数

 
  clickme:function(e)//动作函数，完成点击动作
  {
    wx.navigateTo({
      url: '/pages/upload/upload',

    })//点击后到达上传页面
  }
})
