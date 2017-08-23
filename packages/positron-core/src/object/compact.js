import { valueOf } from "./valueOf";

export const compact = function(...data) {
    return Object.assign({}, ...data.map(valueOf));
};
