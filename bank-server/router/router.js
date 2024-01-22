let { Upload } = require("../handler/public/uploadHandler.js")
let { Login, Logout } = require("../handler/public/loginHandler.js")
let { GetUserInfo, UpdateUserInfo } = require("../handler/public/userInfoHandler.js")
let { GetBalance, UpdateBalance } = require("../handler/public/balanceHandler.js")
let { RecordFlow, GetFlow } = require("../handler/public/flowHandler.js")
let { GenOrder, CancelOrder, GetOrder } = require("../handler/public/orderHandler.js")
let { GetDepositRate, GetLoanRate, GetExchangeRate,
    UpdateDepositRate, UpdateLoanRate, UpdateExchangeRate } = require("../handler/public/rateHandler.js")

let registerRoute = (app, upload) => {
    // main page
    app.get("/", (req, res) => {
        res.render('index');
    })
    // API: upload api
    app.post("/upload", upload.single("file"), Upload)

    // API: login
    app.post("/login", Login)
    app.post("/logout", Logout)

    // API: userInfo
    app.get("/userInfo", GetUserInfo)
    app.post("/userInfo", UpdateUserInfo)

    // API: balance
    app.get("/balance", GetBalance)
    app.post("/balance", UpdateBalance)

    // API: flow
    app.get("/flow", GetFlow)
    app.post("/flow", RecordFlow)

    // API: order
    app.post("/order", GenOrder)
    app.delete("/order", CancelOrder)
    app.get("/order", GetOrder)

    // API: rate
    app.get("/drate", GetDepositRate)
    app.post("/drate", UpdateDepositRate)
    app.get("/lrate", GetLoanRate)
    app.post("/lrate", UpdateLoanRate)
    app.get("/erate", GetExchangeRate)
    app.post("/erate", UpdateExchangeRate)

}

module.exports = registerRoute