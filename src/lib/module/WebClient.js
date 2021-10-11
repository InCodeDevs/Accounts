/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

class WebClient {

    #f;
    #root;
    #fetchConfig = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: "{}"
    }

    async init(rootUrl) {

        this.#root = rootUrl;

        if (require) {
            this.#f = await import("node-fetch");
            this.#f = this.#f.default;
        }

        if (this.#f === undefined || this.#f === null) {
            this.#f = fetch;
        }

        console.log(this.#f)

        return 0;
    }

    async login(username, password) {
        const config = this.#fetchConfig;
        config.body = JSON.stringify({
            username: username,
            password: password
        })

        const r = await this.#f(this.#root + "/api/v1/user/users/login", config)
        const j = await r.json();

        return !j.error
    }

    async create(username, password) {
        const config = this.#fetchConfig;
        config.body = JSON.stringify({
            username: username,
            password: password
        })

        const r = await this.#f(this.#root + "/api/v1/user/users/create", config )
        const j = await r.json();

        return !j.error;
    }

    async delete(username, password) {
        const config = this.#fetchConfig;
        config.body = JSON.stringify({
            username: username,
            password: password
        })

        const r = await this.#f(this.#root + "/api/v1/user/users/delete", config )
        const j = await r.json();

        return !j.error;
    }

    async updateUsername(username, password, newUsername) {
        const config = this.#fetchConfig;
        config.body = JSON.stringify({
            old: username,
            username: newUsername,
            password: password
        })

        const r = await this.#f(this.#root + "/api/v1/user/users/update/username", config )
        const j = await r.json();

        return !j.error;
    }

    async updatePassword(username, password, newPassword) {
        const config = this.#fetchConfig;
        config.body = JSON.stringify({
            old: password,
            username: username,
            password: newPassword
        })

        const r = await this.#f(this.#root + "/api/v1/user/users/update/password", config )
        const j = await r.json();

        return !j.error;
    }

    async storeData_u(username, password, data, dataName) {
        const config = this.#fetchConfig;
        config.body = JSON.stringify({
            username: username,
            password: password,
            data: data,
            dataName: dataName
        })

        const r = await this.#f(this.#root + "/api/v1/user/users/data/store", config )
        const j = await r.json();

        return !j.error;
    }

    async deleteData_u(username, password, dataName) {
        const config = this.#fetchConfig;
        config.body = JSON.stringify({
            username: username,
            password: password,
            dataName: dataName
        })

        const r = await this.#f(this.#root + "/api/v1/user/users/data/delete", config )
        const j = await r.json();

        return !j.error;
    }

    async getData_u(username, password, dataName) {
        try {
            const config = this.#fetchConfig;

            config.body = JSON.stringify({
                username: username,
                password: password,
                dataName: dataName
            })

            const r = await this.#f(this.#root + "/api/v1/user/users/data", config )
            const j = await r.json();

            return j.message;
        } catch {
            return {};
        }
    }

    async getAllData_u(username, password) {
        const config = this.#fetchConfig;

        config.body = JSON.stringify({
            username: username,
            password: password
        })

        const r = await this.#f(this.#root + "/api/v1/user/users/data/all", config )
        const j = await r.json();

        return j.message;
    }

    async existsUser(username) {
        const config = this.#fetchConfig;

        config.body = JSON.stringify({
            username: username
        })

        const r = await this.#f(this.#root + "/api/v1/user/users/exists", config )
        const j = await r.json();

        return j.message;
    }

    async storeData(username, password, data, dataName) {
        const config = this.#fetchConfig;
        config.body = JSON.stringify({
            username: username,
            password: password,
            value: data,
            key: dataName
        })

        const r = await this.#f(this.#root + "/api/v1/user/data/set", config )
        const j = await r.json();

        return !j.error;
    }

    async deleteData(username, password, dataName) {
        const config = this.#fetchConfig;
        config.body = JSON.stringify({
            username: username,
            password: password,
            key: dataName
        })

        const r = await this.#f(this.#root + "/api/v1/user/data/delete", config )
        const j = await r.json();

        return !j.error;
    }

    async getData(username, password, dataName, hash = false) {
        const config = this.#fetchConfig;

        config.body = JSON.stringify({
            username: username,
            password: password,
            key: dataName,
            hash: hash
        })

        const r = await this.#f(this.#root + "/api/v1/user/data/get", config )
        const j = await r.json();

        if (hash) {
            return j;
        } else {
            return j.message;
        }
    }

    async allowDataAccess(username, password, dataName, newUser) {
        const config = this.#fetchConfig;
        config.body = JSON.stringify({
            username: username,
            password: password,
            key: dataName,
            newUser: newUser
        })

        const r = await this.#f(this.#root + "/api/v1/user/data/allow", config )
        const j = await r.json();

        return !j.error;
    }

    async disallowDataAccess(username, password, dataName, newUser) {
        const config = this.#fetchConfig;
        config.body = JSON.stringify({
            username: username,
            password: password,
            key: dataName,
            newUser: newUser
        })

        const r = await this.#f(this.#root + "/api/v1/user/data/allow", config )
        const j = await r.json();

        return !j.error;
    }

    async createPostBox(username, password, name) {
        const config = this.#fetchConfig;
        config.body = JSON.stringify({
            username: username,
            password: password,
            name: name
        })

        const r = await this.#f(this.#root + "/api/v1/user/postboxes/create", config )
        const j = await r.json();

        return !j.error;
    }

    async deletePostBox(username, password, name) {
        const config = this.#fetchConfig;
        config.body = JSON.stringify({
            username: username,
            password: password,
            name: name
        })

        const r = await this.#f(this.#root + "/api/v1/user/postboxes/delete", config )
        const j = await r.json();

        return !j.error;
    }

    async addToPostBox(username, password, name, owner, entry) {
        const config = this.#fetchConfig;
        config.body = JSON.stringify({
            username,
            password,
            name,
            owner,
            entry
        })

        const r = await this.#f(this.#root + "/api/v1/user/postboxes/add", config )
        const j = await r.json();

        return !j.error;
    }

    async clearPostBox(username, password, name) {
        const config = this.#fetchConfig;
        config.body = JSON.stringify({
            username,
            password,
            name
        })

        const r = await this.#f(this.#root + "/api/v1/user/postboxes/clear", config )
        const j = await r.json();

        return !j.error;
    }

    async readPostBox(username, password, name) {
        const config = this.#fetchConfig;
        config.body = JSON.stringify({
            username,
            password,
            name
        })

        const r = await this.#f(this.#root + "/api/v1/user/postboxes/read", config )
        const j = await r.json();

        return j.message;
    }
}

module.exports = {
    WebClient
}