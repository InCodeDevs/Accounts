/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
import { User } from "../types/User";
import Security from "./Security";
import Storage, { Stream } from "../Storage";

export default class UserManager {
  public static createUser(user: User): number {
    if (Security.isPasswordSafe(user.password)) {
      console.log(Storage.get(user.username, Stream.USERS));
      if (!Storage.has(user.username, Stream.USERS)) {
        user.password = Security.getPasswordHash(user.password);
        user.active = false;

        Storage.set(user.username, user, Stream.USERS);

        return 200;
      } else {
        return 403;
      }
    } else {
      return 400;
    }
  }
}
