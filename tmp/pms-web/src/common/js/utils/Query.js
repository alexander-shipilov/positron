import { isValueType, isArray } from "positron-core";

function decode(value) {
    if (value !== void 0) {
        try {
            value = decodeURIComponent(value);
        } catch (ignore) {
            // continue regardless of error
        }
    }

    return value === void 0 ? null : value;
}

function parseValue(value) {
    if (value !== "") {
        try {
            value = JSON.parse(value);
        } catch (ignore) {
        }
    }

    return value;
}

function parse(query, separator = "&") {
    const retValue = {};

    String(query).replace(/^\?/, "").split(separator).forEach((keyValue) => {
        const match = keyValue.length && keyValue.match(/^([^=]*)(?:=(.*))?$/);

        if (match) {
            const key = decode(match[1]);
            let value = parseValue(decode(match[2]));

            if (retValue.hasOwnProperty(key)) {
                value = [].concat(retValue[key], value);
            }

            retValue[key] = value;
        }
    });

    return retValue;
}

function stringifyValue(value) {
    if (typeof value !== "string") {
        value = JSON.stringify(value);
    }

    return value;
}

function stringifyKeyValue(key, value, separator) {
    return value === void 0 ? ""
        : isArray(value) ? value.map((value) => stringifyKeyValue(key, stringifyValue(value))).join(separator)
        : encodeURIComponent(key) + (value === null ? "" : "=" + encodeURIComponent(stringifyValue(value)));
}

function stringifyObject(query, separator) {
    return Object.keys(query)
        .map((key) => stringifyKeyValue(key, query[key], separator))
        .filter((v) => v !== "")
        .join(separator);
}

function stringify(query, separator = "&") {
    return query === null || query === void 0 ? ""
        : isValueType(query) ? String(query)
        : stringifyObject(query, separator);
}

export default { parse, stringify };
