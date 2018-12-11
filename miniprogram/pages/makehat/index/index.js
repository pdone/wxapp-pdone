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
    if (wx.getStorageSync("localAvatarUrl")) {
      this.setData({
        userInfo: e.detail.userInfo,
        bgPic: wx.getStorageSync("localAvatarUrl")
      });
      console.log('use cache')
      this.assignPicChoosed()
    } else {//由于有同学反馈最后生成结果的时候会失败。所以决定把头像缓存到本地，合成的时候用本地头像图片去合成。
      if (e.detail.userInfo) {
        var imgUrl = '' + e.detail.userInfo.avatarUrl
        var bigImgUrl = imgUrl.substring(0, imgUrl.length - 3) + '0'
        wx.downloadFile({
          url: bigImgUrl,
          fail: err => {
            console.log(err)
          },
          success: function(res) {
            wx.saveFile({
              tempFilePath: res.tempFilePath,
              success: res => {
                wx.setStorageSync("localAvatarUrl", res.savedFilePath)
              }
            })
          }
        })
        wx.setStorageSync('userInfo', e.detail.userInfo)
        app.globalData.userInfo = e.detail.userInfo
        app.globalData.bgPic = wx.getStorageSync("localAvatarUrl") //bigImgUrl
        this.setData({
          userInfo: e.detail.userInfo,
          bgPic: bigImgUrl
        });
        this.assignPicChoosed()
      }
    }
  },

})