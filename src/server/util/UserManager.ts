/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
import Storage, {Stream} from "../Storage";

export default class UserManager {

    public static createUser(username, password): number {
        if (Storage.get(username, Stream.USERS)) {
            return 403;
        } else {
            Storage.set(username, { password: password }, Stream.USERS);
            return 200;
        }
    }
}