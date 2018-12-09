//app.js
App({
  onLaunch: function() {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
  },
  globalData: {
    userInfo: null,
    bgPic: null,
    scale: 1,
    rotate: 0,
    hat_center_x: 0,
    hat_center_y: 0,
    currentHatId: 1
  }
})