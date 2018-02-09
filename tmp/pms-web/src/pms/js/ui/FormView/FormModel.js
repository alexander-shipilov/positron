import { filter, map, valueOf } from "positron-core";
import { ImmutableObject } from "positron-immutable";
import { ViewModel } from "ui/View";

export class FormErrors extends ImmutableObject {
    static get name() {
        return "FormErrors";
    }
}

export class FormModel extends ViewModel {
    static get name() {
        return "FormModel";
    }

    static validators = {};

    get isValid() {
        return Object.keys(filter(valueOf(this.errors), (error) => error)).length === 0;
    }

    static validate(item) {
        const { validators } = this;

        return map(validators, (validator, field) => validator(item[field], item));
    }

    validate() {
        const errors = this.constructor.validate(this.item);

        return this.assign({ errors: map(errors, (error, field) => error ? field + " " + error : void 0) });
    }

    constructor(...args) {
        super({ item: {}, errors: {} }, ...args);
    }
}

FormModel.of({
    errors: FormErrors
});
