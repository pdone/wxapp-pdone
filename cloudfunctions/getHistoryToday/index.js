const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
exports.main = async(event, context) => {
  var day = new Date().getDate()
  var month = new Date().getMonth() + 1
  // collection 上的 get 方法会返回一个 Promise，因此云函数会在数据库异步取完数据后返回结果
  return db.collection('PdoneDB').where({
    month: month,
    day: day
  }).get()
}