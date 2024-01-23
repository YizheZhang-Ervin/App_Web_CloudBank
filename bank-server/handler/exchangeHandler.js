const { GetOfEtcd, SetOfEtcd, LockByEtcd } = require("../middleware/etcd.js")
const { MakeResponse } = require("../utils/goResponse.js")
const { GetBalance, UpdateBalance } = require("./public/balanceHandler.js")
const { RecordFlow, GetFlow } = require("./public/flowHandler.js")
const { GenOrder, CancelOrder, GetOrder, GetOrderOne, CloseOrder } = require("./public/orderHandler.js")
const { GetDepositRate, GetLoanRate, GetExchangeRate,
    UpdateDepositRate, UpdateLoanRate, UpdateExchangeRate } = require("./public/rateHandler.js")

// 外汇买入
let BuyExchange = async (req, res) => {
    // 检查用于购汇的币种的balance是否充足
    // 汇率查询
    // 变更balance
    // 记入流水
    // 记入订单
}
// 外汇卖出
let SellExchange = async (req, res) => {
    // 检查卖出外汇的balance是否充足
    // 汇率查询
    // 变更balance
    // 记入流水
    // 记入订单
}

module.exports = { BuyExchange, SellExchange }