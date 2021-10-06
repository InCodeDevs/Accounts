/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

const crypto = require('crypto')
const express = require('express')
const users = require('./module/users')
const data = require('./module/data')
const bodyParser = require("body-parser");
const cors = require('cors')

module.exports = function(options = {
    port: 0,
    host: "0.0.0.0",
    path: "./private"
}) {

    const app = express();
    app.use(cors());
    app.use(bodyParser());

    app.get("/api/v1/user*", (req, res) => {
        res.end("{\"error\": true, \"message\": \"Method not allowed.\"}")
    })

    app.patch("/api/v1/user*", (req, res) => {
        res.end("{\"error\": true, \"message\": \"Method not allowed.\"}")
    })

    app.put("/api/v1/user*", (req, res) => {
        res.end("{\"error\": true, \"message\": \"Method not allowed.\"}")
    })

    app.delete("/api/v1/user*", (req, res) => {
        res.end("{\"error\": true, \"message\": \"Method not allowed.\"}")
    })

    app.post("/api/v1/user", (req, res) => {
        res.end("{\"error\": true, \"message\": \"Invalid API Endpoint.\"}")
    })

    app.post("/api/v1/user/users/create", (req, res) => {
        if (req.body.username && req.body.password) {
            res.end(JSON.stringify(
                users.createUser(req.body.username, req.body.password)
            ))
        } else {
            res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
        }
    })

    app.post("/api/v1/user/users/delete", (req, res) => {
        if (req.body.username && req.body.password) {
            res.end(JSON.stringify(
                users.deleteUser(req.body.username, req.body.password)
            ))
        } else {
            res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
        }
    })

    app.post("/api/v1/user/users/login", (req, res) => {
        if (req.body.username && req.body.password) {
            res.end(JSON.stringify(
                users.login(req.body.username, req.body.password)
            ))
        } else {
            res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
        }
    })

    app.post("/api/v1/user/users/update/username", (req, res) => {
        if (req.body.username && req.body.password && req.body.old) {
            res.end(JSON.stringify(
                users.updateUsername(req.body.old, req.body.username, req.body.password)
            ))
        } else {
            res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
        }
    })

    app.post("/api/v1/user/users/update/password", (req, res) => {
        if (req.body.username && req.body.password && req.body.old) {
            res.end(JSON.stringify(
                users.updatePassword(req.body.username, req.body.old, req.body.password)
            ))
        } else {
            res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
        }
    })

    app.post('/api/v1/user/users/data/store', (req, res) => {
        if (req.body.username && req.body.password && req.body.data && req.body.dataName) {
            res.end(JSON.stringify(
                users.storeData(req.body.username, req.body.password, req.body.dataName, req.body.data)
            ))
        } else {
            res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
        }
    })

    app.post('/api/v1/user/users/data/delete', (req, res) => {
        if (req.body.username && req.body.password && req.body.dataName) {
            res.end(JSON.stringify(
                users.storeData(req.body.username, req.body.password, req.body.dataName, null)
            ))
        } else {
            res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
        }
    })

    app.post('/api/v1/user/users/data', (req, res) => {
        if (req.body.username && req.body.password && req.body.dataName) {
            res.end(JSON.stringify(
                users.getData(req.body.username, req.body.password, req.body.dataName)
            ))
        } else {
            res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
        }
    })

    app.post('/api/v1/user/users/data/all', (req, res) => {
        if (req.body.username && req.body.password) {
            res.end(JSON.stringify(
                users.getAllData(req.body.username, req.body.password)
            ))
        } else {
            res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
        }
    })

    app.post("/api/v1/user/users/exists", (req, res) => {
        if (req.body.username) {
            res.end("{\"error\": false, \"message\": " + users.existsUser(req.body.username) + "}")
        } else {
            res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
        }
    })

    app.post("/api/v1/user/data/set", (req, res) => {
        if (req.body.username && req.body.password && req.body.key && req.body.value) {
            res.end(JSON.stringify(
                data.setData(req.body.username, req.body.password, req.body.key, req.body.value)
            ))
        } else {
            res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
        }
    })

    app.post("/api/v1/user/data/delete", (req, res) => {
        if (req.body.username && req.body.password && req.body.key) {
            res.end(JSON.stringify(
                data.setData(req.body.username, req.body.password, req.body.key, null)
            ))
        } else {
            res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
        }
    })

    app.post("/api/v1/user/data/allow", (req, res) => {
        if (req.body.username && req.body.password && req.body.key && req.body.newUser) {
            res.end(JSON.stringify(
                data.allow(req.body.username, req.body.password, req.body.key, req.body.newUser)
            ))
        } else {
            res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
        }
    })

    app.post("/api/v1/user/data/disallow", (req, res) => {
        if (req.body.username && req.body.password && req.body.key && req.body.newUser) {
            res.end(JSON.stringify(
                data.disallow(req.body.username, req.body.password, req.body.key, req.body.newUser)
            ))
        } else {
            res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
        }
    })

    app.post("/api/v1/user/data/get", (req, res) => {
        if (req.body.username && req.body.password && req.body.key) {
            if (req.body.hash) {
                res.end(
                    crypto.createHash('sha256').update(JSON.stringify(data.getData(req.body.username, req.body.password, req.body.key))).digest("base64")
                )
            } else {
                res.end(JSON.stringify(
                    data.getData(req.body.username, req.body.password, req.body.key)
                ))
            }
        } else {
            res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
        }
    })

    app.listen(options.port, options.host)
}