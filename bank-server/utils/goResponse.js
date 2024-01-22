// TOOL: response JSON
let MakeResponse = (res, flag, data, msg) => {
    flag ? res.status(200) : res.status(500)
    let obj = {
        code: flag ? "OK" : "ERR",
        data: data,
        msg: msg
    }
    res.send(obj)
}

module.exports = {
    MakeResponse
}