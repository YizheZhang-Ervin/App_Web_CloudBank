const { ExistOfEtcd, GetOfEtcd, SetOfEtcd, DeleteOfEtcd } = require("../middleware/etcd.js")

// 订单生成
let GenOrder = (type, userId, content) => {
    let key = `${type}/${userId}/${content}`
    let value = new Date()
    SetOfEtcd(key, value)
}
// 取消
let CancelOrder = (type, userId, content) => {
    let key = `${type}/${userId}/${content}`
    DeleteOfEtcd(key)
}
// 查询
let GetOrder = (type, userId, content) => {
    let key = `${type}/${userId}/${content}`
    return GetOfEtcd(key)
}

module.exports = {
    GenOrder, CancelOrder, GetOrder
}