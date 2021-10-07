/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

process.env.ACC_PRIV_PATH = "./private";

const accountServer = require('./lib/accounts')
const checkFile = require('./lib/module/checkfile')
const data = require('./lib/module/data')
const users = require('./lib/module/users')
const sampleApp = require('./lib/module/sampleApp')

module.exports = {
    accountServer,
    checkFile,
    data,
    users,
    sampleApp
}