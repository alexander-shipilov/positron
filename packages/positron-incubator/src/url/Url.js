// @flow

import { InvariableObject } from "../../src/invariable/index";
import { decode, encode, endWith, startWith } from "./_utils";
import { UrlPath } from "./UrlPath";
import { UrlSearchParams } from "./UrlSearchParams";

const REGEXP_URL = /^([a-z][a-z0-9+\-.]*:)?(?:\/\/([^\/?#]*))?(\/?[^?#]*)?(\?[^#]*)?(#.*)?$/;
const REGEXP_AUTHORITY = /^(?:([^:@]+)(?::([^@]+))?@)?([^:]*)(?::(\d+))?$/;

export type UrlProps = {
    hostname?: ?string,
    port?: ?number,
    username?: ?string,
    password?: ?string,
    pathname?: ?string,
    protocol?: ?string,
    search?: ?string,
    hash?: ?string
};


function stringifyAuthority(authority: UrlLike, omitAuth?: boolean = false): string {
    const { hostname, port, username, password } = authority;
    let strValue = "";

    if (hostname) {
        strValue += (omitAuth ? "" : endWith(encode(username) + startWith(encode(password), ":"), "@"))
            + encode(hostname) + (port === void 0 || port === null ? "" : startWith(String(port), ":"));
    }

    return strValue;
}

function parseAuthority(value: ?string): UrlProps {
    let match = [];

    if (value !== void 0 && value !== null) {
        match = REGEXP_AUTHORITY.exec(value);

        if (!match) {
            throw new SyntaxError("Invalid url");
        }
    }
    return Object.assign(
        ({}: UrlProps),
        {
            hostname: match[3] && decode(match[3]),
            port: match[4] && +match[4],
            username: match[1] && decode(match[1]),
            password: match[2] && decode(match[2])
        }
    );
}

function parseUrl(url: string): UrlProps {
    const match = REGEXP_URL.exec(url);

    if (!match) {
        throw new SyntaxError("Invalid url");
    }

    return Object.assign(
        parseAuthority(match[2]),
        {
            protocol: match[1] && match[1].replace(/:$/, ""),
            pathname: match[3],
            search: match[4],
            hash: match[5] && match[5].replace(/^#/, "")
        }
    );
}

function stringifyUrl(url: UrlLike, base?: UrlLike): string {
    let { protocol, pathname, search } = url;
    let authority = stringifyAuthority(url);

    if (!protocol && base) {
        protocol = base.protocol;

        if (!authority) {
            const { pathname: basePath } = base;

            authority = stringifyAuthority(base);
            search = pathname || search ? search : base.search;
            pathname = typeof pathname === "string" && pathname.charAt(0) === "/" ? pathname
                : (typeof basePath === "string" ? basePath.replace(/\/[^/]*$/, "") : "/" ) + startWith(pathname, "/");
        }
    }

    return endWith(protocol, ":")
        + startWith(authority, "//")
        + startWith(pathname, authority ? "/" : "")
        + startWith(search, "?")
        + startWith(url.hash || "", "#");
}

export class Url extends InvariableObject {
    path: ?UrlPath;
    searchParams: ?UrlSearchParams;

    get hostname(): string | void {
        return this._hostname;
    }

    set hostname(hostname: ?string) {
        this.define({ _hostname: hostname === null || hostname === void 0 ? void 0 : String(hostname) });
    }

    get port(): number | void {
        return this._port;
    }

    set port(port: ?number) {
        this.define({
            _port: port === null || port === void 0 || isNaN(port) || port < 1 ? void 0 : parseInt(port, 10)
        });
    }

    get host(): ?string {
        const { hostname, port } = this;

        return hostname === null || hostname === void 0 ? void 0 : hostname + (port === void 0 ? "" : ":" + port);
    }

    get username(): ?string {
        return this._username;
    }

    set username(username: ?string) {
        this.define({ _username: username === null || username === void 0 ? void 0 : String(username) });
    }

    get password(): ?string {
        return this._password;
    }

    set password(password: ?string) {
        this.define({ _password: password === null || password === void 0 ? void 0 : String(password) });
    }

    get pathname(): ?string {
        return this.path && String(this.path);
    }

    set pathname(pathname: ?string) {
        this.path = pathname === null || pathname === void 0 ? void 0 : new UrlPath(pathname);
    }

    get search(): ?string {
        return this.searchParams && String(this.searchParams);
    }

    set search(value: ?string) {
        this.searchParams = value === null || value === void 0 ? void 0 : UrlSearchParams.from(value);
    }

    get origin(): ?string {
        const { protocol, hostname } = this;

        return protocol === void 0 || protocol === null || hostname === void 0 || hostname === null
            ? void 0 : endWith(protocol, ":") + startWith(stringifyAuthority(this), "//");
    }

    static parse(url: string): UrlProps {
        return parseUrl(url);
    }

    static stringify(url: UrlLikeOrString, base?: UrlLikeOrString) {
        return stringifyUrl(
            typeof url === "string" ? parseUrl(url) : url,
            typeof base === "string" ? parseUrl(base) : base
        );
    }

    setProps(...sources: UrlLikeOrString[]) {
        sources.forEach((props: UrlLikeOrString) => {
            if (props !== null && props !== void 0) {
                if (typeof props === "string") {
                    props = parseUrl(props);
                }

                super.setProps(props);
            }
        });
    }

    resolve(url: UrlLike): Url {
        const { constructor } = this;

        return constructor.from(constructor.stringify(url, String(this)));
    }

    setSearchParams(...params: any[]): Url {
        const searchParams = this.searchParams ? this.searchParams.assign(...params) : new UrlSearchParams(...params);

        return this.assign({ searchParams });
    }

    setSearchParam(name: string, value: mixed): Url {
        return this.setSearchParams({ [name]: value });
    }

    getSearchParam(name: string): mixed {
        const { searchParams } = this;

        return searchParams === void 0 || searchParams === null ? void 0 : searchParams[name];
    }

    toString(base: UrlLike): string {
        return this.constructor.stringify(this, base);
    }

    valueOf(): UrlProps {
        return this.pick("hostname", "port", "username", "password", "pathname", "protocol", "search", "hash");
    }
}

Url.defineInvariableProperties({ path: UrlPath, searchParams: UrlSearchParams });

export type UrlLike = Url | UrlProps;
export type UrlLikeOrString = UrlLike | string;
