/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as fs from "fs";
import * as path from "path";
import * as os from "os";

export enum Stream {
  USERS,
  DATA,
  POSTBOXES,
}

export default class Storage {
  public static init(): void {
    if (!fs.existsSync(path.join(os.homedir(), ".incode"))) {
      fs.mkdirSync(path.join(os.homedir(), ".incode"));
    }

    if (!fs.existsSync(path.join(os.homedir(), ".incode", "accounts"))) {
      fs.mkdirSync(path.join(os.homedir(), ".incode", "accounts"));
    }

    if (
      !fs.existsSync(
        path.join(os.homedir(), ".incode", "accounts", "users.json")
      )
    ) {
      fs.writeFileSync(
        path.join(os.homedir(), ".incode", "accounts", "users.json"),
        JSON.stringify({})
      );
    }

    if (
      !fs.existsSync(
        path.join(os.homedir(), ".incode", "accounts", "data.json")
      )
    ) {
      fs.writeFileSync(
        path.join(os.homedir(), ".incode", "accounts", "data.json"),
        "{}"
      );
    }

    if (
      !fs.existsSync(
        path.join(os.homedir(), ".incode", "accounts", "postboxes.json")
      )
    ) {
      fs.writeFileSync(
        path.join(os.homedir(), ".incode", "accounts", "postboxes.json"),
        "{}"
      );
    }
  }

  public static get(key: string, stream: Stream): any {
    let orig;
    switch (stream) {
      case Stream.USERS:
        orig = JSON.parse(
          fs
            .readFileSync(
              path.join(os.homedir(), ".incode", "accounts", "users.json")
            )
            .toString()
        );
        return orig[key];
      case Stream.DATA:
        orig = JSON.parse(
          fs
            .readFileSync(
              path.join(os.homedir(), ".incode", "accounts", "data.json")
            )
            .toString()
        );
        return orig[key];
      case Stream.POSTBOXES:
        orig = JSON.parse(
          fs
            .readFileSync(
              path.join(os.homedir(), ".incode", "accounts", "postboxes.json")
            )
            .toString()
        );
        return orig[key];
      default:
        break;
    }
  }

  public static set(key: string, value: any, stream: Stream): void {
    let orig;
    switch (stream) {
      case Stream.USERS:
        orig = JSON.parse(
          fs
            .readFileSync(
              path.join(os.homedir(), ".incode", "accounts", "users.json")
            )
            .toString()
        );
        orig[key] = value;
        fs.writeFileSync(
          path.join(os.homedir(), ".incode", "accounts", "users.json"),
          JSON.stringify(orig)
        );
        break;
      case Stream.DATA:
        orig = JSON.parse(
          fs
            .readFileSync(
              path.join(os.homedir(), ".incode", "accounts", "data.json")
            )
            .toString()
        );
        orig[key] = value;
        fs.writeFileSync(
          path.join(os.homedir(), ".incode", "accounts", "data.json"),
          JSON.stringify(orig)
        );
        break;
      case Stream.POSTBOXES:
        orig = JSON.parse(
          fs
            .readFileSync(
              path.join(os.homedir(), ".incode", "accounts", "postboxes.json")
            )
            .toString()
        );
        orig[key] = value;
        fs.writeFileSync(
          path.join(os.homedir(), ".incode", "accounts", "postboxes.json"),
          JSON.stringify(orig)
        );
        break;
      default:
        break;
    }
  }

  public static has(key: string, stream: Stream): boolean {
    return this.get(key, stream) !== undefined;
  }
}
