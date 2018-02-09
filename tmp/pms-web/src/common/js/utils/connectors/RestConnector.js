import { valueOf, toJSON } from "positron-core";
import queryString from "querystring";
import "whatwg-fetch";
import { AbstractConnector } from "./AbstractConnector";

export class RestConnector extends AbstractConnector {
    static fetch(url, params) {
        return global.fetch(url, params);
    }

    static parse(text) {
        let json = null;

        try {
            if (text !== "") {
                json = JSON.parse(text);
            }
        } catch (ignore) {
        }
        return json;
    }

    static stringify(data) {
        return queryString.stringify(toJSON(data));
    }

    constructor(...args) {
        super({ baseUrl: "" }, ...args);
    }

    buildUrl(path, params = null) {
        const query = params ? queryString.stringify(params) : "";

        return this.baseUrl + path + (query ? "?" + query : "");
    }

    response(response) {
        return response.text().then((text) => {
            const ok = response.status >= 200 && response.status < 300;
            const json = this.parse(text);

            if (!ok) {
                throw new Error(json && json.error || response.statusText);
            }

            return json;
        });
    }

    stringify(data) {
        return this.constructor.stringify(data);
    }

    fetch(url, params) {
        return this.constructor.fetch(url, params);
    }

    getName(entity) {
        const { name } = entity.constructor;

        if (!name) {
            throw this.getError("Named entity expected");
        }

        return name;
    }

    getUrl(entity, id = null, params = null) {
        const name = this.getName(entity);

        return this.buildUrl(name + (id !== null ? "/" + id : ""), params);
    }

    parse(text) {
        return this.constructor.parse(text);
    }

    create(entity) {
        return this
            .fetch(this.getUrl(entity), { method: "POST", body: this.stringify(entity) })
            .then((response) => this.response(response));
    }

    read(entity, params = null) {
        return this
            .fetch(this.getUrl(entity, entity.id, valueOf(params)))
            .then((response) => this.response(response));
    }

    update(entity, data) {
        return this
            .fetch(this.getUrl(entity, entity.id), { method: "PUT", body: this.stringify(data) })
            .then((response) => this.response(response));
    }

    destroy(entity, params = null) {
        return this.fetch(this.getUrl(entity, entity.id, params), { method: "delete" })
            .then((response) => this.response(response));
    }

    toString() {
        return super.toString(this.baseUrl);
    }
}
