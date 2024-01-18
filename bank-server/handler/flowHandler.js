const { SetOfEtcd } = require("../middleware/etcd.js")

// 记入流水
let RecordFlow = (type, userId, amount) => {
    let key = `${type}/${userId}/${amount}`
    let value = new Date()
    SetOfEtcd(key, value);
}

module.exports = {
    RecordFlow
}