const { MakeResponse } = require("../utils/goResponse.js")
const { UpdateBalance } = require("./public/balanceHandler.js")
const { RecordFlow } = require("./public/flowHandler.js")
const { GenOrder, GetOrderOne, CloseOrder } = require("./public/orderHandler.js")
const { GetDepositRate } = require("./public/rateHandler.js")

// 存款
let Deposit = async (req, res) => {
    // 利率查询 (查询参数productId)
    let rate = await GetDepositRate(req, null)
    // 变更balance(请求体userId/deltaBalance/currencyType)
    await UpdateBalance(req, null)
    // 记入流水(请求体inUserId/outUserId/amount/type)
    // inUserId设为固定值
    let tmpReq = {
        inUserId: "Bank001", outUserId: req.body["outUserId"],
        amount: req.body["amount"], type: "deposit"
    }
    await RecordFlow(tmpReq, null)
    // 记入订单(请求体userId/content/type)
    // 把rate记入content
    let tmpReq2 = {
        userId: req.body["userId"],
        content: { "rate": rate, "amount": req.body["deltaBalance"], "currencyType": "currency1" },
        type: req.body["type"]
    }
    await GenOrder(tmpReq2, null)
    MakeResponse(res, true, null, "存款成功")
}

// 取款
let Withdraw = async (req, res) => {
    // TODO: 检查余额是否充足

    let userId = req.body["userId"]
    let tmpReq = { query: { userId: userId, orderId: req.body["orderId"] } }
    // 存单查询(查询参数userId)
    let { rate, amount, currencyType, status } = JSON.parse(GetOrderOne(tmpReq, null))
    // 判断订单是否已关闭
    if (status == "close") {
        MakeResponse(res, false, null, "取款失败")
        return
    }
    // 变更balance(请求体userId/deltaBalance/currencyType)
    let tmpReq2 = { userId, deltaBalance: amount * rate, currencyType }
    await UpdateBalance(tmpReq2, null)
    // 记入流水(请求体inUserId/outUserId/amount/type)
    // outUserId设为固定值
    let tmpReq3 = {
        inUserId: req.body["inUserId"], outUserId: "Bank001",
        amount: amount, type: "withdraw"
    }
    await RecordFlow(tmpReq3, null)
    // 变更订单
    await CloseOrder(tmpReq, null)
    MakeResponse(res, true, null, "取款成功")
}

module.exports = { Deposit, Withdraw }