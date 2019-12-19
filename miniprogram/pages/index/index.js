//index.js
const app = getApp()

Page({
  data: {
    visible: false,
  },

  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }

    // wx.login({
    //   success(res) {
    //     if (res.code) {
    //       // 发起网络请求
    //       wx.request({
    //         url: 'http://localhost:53487/code2Session?code=' + res.code,
    //         success: res2 => {
    //           console.log(res2.data)
    //           if (res2.data.data!=null) {
    //             wx.showModal({
    //               title: res2.data.data.openid,
    //               content: res2.data.data.session_key,
    //             })
    //           }
    //         }
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })

    //检查是否存在新版本
    wx.getUpdateManager().onCheckForUpdate(function(res) {
      // 请求完新版本信息的回调
      console.log("是否有新版本：" + res.hasUpdate)
      if (res.hasUpdate) { //如果有新版本

        // 小程序有新版本，会主动触发下载操作（无需开发者触发）
        wx.getUpdateManager().onUpdateReady(function() { //当新版本下载完成，会进行回调
          wx.showModal({
            content: '检测到新版本，即将开始更新',
            showCancel: false,
            success: function(res) {
              if (res.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                wx.getUpdateManager().applyUpdate()
              }
            }
          })
        })

        // 小程序有新版本，会主动触发下载操作（无需开发者触发）
        wx.getUpdateManager().onUpdateFailed(function() { //当新版本下载失败，会进行回调
          wx.showModal({
            content: '检查到有新版本，但下载失败，请检查网络设置',
            showCancel: false,
          })
        })
      }
    })
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function() {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]

        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath

            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

  mycloudfunc1: function() {
    wx.cloud.callFunction({
      name: 'pdone',
      data: {
        a: 10,
        b: 20
      },
      success: res => {
        console.log(res)
        this.setData({
          list: res.result
        })
      }
    })
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