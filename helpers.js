
function successfullMessage(msg) {
    return "✅ *Amdibell*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *Amdibell*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *Amdibell*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
