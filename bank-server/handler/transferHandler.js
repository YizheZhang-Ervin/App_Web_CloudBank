const { GetOfEtcd, SetOfEtcd, LockByEtcd } = require("../middleware/etcd.js")
const { MakeResponse } = require("../utils/goResponse.js")

// POST 转出 & 转入
let Transfer = async (req, res) => {
    let inUserId = req.body["inUserId"]
    let outUserId = req.body["outUserId"]
    let amount = req.body["amount"]
    let currencyType = req.body["currencyType"]
    // balance检查是否充足
    // balance变更
    // 记入flow
}

module.exports = { Transfer }