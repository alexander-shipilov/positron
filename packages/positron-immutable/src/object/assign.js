import { forEach, valueOf } from "positron-core";
import { getAncestorOf } from "./getAncestorOf";

const { is } = Object;

export function assign(target, ...sources) {
    const ancestor = getAncestorOf(target);

    for (let i = 0, l = sources.length; i < l; i++) {
        const source = sources[i];

        if (source !== null && source !== void 0) {
            forEach(valueOf(source), (value, prop) => {
                if (ancestor !== null && target.hasOwnProperty(prop) && is(ancestor[prop], value)) {
                    delete target[prop];
                } else if (!is(target[prop], value)) {
                    target[prop] = value;
                }
            });
        }
    }

    return target;
}
