// pages/upload/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList:"/pages/data/add.jpg"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  uploadImage:function()
  {var that=this;
    wx.chooseImage({//选择图片
        count:1,
        sizeType:['original','compreesed'],//微信小程序自带的库
        sourceType:['album','camera'],
        success:function(res)
        {
          that.setData({
            imageList:res.tempFilePaths[0]//设置数据，这里直接设置路径
          })
        }
    })
  
  },
  request:function()
  {
    var that=this
    wx.uploadFile({
      
      url: 'http://192.168.225.149:5000/request', //局域网测试时，要确保端口不被占用
      //url:'http://localhost:8080/request',//在主机上测试时

      filePath: that.data.imageList,
      name: 'img',
      success (res){
        console.log(res)
        console.log("win")
      wx.downloadFile({
        url: 'http://192.168.225.149:5000/get',
        //url:'http://localhost:8080/get',同上，和后端的函数对应

        success(res)//如果成功
        {
          console.log("download win")
          console.log(res)
          if(res.statusCode==200)//设置数据
          {
            console.log(res.tempFilePath)
            that.setData({imageList:res.tempFilePath})
          }
        },
        fail(res)//这里是用来测试用的，判断是哪里出了问题，具体问题可以在开发者工具看到
        {
          console.log("Download fail")
          console.log(res)}
      })
      },
      
      fail(res)
      {
        console.log(res)
        console.log("can't upload")
      }
    })
  }
})
