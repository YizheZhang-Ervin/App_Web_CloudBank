const { GetOfEtcd, SetOfEtcd, LockByEtcd } = require("../../middleware/etcd.js")
const { MakeResponse } = require("../../utils/goResponse.js")

// GET 客户信息查询
let GetUserInfo = async (req, res) => {
    let userId = req.query.userId
    let storeKey = `user/${userId}`
    // 取值
    let userInfoJson = await GetOfEtcd(storeKey);
    // 返回响应
    MakeResponse(res, true, userInfoJson, "获取成功")
}

// POST 更新客户信息
let UpdateUserInfo = async (req, res) => {
    let userId = req.body["userId"]
    let username = req.body["username"]
    let password = req.body["password"]
    let token = req.body["token"]
    let accountStatus = req.body["accountStatus"]

    let storeKey = `user/${userId}`
    let userJsonNew = JSON.stringify({
        userId, username, password, token, accountStatus
    })
    // 加锁设值
    await LockByEtcd(storeKey, SetOfEtcd, [storeKey, userJsonNew])
    // 返回响应
    MakeResponse(res, true, userId, "更新成功")
}

module.exports = { GetUserInfo, UpdateUserInfo }