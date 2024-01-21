const { SetOfEtcd, GetOfEtcd } = require("../../middleware/etcd.js")

// 记入流水
let RecordFlow = (type, userId, amount) => {
    let key = `${type}/${userId}/${amount}`
    let value = new Date()
    SetOfEtcd(key, value);
}

// 查询流水
let GetFlow = (type, userId, amount) => {
    let key = `${type}/${userId}/${amount}`
    return GetOfEtcd(key)
}

module.exports = {
    RecordFlow, GetFlow
}