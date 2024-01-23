const { GetOfEtcd, SetOfEtcd, LockByEtcd } = require("../middleware/etcd.js")
const { MakeResponse } = require("../utils/goResponse.js")
const { GetBalance, UpdateBalance } = require("./public/balanceHandler.js")
const { RecordFlow, GetFlow } = require("./public/flowHandler.js")
const { GenOrder, CancelOrder, GetOrder, GetOrderOne, CloseOrder } = require("./public/orderHandler.js")
const { GetDepositRate, GetLoanRate, GetExchangeRate,
    UpdateDepositRate, UpdateLoanRate, UpdateExchangeRate } = require("./public/rateHandler.js")

// 借入(贷款)
let BorrowLoan = async (req, res) => {
    // 信用查询
    // 查利率
    // 变更balance
    // 生成流水
    // 记入order
}

// 归还(还款)
let RepayLoan = async (req, res) => {
    // 检查余额是否够还款
    // 变更balance
    // 生成流水
    // 记入order
}

// 借出(放款)
let LendLoan = async (req, res) => {
    // 检查余额是否够放贷
    // 变更balance
    // 生成流水
    // 记入order
}

// POST 信用查询
let GetCredit = async (req, res) => {
    // TODO: 外呼信用查询模块
    MakeResponse(res, true, null, "信用认证通过")
}

module.exports = { BorrowLoan, RepayLoan, LendLoan }