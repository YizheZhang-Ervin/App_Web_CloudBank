let { Upload } = require("../handler/public/uploadHandler.js")
let { Login, Logout } = require("../handler/public/loginHandler.js")
let { GetUserInfo, UpdateUserInfo } = require("../handler/public/userInfoHandler.js")
let { GetBalance, UpdateBalance } = require("../handler/public/balanceHandler.js")
let { RecordFlow, GetFlow } = require("../handler/public/flowHandler.js")
let { GenOrder, CancelOrder, GetOrder } = require("../handler/public/orderHandler.js")
let { GetDepositRate, GetLoanRate, GetExchangeRate,
    UpdateDepositRate, UpdateLoanRate, UpdateExchangeRate } = require("../handler/public/rateHandler.js")
let { CompareFlow } = require("../handler/accountingHandler.js")
let { Deposit, Withdraw } = require("../handler/depositHandler.js")
let { BuyExchange, SellExchange } = require("../handler/exchangeHandler.js")
let { BuyInsurance, SellInsurance, ClaimInsurance, GetAgreement } = require("../handler/insuranceHandler.js")
let { BorrowLoan, RepayLoan, LendLoan } = require("../handler/loanHandler.js")
let { Register, Deregister, CheckUser } = require("../handler/registerHandler.js")
let { Transfer } = require("../handler/transferHandler.js")

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

    // API: accounting
    app.post("/accounting", CompareFlow)

    // API: deposit
    app.post("/deposit/in", Deposit)
    app.post("/deposit/out", Withdraw)

    // API: exchange
    app.post("/exchange/buy", BuyExchange)
    app.post("/exchange/sell", SellExchange)

    // API: insurance
    app.post("/insurance/buy", BuyInsurance)
    app.post("/insurance/sell", SellInsurance)
    app.post("/insurance/claim", ClaimInsurance)
    app.get("/insurance", GetAgreement)

    // API: loan
    app.post("/loan/borrow", BorrowLoan)
    app.post("/loan/repay", RepayLoan)
    app.post("/loan/lend", LendLoan)

    // API: register
    app.post("/register", Register)
    app.delete("/register", Deregister)
    app.post("/register/check", CheckUser)

    // API: transfer
    app.post("/transfer", Transfer)
}

module.exports = registerRoute