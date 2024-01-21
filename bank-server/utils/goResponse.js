// TOOL: response JSON
let MakeResponse = (flag, data, msg) => {
    return {
        code: flag ? "OK" : "ERR",
        data: data,
        msg: msg
    }
}

module.exports = {
    MakeResponse
}