const { GetOfEtcdByPrefix, GetOfEtcd, SetOfEtcd, DeleteOfEtcd, LockByEtcd } = require("../../middleware/etcd.js")
const { MakeResponse } = require("../../utils/goResponse.js")
const { v4 } = require('uuid');

// PUT 关闭订单
let CloseOrder = async (req, res) => {
    let userId = req.body["userId"]
    let orderId = req.body["orderId"]
    // 取值
    let storeKey = `order/${userId}/${orderId}`
    let orderJson = await GetOfEtcd(storeKey);
    let objNew = JSON.parse(orderJson)
    objNew["status"] = "close"
    let storeVal = JSON.stringify(objNew)
    // 加锁设值
    await LockByEtcd(storeKey, SetOfEtcd, [storeKey, storeVal])
    // 返回响应
    MakeResponse(res, true, null, "生成成功")
}

// POST 订单生成
let GenOrder = async (req, res) => {
    let userId = req.body["userId"]
    let content = req.body["content"]
    let type = req.body["type"]
    let date = new Date()
    let status = "open"
    let uniqueId = v4()

    let storeKey = `order/${userId}/${uniqueId}`
    let storeVal = JSON.stringify({
        userId, content, type, date, status
    })
    // 加锁设值
    await LockByEtcd(storeKey, SetOfEtcd, [storeKey, storeVal])
    // 返回响应
    MakeResponse(res, true, null, "生成成功")
}

// POST 取消
let CancelOrder = async (req, res) => {
    let orderId = req.body["id"]
    // 范围查询
    let storeKey = `order/${userId}/${orderId}`
    await DeleteOfEtcd(storeKey)
    // 返回响应
    MakeResponse(res, true, null, "删除成功")
}

// GET 查询
let GetOrder = async (req, res) => {
    let userId = req.query.userId
    // 取值
    let orderListJson = await GetOfEtcdByPrefix(`order/${userId}`);
    // 返回响应
    return MakeResponse(res, true, orderListJson, "获取成功")
}

// GET 查询单个
let GetOrderOne = async (req, res) => {
    let userId = req.query.userId
    let orderId = req.query.orderId
    // 取值
    let orderJson = await GetOfEtcd(`order/${userId}/${orderId}`);
    // 返回响应
    return MakeResponse(res, true, orderJson, "获取成功")
}

module.exports = {
    GenOrder, CancelOrder, GetOrder, GetOrderOne, CloseOrder
}