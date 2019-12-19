// miniprogram/pages/pdone/about/about.js
import {
  $wuxNotification,
  $wuxToptips
} from '../../dist/index'
const app = getApp()
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '../../images/default_userimg.png',
    nickName: '点击这里登录',
    logged: false,
    visible: true,
    developer: true
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
    var userinfo = wx.getStorageSync('userInfo')
    if (userinfo) {
      this.setData({
        avatarUrl: userinfo.avatarUrl,
        nickName: userinfo.nickName
      })
    }
    console.log(wx.getStorageSync('userInfo'))
  },

  onGetUserInfo: function(e) {
    if (!this.developer && !this.logged) {
      wx.showLoading({
        title: '加载中',
      })
      wx.cloud.callFunction({
        name: 'login',
        data: {},
        success: res => {
          if (res.result.openid == 'oiQr940QcYmDq_Y_fD-cMvOoywhw') {
            this.setData({
              developer: true,
              logged: true
            })
          }
        },
        complete: function() {
          wx.hideLoading()
        }
      })
    }
    if (!this.logged && e.detail.userInfo) {
      wx.setStorageSync('userInfo', e.detail.userInfo)
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        nickName: e.detail.userInfo.nickName
      })
    }
  },
  showSetting: function() {
    wx.openSetting({})
  },
  showAbout: function() {
    wx.showModal({
      showCancel: false,
      content: 'ver20191219', //util.getDateFormat('veryyyyMMdd'),
      title: '昵称不再换啦'
    })
  },
  showToptips1() {
    $wuxToptips().info({
      hidden: false,
      text: '当前版本更新于2019年12月19日',
      duration: 2000,
      success() {},
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    
  },
  giveLike: function() {
    wx.navigateToMiniProgram({
      appId: 'wx18a2ac992306a5a4',
      path: 'pages/apps/largess/detail?accountId=6575852',
      extraData: {
        //需要传递给目标小程序的数据，目标小程序可在 App.onLaunch，App.onShow 中获取到这份数据。
      },
      envVersion: 'release',
      success(res) {},
      fail: {

      },
      complete: res => {
        wx.showToast({
          title: '非常感谢',
        })
      }
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
    return {
      title: '昵称不再换啦',
      desc: '一个诞生于个人兴趣的小程序'
    }
  },
})