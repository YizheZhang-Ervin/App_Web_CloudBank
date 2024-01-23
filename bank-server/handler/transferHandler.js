const { GetOfEtcd, SetOfEtcd, LockByEtcd } = require("../middleware/etcd.js")
const { MakeResponse } = require("../utils/goResponse.js")
const { GetBalance, UpdateBalance } = require("./public/balanceHandler.js")
const { RecordFlow, GetFlow } = require("./public/flowHandler.js")
const { GenOrder, CancelOrder, GetOrder, GetOrderOne, CloseOrder } = require("./public/orderHandler.js")
const { GetDepositRate, GetLoanRate, GetExchangeRate,
    UpdateDepositRate, UpdateLoanRate, UpdateExchangeRate } = require("./public/rateHandler.js")

// POST 转出 & 转入
let Transfer = async (req, res) => {
    let inUserId = req.body["inUserId"]
    let outUserId = req.body["outUserId"]
    let amount = req.body["amount"]
    let currencyType = req.body["currencyType"]
    // 检查balance是否充足
    // balance变更
    // 记入flow
}

module.exports = { Transfer }