const { GetOfEtcd, SetOfEtcd, LockByEtcd } = require("../middleware/etcd.js")
const { MakeResponse } = require("../utils/goResponse.js")
const { GetBalance, UpdateBalance } = require("./public/balanceHandler.js")
const { RecordFlow, GetFlow } = require("./public/flowHandler.js")
const { GenOrder, CancelOrder, GetOrder, GetOrderOne, CloseOrder } = require("./public/orderHandler.js")
const { GetDepositRate, GetLoanRate, GetExchangeRate,
    UpdateDepositRate, UpdateLoanRate, UpdateExchangeRate } = require("./public/rateHandler.js")

// 买保险
let BuyInsurance = async (req, res) => {
    // 检查余额是否充足
    // 变更balance
    // 记入订单
}
// 卖保险
let SellInsurance = async (req, res) => {
    // 变更balance
    // 记入订单
}
// 保险赔付
let ClaimInsurance = async (req, res) => {
    // 查询订单
    // 变更balance
}
// 条款查询
let GetAgreement = async (req, res) => {
    // TODO: 外呼条款查询系统
    let data = { "赔付最高额度": 999, "可售份额": 999, "总份额": 999, "保障期限": 999 }
    MakeResponse(res, true, data, "查询成功")
}

module.exports = { BuyInsurance, SellInsurance, ClaimInsurance, GetAgreement }