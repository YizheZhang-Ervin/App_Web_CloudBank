const { GetOfEtcd, SetOfEtcd, LockByEtcd } = require("../middleware/etcd.js")
const { MakeResponse } = require("../utils/goResponse.js")

// 存款
let Deposit = async (req, res) => {
    let userId = req.body["userId"]

    // 利率查询
    // 变更balance
    // 记入流水
    // 记入订单
}

// 取款
let Withdraw = async (req, res) => {
    let userId = req.body["userId"]

    // 检查balance
    // 利率查询
    // 变更balance
    // 记入流水
    // 记入订单
}

module.exports = { Deposit, Withdraw }