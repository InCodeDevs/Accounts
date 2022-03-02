/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import { JSONObject } from "./JSONObject";

export interface User {
  username: string;
  password: string;
  email: string;
  active: boolean;
  data: JSONObject;
}
