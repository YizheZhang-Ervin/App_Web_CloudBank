const { GetOfEtcd, SetOfEtcd, LockByEtcd } = require("../middleware/etcd.js")
const { MakeResponse } = require("../utils/goResponse.js")

// POST 比对流水和金额
let CompareFlow = async (req, res) => {
    // TODO: 外呼会计引擎系统
    MakeResponse(res, true, null, "核对成功")
}

module.exports = { CompareFlow }