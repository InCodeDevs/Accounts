/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

const os = require('os')
const path = require("path");

process.env.ACC_PRIV_PATH = path.join(os.homedir(), "./.incode-accounts");

const accountServer = require('./lib/accounts')
const checkFile = require('./lib/module/checkfile')
const data = require('./lib/module/data')
const users = require('./lib/module/users')
const sampleApp = require('./lib/module/sampleApp')
const postboxes = require('./lib/module/postboxes')

module.exports = {
    accountServer,
    checkFile,
    data,
    users,
    sampleApp,
    postboxes
}

console.log(postboxes.createBox("mctzock", "1234", "__a_test"));

console.log(postboxes.clearBox("mctzock", "1234", "__a_test"));

console.log(postboxes.addToBox("mctzock", "1234", "__a_test", "mctzock", "test"))

console.log(postboxes.readBox("mctzock", "1234", "__a_test").message[0].at)

console.log(postboxes.removeFromBox("mctzock", "1234", "__a_test",
    postboxes.readBox("mctzock", "1234", "__a_test").message[0].at
))

console.log(postboxes.readBox("mctzock", "1234", "__a_test"))
