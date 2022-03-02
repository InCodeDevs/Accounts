/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { Express } from "express";
import { Options } from "./Options";
import Response from "./Response";
import Storage from "./Storage";
import bodyParser from "body-parser";
import cors from "cors";
import UserManager from "./util/UserManager";

export default function (instance: Express, options: Options) {
  Storage.init();

  instance.use(bodyParser.json());
  instance.use(cors());

  instance.post("/api/v2/account/user/create", (req, res) => {
    if (req.body.username && req.body.password && req.body.email) {
      const status = UserManager.createUser({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        active: false,
        data: {},
      });
      res.status(status).end(Response.json(status));
    } else {
      res.status(400).end(Response.json(400));
    }
  });

  instance.get("/api/v2/account/user", (req, res) => {
    res.end(Response.json(200));
  });

  instance.get("/api/v2/account*", (req, res) => {
    res.end(Response.json(400));
  });

  instance.post("/api/v2/account*", (req, res) => {
    res.end(Response.json(400));
  });
}
