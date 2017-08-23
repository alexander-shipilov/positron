import { Base } from "./Base";
import { implement } from "./func";

const captureStackTrace = typeof Error.captureStackTrace === "function"
    ? Error.captureStackTrace
    : function captureStackTrace(error) {
        error.stack = (new Error(error.message)).stack;
    };

export class BaseError extends implement(Error, Base) {
    constructor(message) {
        super(message);

        captureStackTrace(this);
    }
}
