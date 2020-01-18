// miniprogram/pages/countdown/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inityear: new Date().getFullYear(),
    targetTime: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let nowDate = new Date().getTime();
    let getUTC = function (year, month, day, name) {
      if (typeof (name) == 'undefined') {
        name = "未知节日"
      }
      var utcDate = Date.UTC(year, month - 1, day)
      var tempDayBySecond = utcDate - nowDate
      var tempStatus = tempDayBySecond > 0 ? 1 : 0
      //计算出相差天数
      var days = Math.floor(tempDayBySecond / (24 * 3600 * 1000))
      return {
        days, status: tempStatus, name, date: month + '月' + day + '日', utcDate
      }
    }

    let tempArr = new Array();
    tempArr.push(getUTC(this.data.inityear, 1, 1, "元旦"))
    tempArr.push(getUTC(this.data.inityear, 1, 24, "除夕"))
    tempArr.push(getUTC(this.data.inityear, 1, 25, "春节"))
    tempArr.push(getUTC(this.data.inityear, 2, 8, "元宵节"))
    tempArr.push(getUTC(this.data.inityear, 2, 14, "情人节"))
    tempArr.push(getUTC(this.data.inityear, 3, 8, "女生节"))
    tempArr.push(getUTC(this.data.inityear, 3, 12, "植树节"))
    tempArr.push(getUTC(this.data.inityear, 3, 14, "白色情人节"))
    tempArr.push(getUTC(this.data.inityear, 3, 15, "消费者权益日"))
    tempArr.push(getUTC(this.data.inityear, 4, 4, "清明节"))
    tempArr.push(getUTC(this.data.inityear, 4, 19))
    tempArr.push(getUTC(this.data.inityear, 5, 1, "劳动节"))
    tempArr.push(getUTC(this.data.inityear, 6, 1, "儿童节"))
    tempArr.push(getUTC(this.data.inityear, 6, 25, "端午节"))
    tempArr.push(getUTC(this.data.inityear, 8, 25, "七夕节"))
    tempArr.push(getUTC(this.data.inityear, 9, 10, "教师节"))
    tempArr.push(getUTC(this.data.inityear, 10, 1, "国庆节、中秋节"))
    tempArr.push(getUTC(this.data.inityear, 10, 25, "重阳节"))
    tempArr.push(getUTC(this.data.inityear, 11, 1, "万圣节"))
    tempArr.push(getUTC(this.data.inityear, 11, 11, "光棍节"))
    tempArr.push(getUTC(this.data.inityear, 12, 25, "圣诞节"))

    this.setData({
      targetTime: tempArr
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})