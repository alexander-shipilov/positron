import { forEach } from "./forEach";
import { getAncestorOf } from "./getAncestorOf";
import { valueOf } from "./valueOf";

const { is } = Object;

export function assign(target, ...sources) {
    const ancestor = getAncestorOf(target);

    sources.forEach((source) => {
        if (source !== null && source !== void 0) {
            forEach(valueOf(source), (value, prop) => {
                if (ancestor !== null && target.hasOwnProperty(prop) && is(ancestor[prop], value)) {
                    delete target[prop];
                } else if (!is(target[prop], value)) {
                    target[prop] = value;
                }
            });
        }
    });

    return target;
}
