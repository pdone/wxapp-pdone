// miniprogram/pages/sysinfo/sysinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sysinfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sysinfo: res
        })
      }
    })
  },
})