const { GetOfEtcd, SetOfEtcd, LockByEtcd } = require("../middleware/etcd.js")
const { MakeResponse } = require("../utils/goResponse.js")
const { GetBalance, UpdateBalance } = require("./public/balanceHandler.js")
const { RecordFlow, GetFlow } = require("./public/flowHandler.js")
const { GenOrder, CancelOrder, GetOrder, GetOrderOne, CloseOrder } = require("./public/orderHandler.js")
const { GetDepositRate, GetLoanRate, GetExchangeRate,
    UpdateDepositRate, UpdateLoanRate, UpdateExchangeRate } = require("./public/rateHandler.js")
const { GetUserInfo, UpdateUserInfo } = require("./public/userInfoHandler.js")

// POST 开户
let Register = async (req, res) => {
    // userInfo变更(userId/username/password/token/accountStatus)
    await UpdateUserInfo(req, null)
    // 记入order(userId/content/type)
    let tmpReq = { userId: req.body["userId"], content: {}, type: "register" }
    await GenOrder(tmpReq, null)
    MakeResponse(res, true, null, "开户成功")
}

// POST 销户
let Deregister = async (req, res) => {
    // userInfo变更(userId/username/password/token/accountStatus)
    await UpdateUserInfo(req, null)
    // 记入order(userId/content/type)
    let tmpReq = { userId: req.body["userId"], content: {}, type: "deregister" }
    await GenOrder(tmpReq, null)
    MakeResponse(res, true, null, "销户成功")
}

// POST 核实身份
let CheckUser = async (req, res) => {
    // TODO: 外呼身份认证模块
    MakeResponse(res, true, null, "身份认证通过")
}

module.exports = { Register, Deregister, CheckUser }