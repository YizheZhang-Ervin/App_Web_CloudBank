const { GetOfEtcd, SetOfEtcd, LockByEtcd } = require("../middleware/etcd.js")
const { MakeResponse } = require("../utils/goResponse.js")

// 外汇买入
let BuyExchange = async (req, res) => {
    let userId = req.body["userId"]

    // 检查balance
    // 利率查询
    // 变更balance
    // 记入流水
    // 记入订单
}
// 外汇卖出
let SellExchange = async (req, res) => {
    let userId = req.body["userId"]

    // 检查balance
    // 利率查询
    // 变更balance
    // 记入流水
    // 记入订单
}

module.exports = { BuyExchange, SellExchange }