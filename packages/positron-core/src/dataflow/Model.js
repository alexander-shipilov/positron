import { getName } from "../func";
import { InvariableObject } from "../invariable";
import { forEach } from "../object";

function connect(target, name) {
    const prop = "_" + name;
    const propId = name + "Id";
    const targetProto = target.prototype;

    if (!targetProto.hasOwnProperty(propId)) {
        Object.defineProperty(targetProto, propId, {
            configurable: true,
            get: function get() {
                return this[prop] && this[prop].id;
            }
        });
    }
}

export class Model extends InvariableObject {
    static connect(props) {
        this.defineInvariableProperty(props);

        forEach(props, (Type, prop) => {
            connect(this, prop, Type);
        });

        return this;
    }

    getValidationError(field, message) {
        const name = getName(this.constructor);

        return Object.assign(new Error(name + " " + field + " " + message), { model: this, field });
    }

    validate() {
        return this.validateAll()[0];
    }

    validateAll() {
        return [];
    }
}

export default Model;
