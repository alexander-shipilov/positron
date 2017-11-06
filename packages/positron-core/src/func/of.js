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

    function isValidType(type, key) {
        console.log(getName(type), getName(types[key]), isImplementationOf(type, types[key]));

        return typeof(type) === "function" && (!types.hasOwnProperty(key) || isImplementationOf(type, types[key]));
    }

    return class extends Target {
        static get name() {
            return super.name;
        }

        static get types() {
            return types;
        }

        get types() {
            return this.constructor.types;
        }

        static of(nextTypes) {
            if (!every(nextTypes, isValidType)) {
                throw new Error("of: Expected " + toString(types) + ". " + toString(nextTypes) + " given");
            }

            return of(this, nextTypes);
        }
    };
}
