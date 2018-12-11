// miniprogram/pages/pdone/about/about.js
const app = getApp()
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '../../images/default_userimg.png',
    nickName: '点击这里登录',
    logged: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }
  },

  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      // app.globalData.userInfo = e.detail.userInfo
      wx.setStorageSync('userInfo', e.detail.userInfo)
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  showAbout: function() {
    wx.showModal({
      showCancel: false,
      content: 'ver20181210', //util.getDateFormat('veryyyyMMdd'),
      title: '昵称不再换啦'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var userinfo = wx.getStorageSync('userInfo')
    if (userinfo) {
      this.setData({
        avatarUrl: userinfo.avatarUrl,
        nickName: userinfo.nickName
      })
    }
  },
  showSetting: function() {
    wx.openSetting({

    })
  },
  showSysinfo: function() {
    wx.getSystemInfo({
      success: function(res) {
        wx.showActionSheet({
          itemList: ['手机品牌:' + res.brand, '手机型号:' + res.model, '微信版本号:' + res.version, '操作系统版本:' + res.system, '客户端平台:' + res.platform, '基础库版本:' + res.SDKVersion],
          success: function(res) {
            if (!res.cancel) {
              console.log(res.tapIndex)
            }
          }
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
})