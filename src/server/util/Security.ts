/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as crypto from "crypto";

export default class Security {
  public static isPasswordSafe(password: string) {
    return password.match(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{10,})/g
    );
  }

  public static getPasswordHash(password: string) {
    return crypto.createHash("sha256").update(password).digest("base64");
  }
}
