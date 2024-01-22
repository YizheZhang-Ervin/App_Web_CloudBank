const { GetOfEtcd, SetOfEtcd, LockByEtcd } = require("../middleware/etcd.js")
const { MakeResponse } = require("../utils/goResponse.js")

// POST 开户
let Register = async (req, res) => {
    let userId = req.body["userId"]
    let username = req.body["username"]
    let password = req.body["password"]
    let token = req.body["token"]
    let accountStatus = req.body["accountStatus"]
    // userInfo变更
    // 记入order
}

// POST 销户
let Deregister = async (req, res) => {
    let userId = req.body["userId"]
    let accountStatus = req.body["accountStatus"]
    // userInfo变更
    // 记入order
}

// POST 核实身份
let CheckUser = async (req, res) => {
    // TODO: 外呼身份认证模块
    MakeResponse(res, true, null, "身份认证通过")
}

module.exports = { Register, Deregister, CheckUser }