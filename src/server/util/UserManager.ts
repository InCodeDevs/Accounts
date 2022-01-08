/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
import Storage, { Stream } from "../Storage";
import Security from "./Security";

export default class UserManager {
  public static createUser(username, password): number {
    if (
      Storage.get(username, Stream.USERS) === undefined ||
      Storage.get(username, Stream.USERS) === null
    ) {
      return 403;
    } else {
      if (Security.isPasswordSafe(password)) {
        Storage.set(
          username,
          {
            password: Security.getPasswordHash(password),
          },
          Stream.USERS
        );
        return 200;
      } else {
        return 400;
      }
    }
  }
}
