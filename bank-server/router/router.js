let { Login } = require("../handler/public/loginHandler.js")
let { Upload } = require("../handler/public/uploadHandler.js")

let registerRoute = (app, upload) => {
    // main page
    app.get("/", (req, res) => {
        res.render('index');
    })
    // API: upload api
    app.post("/upload", upload.single("file"), Upload)

    // API: login
    app.post("/login", Login)
}

module.exports = registerRoute