/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

const fs = require("fs");
const path = require("path");
const crypto = require('crypto');
const checkfile = require('./checkfile');

checkfile(path.join(__dirname, "..", "..", "private", "users.json"), "{}")

let users = {}

const reload = () => {
    users = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "..", "private", "users.json")).toString())
}

const save = () => {
    fs.writeFileSync(path.join(__dirname, "..", "..", "private", "users.json"), JSON.stringify(users))
}

reload();

function existsUser(username) {
    return Object.keys(users).includes(username);
}

function createUser(username, password) {
    password = crypto.createHash("sha256").update(password).digest("base64")
    console.log("X: " + password)
    if (!existsUser(username)) {
        if (password.length >= 8) {
            users[username] = {password: password}
            save();
            return {
                error: false,
                message: "Created"
            }
        } else {
            return {
                error: true,
                message: "The length of the password needs to be at least 8 characters"
            }
        }
    } else {
        return {
            error: true,
            message: "The username is already taken"
        }
    }
}

function deleteUser(username, password) {
    password = crypto.createHash("sha256").update(password).digest("base64")
    if (existsUser(username)) {
        if (users[username].password === password) {
            delete users[username];
            save();
            return {
                error: false,
                message: "Deleted."
            }
        } else {
            return {
                error: true,
                message: "The password does not match."
            }
        }
    } else {
        return {
            error: true,
            message: "The user does not exists!"
        }
    }
}

function login(username, password) {
    password = crypto.createHash("sha256").update(password).digest("base64")
    if (!existsUser(username)) {
        return {
            error: true,
            message: "The user does not exists!"
        }
    } else {
        if (users[username].password === password) {
            return {
                error: false,
                message: "The password matches."
            }
        } else {
            return {
                error: true,
                message: "The password does not match."
            }
        }
    }
}

function updateUsername(old, username, password) {
    if (!login(old, password).error) {
        users[username] = users[old];
        delete users[old];
        save();
        return {
            error: false,
            message: "Updated."
        }
    } else {
        return {
            error: true,
            message: "The password does not match."
        }
    }
}

function updatePassword(username, old, password) {
    password = crypto.createHash("sha256").update(password).digest("base64")
    if (!login(username, old).error) {
        users[username].password = password;
        save();
        return {
            error: false,
            message: "Updated."
        }
    } else {
        return {
            error: true,
            message: "The password does not match."
        }
    }
}

module.exports = {existsUser, createUser, deleteUser, login, updateUsername, updatePassword}