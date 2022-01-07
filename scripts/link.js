/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

const fs = require('fs');
const path = require('path');

if(fs.existsSync(path.join(__dirname, "../umd"))){
    fs.rmSync(path.join(__dirname, "../umd"), {
        recursive: true,
        force: true
    })
}

if(fs.existsSync(path.join(__dirname, "../esm"))){
    fs.rmSync(path.join(__dirname, "../esm"), {
        recursive: true,
        force: true
    })
}

fs.mkdirSync(path.join(__dirname, "../esm"));
fs.mkdirSync(path.join(__dirname, "../umd"));

fs.copyFileSync(path.join(__dirname, "../bundles/incode.accounts.client-umd.umd.min.js"), path.join(__dirname, "../umd/client.js"))
fs.copyFileSync(path.join(__dirname, "../bundles/incode.accounts.server-umd.umd.min.js"), path.join(__dirname, "../umd/server.js"))

fs.copyFileSync(path.join(__dirname, "../bundles/incode.accounts.client-esm.min.mjs"), path.join(__dirname, "../esm/client.js"))
fs.copyFileSync(path.join(__dirname, "../bundles/incode.accounts.server-esm.min.mjs"), path.join(__dirname, "../esm/server.js"))