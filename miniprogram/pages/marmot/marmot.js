var marmot = require('../../common/marmot.js')

Page({
  onLoad: function (options) {
    marmot.init()
    wx.redirectTo({
      url: 'plugin://marmot/index'
    })
  }
})