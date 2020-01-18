// pages/pdone/historytoday/historytoday.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    array: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.startPullDownRefresh()
    this.getData()
  },

  //获取数据
  getData() {
    var result = []
    wx.cloud.callFunction({
      name: 'getHistoryToday',
      data: {},
      success: res => {
        result = res.result.data  
        this.setData({
          array: result
        })
        setTimeout(function () {
          wx.stopPullDownRefresh()
        }, 500)
      }
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getData()
  },
})