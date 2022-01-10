/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import accounts from "../src/server";
import express from "express";

const app = express();

accounts(app, {});

app.listen(3001, "0.0.0.0", () => {
  console.log(`Server started on port 0.0.0.0:3001`);
});
