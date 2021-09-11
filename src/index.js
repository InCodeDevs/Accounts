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

app.get("/users/exists", (req, res) => {
    if (req.body.username) {
        res.end("{\"error\": false, \"message\": " + users.existsUser(req.body.username) + "}")
    } else {
        res.end("{\"error\": true, \"message\": \"Invalid Request body.\"}")
    }
})

app.listen(process.env.EX_PORT, process.env.EX_HOST);