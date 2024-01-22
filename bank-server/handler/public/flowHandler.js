const { SetOfEtcd, GetOfEtcdByPrefix } = require("../../middleware/etcd.js")
const { MakeResponse } = require("../../utils/goResponse.js")

// GET 查询流水
let GetFlow = async (req, res) => {
    // 范围查询
    let prefixKey = `flow/${inUserId}_${outUserId}_${type}`
    let flowJson = await GetOfEtcdByPrefix(prefixKey)
    // 返回响应
    MakeResponse(res, true, flowJson, "查询成功")
}

// POST 记入流水
let RecordFlow = async (req, res) => {
    let inUserId = req.body["inUserId"]
    let outUserId = req.body["outUserId"]
    let amount = req.body["amount"]
    let type = req.body["type"]
    let date = new Date()

    let storeKey = `flow/${inUserId}_${outUserId}_${type}_${date}`
    let storeVal = JSON.stringify({
        inUserId, outUserId, amount, type, date
    })
    // 加锁设值
    await LockByEtcd(storeKey, SetOfEtcd, [storeKey, storeVal])
    // 返回响应
    MakeResponse(res, true, null, "记录成功")
}

module.exports = {
    RecordFlow, GetFlow
}