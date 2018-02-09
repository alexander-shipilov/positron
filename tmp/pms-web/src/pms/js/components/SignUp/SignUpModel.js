import { Model } from "model";
import { FormModel } from "ui/FormView";
import { validators } from "utils/validators";

export class SignUp extends Model {
    constructor(...args) {
        super({ validators }, ...args);
    }
}


export class SignUpModel extends FormModel.connect(SignUp) {
    static get name() {
        return "SignUpModel";
    };

    static validators = {
        FirstName: validators.empty,
        LastName: validators.empty,
        Email: validators.email,
        PhoneNumber: validators.phone,
        UserName: validators.empty,
        Login: validators.empty,
        Password: validators.length(8),
        ConfirmPassword: (confirm, item) => item.Password !== confirm ? "confirm mismatch" : void 0
    };

    constructor(...args) {
        super( ...args);
    }
}
