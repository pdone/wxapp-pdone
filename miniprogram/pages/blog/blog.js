// miniprogram/pages/pdone/blog/blog.js
var WxParse = require('../../utils/wxParse/wxParse.js');
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageData: [],
    // 触摸开始时间
    touchStartTime: 0,
    // 触摸结束时间
    touchEndTime: 0,
    // 最后一次单击事件点击发生时间
    lastTapTime: 0,
    // 单击事件点击后要触发的函数
    lastTapTimeoutFunc: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    /**
     * WxParse.wxParse(bindName , type, data, target,imagePadding)
     * 1.bindName绑定的数据名(必填)
     * 2.type可以为html或者md(必填)
     * 3.data为传入的具体数据(必填)
     * 4.target为Page对象,一般为this(必填)
     * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
     */
    // var article = '';
    // var that = this;
    // WxParse.wxParse('article', 'html', article, that, 0);

    var that = this
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://pdoner.cn/wp-json/wp/v2/posts',
      header: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      success: function(res) {
        var list = []
        if (res.data.length > 0) {
          for (var i = 0; i < res.data.length; i++) {
            var temp = {
              id: res.data[i].id,
              title: util.decodeUnicode(res.data[i].title.rendered),
              date: res.data[i].date.replace('T', ' '),
              content: res.data[i].guid.rendered,
              link: res.data[i].link
            }
            list.push(temp)
          }
        }
        that.setData({
          pageData: list
        })
      },
      fail: function() {

      },
      complete: function() {
        wx.hideLoading()
      }
    })
  },
 
  //长按复制文章链接
  getlink:function(event)
  {
    var data = event.currentTarget.dataset
    wx.setClipboardData({
      data: data.link,
      success(res) {

      }
    })
  },
})