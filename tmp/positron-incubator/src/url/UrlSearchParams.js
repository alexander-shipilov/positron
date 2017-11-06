import { InvariableObject } from "../../src/invariable/index";
import { isArray, isDefined, isValueType } from "../../src/object/index";
import { decode, encode } from "./_utils";

function parseValue(value) {
    if (value === "true" || value === "false") {
        value = value === "true";
    } else if (!isNaN(value)) {
        value = +value;
    }

    return value;
}

function parseKeyValue(keyValue) {
    const match = keyValue.length && keyValue.match(/^([^=]*)(?:=(.*))?$/);

    return {
        key: decode(match[1]),
        value: match[2] === void 0 ? null : parseValue(decode(match[2]))
    };
}

function parseSearchParams(query) {
    const retValue = {};

    String(query).replace(/^\?/, "").split("&").forEach((keyValue) => {
        const { key, value } = parseKeyValue(keyValue);

        retValue[key] = retValue.hasOwnProperty(key) ? [].concat(retValue[key], value) : value;
    });

    return retValue;
}


function stringifyValue(key, value) {
    let strValue = encode(key);

    if (value !== void 0 && value !== null) {
        strValue += "=" + encode(value);
    }

    return strValue;
}


function stringifyArrayValue(key, value) {
    let strValue = [];

    for (let i = 0, l = value.length; i < l; i++) {
        strValue.push(stringifyValue(key, value[i]));
    }

    return strValue.join("&");
}


function stringifyKeyValue(key, value) {
    return isArray(value) ? stringifyArrayValue(key, value) : stringifyValue(key, value);
}


function stringifySearchParams(query) {
    return Object.keys(query)
        .filter((key) => query[key] !== void 0)
        .map((key) => stringifyKeyValue(key, query[key]))
        .join("&");
}


export class UrlSearchParams extends InvariableObject {
    static from(props) {
        return super.from(isValueType(props) ? this.parse(props) : props);
    }

    static parse(query) {
        return isDefined(query) ? parseSearchParams(query) : query;
    }

    static stringify(query) {
        return isDefined(query) ? isValueType(query) ? String(query) : stringifySearchParams(query) : "";
    }

    setProps(...props) {
        return super.setProps(...props.map((props) => isValueType(props) ? parseSearchParams(props) : props));
    }

    toString() {
        return this.constructor.stringify(this.valueOf());
    }
}

