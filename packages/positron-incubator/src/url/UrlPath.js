import { InvariableArray } from "../../src/invariable/index";
import { isValueType } from "../../src/object/index";

function normalize(path) {
    const retValue = [];

    for (let i = 0, l = path.length; i < l; i++) {
        const part = path[i];

        if (part !== ".") {
            part === ".." ? retValue.pop() : retValue.push(part);
        }
    }

    return retValue;
}

function stringifyPath(path) {
    return normalize(path).join("/");
}

function toPartPart(item) {
    return item === null || item === void 0 || isValueType(item) ? String(item).split("/") : item;
}

function toPath(items) {
    return [].concat(...items.map(toPartPart));
}

export class UrlPath extends InvariableArray {
    static from(value) {
        return super.from(toPartPart(value));
    }

    static parse(path) {
        return normalize(String(path).split("/"));
    }

    static stringify(path) {
        return stringifyPath(path);
    }

    init(items) {
        super.init(toPath(items));
    }

    concat(...items) {
        return super.concat(...toPath([].concat(...items)));
    }

    push(...items) {
        return super.push(...toPath(items));
    }

    splice(start, deleteCount, ...items) {
        return super.splice(start, deleteCount, ...toPath(items));
    }

    unshift(...items) {
        return super.unshift(...toPath(items));
    }

    normalize() {
        const next = normalize(this.valueOf());

        return next.length === this.length ? this : this.assign(next, { length: next.length });
    }

    toString() {
        return stringifyPath(this.valueOf());
    }
}
