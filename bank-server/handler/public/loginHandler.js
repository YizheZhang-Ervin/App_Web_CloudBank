const { ExistOfEtcd, GetOfEtcd } = require("../../middleware/etcd.js")
const { MakeResponse } = require("../../utils/goResponse.js")


// 登录
// username+pwd => 判断username存在(etcd的key) 
// => username&pwd组装token => 和存储的内容比较(etcd的value)
let Login = (req, res) => {
    let username = req.body["username"]
    let pwd = req.body["pwd"]
    // IF 用户不存在
    if (!ExistOfEtcd(username)) {
        res.status(200)
        let resObj = MakeResponse(false, "", `用户不存在`)
        res.send(resObj)
        return
    }
    // 查出来存储的token
    let storedToken = GetOfEtcd(username)
    // 新生成的token
    let nowToken = Buffer.from(username + "#" + pwd).toString('base64')
    if (storedToken == nowToken) {
        res.status(200)
        let resObj = MakeResponse(true, `${nowToken}`, `OK`)
        res.send(resObj)
    } else {
        res.status(200)
        let resObj = MakeResponse(false, "", `用户名or密码错误`)
        res.send(resObj)
    }
}

// 退出
let Logout = (req, res) => {
    // TODO: 退出
}

// TOOL: 验证token
// 请求头获取Authorization(即token) => 解析token
// => 根据username查存储的token => 对比token和存储的token
let VerifyToken = (req) => {
    const token = req.get('Authorization')
    if (!token) {
        return false
    }
    // token解析
    let tokenStr = Buffer.from(token, 'base64').toString()
    if (tokenStr) {
        let tokenList = tokenStr.split("#")
        if (tokenList.length == 2) {
            let decodeUserName = tokenList[0]
            let decodePwd = tokenList[1]
            // 判断密码是否正确
            let storedToken = GetOfEtcd(decodeUserName)
            if (token == storedToken) {
                // 组装token返回响应
                res.status(200)
                let resObj = MakeResponse(true, `${token}`, `OK`)
                res.send(resObj)
            } else {
                res.status(200)
                let resObj = MakeResponse(false, "", `token不正确`)
                res.send(resObj)
            }
        } else {
            res.status(200)
            let resObj = MakeResponse(false, "", `token不正确`)
            res.send(resObj)
        }
    } else {
        res.status(200)
        let resObj = MakeResponse(false, "", `token不正确`)
        res.send(resObj)
    }
}

module.exports = {
    Login, Logout, VerifyToken
}