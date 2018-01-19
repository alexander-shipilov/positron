// @flow

import { format } from "../string";

const IS_DEV = process.env.NODE_ENV !== "production";

export function warning(message: string, ...args: any[]) {
    if (IS_DEV) {
        const { console } = global;

        message = format("Warning: " + message, ...args);
        if (console != null && typeof console.error === "function") {
            console.error(message);
        }

        try {
            // throw an error to be able catch it with debug tools
            throw new Error(message);
        } catch (x) {
        }
    }
}
