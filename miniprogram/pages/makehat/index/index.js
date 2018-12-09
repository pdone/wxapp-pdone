// pages/index/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgPic: null,
    picChoosed: false
  },
  onLoad: function() {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     bgPic: app.globalData.userInfo.avatarUrl,
    //   });
    // }
  },
  assignPicChoosed() {
    if (this.data.bgPic) {
      this.setData({
        picChoosed: true
      })
    } else {
      this.setData({
        picChoosed: false
      })
    }
  },
  chooseImage(from) {
    wx.chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: [from.target.dataset.way],
      success: (res) => {
        var tempFilePaths = res.tempFilePaths;
        this.setData({
          bgPic: res.tempFilePaths[0]
        });
        this.assignPicChoosed();
      },
      fail: (res) => {
        this.assignPicChoosed();
      },
      complete: (res) => {
        this.assignPicChoosed();
      },
    })
  },
  nextPage() {
    app.globalData.bgPic = this.data.bgPic;
    wx.navigateTo({
      url: '../imageeditor/imageeditor',
    })
  },
  onGetUserInfo: function(e) {
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo;
      var imgUrl = '' + e.detail.userInfo.avatarUrl
      this.setData({
        userInfo: e.detail.userInfo,
        bgPic: imgUrl.substring(0, imgUrl.length - 3) + '0'
      });
      this.assignPicChoosed();
    }
  },

})