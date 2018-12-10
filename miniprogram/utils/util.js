module.exports = {
  formatTime: formatTime,
  getDateFormat: getDateFormat
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getDateFormat(fmtStr) {
  var date = new Date();
  return date.format(fmtStr);
}
/*
 *对Date的扩展，将 Date 转化为指定格式的String
 *月(M)、日(d)、小时(H)、分(m)、秒(s)、季度(q) 可以用 1-2个占位符，
 *年(y)可以用 1-4个占位符，毫秒(t) 1个占位符(3位的数字)
 *星期(w) 1个占位符
 *example
 *(new Date()).Format("yyyy-MM-dd HH:mm:ss.t w") ==> 2018-10-19 14:19:17.649 星期五
 */
Date.prototype.format = function(fmt) {
  var weekArr = {
    cn: new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"),
    en: new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
  };
  var o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "H+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "t": ("00" + this.getMilliseconds()).slice(-3),
    "w": weekArr.en[this.getDay()]
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}