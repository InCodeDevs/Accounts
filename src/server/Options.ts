/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

export interface Options {
    enablePublicData?: boolean;
    enablePrivateData?: boolean;
    enablePostboxes?: boolean;
    enableRoles?: boolean;
    enable2FA?: boolean;
    force2FA?: boolean;
    configDirectory?: string;
    roles?: {
        [key: string]: {
            name: string;
        };
    };
    endpointPermissions?: {
        [key: string]: string[];
    };
}