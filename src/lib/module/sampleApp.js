/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

const express = require('express');
const app = express();

module.exports = function() {
    app.listen(3000, "0.0.0.0")
    return app;
}