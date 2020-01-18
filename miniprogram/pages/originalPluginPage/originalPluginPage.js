//logs.js
const backgroundAudioManager = wx.getBackgroundAudioManager();
var plugin = requirePlugin("myPlugin");
Page({
  data: {},
  onLoad: function (options) {
    var userinfo = wx.getStorageSync('userInfo')
    plugin.init({
      appid: "Lo0cOlE6zcjC5JCknKnJyrCr8cEwwE",//微信对话开发平台申请的插件id
      //openid: "",//微信小程序用户的opened
      textToSpeech: false, //在有UI模式下，将文本回答朗读出来
      guideList: ["明天天气", "美元汇率", "讲个笑话吧"], //自定义提示语
      welcome: ['您好，请问有什么可以帮助您的'],
      background: "#1b2446",//聊天背景色
      // guideCardHeight: 40,//用户提示区域的高度
      // operateCardHeight: 145,//用户操作区域的高度
      // history: true,//是否开启聊天记录
      // historySize: 60,//聊天记录的最大条数
      // navHeight: 10,//自定义导航栏高度
      robotHeader: "https://7064-pdone-7c3120-1258153658.tcb.qcloud.la/jiqimao.png?sign=f706e4cf61d234750244ed8033168065&t=1578992032",//机器人默认头像
      userHeader: "https://7064-pdone-7c3120-1258153658.tcb.qcloud.la/kawayi.png?sign=d558b5cd4b8be666081c535fd8cb23cc&t=1578992273",//用户默认头像
      userName: userinfo != null ? userinfo.nickName : "",//用户昵称
      defaultWheel: 'single',//主题颜色 many为亮皮肤, single为暗皮肤
      success: () => {
        this.setData({
          flag: true
        })
      },
      fail: error => { }
    });
    console.log(plugin.getData())
  },
  getQueryCallback: function (e) {

  },
  goBackHome: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  //转发
  onShareAppMessage: function (obj) {
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