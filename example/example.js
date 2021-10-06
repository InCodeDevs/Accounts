/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

const {
    data,
    users,
    accountServer,
    checkFile
} = require('../src/index');
const path = require("path");

accountServer({
    port: 3000,
    host: "0.0.0.0",
    path: path.join(__dirname, 'private')
})

if (!users.existsUser("mctzock")) {
    console.log("User does not exists!")
    console.log("Creating new User...")
    console.log(users.createUser("mctzock", "AVerySecurePassword!"));
} else {
    console.log("User exists!")
}