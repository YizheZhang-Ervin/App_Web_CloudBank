let { loginHandler, uploadHandler } = require("../handler/base.js")

let registerRoute = (app, upload) => {
    // main page
    app.get("/", (req, res) => {
        res.render('index');
    })
    // API: upload api
    app.post("/upload", upload.single("file"), uploadHandler)

    // API: login
    app.post("/login", loginHandler)
}

module.exports = registerRoute