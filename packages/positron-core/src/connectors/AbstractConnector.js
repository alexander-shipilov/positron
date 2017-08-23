import { Base } from "../Base";
import { Model } from "../dataflow";
import { assign } from "../object";

export class AbstractConnector extends Base {
    init(...props) {
        assign(this, ...props);
    }

    create(value, data = null) {
        return Promise.resolve(value);
    }

    destroy(value, params = null) {
        return Promise.resolve(value);
    }

    read(params = null) {
        return Promise.resolve(null);
    }

    update(value, data = null) {
        return Promise.resolve(value);
    }

    validate(entity) {
        let error;

        if (!(entity instanceof Model)) {
            error = this.getError(Model + " expected. " + entity + " given.");
        }

        return error;
    }

    valueOf(...props) {
        return Object.assign({}, this, this.pick(...props));
    }
}
