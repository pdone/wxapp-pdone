// miniprogram/pages/pdone/blog/blog.js
var WxParse = require('../../utils/wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var article = '<p>美国当地时间12月4日，微软正式举行 <a href=\"https://www.microsoft.com/en-us/connectevent/\" target=\"_blank\" rel=\"noopener\">Microsoft Connect(); 2018 开发者大会</a>，主要内容有：</p>\n<ul>\n<li>Visual Studio 2019 Preview</li>\n<li>.NET Core 3 Preview 1</li>\n<li>.NET Framework 4.8</li>\n<li>ASP.NET Core 2.2</li>\n<li>ML.NET 0.8</li>\n<li><strong>WPF, Windows Forms 和 WinUI 框架宣布开源</strong></li>\n<li>宣布 .NET 基金会开放接受会员加入</li>\n<li>微软和 Docker 宣布了一个新的联合开源项目，即 Cloud Native Application Bundle，它可以更轻松地打包和运行云原生应用程序</li>\n</ul>\n<p>会不会有朝一日WindowsOS也开源了？那我把源码下载下来改成PdoneOS编译发布给大家用。</p>\n<p><img class=\"alignnone size-full wp-image-422\" src=\"https://pdoner.cn/wp-content/uploads/2018/12/funny.jpg\" alt=\"\" width=\"150\" height=\"150\" /><br />\n<!--more--></p>\n<h2>相关资料</h2>\n<ul>\n<li><a href=\"https://blogs.msdn.microsoft.com/dotnet/2018/12/04/announcing-net-core-3-preview-1-and-open-sourcing-windows-desktop-frameworks/\">Open Sourcing Windows Desktop Frameworks</a></li>\n<li><a href=\"https://opensource.microsoft.com/\">Microsoft Open Source 资源</a></li>\n<li><a href=\"https://visualstudio.microsoft.com/zh-hans/vs/preview/?rr=https%3A%2F%2Fblogs.msdn.microsoft.com%2Fvisualstudio%2F2018%2F12%2F04%2Fmaking-every-developer-more-productive-with-visual-studio-2019%2F%3FWT.mc_id%3Dsocial-reddit-marouill\">Visual Studio 2019 Preview 下载地址</a></li>\n<li><a href=\"https://github.com/Microsoft\">Github 微软</a></li>\n</ul>\n';
    /**
    * WxParse.wxParse(bindName , type, data, target,imagePadding)
    * 1.bindName绑定的数据名(必填)
    * 2.type可以为html或者md(必填)
    * 3.data为传入的具体数据(必填)
    * 4.target为Page对象,一般为this(必填)
    * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
    */
    var that = this;
    WxParse.wxParse('article', 'html', article, that, 0);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
   
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

  }
})