import { Base, isValueType, valueOf } from "positron-core";
import Query from "utils/Query";

const REGEXP_URL = /^([a-z][a-z0-9+\-.]*:)?(?:\/\/([^\/?#]*))?([^?#]*)(\?[^#]*)?(#.*)?$/;
const REGEXP_AUTHORITY = /^(?:([^:@]+)(?::([^@]+))?@)?([^:]*)(?::(\d+))?$/;

function startWith(/* String */ string, char) {
    if (string !== "" && char !== "" && !string.startsWith(char)) {
        string = char + string;
    }

    return string;
}

function endWith(/* String*/ string, char) {
    if (string !== "" && char !== "" && !string.endsWith(char)) {
        string = string + char;
    }

    return string;
}

function parseAuthority(authority) {
    let m;

    if (authority) {
        m = REGEXP_AUTHORITY.exec(authority);
    }

    if (m) {
        authority = {
            hostname: m[3] || "",
            port: +m[4] || ""
        };

        if (m[1]) {
            authority.username = m[1];
        }
        if (m[2]) {
            authority.password = m[2];
        }
    }

    return authority;
}

function stringifyAuthority(url) {
    const password = url.password || "";
    let userInfo;

    userInfo = (url.username || "") + startWith(password, ":");

    return endWith(userInfo, "@") + (url.host || "");
}

function stringifyPath(path) {
    const retValue = [];
    let part;

    path = String(path).split("/");

    while (path.length) {
        part = path.shift();

        if (part !== ".") {
            part === ".." ? retValue.pop() : retValue.push(part);
        }
    }

    return retValue.join("/");
}

function relativeTo(path, base) {
    return path.charAt(0) === "/" ? path : base.replace(/\/[^/]*$/, "") + startWith(path, "/");
}

const DEFAULT_URL = {
    protocol: "",
    hostname: "",
    port: "",
    pathname: "",
    hash: ""
};

/** @return {Url} */
function parse(url) {
    let m;

    m = REGEXP_URL.exec(url);
    if (!m) {
        throw new SyntaxError("Invalid url");
    }

    return Object.assign({}, parseAuthority(m[2]), {
        protocol: (m[1] || "").replace(/:$/, ""),
        pathname: m[3] || "",
        search: m[4] || "",
        hash: (m[5] || "").replace(/^#/, "")
    });
}

function stringify(url, base) {
    let protocol, authority, pathname, search;

    protocol = url.protocol;
    authority = stringifyAuthority(url);
    pathname = url.pathname;
    search = url.search;

    if (!protocol && base) {
        protocol = base.protocol;

        if (!authority) {
            authority = stringifyAuthority(base);
            search = pathname || search ? search : base.search;
            pathname = relativeTo(pathname, base.pathname);
        }
    }

    return endWith(protocol, ":")
        + startWith(authority, "//")
        + startWith(stringifyPath(pathname), authority ? "/" : "")
        + startWith(search, "?")
        + startWith(url.hash || "", "#");
}

/**
 * @property {string} protocol The protocol scheme of the Url, excluding the final ":", e.g. "http"
 * @property {string} hostname The domain
 * @property {number} port The port number
 * @property {string} host The host, that is the hostname, a ":", and the port
 * @property {string} username The username specified before the domain name
 * @property {string} password The password specified before the domain name
 * @property {string} origin The origin of the specific location
 * @property {string} pathname The path
 * @property {object} search Hash of params
 * @property {string} hash The fragment identifier, excluding the initial "#"
 */
export default class Url extends Base {
    constructor(props) {
        super();
        Object.assign(this, DEFAULT_URL, valueOf(props));
    }

    get query() {
        return this._query;
    }

    get search() {
        return this._query ? Query.stringify(this._query) : "";
    }

    set search(value) {
        this.define({
            _query: Query.parse(value)
        });
    }

    get host() {
        const port = this.port;

        return this.hostname + (port ? ":" + port : "");
    }

    set host(host) {
    }

    get origin() {
        return endWith(this.protocol, ":") + startWith(stringifyAuthority(this), "//");
    }

    set origin(origin) {
    }

    init() {
        Object.defineProperties(this, {
            _query: { value: {}, writable: true }
        });
    }

    relative(path) {
        return new this.constructor(Object.assign(this.valueOf(), {
            pathname: relativeTo(path, this.pathname)
        }));
    }

    param(name, value) {
        this._query[name] = value;

        return this;
    }

    params(params, reset) {
        this._query = Object.assign({}, reset ? null : this._query, params);

        return this;
    }

    toString(base) {
        return Url.stringify(this, base);
    }

    valueOf() {
        return {
            protocol: this.protocol,
            hostname: this.hostname,
            port: this.port,
            username: this.username,
            password: this.password,
            pathname: this.pathname,
            search: this.search,
            hash: this.hash
        };
    }

    static isUrl(target) {
        return target instanceof this;
    }

    /** @return {Url} */
    static parse(url) {
        return url === null || url === void 0 ? url : new Url(isValueType(url) ? parse(url) : valueOf(url));
    }

    /** @return {String} */
    static stringify(url, base) {
        return url === null || url === void 0 ? ""
            : stringify(this.isA(url) ? url : this.parse(url), this.isA(base) ? base : this.parse(base));
    }
}
