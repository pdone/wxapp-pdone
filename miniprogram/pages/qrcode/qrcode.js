// miniprogram/pages/qrcode/qrcode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    fgColor: 'black',
    isdisable: false
  },

  bindinput(e) {
    const value = e.detail.value
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    this.setData({
      isdisable: true
    })
    //调用云函数 检查用户输入内容安全性
    wx.cloud.callFunction({
      name: 'msgCheck',
      data: {
        content: value
      }
    }).then(ckres => {
      wx.hideLoading();
      if (ckres.result.errCode == 87014) {
        wx.showToast({
          title: '请注意言论',
          icon: 'none',
          mask: true
        })
      } else {
        this.setData({
          value: value,
          isdisable: false,
        })
      }
    })
  },
  previewImage() {
    // 在自定义组件下，当前组件实例的 this，以操作组件内 <canvas> 组件
    const that = this.selectComponent('#qrcode')

    wx.canvasToTempFilePath({
      canvasId: 'wux-qrcode',
      success: (res) => {
        wx.previewImage({
          urls: [res.tempFilePath],
        })
      },
    }, that)
  },
  randomColor() {
    const colorStr = Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase()
    const length = colorStr.length
    const prefixStr = `000000`.substring(0, 6 - colorStr.length)
    return `#${prefixStr}${colorStr}`
  },
})