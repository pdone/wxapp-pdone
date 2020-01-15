//logs.js
const backgroundAudioManager = wx.getBackgroundAudioManager();
var plugin = requirePlugin("myPlugin");
Page({
  data: {},
  onLoad: function(options) {
    var userinfo = wx.getStorageSync('userInfo')
    plugin.init({
      appid: "Lo0cOlE6zcjC5JCknKnJyrCr8cEwwE",
      // textToSpeech: false,
      guideList: ["洛阳天气怎么样", "美元汇率", "讲个笑话吧"],
      welcome: ['您好，请问有什么可以帮助您的'],
      background: "#fff",
      // guideCardHeight: 40,
      // operateCardHeight: 145,
      // history: true,
      // historySize: 1,
      // navHeight: 10,
      robotHeader: "https://7064-pdone-7c3120-1258153658.tcb.qcloud.la/jiqimao.png?sign=f706e4cf61d234750244ed8033168065&t=1578992032",
      userHeader: "https://7064-pdone-7c3120-1258153658.tcb.qcloud.la/kawayi.png?sign=d558b5cd4b8be666081c535fd8cb23cc&t=1578992273",
      userName: userinfo != null ? userinfo.nickName : "",
      defaultWheel:'single',
      operateCardHeight: 54,
      success: () => {
        this.setData({
          flag: true
        })
      },
      fail: error => {}
    });

  },
  getQueryCallback: function(e) {

  },
  goBackHome: function() {
    wx.navigateBack({
      delta: 1
    })
  },
  //转发
  onShareAppMessage: function(obj) {
    return {
      title: 'AI语音助手',
      path: '/pages/originalPluginPage/originalPluginPage',
      imageUrl: ''
    }
  },
  handlerGobackClick(delta) {
    const pages = getCurrentPages();
    if (pages.length >= 2) {
      wx.navigateBack({
        delta: delta
      });
    } else {
      wx.navigateTo({
        url: '/pages/index/index'
      });
    }
  },
});