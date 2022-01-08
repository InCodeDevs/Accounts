/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

export default class Response {

    public static readonly OK = 'OK';
    public static readonly INVALID = 'Invalid Request';
    public static readonly ACCESS_DENIED = 'Access denied';
    public static readonly NOT_FOUND = 'Not found';
    public static readonly SERVER_ERROR = 'Server error';
    public static readonly UNKNOWN_ERROR = 'Unknown error';

    public static json(code: number, message?: object | string): string {
        if (message === undefined) {
            switch (code) {
                case 200:
                    message = Response.OK;
                    break;
                case 400:
                    message = Response.INVALID;
                    break;
                case 403:
                    message = Response.ACCESS_DENIED;
                    break;
                case 404:
                    message = Response.NOT_FOUND;
                    break;
                case 500:
                    message = Response.SERVER_ERROR;
                    break;
                default:
                    message = Response.UNKNOWN_ERROR;
                    break;
            }
        }
        return JSON.stringify({
            code: code,
            message: message
        })
    }

}