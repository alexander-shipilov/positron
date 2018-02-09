import { Model } from "model";
import { FormModel } from "ui/FormView";
import { validators } from "utils/validators";

export class Token extends Model {
    static get name() {
        return "Token";
    }

    constructor(...args) {
        super({ grant_type: "password" }, ...args);
    }
}

export class SignInModel extends FormModel.connect(Token) {
    static get name() {
        return "SignInModel";
    }

    static validators = {
        username: validators.empty,
        password: validators.empty
    };
}
