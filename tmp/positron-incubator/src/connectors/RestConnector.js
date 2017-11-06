import { fetch } from "../../src/fetch";
import { InvariableArray } from "../../src/invariable/index";
import { valueOf } from "../../../positron-core/src/object/index";
import { Url } from "../../tmp/url";
import { AbstractConnector } from "./AbstractConnector";

export class RestConnector extends AbstractConnector {
    get baseUrl() {
        return Url.parse(this._baseUrl);
    }

    set baseUrl(baseUrl) {
        this.define({
            _baseUrl: baseUrl
        });
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
        return JSON.stringify(data);
    }

    buildUrl(path, params) {
        return this.baseUrl.relative(path).params(params).toString();
    }

    create(entity, data) {
        return this.fetch(this.getUrl(entity), {
            method: "post",
            body: this.stringify(data)
        }).then((response) => this.response(response));
    }

    destroy(entity, params = null) {
        return this.fetch(this.getUrl(entity, this.getId(entity), params), { method: "delete" })
            .then((response) => this.response(response));
    }

    fetch(url, params) {
        return fetch(url, params);
    }

    getId(entity) {
        let id;

        if (!(entity instanceof InvariableArray)) {
            id = entity.id;

            if (!id) {
                throw this.getError("Entity id should be defined");
            }
        }

        return id;
    }

    getName(entity) {
        const Type = (entity instanceof Collection) ? entity.Type : entity.constructor;

        if (!Type.name) {
            throw this.getError("Named entity expected");
        }

        return Type.name;
    }

    getUrl(entity, id = null, params = null) {
        const name = this.getName(entity);

        return this.buildUrl(name + "/" + (id !== null ? id : ""), params);
    }

    parse(text) {
        return this.constructor.parse(text);
    }

    read(entity, params = null) {
        return this.fetch(this.getUrl(entity, this.getId(entity), valueOf(params)))
            .then((response) => this.response(response));
    }

    response(response) {
        return response.text().then((text) => this.parse(text));
    }

    stringify(data) {
        return this.constructor.stringify(data);
    }

    update(entity, data) {
        let id;

        if (!(entity instanceof Collection)) {
            id = entity.id;

            if (!id) {
                throw this.getError("id should be defined");
            }
        }

        return this.fetch(this.getUrl(entity, this.getId(entity)), {
            method: "put",
            body: this.stringify(data)
        }).then((response) => this.response(response));
    }

    valueOf() {
        return super.valueOf("baseUrl");
    }

    toString() {
        return super.toString(this.baseUrl);
    }
}
