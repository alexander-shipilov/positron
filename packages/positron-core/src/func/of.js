import { every } from "../object";
import { getName } from "./getName";
import { isImplementationOf } from "./isImplementationOf";

function toString(types) {
    return "(" + Object.keys(types).map((key) => key + ": " + getName(types[key])).join(", ") + ")";
}

export function of(Target, types) {
    if (typeof Target !== "function") {
        throw new TypeError("Function expected");
    }

    return class extends Target {
        static get types() {
            return types;
        }

        get types() {
            return this.constructor.types;
        }

        static of(nextTypes) {
            if (!every(nextTypes, (type, key) => !types.hasOwnProperty(key) || isImplementationOf(type, types[key]))) {
                throw new Error("Expected " + toString(types));
            }

            return of(this, nextTypes);
        }
    };
}
