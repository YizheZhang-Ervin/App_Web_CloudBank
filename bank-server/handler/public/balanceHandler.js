const { SetOfEtcd, GetOfEtcd, LockByEtcd } = require("../../middleware/etcd.js")
const { MakeResponse } = require("../../utils/goResponse.js")

// GET 账户余额查询
let GetBalance = async (req, res) => {
    let userId = req.query.userId
    // 取值
    let balanceJson = await GetOfEtcd(`balance/${userId}`);
    // 返回响应
    MakeResponse(res, true, balanceJson, "获取成功")
}

// POST 增加&减少余额
let UpdateBalance = async (req, res) => {
    let userId = req.body["userId"]
    let deltaBalance = req.body["deltaBalance"]
    let currencyType = req.body["currencyType"]
    // 取值
    let storeKey = `balance/${userId}`
    let balanceJson = await GetOfEtcd(storeKey);
    let balanceObj = JSON.parse(balanceJson)
    let rawBalance = balanceObj[currencyType]
    let newBalance = rawBalance + deltaBalance
    balanceObj[currencyType] = newBalance
    let balanceObjNew = JSON.stringify(balanceObj)
    // 加锁设值
    await LockByEtcd(storeKey, SetOfEtcd, [storeKey, balanceObjNew])
    // 返回响应
    MakeResponse(res, true, newBalance, "更新成功")
}

module.exports = { GetBalance, UpdateBalance }