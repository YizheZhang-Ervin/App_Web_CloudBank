const { GetOfEtcd, SetOfEtcd, LockByEtcd } = require("../../middleware/etcd.js")
const { MakeResponse } = require("../../utils/goResponse.js")

// 工具：获取利率
let getRate = async (req, res, key) => {
    let productId = req.query.productId
    let storeKey = `${key}/${productId}`
    // 取值
    let productJson = await GetOfEtcd(storeKey);
    // 返回响应
    return MakeResponse(res, true, productJson, "获取成功")
}

// GET 获取存款利率
let GetDepositRate = async (req, res) => {
    return await getRate(req, res, "deposit")
}

// GET 获取贷款利率
let GetLoanRate = async (req, res) => {
    return await getRate(req, res, "loan")
}

// GET 获取外汇汇率
let GetExchangeRate = async (req, res) => {
    return await getRate(req, res, "exchange")
}

// 工具：调整利率
let updateRate = async (req, res, key) => {
    let delta = req.body["delta"]
    // 取值
    let storeKey = `${key}/${productId}`
    let rateJson = await GetOfEtcd(storeKey);
    let rateObj = JSON.parse(rateJson)
    rateObj["rate"] = delta
    let rateObjNew = JSON.stringify(rateObj)
    // 加锁设值
    await LockByEtcd(key, SetOfEtcd, [key, rateObjNew])
    // 返回响应
    return MakeResponse(res, true, delta, "更新成功")
}

// POST 调整存款利率
let UpdateDepositRate = async (req, res) => {
    return await updateRate(req, res, "deposit")
}

// POST 调整贷款利率
let UpdateLoanRate = async (req, res) => {
    return await updateRate(req, res, "loan")
}

// POST 调整外汇汇率
let UpdateExchangeRate = async (req, res) => {
    return await updateRate(req, res, "exchange")
}

module.exports = {
    GetDepositRate, GetLoanRate, GetExchangeRate,
    UpdateDepositRate, UpdateLoanRate, UpdateExchangeRate
}