/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

require('dotenv').config();

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

const users = require('./module/users')
const data = require('./module/data')

app.use(cors())
app.use(bodyParser())

app.get("/", (req, res) => {
    res.end("{\"error\": true, \"message\": \"Invalid API Endpoint.\"}")
})

app.post("/users/create", (req, res) => {
    if (req.body.username && req.body.password) {
        res.end(JSON.stringify(
            users.createUser(req.body.username, req.body.password)
        ))
    } else {
        res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
    }
})

app.post("/users/delete", (req, res) => {
    if (req.body.username && req.body.password) {
        res.end(JSON.stringify(
            users.deleteUser(req.body.username, req.body.password)
        ))
    } else {
        res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
    }
})

app.post("/users/login", (req, res) => {
    if (req.body.username && req.body.password) {
        res.end(JSON.stringify(
            users.login(req.body.username, req.body.password)
        ))
    } else {
        res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
    }
})

app.post("/users/update/username", (req, res) => {
    if (req.body.username && req.body.password && req.body.old) {
        res.end(JSON.stringify(
            users.updateUsername(req.body.old, req.body.username, req.body.password)
        ))
    } else {
        res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
    }
})

app.post("/users/update/password", (req, res) => {
    if (req.body.username && req.body.password && req.body.old) {
        res.end(JSON.stringify(
            users.updatePassword(req.body.username, req.body.old, req.body.password)
        ))
    } else {
        res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
    }
})

app.post('/users/data/store', (req, res) => {
    if (req.body.username && req.body.password && req.body.data && req.body.dataName) {
        res.end(JSON.stringify(
            users.storeData(req.body.username, req.body.password, req.body.dataName, req.body.data)
        ))
    } else {
        res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
    }
})

app.post('/users/data/delete', (req, res) => {
    if (req.body.username && req.body.password && req.body.dataName) {
        res.end(JSON.stringify(
            users.storeData(req.body.username, req.body.password, req.body.dataName, null)
        ))
    } else {
        res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
    }
})

app.get('/users/data', (req, res) => {
    if (req.body.username && req.body.password && req.body.dataName) {
        res.end(JSON.stringify(
            users.getData(req.body.username, req.body.password, req.body.dataName)
        ))
    } else {
        res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
    }
})


app.get("/users/exists", (req, res) => {
    if (req.body.username) {
        res.end("{\"error\": false, \"message\": " + users.existsUser(req.body.username) + "}")
    } else {
        res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
    }
})

app.post("/data/set", (req, res) => {
    if(req.body.username && req.body.password && req.body.key && req.body.value) {
        res.end(JSON.stringify(
            data.setData(req.body.username, req.body.password, req.body.key, req.body.value)
        ))
    } else {
        res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
    }
})

app.post("/data/delete", (req, res) => {
    if(req.body.username && req.body.password && req.body.key) {
        res.end(JSON.stringify(
            data.setData(req.body.username, req.body.password, req.body.key, null)
        ))
    } else {
        res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
    }
})

app.post("/data/allow", (req, res) => {
    if(req.body.username && req.body.password && req.body.key && req.body.newUser) {
        res.end(JSON.stringify(
            data.allow(req.body.username, req.body.password, req.body.key, req.body.newUser)
        ))
    } else {
        res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
    }
})

app.post("/data/disallow", (req, res) => {
    if(req.body.username && req.body.password && req.body.key && req.body.newUser) {
        res.end(JSON.stringify(
            data.disallow(req.body.username, req.body.password, req.body.key, req.body.newUser)
        ))
    } else {
        res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
    }
})

app.get("/data/get", (req, res) => {
    if(req.body.username && req.body.password && req.body.key) {
        res.end(JSON.stringify(
            data.getData(req.body.username, req.body.password, req.body.key)
        ))
    } else {
        res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
    }
})

app.listen(process.env.EX_PORT, process.env.EX_HOST);