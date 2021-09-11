/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

const fs = require("fs");
const path = require("path");

module.exports = (p0, v0) => {
    if(!fs.existsSync(p0)) {
        if(!fs.lstatSync(path.dirname(p0)).isDirectory()) {
            fs.mkdirSync(path.dirname(p0))
        }
        fs.writeFileSync(p0, v0);
    }
}