/* Copyright (C) 2021 KgAmda.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Amdibell - KgAmda
*/

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
