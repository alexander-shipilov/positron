import { empty } from "../func";
import { format } from "../string";

export function printWarning(message, ...args) {
    const warning = format("Warning: " + message, ...args);

    if (typeof console !== "undefined") {
        console.error(warning);
    }

    try {
        throw new Error(warning);
    } catch (x) {
    }
}

export const warning = process.env.NODE_ENV === "production" ? empty : printWarning;
