import { format } from "../string";

export function warning(message, ...args) {
    if (process.env.NODE_ENV !== "production") {
        const console = global.console;
        const warning = format("Warning: " + message, ...args);

        if (console !== null && console !== void 0 && typeof console.error === "function") {
            console.error(warning);
        }

        try {
            // throw an error to be able catch it with debug tools
            throw new Error(warning);
        } catch (x) {
        }
    }
}
